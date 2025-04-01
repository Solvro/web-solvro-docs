---
  title: Adonis Auth
  description: Autoryzacja za pomocą tokenów i OAuth
---

# Auth w Adonisie

## Przygotowanie projektu

Jeśli projekt został stworzony np. ze starter kita, bardzo możliwe że wszystko jest już skonfigurowane. W przeciwnym wypadku, trzeba dodać kilka rzeczy:

```bash
node ace add @adonisjs/auth --guard=access_tokens
```

Ta komenda w `database/migrations` stworzy nam migracje dla tabeli użytkowników i tokenów dostępu. Mamy domyślne pola dla użytkownika, ale jeśli potrzebujemy czegoś więcej, to można wprowadzić zmiany w migracji i modelu.

## Tokeny

Do zarządzania tokenami dostępu służy `DbAccessTokensProvider`. Jest on w modelu użytkownika.

```typescript
  static accessTokens = DbAccessTokensProvider.forModel(User)
```

Obiekt accessTokens będzie robic za nas wszystko w kwestii tokenów. Jako drugi argument `forModel` możemy podać obiekt z opcjami. Ważną ze względu na bezpieczeństwo jest opcja `expiresIn`, która określa czas ważności tokena. Więcej można doczytać w [dokumentacji](https://docs.adonisjs.com/guides/authentication/access-tokens-guard#configuring-the-user-model)

### Przykład

Zobaczmy na przykładzie, jak obchodzić się z tokenami. Stwórzmy prosty system logowania.

Zaczniemy od kontrolera:

```bash
node ace make:controller AuthController
```

```typescript
import User from "#models/user";
import type { HttpContext } from "@adonisjs/core/http";

export default class AuthController {
  // stworzy nam użytkownika i zapisze w bazie danych
  public async register({ request, response }: HttpContext) {
    const data = request.only(["email", "password"]);
    const user = await User.create(data);
    return response.created(user);
  }

  public async login({ request, response }: HttpContext) {
    const { email, password } = request.only(["email", "password"]);
    // verifyCredenitals ukrywa przed nami szczegóły implementacji
    // działa w sposób bezpieczny, my nie musimy się przejmować hashowaniem itp.
    const user = await User.verifyCredentials(email, password);
    const token = await User.accessTokens.create(user);
    // ten token klient musi wysłać w nagłówku autoryzowanego requesta
    return response.json(token);
  }
  //tutaj przykładowy endpoint, który będzie wymagał autoryzacji
  public async profile({ request, response }: HttpContext) {
    return response.json({
      message: "Profile",
    });
  }
}
```

Tak zmodyfikujemy routes:

```typescript
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";
import { middleware } from "./kernel.js";

router.get("/", async () => "It works!");

router.post("/register", "#controllers/auth_controller.register");
router.post("/login", "#controllers/auth_controller.login");
router.get("/profile", "#controllers/profiles_controller.show").use(
  middleware.auth({
    guards: ["api"],
  })
);
```

I gotowe!

### Zadanie

Przetestuj endpointy w wybranym przez siebie programie do testowania API. (Postman, Insomnia, curl ...). W headerze requesta do zablokowanego endpointa dodaj Bearer token, który dostaliśmy w odpowiedzi na logowanie.

## OAuth

Jeśli chcemy wykorzystać strony trzecie do logowania, to Adonis ma wbudowane wsparcie dla OAuth. Tworząc aplikacje dla studentów, często będziemy musieli korzystać z USOSa, więc wykorzystamy go jako przykład.
Tutaj niestety kontroler musimy napisać od zera (ponieważ usos korzysta z oauth1.0a, nie możemy użyć wbudowanego w adonisa ally, które wymaga oauth2).
Schemat działania OAuth jest taki:

1. Użytkownik wchodzi na nasz endpoint logowania
2. Przekierowujemy go na stronę logowania USOS auth
3. Po zalogowaniu, USOS oddaje token i secret
4. Przesyłamy je do backendu, gdzie są one wykorzystywane do autoryzacji requestów do USOSa.

Oczywiście jeśli logowanie po stronie USOSa się nie powiedzie, to USOS przekieruje nas na nasz endpoint z błędem.

Zobaczmy na przykładzie jak możemy to wykorzystać(kod zaczerpnięty z [planera](https://github.com/Solvro/web-planer/), warto zerknąć na kod - backend/app/usos/usos_client.ts i bakcend/app/controllers/):

- Instalujemy potrzebne rzeczy:

```bash
npm i oauth-1.0a crypto axios
```

- Konfigurujemy oauth. key i secret najlepiej przechowywać w `.env`.

```typescript
import OAuth from "oauth-1.0a";
import crypto from "crypto";

const oauth = new OAuth({
  consumer: {
    key: "your_consumer_key",
    secret: "your_consumer_secret",
  },
  signature_method: "HMAC-SHA1",
  hash_function(baseString, key) {
    return crypto.createHmac("sha1", key).update(baseString).digest("base64");
  },
});
```

- Tworzymy klienta

```typescript
// Klient pozwala nam na wysyłanie autoryzowanych requestów. Wykorzystuje on nasz token i secret, które
// dostaniemy po zalogowaniu przez klienta - dodaje je do headerów zapytań.
const baseUrl = `https://apps.usos.pwr.edu.pl/services`;

export const createClient = ({
  token,
  secret,
}: {
  token?: string;
  secret?: string;
}) => {
  if (typeof token !== "string" || typeof secret !== "string") {
    throw new Error("No token or secret provided");
  }
  return {
    async get<R = unknown>(endpoint: string): Promise<R> {
      const url = `${baseUrl}/${endpoint}`;

      const data = oauth.authorize(
        {
          url,
          method: "GET",
        },
        {
          key: token,
          secret,
        }
      );
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: oauth.toHeader(data).Authorization,
        },
      });

      if (response.status === 401) {
        throw new Error("Unauthorized");
      }

      if (!response.ok) {
        logger.info("Not ok", await response.text());
        throw new Error("Unauthorized");
      }

      const json = (await response.json()) as R;

      return json;
    },
    async post<R = unknown>(endpoint: string, body: unknown): Promise<R> {
      const url = `${baseUrl}/${endpoint}`;

      const data = oauth.authorize(
        {
          url,
          method: "POST",
          data: body,
          includeBodyHash: true,
        },
        {
          key: token,
          secret,
        }
      );
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: oauth.toHeader(data).Authorization,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<R>;
    },
  };
};
```

- obsługa logowania:

```typescript
async loginWithUSOS({ request, response, auth }: HttpContext) {
    const { accessToken, accessSecret } = request.only([
      "accessToken",
      "accessSecret",
    ]) as { accessToken: string; accessSecret: string };
    const usosClient = createClient({
      token: accessToken,
      secret: accessSecret,
    });
    // Dostajemy informacje z api usosa
    const profile = await usosClient.get<{
      id: string;
      student_number: string;
      first_name: string;
      last_name: string;
      photo_urls: Record<string, string>;
    }>("users/user?fields=id|student_number|first_name|last_name|photo_urls");
    // Wykorzystując dane które otrzymaliśmy, tworzymy lub aktualizujemy użytkownika w bazie danych
    const user = await User.updateOrCreate(
      { studentNumber: profile.student_number },
      {
        usosId: profile.id,
        firstName: profile.first_name,
        lastName: profile.last_name,
        avatar: profile.photo_urls["50x50"],
        verified: true,
      },
    );

    // To już widzieliśmy wcześniej
    await auth.use("jwt").generate(user);

    return response.ok({
      ...user.serialize(),
    });
  }
```

### Zadanie

Wykorzystaj [ally](https://docs.adonisjs.com/guides/authentication/social-authentication) do logowania przez inną witrynę (google, facebook, github, ...). Ally znacząco ułatwia, praktycznie nic nie musimy robić sami, wystarczy tylko zainstalować paczkę i skonfigurować. Niestety z USOSem nie przejdzie, bo USOS wymaga OAuth 1.0a, a ally obsługuje tylko OAuth 2.0.

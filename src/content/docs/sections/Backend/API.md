---
title: Dokumentacja API
description: Jakie standardy API stosujemy w Solvro
---

## Przydatne linki

- Czym jest REST API?
  - [Wikipedia](https://en.wikipedia.org/wiki/REST) - cała historia i dlaczego to istnieje
- Lista status code'ów HTTP:
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
  - [Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  - [Fajne kotki](https://http.cat/)
- Specyfikacje Open API od Swaggera:
  - https://swagger.io/resources/open-api/
- Projekt Adonis-Autoswagger:
  - <https://github.com/ad-on-is/adonis-autoswagger>

## Wstęp

Aby móc dobrze współpracować między frontendem i backendem ważnym jest, aby ustalić w jaki sposób komunikujemy się między tymi warstwami. Istnieje wiele technologii lub rozwiązań (np. SOAP, REST, GraphQL, gRPC), z których można skorzystać, natomiast ustalenie jednego standardu często bardzo ułatwia prace między zespołami.

## REST

Najczęściej wybieranym rozwiązaniem przez Solvro jest REST API, bo to dosyć proste, ma całkiem dobrą elastyczność oraz pod kątami technicznymi można z nim dużo wykonać (np. paginacja).

### CRUD na bazie RESTu

Istnieje łatwa do zapamiętania korelacja między CRUDem a metodami HTTP, które są wykorzystywane w REST API:

- Read lub odczytanie danego zasobu używa metody `GET`
- Create lub stworzenie danego zasobu używa metody `POST`
- Update lub aktualizacja danego zasobu używa metody `PUT`
- Delete lub usunięcie danego zasobu używa metody `DELETE`

## Status Code'y

Przyjęto konwencje, w której `status code` otrzymanej odpowiedzi informuje nas, co się stało z danym żądaniem/zapytaniem. Istnieje pięć grup, do których można zaklasyfikować wszystkie odpowiedzi:

- `1XX` - informacyjne, używane w celu gdy np. chcemy dowiedzieć się czy dane zapytanie jest dalej wykonywane (musi być ono spore lub trwać długo, aby nie dało się go wykonać od razu). Rzadko używane ze względu na istnienie innych rozwiązań: [Webhook](https://en.wikipedia.org/wiki/Webhook)
- `2XX` - pomyślne wykonane dane zapytanie
- `3XX` - przekierowanie w celu dopełnienia danego żądania
- `4XX` - coś złego stało się po stronie klienta lub dane zapytanie nie może zostać wykonane z danych powodów
- `5XX` - coś złego stało się po stronie serwera

## Przykład

Chcemy uzyskać liste klientów, a następnie dodać do niej kolejnego, który chce się zarejestrować.

Wykonujemy więc zapytanie do przykładowego API, do którego wysyłamy dane zapytanie z metodą `GET`:

```
https://przykladowa.strona.pl/api/v1/users
```

Zapytanie do ścieżki `/api/v1/users` strony `https://przykladowa.strona.pl` możemy podzielić na 2 i wytłumaczyć w jakim celu istnieją:

- `/api/v1` informuje nas, i jest jednocześnie konwencją, że korzystami z API w wersji pierwszej. Jeżeli dany serwis, aplikacja działa już długo, to deweloperzy mogliby chcieć "zaktualizować" cały serwis do np. wersji `v2`, ale dla już wcześniej zaprogramowanych, innych aplikacji nadal `v1` byłoby dostępne.
- `/users` jest zasobem, który próbujemy odczytać, dodać coś do niego, zmodyfikować go lub coś z niego usunąć. W tym przypadku będą to użytkownicy danego portalu, a serwer powinien nam odesłać odpowiedź, która wygląda mniej więcej tak:

```json
[
  {
    "id": 1,
    "firstName": "Jan",
    "firstName": "Przykładowy",
    "email": "jan.przykladowy@mail.pl",
    "password": "c3VwZXJfZHVwZXJfbmllc2Ftb3dpdGVfaGFzxYJvXzEyMw=="
  },
  {
    "id": 2,
    "firstName": "Karol",
    "firstName": "Solvrowski",
    "email": "karol.solvrowski@mail.pl",
    "password": "YWRvbmlzX3RvX25pZXNhbW93aXR5X2ZyYW1ld29ya186RA=="
  },
  {
    ...
  },
]
```

Z taką odpowiedzią możemy już bezproblemowo wyświetlić coś w UI, lub zweryfikować, że użytkownik, który chce się u nas zarejestrować nie będzie mieć takiego samego maila.

Teraz, gdy chcemy wysłać zapytanie o dodanie użytkownika do tej listy, wystarczy tylko, że zmienimy metodę z `GET` na `POST`! Jest to bardzo wygodne i logiczne co powinno szybko pomóc wdrożyć ludzi w działanie, oraz w komunikację pomiędzy zespołami.

Podczas gdy dostajemy atrybut `id` w odpowiedzi od serwera, niektóre dane są tworzone po jego stronie dla własnej indentyfikacji. Wysyłając prośbę o stworzenie kolejnego użytkownika, nie podajemy tego atrybutu - zostanie on nadany automatycznie przez serwer. Przykładowe body zapytania może wyglądać tak:

```json
{
  "firstName": "Jakub",
  "firstName": "Techniczny",
  "email": "jakub.techniczny@mail.pl",
  "password": "moje_hasło_jest_widoczne!"
}
```

Ale jak to?!? Tutaj widzimy hasło Jakuba w niezaszyfrowanej formie! Nic bardziej mylnego - hasło dążące do serwera jest często w formie plaintext, natomiast jest już pod formą szyfrowania zapewnionego przez protokół HTTPS, dlatego nie musimy się bać o jego wycieknięcie. Po stronie serwera dopiero zachodzi procedura szyfrowania, tak, aby tylko serwer mógł zweryfikować, przy ponownym sprawdzeniu hasła, czy po zastosowaniu tego samego algorytmu szyfrowania hasło się zgadza.

Jeżeli wszystko przebiegło pomyślnie, serwer powinien odesłać nam odpowiedź ze statusem 201 (Created) z przykładowym body:

```json
{
  "id": 3,
  "firstName": "Jakub",
  "firstName": "Techniczny",
  "email": "jakub.techniczny@mail.pl"
}
```

Nawiązując też do pierwszego zapytania, w którym widzimy _zaszyfrowane_ hasła, implementując API powinniśmy pamiętać o jednej ważnej zasadzie. **Nie odsyłamy niepotrzebnych dla użytkownika informacji z serwera**. Poprawnym, dla wyświetlenia danych użytkownika w jego panelu, byłoby wysłanie następujących danych:

```json
{
  "id": 1,
  "firstName": "Jan",
  "firstName": "Przykładowy",
  "email": "jan.przykladowy@mail.pl"
}
```

W dodatku takie zapytanie dostalibyśmy gdybyśmy wysyłali zapytanie metodą `GET` na adres (lub inaczej mówiąc endpoint):

```
https://przykladowa.strona.pl/api/v1/users/1
```

Dlaczego dodaliśmy `/1` na koniec zasobu `/users`? Istnieje konwencja, że mając klucz główny, tutaj atrybut `id`, możemy dostać wskazanego w zapytaniu użytkownika, nie musząc odsyłać niepotrzebnie całej listy użytkowników w jednym zapytaniu. Jest to jednocześnie kwestia optymalizacji - mniejsze zużycie sieci, serwera, filtrowania przez całą listę po stronie użytkownika, jak i bezpieczeństwa - nie chcemy dawać użytkownikowi nie jego danych.

## Swagger

Aby móc łatwo komunikować się i wiedzieć jakie są endpointy na backendzie, przydałaby się dokumentacja... dlatego z pomocą przychodzi projekt Swagger, który standaryzuje sposób opisywania endpointów REST. Następnie za pomocą różnych aplikacji, można wygenerować dokumentacje, która pomaga np. sekcji frontend w szybkim i sprawnym tworzeniu logiki aplikacji.

### Autoswagger

Projekt Autoswagger pozwala na automatyczne wygenerowanie dokumentacji z kodu danego frameworku, a potem na wyświetlanie go za pomocą Swagger UI na równie automatycznie wygenerowanej stronie 🤯

### Adonis-Autoswagger

Dla naszego głównego frameworku istnieje rozwiązanie, które po zainstalowaniu jednego pakietu (i pakietów, na którym się on opiera) i kilku prostych zmian w kodzie dostajemy automatyczną dokumentację, którą możemy podpiąć pod dowolny endpoint!

#### Instalacja

Po dokładne instrukcje i opis działania zapraszam na [stronę projektu](https://github.com/ad-on-is/adonis-autoswagger).

Wchodzimy do projektu z Adonisem i wpisujemy:

```
npm install adonis-autoswagger
```

Następnie musimy napisać konfigurację autoswaggera, najlepiej w folderze `/config`. Plik może nazywać się jakkolwiek, natomiast konwencją podaną przez projekt jest nazwanie go `swagger.ts`. Następnie zamieszczamy tam następującą konfiguracje:

```ts
import path from "node:path";
import url from "node:url";

export default {
  path: `${path.dirname(url.fileURLToPath(import.meta.url))}/../`,
  tagIndex: 2,
  info: {
    title: "Niesamowity projekt od Solvro",
    version: "1.0.0",
    description: "Kolejny z niesamowitych projektów solvro - dokumentacja",
  },
  snakeCase: true,
  ignore: ["/swagger", "/docs"],
  preferredPutPatch: "PUT",
  common: {
    parameters: {},
    headers: {},
  },
  showFullPath: false,
};
```

Teraz możemy zaktualizować `routes.ts`, aby autoswagger wykrył nasze endpointy i automatycznie wygenerował dla nich dokumentacje:

Wszystkie statyczne kontrolery musimy zamienić na lazy-loaded:

```ts
import TestController from "#controllers/test_controller"; //NIEPOPRAWNIE ❌
const TestController = () => import("#controllers/test_controller"); //POPRAWNIE ✅
```

A w dodatku dodać route'y dla Swagger UI i do zwracania dokumentacji w postaci YAMLa:

```ts
import AutoSwagger from "adonis-autoswagger";
import swagger from "#config/swagger"; //jeżeli plik konfiguracyjny jest w config/swagger.ts

import router from "@adonisjs/core/services/router";

//dokumentacja wygenerowana w postaci YAMLa
router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

//dla Swagger UI, korzysta ze ścieżki /swagger do zaciągnięcia dokumentacji
router.get("/docs", async () => {
  return AutoSwagger.default.scalar("/swagger");
});
```

Teraz powinniśmy móc wejść na ścieżkę `/docs` i móc zobaczyć naszą automatyczną dokumentację API! 🎉

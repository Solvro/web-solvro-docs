---
title: Handbook Web Developera
description: Poradnik w świecie web developmentu, jak zacząć i żyć?
---

## Środowisko

### WSL

Za używanie Windowsa do programowania jest wyrzucenie z koła, każdy obowiązkowo ma używać co najmniej WSL’a, a zalecany jest dual boot do Linuxa (rekomenduje ubuntu, bo proste)

- Tutorial dla opornych
  [https://www.youtube.com/watch?v=-atblwgc63E](https://www.youtube.com/watch?v=-atblwgc63E)

### Edytor

Używajcie VSCode, inne edytory na własną odpowiedzialność

OBOWIĄZKOWE wtyczki:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - musicie go skonfigurować do formatowania przy zapisie i jako domyślny formater
  [https://www.youtube.com/watch?v=drtxWx1XojI](https://www.youtube.com/watch?v=drtxWx1XojI)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - będzie krzyczał na was jak coś źle zrobicie, tutaj wystarczy tylko kliknąć install

Polecane wtyczki:

- Tailwind CSS IntelliSense - podpowiedzi gdy piszecie klasy w tailwind, must have
- Better Comments - ładne komentarze
- Error Lens - od razu wam pokaże błędy, nie trzeba myszką najeżdżać
- Github Copilot - no chyba wiecie
- GitLens - ładny git blame w vscode

## Struktura plików

Używamy tej z [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md), ale lekko przerobionej pod nasze potrzeby. Na start aplikacji polecam pominąć folder `features` i wszystko robić toplevel i dopiero później podzielić na featury.

```jsx
src
|
+-- app               # nextjs to wymusza, tutaj są nasze wszystkie strony
|
+-- assets            # folder, który zawiera zdjęcia, czcionki i inne rzeczy, które nie są kodem
|
+-- components        # komponenty używane w całej aplikacji
|
+-- features          # moduły podzielone na feature'y
|
+-- hooks             # hooki używane w całej aplikacji
|
+-- test              # utilites do testów + mocki
|
+-- types             # typy używane w całej aplikacji
|
+-- utils             # funkcje używane w całej aplikacji - NIE UŻYWAJ JAK NIE MUSISZ
```

Każdy feature ma taką strukturę:

```jsx
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- atoms       # atomy używane w konkretnym featuerze
|
+-- types       # typescript types used within the feature
|
+-- utils       # utility functions for a specific feature
```

## Assumptions

Wszystko w programowaniu ma swoje mocne i słaby strony i wszystko zależy od tego co chcemy osiągnąć, ten poradnik jest zoptymalizowany pod (w kolejności od najważniejszego):

1. Szybkość developmentu - pisanie kodu powinno być jak najprostsze i jak najszybsze, jesteśmy kołem naukowym, każdy robi tutaj po godzinach i nie mamy budżetu na marnowanie czasu na zbędne rzeczy
2. Nowoczesność - jak już robimy coś za darmo, to miejmy z tego frajde, nie wiem jak wy, ja bym nie chciał pisać w angularze 😭
3. Uniwersalność - nie ma tutaj specjalistycznych rzeczy, starałem się, żeby jak najbardziej dało się przenosić wiedzę między apkami

Pod co nie jest zrobiony ten guide:

1. Długowieczność - większość bibliotek tutaj używanych potrafi bardzo szybko się zmieniać (patrz nextjs) i projekty, które nie będę dotykane przez rok będzie można już nazywać legacy, aka [stałocieplny software](https://blog.jim-nielsen.com/2024/cold-blooded-software/)
2. Learning curve - technologie takie jak React, NextJS są stosunkowo trudne do nauczania się dla osoby, która nic nie wie, tutaj o wiele lepiej by się sprawdził czysty html i js

## Technologie

### Typescript

Nie widzę powodów, żeby nie używać Typescripta:

- Ma niski próg wejścia
- OLBRZYMIA wartość dla programisty
- Używany przez pół świata

### shadcn/ui

Komponenty, które z miejsca są ładne, customizowalne i na dodatek multum ludzi ich używa.

### React

Najpopularniejsza obecnie biblioteka (która działa jak framework) do tworzenia UI, klasyczek.

### Reszta:

NextJS

React Hook Form

shadcn/ui

Tanstack Query

Jotai

TailwindCSS

## Accessibility

Alt na fotkach

Przyciski a linki

## Best practices

### Jak zrobić ładne UI?

Wbrew przekonaniom, sprawa jest prosta:

1. Znajdź stronę, której design Ci się podoba i pasuje do Twojego projektu, np. robisz apke z mapą? google maps
2. Skopiuj design 1:1, uprość i przerób go na komponenty shadcn
3. Gotowe, ciesz się ładnym designem

W UI/UX nie ma miejsca na kreatywność i jeśli sami spróbujecie stworzyć własny design na 99% skończycie z czymś dziwnym czego użytkownicy nie chcą używać. Jak tylko możecie kradnijcie designy i dostosowujcie do swoich potrzeb, użytkownicy chcą używać stron, które już znają i nie da sie sprawić by nie znali waszej stronę jeśli wygląda tak samo jak instagram 😭

Poza tym, nie pisz własnych komponentów jeśli nie masz BARDZO dobrego powodu, te z shadcn’a są bardzo ładne i jak tylko możesz używaj ich 1:1, wtedy na pewno nie zbłądzisz.

- Jak chcesz wiedzieć więcej na ten temat zapraszam do poczytania Refactoring UI, książka twórców tailwinda, poradnik o designie dla programistów (wymagany dostęp do dysku)
  [https://drive.google.com/file/d/1zbsgxcK-xREkmFV7D6Z1lHZwOn4k04w-/view?usp=drive_link](https://drive.google.com/file/d/1zbsgxcK-xREkmFV7D6Z1lHZwOn4k04w-/view?usp=drive_link)

### Pobieranie danych z API

Tutaj mamy dwie ścieżki:

1. React Server Components

   Domyślna ścieżka, nie trzeba zarządzać stanami ładowania, wszystko jest od razu na miejscu, bardzo wygodne

2. Tanstack Query

   Tego używamy gdy chcemy mieć większą kontrolę nad tym co się dzieje w naszej aplikacji, potrzebujemy odświeżać często dane albo na przykład mamy jakąś skomplikowaną logikę po stronie klienta (typu użytkownik najpierw wybiera jakąś zakładkę i dopiero wtedy pobieramy coś z api albo jakikolwiek case z bardziej zaawansowanym filtrowaniem)

Do pobierania danych też potrzeba klienta API i tutaj mam zachęcam do korzystania z natywnego `fetch` , a za używanie `axios`a bez powodu będę ucinał pensje, jest bardzo mało powodów do używania axiosa w 2024 roku.

### Wysyłanie danych do API

Tutaj jestem opinionated i według mnie jedynym słusznym wyborem jest Tanstack Query i jego mutacje, nie próbujcie tego robić inaczej, bo będziecie sobie pluć w brodę (albo ja wam)

### Zarządzanie stanem

Do globalnego stanu używamy [Jotai](https://jotai.org/), a do lokalnego useState/useReducer jak serio to jest coś skomplikowanego

Nigdy Context API, chyba, że macie BARDZO dobry powód

### Formularze

Zapraszam do dokumentacji shadcn’a, tam większość jest dobrze opisana:

[https://ui.shadcn.com/docs/components/form](https://ui.shadcn.com/docs/components/form)

### Autentykacja

Nie mieliśmy jeszcze za dużo projektów, które by wymagały autentykacji, ale tutaj raczej zalecam iść w klasykę i klepnąć to w

[https://authjs.dev](https://authjs.dev/)

Jeśli robicie to DIY, to pewnie będziecie musieli sobie odpowiedzieć na pytanie gdzie trzymać tokeny i tutaj są dwie opcje:

- LocalStorage - protsza opcja, ale mniej bezpieczna i bardziej podatna na ataki XSS
- Cookies HttpOnly - bardziej bezpieczna opcja, ale trudniejsza w implementacji, źle zaimplementowane może prowadzić do ataków CSRF

Na potrzeby Solvro cokolwiek wybierzecie będzie dobrze, a jeśli kogoś temat bardziej interesuje to tutaj można sobie poczytać:

- https://tkacz.pro/how-to-securely-store-jwt-tokens
- https://stackoverflow.com/questions/27067251/where-to-store-jwt-in-browser-how-to-protect-against-csrf

### Landing page

Jeśli jeszcze raz ktoś zmarnuje czas na robienie własnego landing page’a to go uduszę, tutaj macie dwie templatki i proszę z nich zrzynać:

- [https://shadcn-landing-page.vercel.app](https://shadcn-landing-page.vercel.app/)
- [https://shadcn-landing-page-livid.vercel.app](https://shadcn-landing-page-livid.vercel.app/)

### Analityka

Do analityki mamy postawione [Umami](https://umami.is/) na [https://analytics.solvro.pl](https://analytics.solvro.pl), jak chcecie dostęp to uderzajcie do Zarządu.

### WYSIWYG

Strasznie nie lubię tego tematu, bo tu jest milion wyborów i milion + 1 złych, obecnie rekomenduje:

[https://shadcn-minimal-tiptap.vercel.app/](https://shadcn-minimal-tiptap.vercel.app/)

### Tabelki

Do tworzenia bardziej zaawansowanych tabelek polecam [https://tanstack.com/table/latest](https://tanstack.com/table/latest). Jest dość skomplikowany i ma wysoki próg wejścia, ale pozwoli wam na wszystko co sobie wymyślicie.

Jako przykład polecam DataTable z shadcn'a:
[https://ui.shadcn.com/docs/components/data-table](https://ui.shadcn.com/docs/components/data-table)

Jeśli tabelka ma więcej niż 1000 wierszy to jest moment, żeby przenieść logikę filtrowania, paginacji i sortowania na backend, frontend przy takich ilościach powoli może zacząć zamulać. Przy 10k+ ilości wierszy to jest must-have.

### Deployment

Tutaj zapraszam do korzystania z naszego coolify’a pod adresem [https://devops.solvro.pl/](https://devops.solvro.pl/), jak ktoś chce dostępy to pisać do Zarządu, raczej każdy dostaje 😭

### a11y

Za wsadzanie linka w przycisk będę karał tygodniową chłostą, to nie jest poprawny html, sam react krzyczy, że nie można tak robić i czytniki ekranów się popierdolą jak spróbują to przeczytać

Jak zrobić Link, który wygląda jak przycisk: [https://ui.shadcn.com/docs/components/button#as-child](https://ui.shadcn.com/docs/components/button#as-child)

### Daty

Do zabawy datami, strefami czasowymi, wyświetlania ładnych napisów `10 sekund temu` zalecam używanie [date-fns](https://date-fns.org/), imo najlepsza libka do dat i shadcn też jej używa

## Checklista przed wypuszczeniem aplikacji

- [ ] Czy masz favicon?
- [ ] Czy masz ustawiony title i description na każdej stronie?
- [ ] Czy masz wpiętą analitykę i eventy?

## Częste błędy

### Używanie useEffect tam gdzie nie trzeba

useEffect służy do synchronizowania stanu z zewnętrznym systemem (ref. dokumentacja reacta), jeśli w useEffecie nie macie odwołania do zewnętrznego systemu (localStorage, api serwera, inne api przeglądarki) to znaczy, że go źle użyliście, przykładowy zły kod:

```jsx
function handleMuscleClick(muscle: string) {
  setSelectedMuscles((prevSelectedMuscles) => {
    if (prevSelectedMuscles.includes(muscle)) {
      return prevSelectedMuscles.filter((m) => m !== muscle);
    } else {
      return [...prevSelectedMuscles, muscle];
    }
  });
}

useEffect(() => {
  table.getColumn("targetMuscle")?.setFilterValue(selectedMuscles);
}, [selectedMuscles, table]);
```

Tutaj synchronizujemy `selectedMuscles` z filtrowana wartościa z tabelce, tabelka żyje w świecie reacta i nie jest zewnętrznym systemem i równie dobrze możemy to zrobić w ten sposób:

```jsx
function handleMuscleClick(muscle: string) {
  const newSelectedMuscles = selectedMuscles.includes(muscle)
    ? prevSelectedMuscles.filter((m) => m !== muscle)
    : [...prevSelectedMuscles, muscle];

  table.getColumn("targetMuscle")?.setFilterValue(newSelectedMuscles);
  setSelectedMuscles(newSelectedMuscles);
}
```

Teraz jest bardzo jasne, że po kliknięciu na mięsień, zostaje też zupdate’owana tabelka.

Ten przykład jeszcze nie jest taki zły, przy 1 useEffectcie dość łatwo się połapać co się dzieje, przy 11 robi się już kłopot i raz u mnie w pracy przez coś takiego padła produkcja 😭

## FAQ

- Co to Server Components i po co ich używać?

  RSC (React Server Components) to komponenty, których kodzik jest wykonywany WYŁĄCZNIE po stronie serwera i ani gram javascriptu nie idzie do przeglądarki, to są obecnie domyślne komponenty w Nextjs 13-15. Ułatwiają pobieranie danych z serwera, bo nie trzeba np. wyświetlać stanu loadingu, od razu otrzymujemy gotowe dane, możemy wykonywać zapytania do bazki od razu w kodzie komponentu co jest mega wygodne. Minus taki, że nie możecie tutaj używać żadnych hooków ani obsługiwać eventów, do tego są potrzebne Client Components.
  tl;dr;
  Kiedy używać RSC?
  Zawsze
  Kiedy używać Client Components?
  Wtedy kiedy nie możecie RSC (czyli potrzebujecie hooków itp)

  Dogłebniej opisane to jest tutaj: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns

- Jak działaja Client Components?

  Wbrew intuicji początkujących one są też wykonywane po stronie serwera (https://github.com/reactwg/server-components/discussions/4) i serwer wysyła gotowy html wraz z javascriptem, który potem jest wykonywany po stronie klienta i następuje proces hydracji, czyli React "przejmuje" html, który dostał i sam zaczyna go obsługiwać.

  Polecam bardzo opis z dokumentacji Nextjs, dobrze to opisali: https://nextjs.org/docs/app/building-your-application/rendering/client-components

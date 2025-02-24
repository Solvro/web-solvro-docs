---
title: Roadmapa
sidebar:
  order: 7
description: Co zrobić, żeby móc bez kompleksów pracować w naszym projekcie
---

## Wstęp

Witam wszystkich serdecznie w roadmapce frontasia, która z założenia powinna wam pomóc wam stać się całkiem kumatym ziutkiem od poziomu totalnego początkującego.

## Co potrzebujesz żeby zacząć?

Wystarczy zainstalować Visual Studio Code, reszta rzeczy zostanie przedstawiona w poradnikach lub opisana w tym dokumencie.

## Podstawy

### HTML

HTML - HyperText Markup Language. Określany jako język znaczników. Dzięki niemu można tworzyć już własne stronki i wyświetlać coś w przeglądarce.

Co zrobić żeby ogarnąć html'a? W necie jest masa darmowych kursów, tak na prawdę każdy będzie dobry, html to łatwa rzecz do ogarnięcia. Nie poświęcałbym mu zbyt dużo czasu, zdecydowanie nie trzeba znać wszystkich tagów na start. Polecam godzinny tutorial od Bro Code'a: [Learn HTML in 1 hour 🌎](https://www.youtube.com/watch?v=HD13eq_Pmp8).

Co zrobić po obejrzeniu tutoriali?

Po przejściu przez tutorial najlepsza jest po prostu zabawa z html'em. Po prostu wklejaj jakieś śmieszne obrazki i spamuj Lorem Ipsum. Jeśli po 15 minutach Ci się to znudzi, polecam zrobić swoją CV'kę w html. Po zrobieniu CV'ki zachęcam do poczytania o [semantycznym HTML'u](https://cs.fyi/guide/writing-semantic-html) i przejrzeniu docsów odnośnie [walidacji formularzy](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation).

### CSS

CSS - Cascading Style Sheets. Służy do stylowania twojej strony. Chcesz zeby paragraf miał kolorowy tekst? Z pomocą przychodzi właśnie CSS (nie czuje kiedy rymuje). Tutaj też darmowe tutoriale na pewno Ci pomogą, polecam ten od Bro Code - bo po prostu jest fajnym ziomkiem, tłumaczy bardzo przyjaźnie i konkretnie. Na start poleciłbym się też pobawić i poeksperymentować, np. wystylować wcześniej napisane CV. Spróbuj też kliknąć `ctrl + shift + i` na klawiaturze, żeby przejść do devtoolsów. Na razie nie musisz się zagłębiać we wszystkie zakładki, raczej zajmij sie po prostu elementami na stronie. [Poradnik co to w ogóle jest](https://www.youtube.com/watch?v=fxplz32rgEQ).

Po krótkiej zabawie pora na tworzenie pierwszych sensownych layoutów. Tutaj powinieneś zainteresować się flexboxem i gridem. Do flexboxa polecam [tutorial od Bro Code’a](https://www.youtube.com/watch?v=GteJWhCikCk), a do grida poradnik od twojego kolejnego przyjaciela - kanał Web Dev Simplified: [link](https://www.youtube.com/watch?v=9zBsdzdE4sM). Po przejściu przez te poradniki polecam fajne gierki, które pozwolą Ci sprawdzić twoją świeżo nabytą wiedzę: [flexboxowa żabka](https://flexboxfroggy.com/#pl) i [grid garden](https://cssgridgarden.com/#pl)

Po przejsciu tych gierek na pewno spróbowałbym odwzorać jakaś stronke, np. Youtube’a czy nawet stronę naszego koła. Na razie nie przejmuj się animacjami i interakcją z użytkownikiem, tutaj chodzi o to zebyś zrozumiał jak efektywnie wykorzystywać cssa do uzyskania odpowiedniego layoutu. Jeśli już udało ci się odwzorować jakąś stronke, wejdz w devtoolsy i pobaw się rozdzielczością. Całkiem prawdopodobnie strona kompletnie Ci się rozjedzie i nie bardzo będziesz wiedział co zrobić. Niestety twoja stronka nie jest na razie **responsywna**, czyli nie nie jest gotowa na dynamiczne zmiany rozdzielczości ekranu twojej przeglądarki. Aby naprawić widok strony, poczytaj trochę o responsive web design - czyli tworzeniem stron zoptymalizowanych do wyświetlania ich na róznych urządzeniach i rozdzielczościach. Podstawowy poradnik jest [tutaj](https://www.youtube.com/watch?v=K24lUqcT0Ms). owtórze się, ale poeksperymentuj, pomachaj tym suwakiem z boku strony lub zmieniaj urządzenia w devtoolsach. Inaczej tego nie zrozumiesz 😭😭😭.

### JavaScript

Jeden z najpopularniejszych języków programowania. JS pozwala dodać twojej stronie interaktywności. Tutaj wybrałbym na start jakiś kurs od Bro Code’a czy freeCodeCamp’u. Niestety, trzeba jakoś się tego nauczyć i poświęcic czas jakiemuś kursowi. Po poznaniu podstaw i ogarnięciu manipulowania DOM’em (jeśli nie wiesz co to DOM po poradnikach, koniecznie o tym poczytaj!), zrobiłbym nic innego jak zwykłą to-do listę, najbardziej popularny startowy projekt każdego frontasia.

Co po tym? Tutaj już radzę wymyślić już coś swojego lub zainspirować się czymś z neta. Spróbuj wykorzystać `fetch API` w kolejnym projekcie. Jeśli nie było tego w twoim poradniku to łap [link](https://www.youtube.com/watch?v=37vxWr0WgQk). Nie bój się oglądać poradników z tworzenia projektów(np. weather apki) i po prostu dodawać do nich swoich funkcjonalności. Na start na pewno będzie ci ciężko więc nie przejmuj się że ciężko ci coś stworzyć. Z każdym projektem będzie Ci coraz łatwiej. Polecam poświęcić trochę czasu na zrozumienie JS zanim przejdziesz dalej.

:::tip
Nie lekceważ błędów! Zanim wyślesz prompta do dżepetto, staraj się zrozumieć co powoduje error. Jeśli nie możesz rozkminić danego błędu, ktoś na [StackOverflow](https://stackoverflow.com/questions) na pewno spotkał się z podobnym problemem w swoim kodzie!
:::

### Co powinieneś/powinnaś wiedzieć zanim przejdziesz dalej?:

- Co to **DOM**?
- Co to semantic HTML?
- Za co odpowiadają metatagi w HTML’u
- Co to **box model**?
- Różnice pomiędzy pozycjonowaniem: `static`, `relative`, `absolute`, `fixed`.
- W jaki sposób tworzyć responsywne strony?
- Jak działają jednostki w HTML'u?: %, em, rem, px, vh ,vw, vmin, vmax.
- Jak działają deklaracje zmiennych w JS? (var, let , const)
- Różnice pomiedzy funkcjami strzałkowymi a zwykłymi funkcjami.
- Co to spread/rest operator?
- Jak działa **fetch API**?
- Jak manipulować **DOM'em**?
- Co to **localStorage** i **sessionStorage**?
- Czym jest `this` keyword?
- Co to **domknięcia** (closures)?
- Co to `Promise`?
- Czym jest i jak działa **Event Loop**?

### TypeScript

Po stworzeniu kilku prostych projektów zdecydowanie zalecam przejść na TypeScript’a. Nie będę się tu rozpisywał, łapcie link do [handbooka](https://www.typescriptlang.org/docs/handbook/intro.html), tam jest wszystko wyjaśnione. Must have do pracy przy projektach frontendowych w naszym kole. Daje też [link do poradnika](https://www.youtube.com/watch?v=jBmrduvKl5w) od Kyle'a z Web Dev Simplified, który tworzy szybki projekcik z użyciem już poznanych przez Ciebie technologii i TypeScript'a.

Na początku może być Ci trochę cieżko, typeErrory będą Cię irytować i nie za bardzo będziesz wiedzieć jak je naprawić. Z czasem jednak zrozumiesz dlaczego warto było się przerzucić.

## Diving deeper

### React

W końcu to co kusiło Cię od początku. R-E-A-C-T. Tak jak jest napisane w naszych docsach, React to najpopularniejsza obecnie biblioteka (która działa jak framework) do tworzenia UI, klasyczek, w opór materiałów do nauki.

Od czego zacząć? Widzę dla Ciebie dwie ścieżki - tutorial od Bro Code’a (tak znowu on) lub [poradnik](https://react.dev/learn) od twórców React’a. Poradnik od może być troche przytłaczający na sam start, ale warto go zrobić bo faktycznie pokazuje większość react’owych konceptów. Co po przejściu tych poradników? Poleciłbym odtworzenie jednego z twoich projektów przy użyciu React’a. Jednak chciałbym też zebyś użył również innego narzędzia do stylowania twojej stronki.

### TailwindCSS

Czym jest Tailwind? Tailwind to css’owy framwork, który slużą do stylowania elementów przy pomocy już gotowego zbioru klas. Nie musisz teraz wymyslać bujnych nazw dla cssowych klas, po prostu inlinowo dodajesz styl. Jest to giga ułatwienie mimo ze na poczatku bedziesz musial miec odpalone docsy obok vscode’a. Nie poświęcał bym czasu na jakieś poradniki, nauczysz się tego w praniu.

```jsx
<div classname="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
  <div>
    <img classname="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div classname="flex items-center md:items">
    <span classname="text-2xl font-medium">Class Warfare</span>
    <span classname="font-medium text-sky-500">The Anti-Patterns</span>
    <span classname="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>Cała Polska</span>
      <span>W</span>
      <span>Cieniu Śląska</span>
    </span>
  </div>
</div>
```

Poradnik jak dodać Tailwind'a do swojego projektu, jeśli używałeś create vite@latest: [link](https://www.youtube.com/watch?v=sHnG8tIYMB4).

### React cd.

Po odwzorowaniu któregoś z projektów, radzę zabrać się za kurs **Epic React** stworzony przez react’owego guru - **Kenta C. Doddsa**. Wszystkie materiały znajdziesz na naszym dysku w zakładce Wiedza/Frontend. Jest to duuuuuży kurs więc trochę ci zajmie, jest też według mnie całkiem trudny - ale nie przejmuj się tym, nie bój się pytać członków sekcji frontend o pomoc.

Co po przejściu tego kursu? Tutaj już powinieneś całkiem nieźle ogarniać i mieć pomysł na projekt który chciałbyś zrealizować. Jednak jeśli potrzebujesz inspiracji to zachęcam do zrobienia projektów z naszych rekrutacji: [2024 zima](https://github.com/Solvro/rekrutacja-wiosna-2024/blob/main/frontend.md), [2024 lato](https://github.com/Solvro/rekrutacja/blob/main/frontend.md). Polecam również przejść przez zadanka rekrutacyjne od Web Dev Cody'ego, które pozwolą ci sprawdzić twoje ogólne rozumienie React’a: [link](https://www.youtube.com/playlist?list=PL6x5Q-Sj_Bla3_wMqhETxMBjFml0XJNPI)

W przyszłości pewnie bedziesz rozglądać się za swoją pierwszą pracą. Większość rozmów technicznych polega na zrobieniu jakiegoś zadanka lub sprawdzeniu wiedzy teoretycznej. Na froncie leetcode'owanie zbytnio nie pomoże. Przykładowe pytania znajdziesz tutaj: [JavaScript](https://github.com/sudheerj/javascript-interview-questions), [React](https://github.com/sudheerj/reactjs-interview-questions). Zadań raczej nie przewidzisz 😭😭😭😭.

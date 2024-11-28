---
title: Accessibility
description: Poradnik w świecie web developmentu, jak zacząć i żyć?
---

## Opisy obrazków

Dobrą praktyką jest umieszczanie krótkiego opisu obrazka poza samym src obrazka. Służy to czytnikom ekranów, wspiera SEO oraz jest wyświetlany w przypadku, gdy zdjęcie nie może się załadować.

### Podstawowe zasady:

- **Zwięzłość i celność** – Opis powinien być krótki i oddawać cel obrazu. Unikaj zbędnych szczegółów, chyba że są kluczowe do zrozumienia treści obrazu.
- **Kontekst obrazu** – Skup się na tym, co obraz wnosi do strony. Na przykład, jeśli zdjęcie przedstawia osobę szczęśliwą, ważne może być opisanie jej emocji.
- **Unikaj zwrotów „obrazek przedstawia”** – Czytniki ekranowe automatycznie rozpoznają obraz, więc wystarczy przejść od razu do treści opisu.
- **Unikaj powtarzania tekstu z otoczenia obrazu** – Jeśli tekst obok obrazu już wyjaśnia jego znaczenie, opis alt może być bardziej ogólny lub pominięty.

### Kiedy stosować alt-a:

- **Obrazy informacyjne**: Opisz, co jest kluczowe, np. „Wykres słupkowy przedstawiający roczny wzrost sprzedaży o 20%” zamiast „Wykres słupkowy”.
- **Logo firmy**: Opis może być prosty, np. „Logo firmy Contoso”, ale jeśli logo jest linkiem, warto dodać „Logo Contoso – strona główna”.
- **Infografiki**: Oddaj istotę przekazywanych danych, np. „Infografika prezentująca korzyści z recyklingu: zmniejszenie odpadów o 50%”.

### Kiedy nie stosować:

- **Obrazy dekoracyjne**: Jeśli obraz nie wnosi żadnej wartości informacyjnej (ramki czy jakiś gwiazdki pływające po stronie), oznacz go jako dekoracyjny (np. alt="").
- **Ikony z tekstem obok**: Jeśli ikona ma objaśniający tekst tuż obok, alt text nie jest konieczny.

### Tego nie rób:

- Nie używaj nazw plików jako alt textu.
- Nie stosuj losowych ciągów znaków lub ogólników, takich jak „Zdjęcie” czy „xxx”.
- Nie kopiuj całego tekstu z obrazu i wszystkich najmniejszych szczegółów, jeśli nie jest to kluczowe do zrozumienia treści.

Przykład:
```jsx {8}
// app/page.tsx
import Image from 'next/image'

export function MyComponent() {
  return (
    <Image
      src="/next.svg"
      alt="Next.js logo" // Krótki opis grafiki
    />
  )
}
```

## Przyciski jako linki

Za wsadzanie linka w przycisk będę karał tygodniową chłostą, to nie jest poprawny html, sam react krzyczy, że nie można tak robić i czytniki ekranów się popierdolą jak spróbują to przeczytać

Jak zrobić Link, który wygląda jak przycisk: 
```jsx
// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
 
export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
```

:::tip
Jeśli ktoś pragnie doedukować się bardziej szczegółowo w temacie "Accessibility" zachęcam do obczajenia [dokumentacji React'a](https://legacy.reactjs.org/docs/accessibility.html), ale to tylko dla zaprawionych w boju w ramach ciekawostki.
:::
---
title: State management
description: Zarządzanie stanem we Flutterze
---

## Zarządzanie stanem

Zarządzanie stanem w Flutterze obejmuje dwa główne rodzaje stanów:

## Stan Lokalny (Ephemeral)

- **Definicja**: Stan związany zazwyczaj bezpośrednio z interfejsem. Ograniczony do jednego widgetu lub małego poddrzewa widgetów i zarządzany wewnątrz niego.
- **Przykład**: "czy zakładka jest rozwinięta"
- **Rozwiązania/sposoby**:
  - `StatefulWidget` - Wbudowany i domyślny sposób, jest ok, nic z nim nie ma złego. Jedynym jego minusem jest dość rozwlekły syntax.
  - `ValueNotifier` - Również wbudowany w Darta i Fluttera sposób, dużo mniej popularny, ale moim zdaniem bardzo fajna alternatywa, jeśli ktoś nie lubi dodatkowych dependencies, warto go stosować. [Poczytaj np. tutaj](https://medium.com/@asterjoules/complete-guide-to-valuenotifier-in-flutter-0557f7c426b9).
  - `flutter_hooks` - Port z Reacta :). Jeśli ktoś nie wie czym są hooki, to polecam spróbować. Są wygodne i pozwalają robić rzeczy w dużo mniej linijek kodu, dlatego je lubię - ale jeśli ktoś nie ma backgroundu z Reacta to musi się douczyć osobnej teorii do tego.

### Przykład użycia `flutter_hooks`

// TODO: Kilka przykładów z flutter hookami.

## Stan Globalny

- **Definicja**: Stan współdzielony między różnymi częściami aplikacji. Związany zazwyczaj z logiką biznesową.
- **Zastosowanie**: Używany w przypadku, gdy stan musi być dostępny w wielu miejscach aplikacji, np. logowanie użytkownika.
- **Popularne rozwiązania**:
  - **Inherited Widget/Model** (wbudowane we Fluttera domyślnie) - Tego używa np. domyślny `Theme`. Jeśli komuś się to podoba, to lepiej już użyć `Provider`'a, który jest lepszą nakładką.
  - **Riverpod** - Najbardziej popularne rozwiązanie w Solvro. Niektórzy mówią, że ryje banie (trochę trzeba się na początku nagłówkować), ale jest to potężna paczka z wieloma możliwościami i małą ilością boilerplate'a,
  - **BLoC (Business Logic Component)** - Jedna z pierwszych paczek do tych celów w historii Fluttera, ale nadal w top 2 użycia. Jest mega prosta koncepcyjnie, ale w mojej ocenie ma dużo bardzo boilerplate'a, dlatego preferuję Riverpoda. Oparte na strumieniach.
  - **GetX** - Mega proste w użyciu, również bardzo popularne. Ma też wielu wrogów.
  - **Provider** - Trochę odwzorowanie context api z Reacta, nakładka na InheritedModel. Twórca tej paczki stworzył potem Riverpoda.
  - **MobX**
  - **Redux**
  - i wiele, [wiele innnych](https://docs.flutter.dev/data-and-backend/state-mgmt/options)... A codziennie pewnie powstają nowe.

### Riverpod

**Riverpod** to zaawansowane rozwiązanie do zarządzania stanem w Flutterze, stworzone przez twórcę **Providera**. Jego główne cechy to:

- **Reaktywność**: Riverpod automatycznie propaguje zmiany stanu w aplikacji, redukując skutki uboczne.
- **Bezpieczeństwo kompilacji**: Zapewnia sprawdzanie kodu w czasie kompilacji, eliminując wyjątki w czasie wykonywania.
- **Niezależność od kontekstu**: Pozwala na dostęp do stanu bez użycia `BuildContext`, co ułatwia separację logiki.
- **Wydajność**: Optymalizuje liczbę przebudowań drzewa widgetów, co może przyczynić się do lepszej wydajności w złożonych aplikacjach.
- **Testowalność**: Ma wbudowane w framework mockowanie i overridowanie providerów.
- **Hot Reload Friendly**: Dobrze współpracuje z hot reloadem, co przyspiesza proces rozwoju aplikacji.
- **Dependency Injection**: Wbudowany system DI, który jest prosty w użyciu i nie wymaga dodatkowych bibliotek.
- **Code Generation**: Nowa wersja z generacją kodu redukuje boilerplate.
- **Caching**: Wbudowany system cachowania stanu, który może znacząco poprawić wydajność aplikacji.
- **Error i Loading Handling**: Zaawansowany system obsługi błędów i stanu ładowania, który pozwala na eleganckie deklaratywne reagowanie na stan asynchronicznych zadań.

Riverpod jest szczególnie przydatny w przypadku bardziej skomplikowanych aplikacji, gdzie jego elastyczność i zaawansowane funkcje mogą pomóc w efektywnym zarządzaniu stanem. Choć również w prostych projektach, można docenić seksowność jego krótkiego syntaxu.

#### Minusy

- Bardziej skomplikowany przez co trudniejszy do zrozumienia i biegłego używania dla początkujących w tym temacie.
- Jest on bardziej "magiczny", mamy mniejszą kontrolę nad tym gdzie nasz riverpodowy provider rezyduje w drzewie w porównaniu do np. providera (z paczki provider). Sprawia to, że subtree scoping jest nadal możliwy, ale trudniejszy i mniej naturalny: [https://riverpod.dev/docs/concepts/scopes](https://riverpod.dev/docs/concepts/scopes). Zamiast tego zalecane są family provider'y, ale te nie zawsze w pełni mogą zastąpić scoping.
- Wymaga dodatkowej konfiguracji i setupu w projekcie (np. dodanie code generation, konfiguracja build_runnera). Choć możliwe jest używanie riverpoda bez generacji kodu, ale nie jest to już to samo uczucie (wersja z codegenem jest nowsza i rekomendowana przez twórcę).
- Debugowanie może być trudniejsze ze względu na "magiczność" działania.
- Niektóre zaawansowane funkcje (jak autoDispose, family providers) mogą prowadzić do nieoczekiwanych zachowań jeśli nie są prawidłowo zrozumiane i zastosowane.

:::note
W ramach nauki polecam przeczytać [całą dokumentację](https://riverpod.dev/). Nie należy się bać! Jest naprawdę fajna, warto.
:::

### Przykłady użycia Riverpoda

Riverpod ma dwie wersje syntaxu, z generacją kodu i bez. W Solvro używamy tej wersji z generacją kodu.

// TODO: add mutiple examples with the Riverpod 2.0

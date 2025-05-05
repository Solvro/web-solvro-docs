---
title: State management
description: Zarządzanie stanem we Flutterze
---

## Zarządzanie Stanem

Zarządzanie stanem w Flutterze obejmuje dwa główne rodzaje stanów:

## Stan Lokalny (Ephemeral)

- **Definicja**: Stan związany zazwyczaj bezpośrednio z interfejsem. Ograniczony do jednego widgetu lub małego poddrzewa widgetów i zarządzany wewnątrz niego.
- **Przykład**: Np. "czy zakładka jest rozwinięta"
- _Rozwiązania/sposoby_:
  - `StatefulWidget` - wbudowany i domyślny sposób, jest ok, nic z nim nie ma złego. Jedynym jego minusem jest dość rozwlekły syntax.
  - `ValueNotifier` - również wbudowany w Darta i Fluttera sposób, dużo mniej popularny, ale moim zdaniem bardzo fajna alternatywa, jeśli ktoś nie lubi dodatkowych dependencies, warto go stosować. [Poczytaj np. tutaj](https://medium.com/@asterjoules/complete-guide-to-valuenotifier-in-flutter-0557f7c426b9)
  - `flutter_hooks` - port z Reacta :). Jeśli ktoś nie wie czym są hooki, to polecam spróbować. Są wygodne i pozwalają zrobić rzeczy w dużo mniej linijek kodu, dlatego je lubię - ale jeśli ktoś nie ma backgroundu z Reacta to musi się douczyć osobnej teorii do tego.

### Przykład użycia `flutter_hooks`

// TODO: Kilka przykładów z flutter hookami.

## Stan Globalny

- **Definicja**: Stan współdzielony między różnymi częściami aplikacji. Związany zazwyczaj z logiką biznesową.
- **Zastosowanie**: Używany w przypadku, gdy stan musi być dostępny w wielu miejscach aplikacji, np. logowanie użytkownika.
- **Popularne Rozwiązania**:
  - Inherited Widget/Model (wbudowane we Fluttera domyślnie) - Tego używa np. domyślny `Theme`. Jeśli komuś się to podoba, to lepiej już użyć `Provider`'a, który jest lepszą nakładką.
  - **Riverpod** - najbardziej popularne rozwiązanie w Solvro. Niektórzy mówią, że ryje banie (trochę trzeba się na początku nagłówkować), ale jest to poteżna paczka z wieloma możliwościami i małą ilością boilerplate'a
  - BLoC (Business Logic Component) - Jedna z pierwszych paczek do tych celów w historii Fluttera, ale nadal w top 2 użycia. Jest mega prosta koncepcyjnie, ale w mojej ocenie ma dużo bardzo boilerplate'a, dlatego preferuję Riverpoda. Oparte na strumieniach.
  - GetX - mega proste w użyciu, również bardzo popularne. Ma też wielu wrogów.
  - Provider - trochę odwzorowanie context api z Reacta, nakładka na InheritedModel. Twórca tej paczki stworzył potem Riverpoda.
  - MobX
  - Redux
  - i wiele, [wiele innnych](https://docs.flutter.dev/data-and-backend/state-mgmt/options)... A codziennie pewnie powstają nowe.

### Riverpod

**Riverpod** to zaawansowane rozwiązanie do zarządzania stanem w Flutterze, stworzone przez twórcę **Providera**. Jego główne cechy to:

- **Reaktywność**: Riverpod automatycznie propaguje zmiany stanu w aplikacji, redukując skutki uboczne.
- **Bezpieczeństwo kompilacji**: Zapewnia sprawdzanie kodu w czasie kompilacji, eliminując wyjątki w czasie wykonywania.
- **Niezależność od kontekstu**: Pozwala na dostęp do stanu bez użycia `BuildContext`, co ułatwia separację logiki.
- **Wydajność**: Optymalizuje liczbę przebudowań drzewa widgetów, co może przyczynić się do lepszej wydajności w złożonych aplikacjach.

Riverpod jest szczególnie przydatny w przypadku bardziej skomplikowanych aplikacji, gdzie jego elastyczność i zaawansowane funkcje mogą pomóc w efektywnym zarządzaniu stanem.

:::note
W ramach nauki polecam przeczytać [całą dokumentację](https://riverpod.dev/). Nie należy się bać! Jest naprawdę fajna, warto
:::

### Przykład użycia Riverpoda

Riverpod ma dwie wersje syntaxu, z generacją kodu i bez. W Solvro używamy tej wersji z generacją kodu.

// TODO: add mutiple examples with the Riverpod 2.0

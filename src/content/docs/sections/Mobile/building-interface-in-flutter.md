---
title: Everything's a widget!
description: Podstawy budowania interfejsu we Flutterze
---

## Wszystko jest widgetem ?!?

Flutter opiera się na koncepcji **widgetów**, które są kluczowymi elementami konstrukcyjnymi interfejsu użytkownika. Mottem Flutterowców jest [_Everything's a widget_](https://stackoverflow.com/questions/61415249/what-is-the-meaning-of-every-thing-is-a-widget-in-flutter) - jest to pewne uproszczenie, ale co zasady (prawie) każdy element budujący interfejs we Flutterze jest widgetem - które można (prawie) dowolnie łączyć i z mniejszych klocków składać bardziej skomplikowane widoki.

Są dwa podstawowe rodzaje widgetów w podstawie Flutter:

### StatelessWidget

- **Definicja**: Są to widgety, które nie posiadają stanu, czyli ich wygląd zależy co najwyżej od podanych mu argumentów (Wyjątkiem jest zależność od jakiegoś InheritedWidget/Model np. `Theme.of(context)` lub `MediaQuery.of(context`)
- **Zastosowanie**: Idealnie sprawdzają się w przypadku elementów UI, które nie wymagają dynamicznych aktualizacji, na przykład wyświetlania stałych danych.
- **Dodatkowe uwagi**:
  - nie powinny posiadać mutowalnych pól
  - nie powinny mieć żadnych skutków ubocznych (metoda `build` powinna być [deklaratywną czystą funkcją](https://medium.com/programming-hints/pure-functions-dbefce363946s))
  - mogą być parametryzowane (przez argumenty w konstruktorze)
  - jeśli to możliwe, powinny wykorzystywać kontruktor `const`
- **Przykład**:

```dart
class WelcomeText extends StatelessWidget {
  final String userName;

  const WelcomeText({super.key, required this.userName});

  @override
  Widget build(BuildContext context) {
    return Text('Witaj $userName', style: TextStyle(fontSize: 24));
  }
}
```

### StatefulWidget

- **Definicja**: To dynamiczne widgety, które mogą przechowywać i aktualizować swój stan. Jest to podstawowy, wbudowany do Fluttera sposób na zarządzanie stanem.
- **Zastosowanie**: Używane są tam, gdzie interfejs musi reagować na zmiany, na przykład przy licznikach lub rozwijanych zakładkach.
- **Przykład**:

```dart
class MyCounter extends StatefulWidget {
  const MyCounter();

  @override
  State<MyCounter> createState() => _MyCounterState();
}

class _MyCounterState extends State<MyCounter> {
  int count = 0;

  void increment() {
    setState(() {
      count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Licznik: $count'),
        ElevatedButton(
          onPressed: increment,
          child: Text('Dodaj'),
        ),
      ],
    );
  }
}
```

## Bogata biblioteka widgetów

Flutter dysponuje szeroką gamą wbudowanych widgetów, które ułatwiają tworzenie zarówno prostych, jak i bardziej zaawansowanych interfejsów:

- **Podstawowe widgety**: takie jak `Text`, `Row`, `Column`, `Stack`, `Container`, które służą do wyświetlania treści i organizowania układu.
- **Widgety Material Design**: na przykład `AppBar`, `FloatingActionButton`, `Card`, które są zgodne z wytycznymi Material Design.
- **Widgety Cupertino**: stworzone z myślą o aplikacjach w stylu iOS, takie jak `CupertinoButton` czy `CupertinoSlider`.

Warto również wspomnieć, że społeczność Fluttera stworzyła wiele paczek dostępnych na platformie [pub.dev](https://pub.dev/), które dodatkowo rozszerzają możliwości frameworka i często oferują gotowe widgety, również w innych stylach (np. [FluentUI w stylu Windowsa](https://pub.dev/packages/fluent_ui) lub [oficjalna paczka z Yaru od twórców Ubuntu](https://pub.dev/packages/yaru)).

:::note
Wszystkie wbudowane widgety znajdziesz [w dokumentacji](https://docs.flutter.dev/ui/widgets). Jest też oficjalna seria _Widget of the week_ na YouTube, gdzie co tydzień jest omawiany jeden widget (a jest ich bardzo dużo). Naprawdę warto je od czasu do czasu przejrzeć, bo może się okazać, że dla wielu przypadków mamy już gotowy widget we Flutterze.
:::

## Builder Methods Anti-pattern

Częstym błędem w kodzie Flutterowym jest tworzenie metod budujących widgety (tzw. builder methods) wewnątrz klas widgetów. Przykład antywzorca:

```dart
class MyWidget extends StatelessWidget {
  Widget _buildHeader() {  // ❌ Antywzorzec
    return Container(
      child: Text('Nagłówek'),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        _buildHeader(),
        // ... inne widgety
      ],
    );
  }
}
```

### Dlaczego to jest problem

1. **Naruszenie zasady pojedynczej odpowiedzialności** - klasa widgetu powinna być odpowiedzialna tylko za swój własny build
2. **Trudność w testowaniu** - metody prywatne są trudniejsze do testowania
3. **Nadmiarowe przebudowy** - każda taka metoda jest wywoływana przy każdym przebudowaniu widgetu (to jest podstawowy problem). Odbieramy Frameworkowi możliwość zdecydowania o tym, kiedy widget powinien być przebudowany, a kiedy nie. Odbieramy sobie też szansę skorzystania z przedrostka `const`, który korzystnie wpływa na performance.

### Lepszym rozwiązaniem jest

Lepszym rozwiązaniem jest **wydzielenie do osobnych widgetów** - jeśli fragment UI jest na tyle złożony, że wymaga osobnej metody, powinien być osobnym widgetem.

Przykład poprawnego podejścia:

```dart
class Header extends StatelessWidget {  // ✅ Wydzielony widget
  const Header({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Nagłówek'),
    );
  }
}

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Header(),  // ✅ Użycie wydzielonego widgetu
        // ... inne widgety
      ],
    );
  }
}
```

### Podsumowanie

Podsumowując, o ile **builder methods** są minimalnie krótsze w zapisie, niekorzystnie wpływają na performance i są uznawane w naszym kole za **antypattern** (mimo że można znaleść w internecie wiele przykładów z nimi, nawet czasem w oficjalnych docsach).

---
title: Everything's a widget!
description: Podstawy budowania interfejsu we Flutterze
---

## Wszystko jest widgetem?!?

Flutter opiera się na koncepcji **widgetów**, które są kluczowymi elementami konstrukcyjnymi interfejsu użytkownika. Motto Flutterowców to [_Everything's a widget_](https://stackoverflow.com/questions/61415249/what-is-the-meaning-of-every-thing-is-a-widget-in-flutter) - jest to pewne uproszczenie, ale co do zasady (prawie) każdy element budujący interfejs we Flutterze jest widgetem, które można (prawie) dowolnie łączyć i z mniejszych klocków składać bardziej skomplikowane widoki.

Są dwa podstawowe rodzaje widgetów w podstawie Fluttera:

### StatelessWidget

- **Definicja**: Są to widgety, które nie posiadają stanu, czyli ich wygląd zależy co najwyżej od podanych mu argumentów (wyjątkiem jest zależność od jakiegoś InheritedWidget/Model np. `Theme.of(context)` lub `MediaQuery.of(context`)
- **Zastosowanie**: Idealnie sprawdzają się w przypadku elementów UI, które nie wymagają dynamicznych aktualizacji, na przykład wyświetlania stałych danych.
- **Dodatkowe uwagi**:
  - Nie powinny posiadać mutowalnych pól.
  - Nie powinny mieć żadnych skutków ubocznych (metoda `build` powinna być [deklaratywną czystą funkcją](https://medium.com/programming-hints/pure-functions-dbefce363946s)).
  - Mogą być parametryzowane (przez argumenty w konstruktorze).
  - Jeśli to możliwe, powinny wykorzystywać kontruktor `const`.
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

- **Definicja**: Są to dynamiczne widgety, które mogą przechowywać i aktualizować swój stan. Jest to podstawowy, wbudowany do Fluttera sposób na zarządzanie stanem.
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

- **Podstawowe widgety**: Takie jak `Text`, `Row`, `Column`, `Stack`, `Container`, które służą do wyświetlania treści i organizowania układu.
- **Widgety Material Design**: Na przykład `AppBar`, `FloatingActionButton`, `Card`, które są zgodne z wytycznymi Material Design.
- **Widgety Cupertino**: Stworzone z myślą o aplikacjach w stylu iOS, takie jak `CupertinoButton` czy `CupertinoSlider`.

Warto również wspomnieć, że społeczność Fluttera stworzyła wiele paczek dostępnych na platformie [pub.dev](https://pub.dev/), które dodatkowo rozszerzają możliwości frameworka i często oferują gotowe widgety, również w innych stylach (np. [FluentUI w stylu Windowsa](https://pub.dev/packages/fluent_ui) lub [oficjalna paczka z Yaru od twórców Ubuntu](https://pub.dev/packages/yaru)).

:::note
Wszystkie wbudowane widgety znajdziesz [w dokumentacji](https://docs.flutter.dev/ui/widgets). Jest też oficjalna seria [_Widget of the week_](https://youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG&si=b3LTNaBr1jghoCiM) na YouTube, gdzie co tydzień jest omawiany jeden widget (a jest ich bardzo dużo). Naprawdę warto je od czasu do czasu przejrzeć, bo może się okazać, że dla wielu przypadków mamy już gotowy widget we Flutterze.
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

### Dlaczego to jest problem?

1. **Naruszenie zasady pojedynczej odpowiedzialności** - klasa widgetu powinna być odpowiedzialna tylko za swój własny build.
2. **Trudność w testowaniu** - metody prywatne są trudniejsze do testowania.
3. **Nadmiarowe przebudowy** - każda taka metoda jest wywoływana przy każdym przebudowaniu widgetu (to jest podstawowy problem). Odbieramy frameworkowi możliwość zdecydowania o tym, kiedy widget powinien być przebudowany, a kiedy nie. Odbieramy sobie też szansę skorzystania z przedrostka `const`, który korzystnie wpływa na performance.

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

Podsumowując, o ile **builder methods** są minimalnie krótsze w zapisie, niekorzystnie wpływają na performance i są uznawane w naszym kole za **antypattern** (mimo, że w internecie można znaleźć z nimi wiele przykładów, czasem nawet w oficjalnych docsach).

## Kilka dodatkowych zasad lub porad

### 1. Responsywność i Adaptacja

- **MediaQuery**: Używaj `MediaQuery` do dostosowywania rozmiarów i układów do różnych rozmiarów ekranu, orientacji lub systemowych paddingów. (Zobacz też `SafeArea`).
- **LayoutBuilder**: Używaj `LayoutBuilder` do tworzenia responsywnych layoutów bazujących na dostępnej przestrzeni.
- **Flexible i Expanded**: Wykorzystuj te widgety w `Row` i `Column` do elastycznego rozkładania przestrzeni.
- **AspectRatio**: Używaj do zachowania proporcji elementów.
- **SingleChildScrollView** - Widget ten jest przydatny, gdy na stronie znajduje się pole tekstowe. Owijając nim główny widok, umożliwiasz przewijanie zawartości ekranu w sytuacji, gdy klawiatura wysuwa się i zajmuje część przestrzeni wyświetlacza. Dzięki temu użytkownik zachowuje dostęp do wszystkich elementów interfejsu, nawet gdy klawiatura jest aktywna.
- i wiele wiele innych...

### 2. Hierarchia i Organizacja

- **Single Responsibility**: Każdy widget powinien mieć jedno, jasno określone zadanie.
- **Shallow Widget Tree**: Staraj się utrzymywać płytkie drzewo widgetów dla lepszej wydajności.
- **Extract Widgets**: Wydzielaj powtarzające się lub złożone części UI do osobnych widgetów.

### 3. Wydajność

- **const Constructors**: Używaj `const` konstruktorów gdzie to możliwe.
- **ListView.builder**: Używaj dla długich list zamiast zwykłego `ListView`. Inną opcją jest również `ListView.separated` lub wszystkie slivery z builder based delegatami.
- **CachedNetworkImage**: Używaj do efektywnego ładowania i cachowania obrazów.

### 4. Dostępność (Accessibility)

- **Semantics**: Dodawaj semantykę dla czytników ekranu.
- **ExcludeSemantics**: Używaj dla elementów czysto dekoracyjnych.
- **Tooltip**: Dodawaj podpowiedzi dla interaktywnych elementów.
- Dbaj o kontrasty i dostosowanie interfejsów do skalowanych czcionek.

### 5. Międzynarodowość (i18n)

- **Intl**: Używaj pakietu `intl` do formatowania dat, liczb i walut.
- **Directionality**: Obsługuj różne kierunki tekstu (LTR/RTL) :)) - dla ambitnych
- **Localizations**: Implementuj obsługę różnych języków. Obczaj np. [oficjalny sposób z docsów](https://docs.flutter.dev/ui/accessibility-and-internationalization/internationalization).

### 6. Animacje i Przejścia

Flutter oferuje wiele ciekawych widgetów, które w łatwy sposób wspierają animacje i przejścia. Kilka przykładowych:

- **AnimatedContainer**: Używaj do płynnych zmian właściwości.
- **Hero**: Implementuj płynne przejścia między ekranami.
- **AnimatedBuilder**: Używaj do kontrolowanych animacji.
- **TweenAnimationBuilder**: Używaj do animacji zdefiniowanych wartości.

I wiele, wiele innych: [w dokumentacji](https://docs.flutter.dev/ui/widgets/animation).

To tylko kilka przykładowych zasad, jeśli tylko masz pomysł na więcej, zapraszam do [kontrybucji](https://github.com/Solvro/web-solvro-docs).

## Ciekawostka - function widgets

Za pomocą generacji kodu, można pisać widgety funkcyjne, jak w Reactie, za pomocą tej biblioteki: [https://pub.dev/packages/functional_widget](https://pub.dev/packages/functional_widget).

Jest to ładniejszy zapis, ale w mojej ocenie kosztuje to nas za dużo dodatkowego czasu podczas generacji kodu, która i tak jest wyraźnie przeciążona. **Zatem w Solvro nie używamy tej paczki, a przynajmniej dopóki nie wprowadzą pełnych makr do Darta.**

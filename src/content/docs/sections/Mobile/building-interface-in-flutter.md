---
title: Everything's a widget!
description: Podstawy budowania interfejsu we Flutterze
---

## Wszystko jest widgetem?!?

Flutter opiera się na koncepcji **widgetów**, które są kluczowymi elementami konstrukcyjnymi interfejsu użytkownika. Motto Flutterowców to [_Everything's a widget_](https://stackoverflow.com/questions/61415249/what-is-the-meaning-of-every-thing-is-a-widget-in-flutter) - jest to pewne uproszczenie, ale co do zasady (prawie) każdy element budujący interfejs we Flutterze jest widgetem, które można (prawie) dowolnie łączyć i z mniejszych klocków składać bardziej skomplikowane widoki.

Są dwa podstawowe rodzaje widgetów w podstawie Fluttera:

### StatelessWidget

- **Definicja**: Są to widgety, które nie posiadają stanu, czyli ich wygląd zależy co najwyżej od podanych mu argumentów (wyjątkiem jest zależność od jakiegoś InheritedWidget/Model np. `Theme.of(context)` lub `MediaQuery.of(context)`).
- **Zastosowanie**: Idealnie sprawdzają się w przypadku elementów UI, które nie wymagają dynamicznych aktualizacji, na przykład wyświetlania stałych danych.
- **Dodatkowe uwagi**:
  - Nie powinny posiadać mutowalnych pól.
  - Nie powinny mieć żadnych skutków ubocznych (metoda `build` powinna być [deklaratywną czystą funkcją](https://medium.com/programming-hints/pure-functions-dbefce363946s)).
  - Mogą być parametryzowane (przez argumenty w konstruktorze).
  - Jeśli to możliwe, powinny wykorzystywać kontruktor `const` (patrz niżej).
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

- **Definicja**: To dynamiczne widgety, które mogą przechowywać i aktualizować swój stan. Jest to podstawowy, wbudowany do Fluttera sposób na [zarządzanie stanem](/sections/mobile/state-management/).
- **Zastosowanie**:

  - Używane są tam, gdzie interfejs musi reagować na zmiany, na przykład przy licznikach lub rozwijanych zakładkach.
  - Dostarcza tzw. lifecycle methods, które pozwalają na wywołanie efektów ubocznych i zsynchronizowanie imperatywnych elementów z deklaratywnym frameworkiem (jakim jest Flutter).

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

**Uwaga**: Sam StatelessWidget nie wystarczy nam do zbudowania aplikacji. Można jednak w pełni zastąpić StatefulWidgeta za pomocą flutter_hooks (więcej o tym [w sekcji o zarządzanie stanem](/sections/mobile/state-management/)).

### Lifecycle Methods - metody cyklu życia StatefulWidget

StatefulWidget udostępnia kilka metod, które pozwalają na reagowanie na cykl życia widgetu. Pozwala nam to na wywołanie (czasem potrzebnych) efektów ubocznych.

- **initState()**: Wywoływana tylko raz, gdy widget jest tworzony. Idealne miejsce do:
  - Inicjalizacji zmiennych stanu
  - Subskrypcji na strumienie danych
  - Inicjalizacji kontrolerów
  - Wykonania operacji asynchronicznych przy starcie
    ‎
    ‎
- **dispose()**: Wywoływana gdy widget jest usuwany z drzewa. Służy do:
  - Zapobiegania wyciekom pamięci (**ważne!**)
  - Czyszczenia zasobów
  - Anulowania subskrypcji
  - Zwalniania kontrolerów
    ‎
    ‎
- **didUpdateWidget()**: Wywoływana gdy widget jest aktualizowany z nowymi właściwościami. Przydatna do:
  - Reagowania na zmiany w konfiguracji
  - Aktualizacji stanu w zależności od nowych propsów
    ‎
    ‎
- **didChangeDependencies()**: Wywoływana gdy zależności widgetu się zmieniają (np. Theme, MediaQuery). Używana do:
  - Aktualizacji stanu bazującego na InheritedWidgets (np. Theme, MediaQuery)
  - Reagowania na inne zmiany w BuildContext
    ‎
    ‎

Przykład wykorzystania metod cyklu życia:

```dart
class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({super.key});

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  late StreamSubscription _subscription;
  late TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController();
    _subscription = someStream.listen((data) {
      // Obsługa danych ze strumienia
    });
  }

  @override
  void dispose() {
    _subscription.cancel();
    _controller.dispose();
    super.dispose();
  }

  @override
  void didUpdateWidget(MyStatefulWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Reakcja na zmiany w `widget`
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // Reakcja na zmiany w zależnościach
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

Flutter hooki pozwalają na uzyskanie podobnych efektów za pomocą krótszego syntaxu, ale nie są "natywne" dla ekosystemu Fluttera.

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

1. **KISS** - Keep It Simple, Stupid - zasada mówiąca, że kod powinien być jak najprostszy. Zamiast builder methods, lepiej jest tworzyć osobne, jasno nazwane widgety, bo widget jest naturalnym elementem budującym UI we Flutterze, a metody i funkcje w zamyśle nie mają takiego zastosowania w tym frameworku. Widget można też wydzielić do osobnych plików, a metod nie.
2. **Trudność w testowaniu** - metody prywatne są trudniejsze do testowania.
3. **Nadmiarowe przebudowy** (performance) - jest to podstawowy problem tego podejścia. Widget jako wbudowany element składowy frameworka, pozwala zdecydować Flutterowi, kiedy jakiś element UI ma być przebudowany, a kiedy nie. Używając builder methods, odbieramy mu tę kontrolę. Każda taka metoda wywoła się za każdym możliwym razem - zabieramy frameworkowi możliwość jakiekolwiek optymalizacji. Odbieramy sobie też szansę skorzystania z przedrostka `const`, który korzystnie wpływa na performance (czytaj niżej).

### Lepszym rozwiązaniem jest...

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

Podsumowując, o ile **builder methods** są minimalnie krótsze w zapisie, niekorzystnie wpływają na performance i są uznawane w naszym kole za **antypattern** (mimo że można znaleść w internecie wiele przykładów z nimi, nawet czasem w oficjalnych docsach). Wydzielanie osobnych widgetów ma same zalety (poza kilkoma dodatkowymi linijkami boilerplate'u).

## Kilka dodatkowych zasad lub porad

### 1. Responsywność i Adaptacja

- **MediaQuery**: Używaj `MediaQuery` do dostosowywania rozmiarów i układów do różnych rozmiarów ekranu, orientacji lub systemowych paddingów. (Zobacz też `SafeArea`).
- **LayoutBuilder**: Używaj `LayoutBuilder` do tworzenia responsywnych layoutów bazujących na dostępnej przestrzeni.
- **Flexible i Expanded**: Wykorzystuj te widgety w `Row` i `Column` do elastycznego rozkładania przestrzeni.
- **AspectRatio**: Używaj do zachowania proporcji elementów.
- **SingleChildScrollView**: Widget ten jest przydatny, gdy na stronie znajduje się pole tekstowe. Owijając nim główny widok, umożliwiasz przewijanie zawartości ekranu w sytuacji, gdy klawiatura wysuwa się i zajmuje część przestrzeni wyświetlacza. Dzięki temu użytkownik zachowuje dostęp do wszystkich elementów interfejsu, nawet gdy klawiatura jest aktywna.
- i wiele wiele innych...

### 2. Hierarchia i Organizacja

- **Single Responsibility**: Każdy widget powinien mieć jedno, jasno określone zadanie.
- **Shallow Widget Tree**: Staraj się utrzymywać płytkie drzewo widgetów dla lepszej wydajności i czytelności.
- **Extract Widgets**: Wydzielaj powtarzające się lub złożone części UI do osobnych widgetów (m.in. zasada KISS).

### 3. Wydajność

- **const Constructors**: Używaj `const` konstruktorów gdzie to możliwe. Konstruktor `const` tworzy widget, który jest kompilowany w czasie kompilacji i reużyty w runtime. Oznacza to, że:

  - Widget z `const` konstruktorem jest tworzony tylko raz i współdzielony między wszystkimi instancjami
  - Zmniejsza to zużycie pamięci i poprawia wydajność
  - Można użyć `const` tylko gdy wszystkie parametry konstruktora są również `const`
  - Przykład:

  ```dart
  // ✅ Dobrze - const constructor
  const MyWidget({super.key, required this.title});

  // ❌ Źle - nie można użyć const bo TextStyle nie jest const. Aplikacja nam się nie skompiluje.
  const MyWidget({super.key, required this.title, this.style = TextStyle()});
  ```

- **ListView.builder**: Używaj dla długich list zamiast zwykłego `ListView`. Inną opcją jest również `ListView.separated` lub wszystkie slivery z builder based delegatami.
- **CachedNetworkImage**: Używaj do efektywnego ładowania i cachowania obrazów.
- **Paginacja**: W przypadku bardzo dużych kolekcji danych, warto wprowadzić paginację dla list danych, aby zoptymalizować wydajność i zużycie pamięci. Rozważ użycie gotowych rozwiązań do np. infinity scrolla.

### 4. Dostępność (Accessibility)

- **Semantics**: Dodawaj semantykę dla czytników ekranu.
- **ExcludeSemantics**: Używaj dla elementów czysto dekoracyjnych.
- **Tooltip**: Dodawaj podpowiedzi dla interaktywnych elementów.
- Dbaj o kontrasty i dostosowanie interfejsów do skalowanych czcionek.

### 5. Międzynarodowość (i18n)

- **Intl**: Używaj pakietu `intl` do formatowania dat, liczb i walut.
- **Directionality**: Obsługuj różne kierunki tekstu (LTR/RTL) - dla ambitnych :)).
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

Za pomocą generacji kodu, można pisać widgety funkcyjne, jak w Reactie, za pomocą tej biblioteki: [https://pub.dev/packages/functional_widget](https://pub.dev/packages/functional_widget).

Jest to ładniejszy zapis, ale w mojej ocenie kosztuje to nas za dużo dodatkowego czasu podczas generacji kodu, która i tak jest wyraźnie przeciążona. **Zatem w Solvro nie używamy tej paczki, a przynajmniej dopóki nie wprowadzą pełnych makr do Darta.**

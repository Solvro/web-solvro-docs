## Podstawy budowania interfejsów użytkownika w Flutterze

Flutter opiera się na koncepcji **widgetów**, które są kluczowymi elementami konstrukcyjnymi interfejsu użytkownika. W rzeczywistości, wszystko w Flutterze można uznać za widget – od prostych przycisków po złożone układy. Widgety dzielimy na dwa główne typy:

### StatelessWidget

- **Definicja**: Są to widgety, które nie zmieniają swojego stanu w trakcie działania aplikacji.
- **Zastosowanie**: Idealnie sprawdzają się w przypadku elementów UI, które nie wymagają dynamicznych aktualizacji, na przykład wyświetlania stałych danych.
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

- **Definicja**: To dynamiczne widgety, które mogą przechowywać i aktualizować swój stan.
- **Zastosowanie**: Używane są tam, gdzie interfejs musi reagować na zmiany, na przykład przy licznikach lub polach tekstowych.
- **Przykład**:

```dart
class MyCounter extends StatefulWidget {
  @override
  _MyCounterState createState() => _MyCounterState();
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

Warto również wspomnieć, że społeczność Fluttera stworzyła wiele paczek dostępnych na platformie pub.dev, które dodatkowo rozszerzają możliwości frameworka.

## Tworzenie responsywnego UI

Podczas projektowania interfejsu użytkownika w Flutterze, warto kierować się kilkoma zasadami:

- **Kompozycja** – Łącz bardziej złożone interfejsy, używając prostszych widgetów.
- **Responsywność** – Stosuj widgety takie jak `Expanded` i `Flexible`, aby tworzyć elastyczne układy dostosowujące się do różnych rozmiarów ekranów.
- **Dostosowanie** – Rozszerzaj klasy `StatelessWidget` lub `StatefulWidget`, aby dopasować wygląd i funkcjonalność komponentów do swoich potrzeb.


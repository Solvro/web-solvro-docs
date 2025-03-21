## Zarządzanie Stanem

Zarządzanie stanem w Flutterze obejmuje dwa główne rodzaje stanów:

### Stan Lokalny (Ephemeral)

- **Definicja**: Stan ograniczony do jednego widgetu i zarządzany wewnątrz niego.
- **Zastosowanie**: Używany w przypadku, gdy stan dotyczy tylko jednego widgetu, np. stan przycisku.
- **Przykład**: `StatefulWidget` zarządza swoim stanem lokalnie.


### Stan Globalny

- **Definicja**: Stan współdzielony między różnymi częściami aplikacji.
- **Zastosowanie**: Używany w przypadku, gdy stan musi być dostępny w wielu miejscach aplikacji, np. logowanie użytkownika.
- **Popularne Rozwiązania**:
    - **Provider**: Prosty i wydajny sposób zarządzania stanem.
    - **Riverpod**: Nowoczesne podejście z wbudowanym wsparciem dla reaktywności.
    - **BLoC (Business Logic Component)**: Rozwiązanie oparte na strumieniach danych.
    - **GetX**, **MobX**, czy **Redux**: Alternatywy dostosowane do różnych potrzeb projektowych.


### Riverpod

**Riverpod** to zaawansowane rozwiązanie do zarządzania stanem w Flutterze, stworzone przez twórcę **Providera**. Jego główne cechy to:

- **Reaktywność**: Riverpod automatycznie propaguje zmiany stanu w aplikacji, redukując skutki uboczne.
- **Bezpieczeństwo kompilacji**: Zapewnia sprawdzanie kodu w czasie kompilacji, eliminując wyjątki w czasie wykonywania.
- **Niezależność od kontekstu**: Pozwala na dostęp do stanu bez użycia `BuildContext`, co ułatwia separację logiki.
- **Wydajność**: Optymalizuje liczbę przebudowań drzewa widgetów, co może przyczynić się do lepszej wydajności w złożonych aplikacjach.

Riverpod jest szczególnie przydatny w przypadku bardziej skomplikowanych aplikacji, gdzie jego elastyczność i zaawansowane funkcje mogą pomóc w efektywnym zarządzaniu stanem.

### Przykład Użycia Riverpoda

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';


final counterProvider = StateProvider((ref) => 0);

void main() {
  runApp(
    ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Consumer(
            builder: (context, ref, child) {
              final count = ref.watch(counterProvider);
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('Licznik: $count'),
                  ElevatedButton(
                    onPressed: () => ref.read(counterProvider.notifier).state++,
                    child: Text('Dodaj'),
                  ),
                ],
              );
            },
          ),
        ),
      ),
    );
  }
}
```

W tym przykładzie Riverpod zarządza stanem licznika, umożliwiając jego dynamiczną aktualizację w aplikacji.
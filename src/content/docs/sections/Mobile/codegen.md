---
title: Dynamiczna generacja kodu
description: Dynamiczna generacja kodu we Flutterze
---

## Dynamiczna generacja kodu

Dynamiczna generacja kodu (ang. code generation) to potężne narzędzie w ekosystemie Flutter, które pozwala na automatyczne generowanie kodu przed czasem kompilacji. Jest to szczególnie przydatne w przypadku powtarzalnych zadań, redukcji boilerplate'u i zapewnienia type safety.

### Dlaczego warto używać generacji kodu?

1. **Redukcja boilerplate'u** - eliminacja powtarzającego się kodu.
2. **Type safety** - generowany kod jest w pełni typowany.
3. **Automatyzacja** - redukcja błędów ludzkich.
4. **Wydajność** - kod generowany jest w czasie kompilacji (a nawet przed).
5. **Łatwiejsze utrzymanie** - mniej kodu do zarządzania.

### Minusy codegen'u

1. **Złożoność konfiguracji** - wymaga dodatkowego setupu i konfiguracji w projekcie.
2. **Wolniejszy build** - proces generacji kodu może wydłużyć czas kompilacji. W przypadku skomplikowanych projektów może zająć kilka minut (w szczególności jak nie jest przez nas zoptymalizowany).
3. **Debugowanie** - może być trudniejsze ze względu na generowany kod.
4. **Zależności** - wymaga dodatkowych zależności w projekcie.
5. **Krzywa uczenia** - wymaga znajomości specyficznych narzędzi i koncepcji.
6. **Overhead w małych projektach** - w małych projektach korzyści mogą nie przewyższać kosztów implementacji.

### build_runner

Podstawowe narzędzie do generacji kodu w Dart/Flutter. Pozwala na uruchamianie generatorów kodu.

```yaml
dev_dependencies:
  build_runner: "<latest_version>" # Replace with actual version
```

### Jak używać generatorów kodu

1. Dodaj odpowiednie zależności do `pubspec.yaml`.
2. Zdefiniuj klasy z adnotacjami.
3. Uruchom generator:

```bash
flutter pub run build_runner build
```

Dla ciągłego generowania podczas developmentu:

```bash
flutter pub run build_runner watch
```

### Rozwiązywanie problemów

1. **Clean build**

```bash
flutter pub run build_runner clean
flutter pub run build_runner build --delete-conflicting-outputs
```

// TODO: opisz przykłady paczek i ich uzycia wykorzystujące dynamiczną generację kodu.

## Inne zasoby

Na ten moment mogę polecić:

- [Mój artykuł z przykładami na temat dynamicznej generacji kodu](https://solvro.pwr.edu.pl/pl/blog/flutter-dart-i-dynamiczna-generacja-kodu/) - napisany na podstawie mojego talka na WiTKON 2024 o tej samej tematyce.
- [The Ultimate Guide od Code With Andrea](https://codewithandrea.com/articles/dart-flutter-code-generation/) - fire content z wieloma przykładami.

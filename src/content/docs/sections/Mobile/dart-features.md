---
title: Dart features
description: Smaczki Dart, które warto znać
---

## Mechanizmy Darta, które warto znać

Dart jest językiem wieloparadygmatowym — pozwala pisać zarówno w stylu imperatywnym, jak i funkcyjnym. Ma wiele przydatnych mechanizmów, o których łatwo zapomnieć, a które mogą ułatwić pisanie prostszego i bardziej niezawodnego kodu. Oto krótkie podsumowanie niektórych ficzerów, o których warto pamiętać.

### New Switch-Case

Dla Darta od `3.0` w górę dostępna jest nowa wersja switch-case'a, która działa jako wyrażenie i wspiera `pattern matching` oraz `guard clauses`. W dokumentacji Dart'a można znaleźć starą składnię switch'a pod nazwą [`switch statement`](https://arc.net/l/quote/ltljrcla) a nową jako [`switch expression`](https://arc.net/l/quote/ofmreksm).

#### Porównanie: switch statement

Widzimy tu ciąg imperatywnych instrukcji, który zostanie wykonany, gdy warunek opisany w `case` zostanie spełniony, np:

```dart
var command = 'OPEN';
switch (command) {
  case 'CLOSED':
    executeClosed();
  case 'PENDING':
    executePending();
  case 'APPROVED':
    executeApproved();
  case 'DENIED':
    executeDenied();
  case 'OPEN':
    executeOpen();
  default:
    executeUnknown();
}
```

Ale co jeśli w wyniku switcha chcemy po prostu przypisać konkretną wartość do danej zmiennej? Korzystając ze `switch statement`, będzie wyglądać to tak:

```dart
// Where slash, star, comma, semicolon, etc., are constant variables...
switch (charCode) {
  case slash || star || plus || minus: // Logical-or pattern
    token = operator(charCode);
  case comma || semicolon: // Logical-or pattern
    token = punctuation(charCode);
  case >= digit0 && <= digit9: // Relational and logical-and patterns
    token = number();
  default:
    throw FormatException('Invalid');
}
```

De facto, jedyne co robimy za każdym razem, to przypisujemy zmiennej wartość, możnaby więc wykonać to szybciej - z pomocą przychodzi `switch expression`.

#### Porównanie: switch expression

Tutaj zaznaczamy, że do zmiennej token zostanie przypisane cokolwiek zwróci nam _wyrażenie_ switch, które sprowadza się do:
\[dopasowanie\] => \[zwracana wartość\].

```dart
token = switch (charCode) {
  slash || star || plus || minus => operator(charCode),
  comma || semicolon => punctuation(charCode),
  >= digit0 && <= digit9 => number(),
  _ => throw FormatException('Invalid'),
};
```

Krótsze, a przede wszystkim nie wymusza konieczności ręcznego przypisywania wartości do zmiennej pod każdym `case`.

### Pattern Matching

[`Pattern matching`](https://dart.dev/language/patterns) w Darcie to potężny mechanizm, który pozwala na dopasowywanie wartości według ich struktury, typu czy zawartości. Wprowadzony w Darcie `3.0`, otwiera nowe możliwości pisania czytelnego i bezpiecznego kodu. Oprócz dopasowywania wartości wewnątrz `switch statement` i `switch expression`, pozwala też na `destructuring` - wyciągnięcie konkretnych pól/atrybutów ze złożonych struktur.

#### Zalety wykorzystywania pattern matchingu

- Czytelność - kod staje się bardziej deklaratywny i łatwiejszy do zrozumienia
- Bezpieczeństwo typów - kompilator sprawdza kompletność wzorców
- Mniej boilerplate - eliminuje potrzebę wielu if-else lub instanceof checks
- Destructuring - łatwe wyciąganie wartości z złożonych struktur danych
- Kompozycja wzorców - możliwość łączenia różnych typów wzorców

#### Wykorzystanie: Pattern matching w switch statement

`Switch statement` wykonuje różne instrukcje w zależności od dopasowanego typu danych:

```dart
switch (value) {
  case int i when i > 0:
    print('Positive number');
    break;
  case String s:
    print('This is a string: $s');
    break;
  default:
    print('Other type');
}
```

#### Wykorzystanie: Pattern matching w switch expression

`Switch expression` zwraca różne wartości w zależności od dopasowanego typu danych:

```dart
String message = switch (value) {
  int i when i > 0 => 'Positive number',
  String s => 'This is a string: $s',
  _ => 'Other type',
};
```

#### Wykorzystanie: Pattern matching w destructuringu

`Patteren matching` można wykorzystać aby wyciągnąć konkretne dane ze struktur, np z list, tupli, map:

```dart
var numList = [1, 2, 3];
// List pattern [a, b, c] destructures the three elements from numList...
var [a, b, c] = numList;
// ...and assigns them to new variables.
print(a + b + c);
```

#### Rodzaje wzorców

##### Constant patterns

Dopasowują dokładną wartość:

```dart
dartString describe(int value) => switch (value) {
  0 => 'zero',
  1 => 'one',
  42 => 'the answer',
  _ => 'some number',
};
```

##### Variable patterns

Wiążą dopasowaną wartość z nową zmienną:

```dart
dartString processValue(Object value) => switch (value) {
  int x when x > 0 => 'positive: $x',
  int x when x < 0 => 'negative: $x',
  int x => 'zero: $x',
  String s => 'text: $s',
  _ => 'unknown type',
};
```

##### Record patterns

Dopasowują rekordy według struktury:

```dart
dartString analyzePoint((int, int) point) => switch (point) {
  (0, 0) => 'origin',
  (var x, 0) => 'on x-axis at $x',
  (0, var y) => 'on y-axis at $y',
  (var x, var y) when x == y => 'diagonal at ($x, $y)',
  (var x, var y) => 'point at ($x, $y)',
};
```

##### List patterns

Dopasowują listy według zawartości:

```dart
dartString analyzeList(List<int> numbers) => switch (numbers) {
  [] => 'empty list',
  [var single] => 'single element: $single',
  [var first, var second] => 'two elements: $first, $second',
  [var first, ...var rest] => 'starts with $first, has ${rest.length} more',
};
```

##### Map patterns

Dopasowują mapy według kluczy i wartości:

```dart
dartString analyzeUser(Map<String, dynamic> user) => switch (user) {
  {'name': String name, 'age': int age} when age >= 18 => 'Adult: $name ($age)',
  {'name': String name, 'age': int age} => 'Minor: $name ($age)',
  {'name': String name} => 'Name only: $name',
  _ => 'Invalid user data',
};
```

##### Object patterns

Dopasowują obiekty według ich właściwości:

```dart
dartsealed class Shape {}
class Circle extends Shape {
  final double radius;
  Circle(this.radius);
}
class Rectangle extends Shape {
  final double width, height;
  Rectangle(this.width, this.height);
}

double calculateArea(Shape shape) => switch (shape) {
  Circle(radius: var r) => 3.14159 * r * r,
  Rectangle(width: var w, height: var h) => w * h,
};
```

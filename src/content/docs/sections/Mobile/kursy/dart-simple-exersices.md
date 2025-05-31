---
title: From NonProgrammer to Dart Developer
description: Small examples from the workshop done by Szymon.
---

## Lekcja 1 - Witaj Świecie

```dart
print("Witaj świecie!");
```

## Lekcja 2 - Zmienne

```dart
var zmienna = "Witaj świecie!";
print(zmienna);
```

## Lekcja 3 - Zmiana wartości zmiennej

```dart
var zmienna2 = "Witaj świecie!";
zmienna2 = "Cześć Solvro!!!";
print(zmienna2);
```

## Lekcja 4 - Jawna deklaracja typu przy zmiennej

```dart
String zmienna3 = "Cześć Solvro!!!";
print(zmienna3);
```

## Lekcja 5 - Podstawowe typy

```dart
int zmiennaInt = 666; // liczby całkowite
double zmiennaDouble = 4.5673547682345782; // liczby z przecinkiem
num zmiennaNum = 55.4; // int LUB double
String zmiennaString = "Ciąg znaków! Mogą tez być nawet emoji 😱😱😱";
bool zmiennaBoolean = true; // true or false
```

## Lekcja 6 - var vs final

```dart
var changeable = "Wartość początkowa";
changeable = "Nowa wartość";
print(changeable);

final unchangeable = "Tego nie można zmienić";
// unchangeable = "Próba zmiany"; // To spowoduje error
print(unchangeable);
```

## Lekcja 7 - final vs const

```dart
final now = DateTime.now(); // Wartość jest określana w czasie działania programu
print(now);

const toJestConst = "To jest stała czasu kompilacji"; // Wartość musi być znana podczas czasu kompilacji
print(toJestConst);
```

## Lekcja 8 - Standardowe wejście (stdin)

```dart
import 'dart:io';

void main() async {
  // Podstawowe wczytywanie tekstu
  stdout.write('Podaj swoje imię: ');
  String? name = stdin.readLineSync();
  print('Witaj, $name!');
}
```

## Lekcja 9 - Operatory arytmetyczne

```dart
void main() {
  // Dodawanie
  int suma = 5 + 3;  // 8
  print("Suma: $suma");

  // Odejmowanie
  int roznica = 10 - 4;  // 6
  print("Różnica: $roznica");

  // Mnożenie
  int iloczyn = 6 * 7;  // 42
  print("Iloczyn: $iloczyn");

  // Dzielenie (zwraca double)
  double iloraz = 15 / 3;  // 5.0
  print("Iloraz: $iloraz");

  // Dzielenie całkowite (zwraca int)
  int dzielenieCalkowite = 15 ~/ 3;  // 5
  print("Dzielenie całkowite: $dzielenieCalkowite");

  // Reszta z dzielenia (modulo)
  int reszta = 17 % 5;  // 2
  print("Reszta z dzielenia: $reszta");

  // Operatory inkrementacji i dekrementacji
  int liczba = 5;
  liczba++;  // inkrementacja (liczba = liczba + 1)
  print("Po inkrementacji: $liczba");  // 6

  liczba--;  // dekrementacja (liczba = liczba - 1)
  print("Po dekrementacji: $liczba");  // 5

  // Operatory skrócone
  int x = 5;
  x += 3;  // x = x + 3
  print("Po dodaniu 3: $x");  // 8

  x -= 2;  // x = x - 2
  print("Po odjęciu 2: $x");  // 6

  x *= 2;  // x = x * 2
  print("Po pomnożeniu przez 2: $x");  // 12

  x ~/= 3;  // x = x ~/ 3 (dzielenie całkowite)
  print("Po podzieleniu przez 3: $x");  // 4
}
```

## Lekcja 10 - pierwastkowanie i potęgowanie z dart:math

```dart
import 'dart:math';

void main() {
  // Potęgowanie
  final potega = pow(2, 3); // 8
  print("Potęga: $potega");

  // Pierwiastek kwadratowy
  final pierwiastek = sqrt(16); // 4.0
  print("Pierwiastek: $pierwiastek");
}
```

## Lekcja 11 - Operacje na stringach

```dart
const tekst = "  Witaj w Solvro!  ";

// Długość stringa
print(tekst.length); // 19

// Konwersja na wielkie litery
print(tekst.toUpperCase()); // "  WITAJ W SOLVRO!  "

// Konwersja na małe litery
print(tekst.toLowerCase()); // "  witaj w solvro!  "

// Usuwanie białych znaków z początku i końca
print(tekst.trim()); // "Witaj w Solvro!"

// Sprawdzanie czy string zawiera podciąg
print(tekst.contains("Solvro")); // true
print(tekst.contains("Flutter")); // false

// Zamiana podciągu
print(tekst.replaceAll("Solvro", "Flutter")); // "  Witaj w Flutter!  "

// Łączenie stringów
const imie = "Jan";
const nazwisko = "Kowalski";
final pelneImie = imie + " " + nazwisko;
print(pelneImie); // "Jan Kowalski"

// Sprawdzanie czy string zaczyna się od danego podciągu
print(tekst.startsWith("  Witaj")); // true

// Sprawdzanie czy string kończy się danym podciągu
print(tekst.endsWith("!  ")); // true

// Pobieranie podciągu
print(tekst.substring(2, 7)); // "Witaj"

// Powtarzanie stringa
print("Ha".padRight(5, "!")); // "Ha!!!"
print("Ha".padLeft(5, "!")); // "!!!Ha"


// Sprawdzanie czy string jest pusty
final pusty = "";
print(pusty.isEmpty); // true
print(pusty.isNotEmpty); // false
```

## Lekcja 12 - Interpolacja stringów

```dart
const name = "Solvro";
const number = 123;
const pi = 3.14159;

print("Witaj, $name!");
print("Numer: $number");
print("Pi: $pi");
print("Wynik dodawania 5 i 3 to ${5 + 3}"); // wyrażenie w stringu
print("Długość Twojego imienia to ${name.length}"); // właściwość w stringu
```

## Lekcja 13 - Listy

```dart
List<String> names = ["Dawid", "Marek", "Linek"];
// const names = ["Dawid", "Marek", "Linek"];
print(names[0]); // Dostęp do elementów
names.add("Szymon"); // Dodawanie elementu
names[1] = "DaWiDD"; // Podmiana elementu na indeksie
print(names);
```

## Lekcja 14 - Podstawowe operacje na listach

```dart
void main() {
  // Tworzenie listy
  List<String> owoce = ["jabłko", "gruszka"];

  // Dodawanie elementów
  owoce.add("śliwka");
  print(owoce); // [jabłko, gruszka, śliwka]

  // Dodawanie wielu elementów
  owoce.addAll(["banan", "pomarańcza"]);
  print(owoce); // [jabłko, gruszka, śliwka, banan, pomarańcza]

  // Wstawianie elementu na konkretną pozycję
  owoce.insert(1, "malina");
  print(owoce); // [jabłko, malina, gruszka, śliwka, banan, pomarańcza]

  // Usuwanie elementu
  owoce.remove("gruszka");
  print(owoce); // [jabłko, malina, śliwka, banan, pomarańcza]

  // Usuwanie elementu z konkretnej pozycji
  owoce.removeAt(0);
  print(owoce); // [malina, śliwka, banan, pomarańcza]

  // Sprawdzanie czy lista zawiera element
  print(owoce.contains("banan")); // true

  // Długość listy
  print(owoce.length); // 4

  // Czyszczenie listy
  owoce.clear();
  print(owoce); // []
}
```

## Lekcja 15 - Konwersja Stringów i List

```dart
// Podział stringa na listę
String listaZakupow = "jabłka, gruszki, śliwki";
List<String> owoce = listaZakupow.split(", ");
print(owoce); // ["jabłka", "gruszki", "śliwki"]

// Łączenie listy w string
List<String> zwierzeta = ["kot", "pies", "chomik"];
String zwierzetaString = zwierzeta.join(", ");
print(zwierzetaString); // "kot, pies, chomik"

// Można też użyć innego separatora
String zwierzetaKropka = zwierzeta.join(".");
print(zwierzetaKropka); // "kot.pies.chomik"
```

## Lekcja 16 - Mapy (Słowniki)

```dart
Map<String, int> ages = {"Dawid": 30, "Marek": 25, "Linek": 18};
print(ages["Marek"]); // Dostęp do wartości
ages["Szymon"] = 22; // Dodawanie pary klucz-wartość
ages["Linek"] = 5; // zmiana wartości
print(ages);
```

## Lekcja 17 - Podstawowe operacje na mapach

```dart
void main() {
  // Tworzenie mapy
  Map<String, int> wiek = {
    "Jan": 25,
    "Anna": 30,
  };

  // Dodawanie elementu
  wiek["Piotr"] = 28;
  print(wiek); // {Jan: 25, Anna: 30, Piotr: 28}

  // Zmiana wartości
  wiek["Jan"] = 26;
  print(wiek); // {Jan: 26, Anna: 30, Piotr: 28}

  // Usuwanie elementu
  wiek.remove("Anna");
  print(wiek); // {Jan: 26, Piotr: 28}

  // Sprawdzanie czy klucz istnieje
  print(wiek.containsKey("Jan")); // true
  print(wiek.containsKey("Anna")); // false

  // Sprawdzanie czy wartość istnieje
  print(wiek.containsValue(28)); // true

  // Pobieranie wszystkich kluczy
  print(wiek.keys); // (Jan, Piotr)

  // Pobieranie wszystkich wartości
  print(wiek.values); // (26, 28)

  // Czyszczenie mapy
  wiek.clear();
  print(wiek); // {}
}
```

## Lekcja 18 - Zbiory

```dart
// Tworzenie zbioru
Set<String> owoce = {"jabłko", "gruszka", "śliwka"};
print(owoce); // {jabłko, gruszka, śliwka}

// Dodawanie elementów
owoce.add("banan");
print(owoce); // {jabłko, gruszka, śliwka, banan}

// Próba dodania duplikatu (nie zadziała)
owoce.add("jabłko");
print(owoce); // {jabłko, gruszka, śliwka, banan}

// Usuwanie elementów
owoce.remove("gruszka");
print(owoce); // {jabłko, śliwka, banan}

// Sprawdzanie czy element istnieje
print(owoce.contains("jabłko")); // true
print(owoce.contains("gruszka")); // false

// Operacje na zbiorach
Set<String> owoce2 = {"banan", "pomarańcza", "jabłko"};

// Suma zbiorów
Set<String> wszystkieOwoce = owoce.union(owoce2);
print(wszystkieOwoce); // {jabłko, śliwka, banan, pomarańcza}

// Część wspólna
Set<String> wspolneOwoce = owoce.intersection(owoce2);
print(wspolneOwoce); // {jabłko, banan}

// Różnica zbiorów
Set<String> tylkoWOwoce = owoce.difference(owoce2);
print(tylkoWOwoce); // {śliwka}

// Konwersja listy na zbiór (usunięcie duplikatów)
List<String> listaZDuplikatami = ["a", "b", "a", "c", "b"];
Set<String> zbiorBezDuplikatow = listaZDuplikatami.toSet();
print(zbiorBezDuplikatow); // {a, b, c}
```

## Lekcja 19 - Null safety

```dart
String? nullableString; // Może być null
String nonNullableString = "Zainicjalizowano";

print(nullableString); // printuje null (jeśli nie przypisano wartości)
print(nonNullableString);

nullableString = "juzNieNull, ale typ nadal pozwala na nulla";
print(nullableString); // juz wyprintuje wartosc wyzej, ale sprawdzacz typow nadal będzie kazał nam uwazać na nulla.

// spróbuj przypisać null do nienullable zmiennej
// nonNullableString = null;
```

## Lekcja 20 - Null-aware operatory

```dart
void main() {
  // Operator ?. (null-aware access)
  String? name;
  print(name?.length); // null - bezpieczny dostęp do właściwości
  name = "Jan";
  print(name?.length); // 3

  // Operator ?? (null coalescing)
  String? surname;
  String fullName = surname ?? "Nieznane"; // Jeśli surname jest null, użyj "Nieznane"
  print(fullName); // "Nieznane"

  // Operator ??= (null-aware assignment)
  String? city;
  city ??= "Warszawa"; // Przypisz wartość tylko jeśli city jest null
  print(city); // "Warszawa"
  city ??= "Kraków"; // Nie zmieni wartości, bo city już ma wartość
  print(city); // nadal "Warszawa"

  // Operator !. (null assertion)
  String? text = "Hello";
  print(text!.length); // 5 - mówimy kompilatorowi, że jesteśmy pewni, że text nie jest null
  // Uwaga: używaj !. tylko gdy jesteś pewien, że wartość nie jest null!

  // Łączenie operatorów
  String? firstName;
  String? lastName;
  String displayName = firstName ?? lastName ?? "Anonim";
  print(displayName); // "Anonim"

  // Bezpieczne wywołanie metody
  String? message;
  message?.toUpperCase(); // null - bezpieczne wywołanie metody
  message = "hello";
  print(message?.toUpperCase()); // "HELLO"

  // Bezpieczny dostęp do indeksu
  List<String>? names;
  print(names?[0]); // null - bezpieczny dostęp do indeksu
  names = ["Jan", "Anna"];
  print(names?[0]); // "Jan"

  // Bezpieczne wywołanie funkcji
  void Function()? callback;
  callback?.call(); // null - bezpieczne wywołanie funkcji
  callback = () => print("Callback!");
  callback?.call(); // "Callback!"
}
```

## Lekcja 21 - Konwersja typów

```dart
void main() {
  // Konwersja między typami numerycznymi
  int liczbaCalkowita = 42;
  double liczbaZmiennoprzecinkowa = liczbaCalkowita.toDouble();
  print("Int na double: $liczbaZmiennoprzecinkowa"); // 42.0

  double pi = 3.14;
  int zaokraglonaPi = pi.toInt();
  print("Double na int: $zaokraglonaPi"); // 3

  // Konwersja na string
  String liczbaJakoString = liczbaCalkowita.toString();
  print("Int na String: $liczbaJakoString"); // "42"

  // Konwersja ze stringa
  String tekstLiczby = "123";
  int liczbaZeStringa = int.parse(tekstLiczby);
  print("String na int: $liczbaZeStringa"); // 123

  String tekstZmiennoprzecinkowej = "3.14";
  double liczbaZmiennoprzecinkowaZeStringa = double.parse(tekstZmiennoprzecinkowej);
  print("String na double: $liczbaZmiennoprzecinkowaZeStringa"); // 3.14

  // Bezpieczna konwersja ze stringa
  String niepoprawnyTekst = "abc";
  int? bezpiecznaLiczba = int.tryParse(niepoprawnyTekst);
  print("Bezpieczna konwersja: $bezpiecznaLiczba"); // null

  // Konwersja między typami kolekcji
  List<int> liczby = [1, 2, 3];
  List<String> liczbyJakoStringi = liczby.map((n) => n.toString()).toList();
  print("Lista int na listę String: $liczbyJakoStringi"); // ["1", "2", "3"]

  // Konwersja między typami map
  Map<String, int> mapa = {"jeden": 1, "dwa": 2};
  Map<String, String> mapaJakoStringi = mapa.map(
    (key, value) => MapEntry(key, value.toString())
  );
  print("Mapa int na mapę String: $mapaJakoStringi"); // {"jeden": "1", "dwa": "2"}

  // Konwersja między typami zbiorów
  Set<int> zbiorLiczb = {1, 2, 3};
  Set<String> zbiorStringow = zbiorLiczb.map((n) => n.toString()).toSet();
  print("Zbiór int na zbiór String: $zbiorStringow"); // {"1", "2", "3"}
}
```

## Lekcja 22 - Operatory porównania

```dart
void main() {
  int a = 5;
  int b = 10;

  // Podstawowe operatory porównania
  print(a == b);  // false - czy równe
  print(a != b);  // true - czy różne
  print(a < b);   // true - czy mniejsze
  print(a > b);   // false - czy większe
  print(a <= b);  // true - czy mniejsze lub równe
  print(a >= b);  // false - czy większe lub równe

  // Porównania z różnymi typami
  String tekst1 = "kot";
  String tekst2 = "pies";
  print(tekst1 == tekst2);  // false

  // Porównania z wartościami null
  int? liczba = null;
  print(liczba == null);  // true
}
```

## Lekcja 23 - Operatory logiczne

```dart
void main() {
  bool a = true;
  bool b = false;

  // Podstawowe operatory logiczne
  print(a && b);  // false - AND (i)
  print(a || b);  // true - OR (lub)
  print(!a);      // false - NOT (nie)

  // Przykład praktyczny
  int wiek = 20;
  bool maKartę = true;

  if (wiek >= 18 && maKartę) {
    print("Możesz wejść do klubu");
  }

  // Łączenie operatorów
  bool jestSłonecznie = true;
  bool jestCiepło = true;
  bool jestWeekend = false;

  if (jestSłonecznie && jestCiepło || jestWeekend) {
    print("Dobry dzień na spacer!");
  }
}
```

## Lekcja 24 - Instrukcje warunkowe

```dart
int age = 20;
if (age >= 18) {
  print("Dorosły");
} else {
  print("Nieletni");
}
```

## Lekcja 25 - Operator trójargumentowy

```dart
String status = age >= 18 ? "Dorosły" : "Nieletni";
print(status);
```

## Lekcja 26 - Pętla for

```dart
// Iteracja po liście
List<String> owoce = ["jabłko", "gruszka", "śliwka"];
for (String owoc in owoce) {
  print("Mam $owoc");
}

// Podstawowa pętla for (wykona się 5 razy)
for (int i = 0; i < 5; i++) {
  print("Iteracja $i");
}
```

## Lekcja 27 - Pętla while

```dart
// Podstawowa pętla while
int licznik = 0;
while (licznik < 5) {
  print("Licznik: $licznik");
  licznik++;
}

// Pętla do-while (wykona się przynajmniej raz)
int x = 0;
do {
  print("Wartość x: $x");
  x++;
} while (x < 3);

// Przykład z warunkiem
int liczba = 10;
while (liczba > 0) {
  print("Liczba: $liczba");
  liczba -= 2; // zmniejszamy o 2 w każdej iteracji
}
```

## Lekcja 28 - Break i continue

```dart
// Użycie break do przerwania pętli
for (int i = 0; i < 10; i++) {
  if (i == 5) {
    break; // przerywa pętlę gdy i osiągnie 5
  }
  print("i = $i");
}

// Użycie continue do pominięcia iteracji
for (int i = 0; i < 5; i++) {
  if (i == 2) {
    continue; // pomija iterację gdy i jest równe 2
  }
  print("i = $i");
}

// Przykład z while i break
int liczba = 0;
while (true) {
  if (liczba >= 5) {
    break;
  }
  print("Liczba: $liczba");
  liczba++;
}
```

## Lekcja 29 - Komentarze w kodzie

```dart
// To jest komentarz jednoliniowy
// Można ich używać do krótkich wyjaśnień

/*
  To jest komentarz wieloliniowy.
  Można go używać do dłuższych wyjaśnień
  lub do tymczasowego wyłączania kodu.
*/

/// To jest komentarz dokumentacyjny.
/// Używamy go do dokumentowania kodu,
/// który będzie generował dokumentację.
///
/// Możemy używać markdown w komentarzach dokumentacyjnych:
/// * Lista punktowana
/// * Kolejny punkt
///
/// Możemy też dokumentować parametry:
/// @param name Imię użytkownika
/// @return Przywitanie użytkownika
String greet(String name) {
  return "Witaj, $name!";
}

// Komentarze są też używane do wyłączania kodu:
// print("Ten kod nie zostanie wykonany");
print("Ten kod zostanie wykonany");

// Komentarze mogą być używane do wyjaśniania skomplikowanej logiki:
// Obliczamy średnią z pominięciem wartości odstających
final numbers = [1, 2, 3, 100, 4, 5];
final filteredNumbers = numbers.where((n) => n < 10);
final average = filteredNumbers.reduce((a, b) => a + b) / filteredNumbers.length;
```

## Lekcja 30 - Podstawy funkcji

```dart
// Podstawowa funkcja bez parametrów
void sayHello() {
  print("Witaj!");
}

// Funkcja z parametrem
void greetPerson(String name) {
  print("Witaj, $name!");
}

// Funkcja zwracająca wartość
int add(int a, int b) {
  return a + b;
}

// Funkcja z wieloma parametrami
String createFullName(String firstName, String lastName) {
  return "$firstName $lastName";
}

// Funkcja z wartością domyślną parametru
void greetWithTitle(String name, [String title = "Pan/Pani"]) {
  print("Witaj, $title $name!");
}

// Funkcja z opcjonalnymi parametrami nazwanymi
void printUserInfo({
  required String name,
  int? age,
  String? city,
}) {
  print("Imię: $name");
  if (age != null) print("Wiek: $age");
  if (city != null) print("Miasto: $city");
}

void main() {
  // Wywołanie funkcji bez parametrów
  sayHello();

  // Wywołanie funkcji z parametrem
  greetPerson("Jan");

  // Wywołanie funkcji zwracającej wartość
  final sum = add(5, 3);
  print("Suma: $sum");

  // Wywołanie funkcji z wieloma parametrami
  final fullName = createFullName("Jan", "Kowalski");
  print("Pełne imię: $fullName");

  // Wywołanie funkcji z wartością domyślną
  greetWithTitle("Kowalski"); // użyje domyślnego tytułu
  greetWithTitle("Kowalski", "Pan"); // użyje podanego tytułu

  // Wywołanie funkcji z opcjonalnymi parametrami nazwanymi
  printUserInfo(
    name: "Jan",
    age: 30,
    city: "Warszawa",
  );
}
```

## Lekcja 31 - Funkcje strzałkowe i funkcje wyższego rzędu

```dart
// Funkcja strzałkowa - skrócona składnia dla prostych funkcji
int multiply(int a, int b) => a * b;

// Funkcja która przyjmuje funkcję jako parametr
void repeat(int times, void Function() action) {
  for (var i = 0; i < times; i++) {
    action();
  }
}

// Funkcja zwracająca funkcję
Function multiplyBy(int factor) {
  return (int number) => number * factor;
}


void main() {
  // Użycie funkcji strzałkowej
  print(multiply(4, 5)); // 20

  // Użycie funkcji jako argumentu do funkcji
  repeat(3, () => print("Witaj!"));

  // Użycie funkcji zwracającej funkcję
  final multiplyByTwo = multiplyBy(2);
  print(multiplyByTwo(5)); // 10
}
```

## Lekcja 32 - Zaawansowane operacje na kolekcjach

```dart
void main() {
  final numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  final names = ["Anna", "Jan", "Piotr", "Maria", "Kasia"];

  // Map - transformacja elementów
  final doubled = numbers.map((n) => n * 2).toList();
  print("Podwojone liczby: $doubled");

  // Where - filtrowanie
  final evenNumbers = numbers.where((n) => n % 2 == 0).toList();
  print("Parzyste liczby: $evenNumbers");

  // Reduce - redukcja do pojedynczej wartości
  final sum = numbers.reduce((a, b) => a + b);
  print("Suma wszystkich liczb: $sum");

  // Fold - redukcja z wartością początkową
  final product = numbers.fold(1, (a, b) => a * b);
  print("Iloczyn wszystkich liczb: $product");

  // Any - sprawdzenie czy jakikolwiek element spełnia warunek
  final hasEven = numbers.any((n) => n % 2 == 0);
  print("Czy lista zawiera parzystą liczbę? $hasEven");

  // Every - sprawdzenie czy wszystkie elementy spełniają warunek
  final allPositive = numbers.every((n) => n > 0);
  print("Czy wszystkie liczby są dodatnie? $allPositive");

  // Take - pobranie określonej liczby elementów
  final firstThree = numbers.take(3).toList();
  print("Pierwsze trzy liczby: $firstThree");

  // Skip - pominięcie określonej liczby elementów
  final lastThree = numbers.skip(7).toList();
  print("Ostatnie trzy liczby: $lastThree");

  // Expand - spłaszczenie listy list
  final listOfLists = [[1, 2], [3, 4], [5, 6]];
  final flattened = listOfLists.expand((list) => list).toList();
  print("Spłaszczona lista: $flattened");

  // Sort - sortowanie
  final sortedNames = List<String>.from(names)..sort();
  print("Posortowane imiona: $sortedNames");

  // Sort z własnym porównaniem
  final sortedByLength = List<String>.from(names)
    ..sort((a, b) => a.length.compareTo(b.length));
  print("Imiona posortowane po długości: $sortedByLength");

  // Chaining - łączenie operacji
  final result = numbers
      .where((n) => n % 2 == 0) // tylko parzyste
      .map((n) => n * n) // podnieś do kwadratu
      .take(3) // weź pierwsze trzy
      .toList();
  print("Wynik łańcucha operacji: $result");

  // GroupBy - grupowanie elementów
  final words = ["kot", "pies", "krowa", "kura", "koń"];
  final groupedByLength = words.fold<Map<int, List<String>>>(
    {},
    (map, word) {
      map.putIfAbsent(word.length, () => []).add(word);
      return map;
    },
  );
  print("Słowa pogrupowane po długości: $groupedByLength");
}
```

## Lekcja 33 - Obsługa błędów

```dart
// Własny typ wyjątku
class ValidationError implements Exception {
  final String message;
  ValidationError(this.message);

  @override
  String toString() => 'ValidationError: $message';
}

// Funkcja rzucająca wyjątek
void validateAge(int age) {
  if (age < 0) {
    throw ValidationError('Wiek nie może być ujemny');
  }
  if (age > 150) {
    throw ValidationError('Wiek nie może być większy niż 150');
  }
}

// Funkcja z obsługą błędów
void processUserAge(int age) {
  try {
    validateAge(age);
    print('Wiek jest poprawny: $age');
  } on ValidationError catch (e) {
    print('Błąd walidacji: ${e.message}');
  } catch (e) {
    print('Nieoczekiwany błąd: $e');
  } finally {
    print('Wykonano walidację wieku');
  }
}

// Funkcja z rethrow
void processWithRethrow(int age) {
  try {
    validateAge(age);
  } catch (e) {
    print('Przechwycono błąd, przekazuję dalej');
    rethrow; // przekazuje błąd dalej
  }
}

void main() {
  // Przykład poprawnej walidacji
  processUserAge(25);

  // Przykład błędnej walidacji
  processUserAge(-5);

  // Przykład z rethrow
  try {
    processWithRethrow(200);
  } catch (e) {
    print('Przechwycono błąd w main: $e');
  }

  // Przykład z finally
  try {
    print('Próba wykonania operacji');
    throw Exception('Testowy błąd');
  } finally {
    print('Ten kod zawsze się wykona');
  }

  // Przykład z wieloma blokami catch
  try {
    validateAge(-10);
  } on ValidationError catch (e) {
    print('Błąd walidacji: ${e.message}');
  } on Exception catch (e) {
    print('Inny błąd: $e');
  } catch (e) {
    print('Nieoczekiwany błąd: $e');
  }
}
```

## Lekcja 34 - Podstawowe operacje na liczbach

```dart
void main() {
  // Zaokrąglanie
  double liczba = 3.7;
  print(liczba.round()); // 4
  print(liczba.floor()); // 3
  print(liczba.ceil()); // 4

  // Wartość bezwzględna
  int liczbaUjemna = -5;
  print(liczbaUjemna.abs()); // 5

  // Min i max
  print(num.min(5, 3)); // 3
  print(num.max(5, 3)); // 5

  // Sprawdzanie czy liczba jest parzysta/nieparzysta
  int liczba = 4;
  print(liczba.isEven); // true
  print(liczba.isOdd); // false

  // Konwersja między typami
  int liczbaCalkowita = 42;
  double liczbaZmiennoprzecinkowa = liczbaCalkowita.toDouble();
  print(liczbaZmiennoprzecinkowa); // 42.0
}
```

## Lekcja 35 - Podstawowe operacje na datach

```dart
void main() {
  // Aktualna data i czas
  final now = DateTime.now();
  print(now);

  // Tworzenie konkretnej daty
  final data = DateTime(2024, 3, 15);
  print(data);

  // Dodawanie czasu
  final jutro = now.add(Duration(days: 1));
  print(jutro);

  // Odejmowanie czasu
  final wczoraj = now.subtract(Duration(days: 1));
  print(wczoraj);

  // Porównywanie dat
  print(now.isBefore(jutro)); // true
  print(now.isAfter(wczoraj)); // true

  // Formatowanie daty
  print("${now.day}/${now.month}/${now.year}"); // 15/3/2024
  print("${now.hour}:${now.minute}:${now.second}"); // 14:30:45
}
```

## Lekcja 36 - Scope (Zakres zmiennych)

```dart
// Zmienne globalne
String globalVariable = "Jestem zmienną globalną";

void main() {
  // Zmienne lokalne w funkcji main
  String localVariable = "Jestem zmienną lokalną w main";
  print(localVariable); // Dostęp do zmiennej lokalnej
  print(globalVariable); // Dostęp do zmiennej globalnej

  // Blok kodu tworzy nowy scope
  {
    String blockVariable = "Jestem zmienną w bloku";
    print(blockVariable); // Dostęp do zmiennej z bloku
    print(localVariable); // Dostęp do zmiennej z zewnętrznego scope
  }
  // print(blockVariable); // Błąd! blockVariable nie jest dostępna poza blokiem

  // Przykład z funkcją
  void innerFunction() {
    String functionVariable = "Jestem zmienną w funkcji";
    print(functionVariable); // Dostęp do zmiennej funkcji
    print(localVariable); // Dostęp do zmiennej z zewnętrznego scope
    print(globalVariable); // Dostęp do zmiennej globalnej
  }

  innerFunction();
  // print(functionVariable); // Błąd! functionVariable nie jest dostępna poza funkcją

  // Przykład z pętlą
  for (int i = 0; i < 3; i++) {
    String loopVariable = "Iteracja $i";
    print(loopVariable); // Dostęp do zmiennej pętli
  }
  // print(loopVariable); // Błąd! loopVariable nie jest dostępna poza pętlą
  // print(i); // Błąd! i nie jest dostępne poza pętlą

  // Przykład z cieniem zmiennych (variable shadowing)
  String shadowedVariable = "Zewnętrzna wartość";
  {
    String shadowedVariable = "Wewnętrzna wartość";
    print(shadowedVariable); // Wypisze "Wewnętrzna wartość"
  }
  print(shadowedVariable); // Wypisze "Zewnętrzna wartość"

  // Przykład z klasą
  class Example {
    String classVariable = "Jestem zmienną klasy";

    void method() {
      String methodVariable = "Jestem zmienną metody";
      print(methodVariable); // Dostęp do zmiennej metody
      print(classVariable); // Dostęp do zmiennej klasy
      print(globalVariable); // Dostęp do zmiennej globalnej
    }
  }

  final example = Example();
  example.method();
  // print(methodVariable); // Błąd! methodVariable nie jest dostępna poza metodą
  print(example.classVariable); // Dostęp do zmiennej klasy przez instancję
}
```

## Lekcja 37 - Klasy i obiekty

```dart
// Podstawowa definicja klasy
class Person {
  // Pola klasy
  String name;
  int age;

  // Konstruktor
  Person(this.name, this.age);

  // Metoda
  void introduce() {
    print("Cześć, jestem $name i mam $age lat.");
  }
}

void main() {
  // Tworzenie obiektu
  final person = Person("Jan", 25);
  person.introduce();
}
```

## Lekcja 38 - Gettery i settery

```dart
class Rectangle {
  double _width;
  double _height;

  Rectangle(this._width, this._height);

  // Getter dla pola width
  double get width => _width;

  // Setter dla pola width
  set width(double value) {
    if (value > 0) {
      _width = value;
    } else {
      throw Exception("Szerokość musi być większa od 0");
    }
  }

  // Getter obliczający pole powierzchni
  double get area => _width * _height;
}

void main() {
  final rect = Rectangle(5, 10);
  print("Pole powierzchni: ${rect.area}");

  rect.width = 8; // użycie settera
  print("Nowa szerokość: ${rect.width}");
}
```

## Lekcja 39 - Dziedziczenie

```dart
// Klasa bazowa
class Animal {
  String name;

  Animal(this.name);

  void makeSound() {
    print("Jakiś dźwięk...");
  }
}

// Klasa dziedzicząca
class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void makeSound() {
    print("Hau! Hau!");
  }

  void wagTail() {
    print("$name merda ogonem!");
  }
}

void main() {
  final dog = Dog("Burek");
  dog.makeSound(); // "Hau! Hau!"
  dog.wagTail(); // "Burek merda ogonem!"
}
```

## Lekcja 40 - Interfejsy i abstrakcja

```dart
// Interfejs
interface class Vehicle {
  void start();
  void stop();
}

// Implementacja interfejsu
class Car implements Vehicle {
  @override
  void start() {
    print("Samochód rusza...");
  }

  @override
  void stop() {
    print("Samochód zatrzymuje się...");
  }
}

// Klasa abstrakcyjna
abstract class Shape {
  double get area;
  void draw();
}

class Circle extends Shape {
  final double radius;

  Circle(this.radius);

  @override
  double get area => 3.14 * radius * radius;

  @override
  void draw() {
    print("Rysuję koło o promieniu $radius");
  }
}

void main() {
  final car = Car();
  car.start();
  car.stop();

  final circle = Circle(5);
  print("Pole koła: ${circle.area}");
  circle.draw();
}
```

## Lekcja 41 - Mixiny

```dart
// Mixin z funkcjonalnością latania
mixin Flying {
  void fly() {
    print("Lecę wysoko!");
  }
}

// Mixin z funkcjonalnością pływania
mixin Swimming {
  void swim() {
    print("Pływam w wodzie!");
  }
}

// Klasa używająca mixinów
class Duck with Flying, Swimming {
  void quack() {
    print("Kwa kwa!");
  }
}

void main() {
  final duck = Duck();
  duck.quack();
  duck.fly();
  duck.swim();
}
```

## Lekcja 42 - Generyki

```dart
// Klasa generyczna
class Box<T> {
  T value;

  Box(this.value);

  T getValue() {
    return value;
  }
}

// Funkcja generyczna
T getFirst<T>(List<T> list) {
  return list.first;
}

void main() {
  // Użycie klasy generycznej
  final intBox = Box<int>(42);
  print(intBox.getValue()); // 42

  final stringBox = Box<String>("Hello");
  print(stringBox.getValue()); // Hello

  // Użycie funkcji generycznej
  final numbers = [1, 2, 3];
  final firstNumber = getFirst(numbers);
  print(firstNumber); // 1

  final words = ["a", "b", "c"];
  final firstWord = getFirst(words);
  print(firstWord); // a
}
```

## Lekcja 43 - Asynchroniczność - Future

```dart
// Symulacja operacji asynchronicznej
Future<String> fetchData() async {
  // Symulacja opóźnienia
  await Future.delayed(Duration(seconds: 2));
  return "Dane pobrane!";
}

// Obsługa błędów w Future
Future<String> fetchDataWithError() async {
  await Future.delayed(Duration(seconds: 1));
  throw Exception("Błąd pobierania danych!");
}

void main() async {
  print("Rozpoczynam pobieranie...");

  // Użycie await
  final result = await fetchData();
  print(result);

  // Obsługa błędów
  try {
    await fetchDataWithError();
  } catch (e) {
    print("Wystąpił błąd: $e");
  }

  // Użycie then
  fetchData().then((value) {
    print("Dane pobrane przez then: $value");
  });
}
```

## Lekcja 44 - Enums & switch statement

```dart
// Podstawowa definicja enuma
enum Direction {
  north,
  south,
  east,
  west,
}

// Enum z wartościami
enum HttpStatus {
  ok(200),
  notFound(404),
  serverError(500);

  final int code;
  const HttpStatus(this.code);
}

// Enum z metodami
enum Color {
  red,
  green,
  blue;

  String get hexCode {
    switch (this) {
      case Color.red:
        return '#FF0000';
      case Color.green:
        return '#00FF00';
      case Color.blue:
        return '#0000FF';
    }
  }
}

void main() {
  // Podstawowe użycie enuma
  Direction direction = Direction.north;
  print(direction); // Direction.north

  // Iteracja po wszystkich wartościach enuma
  for (var dir in Direction.values) {
    print(dir);
  }

  // Użycie enuma w switch
  switch (direction) {
    case Direction.north:
      print("Idziemy na północ");
      break;
    case Direction.south:
      print("Idziemy na południe");
      break;
    case Direction.east:
      print("Idziemy na wschód");
      break;
    case Direction.west:
      print("Idziemy na zachód");
      break;
  }

  // Użycie enuma z wartościami
  final status = HttpStatus.ok;
  print("Kod statusu: ${status.code}"); // 200

  // Użycie enuma z metodami
  final color = Color.red;
  print("Kod hex koloru: ${color.hexCode}"); // #FF0000

  // Porównywanie enumów
  print(Direction.north == Direction.south); // false
  print(Direction.north == Direction.north); // true

  // Konwersja stringa na enum
  final directionFromString = Direction.values.firstWhere(
    (d) => d.toString() == 'Direction.north',
    orElse: () => Direction.north,
  );
  print(directionFromString); // Direction.north
```

## Lekcja 45 - switch expression

```dart
  // Switch expressions (Dart 3.0+)
  String getDirectionName(Direction dir) => switch (dir) {
    Direction.north => 'Północ',
    Direction.south => 'Południe',
    Direction.east => 'Wschód',
    Direction.west => 'Zachód',
  };

  // Switch expression z pattern matching
  String getDirectionInfo(Direction dir) => switch (dir) {
    Direction.north || Direction.south => 'Kierunek północ-południe',
    Direction.east || Direction.west => 'Kierunek wschód-zachód',
  };

  // Switch expression z guard clauses
  String getDirectionStatus(Direction dir) => switch (dir) {
    Direction.north when DateTime.now().hour < 12 => 'Rano idziemy na północ',
    Direction.north => 'Popołudnie idziemy na północ',
    Direction.south => 'Idziemy na południe',
    _ => 'Idziemy w innym kierunku',
  };

  // Przykłady użycia switch expressions
  print(getDirectionName(Direction.north)); // Północ
  print(getDirectionInfo(Direction.east)); // Kierunek wschód-zachód
  print(getDirectionStatus(Direction.north)); // Zależne od pory dnia
}
```

## Lekcja 46 - Const Constructors

```dart
// Klasa z const konstruktorem
class Point {
  final double x;
  final double y;

  // Const konstruktor - wszystkie pola muszą być final
  const Point(this.x, this.y);
}

void main() {
  // Tworzenie instancji z const konstruktorem
  const point1 = Point(1.0, 2.0);
  const point2 = Point(1.0, 2.0);

  // Dwie const instancje z tymi samymi wartościami są identyczne
  print(point1 == point2); // true

  // Bez const tworzone są nowe instancje
  final point3 = Point(1.0, 2.0);
  final point4 = Point(1.0, 2.0);
  print(point3 == point4); // false
}
```

## Lekcja 47 - Named Constructors

```dart
class Rectangle {
  final double width;
  final double height;

  // Główny konstruktor
  Rectangle(this.width, this.height);

  // Named constructor - tworzy kwadrat
  Rectangle.square(double size) : this(size, size);

  // Named constructor - tworzy prostokąt z listy wymiarów
  Rectangle.fromList(List<double> dimensions)
      : this(dimensions[0], dimensions[1]);

  // Named constructor - tworzy prostokąt z mapy
  Rectangle.fromMap(Map<String, double> map)
      : this(map['width']!, map['height']!);

  double get area => width * height;
}

void main() {
  // Użycie głównego konstruktora
  final rect1 = Rectangle(5, 10);
  print("Pole prostokąta: ${rect1.area}");

  // Użycie named constructora dla kwadratu
  final square = Rectangle.square(5);
  print("Pole kwadratu: ${square.area}");

  // Użycie named constructora z listy
  final rect2 = Rectangle.fromList([3, 4]);
  print("Pole prostokąta z listy: ${rect2.area}");

  // Użycie named constructora z mapy
  final rect3 = Rectangle.fromMap({'width': 6, 'height': 8});
  print("Pole prostokąta z mapy: ${rect3.area}");
}
```

## Lekcja 48 - Static, Private and Public Members

```dart
class BankAccount {
  // Public members (domyślnie)
  String accountNumber;
  double balance;

  // Private members (zaczynają się od _)
  String _password;
  List<String> _transactionHistory = [];

  // Static members (należą do klasy, nie do instancji)
  static int totalAccounts = 0;
  static const double minimumBalance = 100.0;

  // Static method
  static bool isValidAccountNumber(String number) {
    return number.length == 10;
  }

  // Constructor
  BankAccount(this.accountNumber, this.balance, this._password) {
    totalAccounts++; // Zwiększamy licznik kont przy tworzeniu nowego konta
  }

  // Public method
  void deposit(double amount) {
    balance += amount;
    _addTransaction('Deposit: $amount');
  }

  // Private method
  void _addTransaction(String transaction) {
    _transactionHistory.add(transaction);
  }

  // Public method using private members
  List<String> getTransactionHistory() {
    return List.unmodifiable(_transactionHistory);
  }
}

void main() {
  // Użycie statycznych członków klasy
  print("Minimalny balans: ${BankAccount.minimumBalance}");
  print("Liczba kont przed utworzeniem: ${BankAccount.totalAccounts}");

  // Tworzenie instancji
  final account = BankAccount("1234567890", 1000.0, "secret123");
  print("Liczba kont po utworzeniu: ${BankAccount.totalAccounts}");

  // Użycie publicznych metod
  account.deposit(500.0);
  print("Nowy balans: ${account.balance}");

  // Użycie statycznej metody
  print("Czy numer konta jest poprawny: ${BankAccount.isValidAccountNumber('1234567890')}");

  // Dostęp do historii transakcji
  print("Historia transakcji: ${account.getTransactionHistory()}");

  // Próba dostępu do prywatnych członków (spowoduje błąd kompilacji)
  // print(account._password); // Błąd!
  // account._addTransaction("Test"); // Błąd!
}
```

## Lekcja 49 - toString() Method

```dart
class Person {
  final String name;
  final int age;
  final String city;

  Person(this.name, this.age, this.city);

  // Podstawowa implementacja toString()
  @override
  String toString() {
    return 'Person(name: $name, age: $age, city: $city)';
  }
}
```

## Lekcja 50 - Operator == i equals

```dart
class Person {
  final String name;
  final int age;

  Person(this.name, this.age);

  // Implementacja operatora ==
  @override
  bool operator ==(Object other) {
    // Sprawdzenie czy obiekt jest tego samego typu
    if (other is! Person) return false;

    // Porównanie pól
    return name == other.name && age == other.age;
  }

  // Implementacja hashCode (wymagana przy nadpisywaniu ==)
  @override
  int get hashCode => Object.hash(name, age);
}

void main() {
  // Przykład porównania obiektów
  final person1 = Person("Jan", 25);
  final person2 = Person("Jan", 25);
  final person3 = Person("Anna", 30);

  print(person1 == person2); // true - obiekty mają te same wartości
  print(person1 == person3); // false - obiekty mają różne wartości

  // Porównanie z null
  print(person1 == null); // false

  // Porównanie z innym typem
  print(person1 == "Jan"); // false

  // Przykład z kolekcjami
  final people = [person1, person2, person3];
  print(people.contains(person1)); // true
  print(people.contains(Person("Jan", 25))); // true - obiekt z tymi samymi wartościami

  // Przykład z mapą
  final map = {person1: "Pierwsza osoba"};
  print(map[person2]); // "Pierwsza osoba" - klucze są równe
}
```

## Lekcja 51 - Factory Constructors i parsowanie JSON

```dart
// Klasa reprezentująca użytkownika
class User {
  final String id;
  final String name;
  final String email;
  final int age;
  final List<String> roles;

  // Prywatny konstruktor
  User._({
    required this.id,
    required this.name,
    required this.email,
    required this.age,
    required this.roles,
  });

  // Factory constructor do tworzenia obiektu z JSON
  factory User.fromJson(Map<String, dynamic> json) {
    return User._(
      id: json['id'] as String,
      name: json['name'] as String,
      email: json['email'] as String,
      age: json['age'] as int,
      roles: List<String>.from(json['roles'] as List),
    );
  }

  // Metoda do konwersji obiektu na JSON
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'age': age,
      'roles': roles,
    };
  }

  // Factory constructor do tworzenia domyślnego użytkownika
  factory User.guest() {
    return User._(
      id: 'guest',
      name: 'Gość',
      email: 'guest@example.com',
      age: 0,
      roles: ['guest'],
    );
  }

  @override
  String toString() {
    return 'User(id: $id, name: $name, email: $email, age: $age, roles: $roles)';
  }
}

void main() {
  // Przykład parsowania JSON
  final jsonData = {
    'id': '123',
    'name': 'Jan Kowalski',
    'email': 'jan@example.com',
    'age': 30,
    'roles': ['user', 'editor'],
  };

  // Tworzenie obiektu z JSON
  final user = User.fromJson(jsonData);
  print('Użytkownik z JSON: $user');

  // Konwersja obiektu na JSON
  final userJson = user.toJson();
  print('JSON z obiektu: $userJson');

  // Tworzenie gościa
  final guest = User.guest();
  print('Użytkownik gość: $guest');

  // Przykład obsługi błędów przy parsowaniu
  try {
    final invalidJson = {
      'id': '123',
      'name': 'Jan Kowalski',
      // brakuje wymaganych pól
    };
    final invalidUser = User.fromJson(invalidJson);
  } catch (e) {
    print('Błąd parsowania: $e');
  }
}
```

## Lekcja 52 - Extensions

```dart
// Extension na typ String
extension StringExtension on String {
  // Metoda zwracająca liczbę słów w stringu
  int get wordCount => split(' ').length;

  // Metoda zwracająca string z pierwszą literą wielką
  String get capitalize => '${this[0].toUpperCase()}${substring(1)}';

  // Metoda zwracająca string z odwróconą kolejnością słów
  String get reverseWords => split(' ').reversed.join(' ');
}
```

## Lekcja 53 - Krotki

```dart
void main() {
  // Podstawowa krotka (tuple)
  final point = (1, 2);
  print(point); // (1, 2)
  print(point.$1); // 1 - dostęp do pierwszego elementu
  print(point.$2); // 2 - dostęp do drugiego elementu


  // Krotka z różnymi typami
  final mixed = (1, 'hello', true);
  print(mixed.$1); // 1
  print(mixed.$2); // hello
  print(mixed.$3); // true

  // Destrukturyzacja krotki
  final (x, y) = point;
  print('x: $x, y: $y'); // x: 1, y: 2


  // Użycie w funkcji
  (int, String) getPersonInfo() {
    return (25, 'Jan');
  }

  final (age2, name2) = getPersonInfo();
  print('$name2 ma $age2 lat'); // Jan ma 25 lat

  // Krotka jako parametr funkcji
  void printPoint((int, int) point) {
    print('Punkt: (${point.$1}, ${point.$2})');
  }

  printPoint((3, 4)); // Punkt: (3, 4)

  // Krotka z typami generycznymi
  (T, U) createPair<T, U>(T first, U second) {
    return (first, second);
  }

  var pair = createPair<int, String>(1, 'hello');
  print(pair); // (1, hello)

  // Krotka w kolekcji
  List<(String, int)> people = [
    ('Jan', 25),
    ('Anna', 30),
    ('Piotr', 35),
  ];

  for (final (name, age) in people) {
    print('$name ma $age lat');
  }

  // Krotka z wartościami null
  (String?, int?) nullablePair = (null, 42);
  print(nullablePair); // (null, 42)
}
```

## Lekcja 54 - Rekordy (nazwane krotki)

```dart
void main() {
  // Podstawowy rekord
  final person = (name: 'Jan', age: 25);
  print(person.name); // Jan - dostęp przez nazwę
  print(person.age); // 25 - dostęp przez nazwę
  print(person.$1); // Jan - dostęp przez indeks
  print(person.$2); // 25 - dostęp przez indeks

  // Rekord z różnymi typami
  final user = (
    id: 1,
    name: 'Anna',
    isActive: true,
    score: 95.5,
  );
  print('Użytkownik: ${user.name} (ID: ${user.id})');
  print('Status: ${user.isActive ? 'Aktywny' : 'Nieaktywny'}');
  print('Wynik: ${user.score}');

  // Destrukturyzacja rekordu
  final (name, age) = person;
  print('$name ma $age lat');

  // Rekord jako parametr funkcji
  void printUserInfo({required String name, required int age}) {
    print('$name ma $age lat');
  }

  // Przekazywanie rekordu do funkcji
  printUserInfo(name: person.name, age: person.age);

  // Rekord w kolekcji
  final List<({String name, int age})> users = [
    (name: 'Jan', age: 25),
    (name: 'Anna', age: 30),
    (name: 'Piotr', age: 35),
  ];

  for (final user in users) {
    print('${user.name} ma ${user.age} lat');
  }

  // Rekord z wartościami null
  final ({String? name, int? age}) nullableUser = (name: null, age: 42);
  print(nullableUser); // (name: null, age: 42)

  // Rekord jako zwracana wartość funkcji
  ({String name, int age}) createUser(String name, int age) {
    return (name: name, age: age);
  }

  final newUser = createUser('Maria', 28);
  print('Nowy użytkownik: ${newUser.name}, ${newUser.age} lat');

  // Rekord z typami generycznymi
  (T id, {String name}) createGenericUser<T>(T id, String name) {
    return (id, name: name);
  }

  final genericUser = createGenericUser<int>(1, 'Jan');
  print('Użytkownik generyczny: ID ${genericUser.$1}, ${genericUser.name}');

  // Porównywanie rekordów
  final user1 = (name: 'Jan', age: 25);
  final user2 = (name: 'Jan', age: 25);
  print(user1 == user2); // true - rekordy są równe, jeśli mają te same wartości

  // Rekord z zagnieżdżonym rekordem
  final address = (street: 'Kwiatowa', number: 10);
  final userWithAddress = (
    name: 'Jan',
    age: 25,
    address: address,
  );
  print('${userWithAddress.name} mieszka przy ${userWithAddress.address.street} ${userWithAddress.address.number}');
}
```

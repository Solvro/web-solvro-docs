---
title: Eventownik
---

## Eventownik – Przegląd

Eventownik to narzędzie stworzone w celu uproszczenia procesu organizacji oraz zarządzania wydarzeniami. Dzięki niemu organizatorzy mogą łatwo tworzyć, edytować oraz zarządzać eventami, a także śledzić frekwencję i interakcję uczestników.

**Important**: Umożliwiamy organizatorom pełną kontrolę nad wydarzeniami, a uczestnikom intuicyjny i sprawny sposób na rejestrację, eliminując chaos i nieefektywne metody zapisów stosowane dotychczas.

**Meaningful**: Eventownik to więcej niż tylko system rejestracji – to narzędzie ułatwiające życie studentom i organizatorom, pozwalające na skuteczne zarządzanie dużą liczbą uczestników, zintegrowane z dynamicznymi formularzami i systemem powiadomień.

**Significant**: Eventownik ma na celu podniesienie jakości życia akademickiego i organizacyjnego poprzez eliminację problematycznych aspektów zapisów. Dzięki naszej aplikacji organizatorzy mogą lepiej planować wydarzenia, a uczestnicy unikać frustracji związanej z ręcznymi zapisami i ograniczonymi miejscami.

### Interesariusze

- Zarząd KN Solvro
- Wydziałowe Rady Samorządu Studenckiego
- Samorząd Główny
- Organizatorzy wydarzeń
- Uczestnicy wydarzeń

### Kluczowe Funkcjonalności

1. Tworzenie i konfiguracja wydarzeń

- Rejestracja administratora przez Solvro Auth.
- Tworzenie nowych wydarzeń (nazwa, data, opis, lokalizacja, formularz początkowy).
- Konfiguracja atrybutów uczestnika (np. semestr, wydział, doświadczenie).

2. Formularze

- Tworzenie dowolnej liczby formularzy.
- Wybór atrybutów dostępnych w formularzu.
- Automatyczna dostępność formularzy II etapu dla zakwalifikowanych uczestników.
- Generowanie linku do formularza rejestracyjnego.

3. Maile

- Tworzenie wzorców maili z dynamicznymi znacznikami.
- Automatyczne wysyłanie maili na podstawie zmian statusu uczestnika.
- Grupowe wysyłanie maili na żądanie organizatora.

4. Zarządzanie uczestnikami

- Zarządzanie uczestnikami
- Rejestracja, edycja i usuwanie uczestników.
- Wyświetlanie listy uczestników.
- Eksport uczestników do pliku.

5. Zarządzanie miejscami

- Możliwość przypisywania lokalizacji.
- Możliwość podziału lokalizacje na pod lokacje budynki/pokoje/stoliki.

6. Strona wydarzenia
- Dostępna dla każdego z zewnatrz(rozsyłana na mediach społecznościowych).
- Zawiera harmonogram wydarzenia oraz feed informacyjny.

## Eventownik - Historia

### Kluczowe Funkcjonajlności pierwszej iteracji Eventownika 

- **Tworzenie i zarządzanie wydarzeniami** – użytkownicy mogą dodawać eventy, ustalać ich harmonogram, a także zarządzać informacjami o zapisach.
- **Zapis uczestników** – system umożliwia rejestrację uczestników na wydarzenia oraz zarządzanie listami zapisanych osób.
- **Konfiguracja stolików** – możliwość organizacji przestrzeni dla wydarzeń wymagających podziału na grupy.
- **Panel administratora** – interfejs umożliwiający organizatorom pełną kontrolę nad wydarzeniami, w tym edycję zapisów i zarządzanie dostępem.
- **Integracja z Supabase** – obsługa baz danych i autoryzacji użytkowników.
- **Restrykcje RLS (Row Level Security)** – kontrola dostępu do danych w zależności od uprawnień użytkownika.

#### **Styczeń - Kwiecień 2024**
- Identyfikacja problemów z zapisami na wydarzenia.
- I Sesja Design Thinking.
- Analiza potrzeb użytkowników.
- Spotkanie stacjonarne i wybór technologii.
- Wywiady z interesariuszami

#### **Maj - Lipiec 2024**
- Dołączenie osób z nowej rekrutacji i stacjonarne spotkanie integracyjno-wizyjne.
- 4 czerwca – Wdrożenie strony lądowania aplikacji (v0.1.0).
- 10 czerwca – Integracja z Supabase i tworzenie wydarzeń (v0.2.0).
- 9 lipca – Dodanie konfiguracji stolików z panelu admina (v0.3.0).

#### **Wrzesień 2024**
- 10 września – Wstępne demo użyte do zapisów na wyjazd w Lubawce (v1.0.0).
- 24 września – Dodanie edycji zapisanych uczestników i RLS (v1.0.1).

## Druga iteracja Eventownika (aktualna)

### Decyzja o przeniesienie backendu na dedykowany (adonis.js)

Decyzja o stworzeniu dedykowanego backendu oraz rozbudowie funkcjonalności Eventownika wynikała z rosnących potrzeb organizatorów wydarzeń oraz pozytywnego odbioru pierwszej wersji aplikacji. Po rozmowach z interesariuszami uznano, że system powinien oferować większą elastyczność, lepszą kontrolę nad procesem rejestracji oraz możliwość rozszerzenia o dodatkowe funkcjonalności.

#### **Listopad 2024**
- powstaje zespół dedykowany backendowy
- planowanie architektury
- przemodelowanie pomyslu ewentownika o rozszerzone mozliwosci

#### **Grudzień -Luty 2025**
- 
- hackhaton
- Nie udana próba wykorzystania Eventownika na letnia rekrutacje 

#### **Marzec 2025**
- Wykorzystanie 2 iteracji Eventownika na wyjazd szkoleniowy w Szklarskiej Porębie
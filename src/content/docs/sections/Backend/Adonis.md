---
title: Adonis
description: Szybki start dla tych, którzy chcą poznać Adonisa i tworzyć świetne API.
---

## Przydatne linki

- Dokumentacja Adonisa
  - <https://docs.adonisjs.com/guides/preface/introduction>
- Dokumentacja Lucid - ORM Adonisa (być może bardziej przydatny niż główna dokumentacja)
  - <https://lucid.adonisjs.com/docs/introduction>
- Krótki kurs AdonisJs6 od twórców
  - <https://adocasts.com/series/lets-learn-adonisjs-6>
- Kurs Solvro "Od zera do backend developera"
  - <https://github.com/Solvro/backend-course>

## Wstęp

Oto lista najważniejszych rzeczy, które warto w mniejszym lub większym stopniu ogarniać biorąc się za naukę korzystania z Adonisa:

- **Git i GitHub** - podstawowe narzędzia pracy każdego developera. Z zasadami korzystania stosowanymi w Solvro można zapoznać się w [Handbook GitHub](/github)
- **IDE** - środowisko do pracy z kodem. Do najpopularniejszych opcji należy Visual Studio Code i Webstorm od Jetbrains.
- **TypeScript** - jest to podstawowy język wykorzystywany przez Adonisa. Bez jego znajomości ciężko cokolwiek zrobić.
- **NodeJS** - technologia pozwalająca na uruchamianie JS poza przeglądarką. Wykorzystywana do budowania backendu. Zrozumienie działania importów i menadżera pakietów NPM jest potrzebne do sprawnego poruszania się po frameworku.

## Instalacja

Proces instalacji został szczegółowo przedstawiony [w dokumentacji adonisa](https://docs.adonisjs.com/guides/getting-started/installation).

### NodeJs

Do zainstalowania Adonisa potrzebujemy NodeJs co najmniej w wersji 20.6

```shell
node -v
# v22.0.0
```

### Tworzenie nowej aplikacji

Po wpisaniu tej komendy otworzy się nam konfigurator, dzięki któremu możemy stworzyć nowy projekt.

```shell
npm init adonisjs@latest
```

## Włączanie serwera developerskiego

Korzystając z tej komendy możemy uruchomić serwer deweloperski, który reaguje na zmiany plików i sam się odświeża.

```shell
npm run dev
```

## Konfiguracja środowiska

Projekt Adonisa posiada domyślne pliki styli dla ESLint oraz Prettier. Ważne jest, żeby skonfigurować (lub zainstalować jeżeli ktoś nie ma) te 2 wtyczki). Polecam skonfigurować je, żeby działały automatycznie na zapisie (a conajmniej przy commitowaniu). Pozwala to na utrzymanie jednego stylu kodu na przestrzeni całego projektu. Jeżeli ktoś z jakiegoś powodu bardzo nie chce robić tego w sposób automatyczny można wywołać te narzędzia ręcznie:

```shell
# Runs ESLint

npm run lint

# Run ESLint and auto-fix issues

npm run lint --fix

# Runs prettier

npm run format
```

## Deployment

[Poradnik jak zdeployować apkę Adonisową](/sections/devops/deployment/)

## Rozszerzenia

### VSC

Dokumentacja Adonisa proponuje następujące wtyczki

- **[AdonisJS](https://marketplace.visualstudio.com/items?itemName=jripouteau.adonis-vscode-extension)** - pozwala na sprawdzanie routingu aplikacji, wywoływanie komend, migracji i czytanie dokumentacji bezpośrednio w edytorze.
- **[Edge](https://marketplace.visualstudio.com/items?itemName=AdonisJS.vscode-edge)** - dodaje wsparcie podświetlania składni, autouzupełniania oraz fragmentów kodu.

### Webstorm

Po zainstalowaniu Adonisa Webstorm powinien to wykryć i zaproponować nam instalację wtyczki [Adonis](https://plugins.jetbrains.com/plugin/22932-adonis).

## Migracje

### Ogólne

Migracje służą do zmieniania struktury bazy danych. **Podczas ich pisania należy zwrócić uwagę na o żeby funcja `down()` odwracała całkowicie działanie funkcji `up()`. Niezastosowanie się do tej uwagi może nam przynieść dużo problemów przy ewentualnym niepowodzeniu migracji**

### Kolejność

Migracje wykonywane są w kolejności alfabetycznej (jeżeli nie zmienialiście nazw jest to kolejność tworzenia). Trzeba o tym pamiętać tworząc migracje, które są zależne od siebie. Najpierw tworzymy migrację od której będą zależeć inne, dopiero potem te zależne. W przypadku pomyłki najłatwiej zmienić nazwę.

### Enumy w PostgreSQL

Jeżeli korzystamy z postgresa (a tak powinno być), to deklarując enumy należy skorzystać z natywnego enuma oferowanego przez bazę danych.

```jsx
this.schema.createTable("users", (table) => {
  table.enu("account_status", ["PENDING", "ACTIVE", "SUSPENDED"], {
    useNative: true,
    enumName: "user_account_status",
    existingType: false,
  });
});
```

W takim przypadku należy zwrócić uwagę, żeby tworzyć takiego enuma tylko w jednej migracji (inaczej dostaniemy błędem po twarzy). Należy również usunąć nowo powstały typ podczas wywołania funkcji `down()`.

```jsx
this.schema.raw('DROP TYPE IF EXISTS "user_account_status"');
this.schema.dropTable("users");
```

Dokumentacja:

<https://lucid.adonisjs.com/docs/table-builder#enum--enu>

### Rollbacki na produkcji

```text
NIE ROBIĆ POD ŻADNYM POZOREM!!!
(chyba że macie pozwolenie od TL, HEAD of BACKEND i PAPIEŻA)
albo nie macie cennych danych w bazie
```

W 99% rollback kończy się utratą danych w bazie produkcyjnej. Trzeba też pamiętać, że na produkcji migracje są wywoływane tylko w przód, więc zmiana starych migracji nie wpłynie na stan bazy. Co zatem robić? Trzeba stworzyć nowy plik z migracją, w którym edytujemy dotychczasowy stan tabeli.

```bash
node ace make:migration --alter <name>
```

Dokumentacja:

<https://lucid.adonisjs.com/docs/table-builder#enum--enu>

---
title: Onboarding
description: Wszystko, co nowe fronciaki muszą wiedzieć.
sidebar:
  order: 2
---

Elo żeloo! Witamy nowego Fronciaka na pokładzie! W tym handbooku dowiesz się wszystkiego, co potrzebujesz do rozpoczecia pracy w Kole i w swoim projekcie.

Zanim zaczniemy, jak już pewnie zauważył\*ś, sekcja Frontend ma całą swoją sekcję na niniejszych docsach.

## Co najpierw?

Przede wszystkim, każdy członek Koła powinien zostać dodany na grupę na Messengerze, serwer na Discordzie i powinien dołączyć do [organizacji Solvro na Githubie](https://github.com/Solvro). Jeżeli nie ma cię na którymś z nich, odezwij się do swojego rodzica, kierownika projektu lub naszego naczelnego żelownika [Kamilka Marczaka](https://github.com/qamarq).

## GitHub

W Solvro, a w szczególności w sekcji Frontend pracujemy z kodem, więc GitHub jest najważniejszą częścią naszego workflow'u. Przede wszystkim, ustaw sobie publiczne członkostwo na naszej organizacji. Jeśli nie wiesz jak, skorzystaj z krótkiego [poradnika](https://docs.solvro.pl/github#publiczne-cz%C5%82onkostwo).

Na [stronie organizacji Solvro](https://github.com/solvro) na Githubie możesz zobaczyć wszystkie nasze projekty i związane z nimi repozytoria, więc jeśli masz ochotę, rozejrzyj się i zobacz co gotujemy albo już ugotowaliśmy.

### Nazewnictwo repozytoriów i commitów

Kładziemy duży nacisk na standaryzację i jednolite nazewnictwo repozytoriów i commitów, dlatego każdy przy nazywaniu commitu powinien się stosować do naszego schematu nazewnictwa, który jest świetnie opisany [w handbooku Githuba](/github).

## Discord

Kolejną ważną platformą, z której korzystamy w Solvro jest nasz serwer na Discordzie. Zaraz po dołączeniu do niego, pierwsze co powinien zrobić każdy nowy członek koła, to nadanie sobie roli odpowiadającej jego sekcji oraz projektowi, do którego należy. Mozna to zrobić na kanale **Kanały i role**, który powinien być na samej górze listy kanałów. Możesz tu też zaznaczyć które kanały chcesz widzieć, a które cię nie interesują i chcesz je schować dla siebie.

![Widok kanału 'Kanały i role' na Discordzie](/src/assets/onboarding/kanaly-i-role.png)

### Struktura Discorda

Serwer Solvro jest podzielony na kilka grup kanałów:

- **Solvro** - Najważniejsze wiadomości z Koła
- **Chat & Voice** - kanał #random, gdzie można napisać o wszystkim oraz kanały głosowe
- **Zajawki** - Rzeczy, które robimy po godzinach pracy, czyli hackathony, eventy, hobby, sport czy inne zajawki
- **Według sekcji** - Dedykowane kategorie dla każdej sekcji Koła - każdy orze jak może :3
- **Według projektu** - Każdy projekt ma swoje własne kanały tekstowe, w celu organizowania wszelkich dyskusji związanych tylko z danym projektem. Jeżeli na projekt składa się kilka sekcji (np. Frontend, Backend, UI/UX), każda sekcja będzie miała też swój własny kanał, żeby nie zawalać głównego kanału projektu.

Pamiętajmy też, żeby dla każdej dłuższej rozmowy tworzyć osobny wątek, żeby nie zawalać kanału. Co jak co, ale czytelny kanał to dobry kanał :)

## Środowisko

Jak ustawić swój komputer do pracy w Solvro?

### WSL

Za używanie Windowsa do programowania jest wyrzucenie z koła, każdy obowiązkowo ma używać co najmniej WSL’a, a zalecany jest dual boot do Linuxa (rekomenduje Ubuntu, bo proste).

- Tutorial dla opornych
  [https://www.youtube.com/watch?v=-atblwgc63E](https://www.youtube.com/watch?v=-atblwgc63E)

Polecane distro

- Ubuntu
  - Najpopularniejsze, najwięcej tutoriali ~ [Bartosz Gotowski](https://github.com/Rei-x)
- Manjaro
  - Nie trzeba dodawać PPA cały czas ~ [Mikołaj Bocheński](https://www.linkedin.com/in/malyvsen/)

### Edytor

Używajcie VSCode, inne edytory na własną odpowiedzialność

**OBOWIĄZKOWE** wtyczki:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - musicie go skonfigurować do formatowania przy zapisie i jako domyślny formater
  [https://www.youtube.com/watch?v=drtxWx1XojI](https://www.youtube.com/watch?v=drtxWx1XojI)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - będzie krzyczał na was jak coś źle zrobicie, tutaj wystarczy tylko kliknąć install

Polecane wtyczki:

- Tailwind CSS IntelliSense - podpowiedzi gdy piszecie klasy w tailwind, must have
- Better Comments - ładne komentarze
- Error Lens - od razu wam pokaże błędy, nie trzeba myszką najeżdżać
- Github Copilot - no chyba wiecie

## Sekcje

Pewnie czytając ten artykuł nie raz przyszła wam do głowy taka, lub podobna myśl:

> _No dobra, cały czas mówicie o tych sekcjach, jakbym wiedział(a) o co chodzi_.

Już tłumaczymy. Pomyśl o sekcjach jak o działach w przedsiębiorstwie. Każda z nich zajmuje się innym obszarem działania organizacji tak, żeby korzystać ze specjalizacji ich członków. Tylko że w naszym przypadku członkowie sekcji są porozrzucani między projektami.

Każdy członek sekcji, poza pracą w swoim projekcie musi w ciągu semestru wykonać przynajmniej jedno zadanie operacyjne przydzielone przez leadera sekcji, lub wybrane samodzielnie spośród nieprzydzielonych zadań. Wykonanie danego zadania pozwala wam utrzymać status **aktywnego członka KN Solvro**.

> _Tylko, co mi daje taki status?_

Ano, co chyba najwazniejsze, chroni was przed wyrzuceniem z koła. Poza tym pozwala wam przykładowo uczestniczyć w Walnych Zgromadzeniach i w nich głosować, czy też daje możliwość ubiegania się o wcześniejsze zapisy na zajęcia.

## Co robić jak się nie wie co robić?

**Krótka odpowiedź:** Pytaj.

**Długa odpowiedź:** Napisz na kanale swojego projektu. Przedstaw problem, na który się natknąłeś. Na pewno ktoś z twojego projektu, lub nawet z zewnątrz ci pomoże. Dużo doświadczonych kolegów starszych stażem chodzi między kanałami i patrzy, czy ktoś nie potrzebuje pomocy. Więc nie bój się pytać, bo w inny sposób się nie nauczysz ;)

## A co jeśli bym się chciał(a) douczyć czegoś, lub wymasterować React'a?

Well look no further! Nasz czołowy żelownik podrzucił nam świetny kurs Reacta - Epic React. Cały kurs możecie znaleźć na Dysku Google KN Solvro w folderze Wiedza/Frontend. Nie ważne, czy dopiero zaczynasz zabawę z Reactem, czy jesteś już doświadczonym wojownikiem, co już napisał niejedną nieskończoną pętle w useEffect'cie, na pewno coś z niego wyciągniesz i powiększysz swoją wiedzę na temat Reacta.

## Witamy nowego Fronciaka

Dotarłeś do końca tego artykułu! Po jego przeczytaniu powinieneś/powinnaś mieć już jakiekolwiek pojecie o działaniu koła. Oznacza to też, że możesz bez większych problemów rozpoczynać pracę w swoim projekcie! Baw się dobrze, słuchaj się Kamilka, bo przepadniesz i jeszcze raz witamy w sekcji Frontend!

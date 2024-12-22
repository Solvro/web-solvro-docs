---
title: Communication Channels
description: Jak korzystamy z kanałów komunikacyjnych (Discord, Messenger, GitHub)
---

## TL;DR

- **Discord**: Miejsce na dłuższe dyskusje, spotkania i uzgodnienia projektowe (np. design, architektura, decyzje techniczne).

- **Messenger**: Najlepszy do błyskawicznych spraw, krótkich pytań i ogłoszeń, gdzie liczy się szybka reakcja.

- **GitHub**: Służy do rozmów nad konkretnym kodem, wystawiania i recenzowania Pull Requestów oraz zgłaszania Issues.

## Kanały komunikacyjne

### Discord

**Cel**:

- „Twarde” sprawy techniczne: dyskusje o designie, ustalenia kodu, architektury, dokumentacji itp.
- Dłuższe wątki rozmów, które wymagają wnikliwej analizy czy uzgodnień.
- Organizowanie spotkań Weekly, spontanicznych spotkań ASAP.

**Zalecenia**:

1. **Wydzielone kanały tematyczne**: Aby uniknąć chaosu, korzystaj z kanałów na Discord zgodnie z ich przeznaczeniem (np. #backend, #mobile, #main, #<nazwa funkcjonalności> etc.).
2. **Dokumentuj ustalenia**: Po zakończeniu ważnej dyskusji, kluczowe wnioski przenieś do odpowiedniego miejsca (np. do issue na GitHub albo Google Docs). Chodzi o te wszystkie rzeczy, które mogą w jakiś sposób przydać się w przyszłości, lub wytłumaczyć podjęte decyzje.
3. **Używaj wątków**: Pamiętaj o używaniu wątków do dłuższych rozmów (threads).

### Messenger

**Cel**:

- Szybkie informacje lub ogólne ogłoszenia.
- Sytuacje wymagające błyskawicznej reakcji (ASAP).
- „Miękkie” sprawy organizacyjne (dogadywanie terminów spotkań, potwierdzenia, krótkie pytania).

**Zalecenia**:

1. **Proste pytania i szybkie decyzje**: Jeżeli potrzebujesz natychmiastowej odpowiedzi — Messenger jest najlepszy.
2. **Nie nadużywaj**: Częste powiadomienia na Messenger mogą rozpraszać. Jeśli sprawa nie jest pilna, użyj Discord.
3. **Przenieś rozmowę na Discord**: Nie bój się przenieść rozmowy prywatnej z Messenger na publiczny kanał Discord. Bardzo do tego zachęcamy - w ten sposób uzyskujesz więcej perspektyw na dany temat, a inni na bieżąco informowani są o aktualnych sprawach.
4. **Potwierdzaj kluczowe ustalenia**: Po zakończeniu rozmowy na Messenger, która ma wpływ na projekt, zapisz krótkie podsumowanie np. w notatce lub w innym, bardziej „trwałym” kanale (np. Discord/Google Docs). Możesz też odezwać się do jednego z kierowników projektu.

### GitHub (Komentarze/Pull Requesty)

**Cel**:

- Dyskusje i uwagi na temat konkretnych fragmentów kodu.
- Omawianie pull requestów i dokumentowanie zmian w kodzie.
- Zgłaszanie i rozwiązywanie issues.

**Zalecenia**:

1. **Konkretne komentarze**: Komentuj bezpośrednio w kodzie przy danym fragmencie (np. w PR), aby wiadomo było, do czego odnosisz swoją uwagę.
2. **Opisowe PR**: Twórz pull requesty z opisem kontekstu, co i dlaczego zostało zmienione oraz jak przetestować te zmiany. Screenshoty (a czasem nawet GIFy) twoich zmian są konieczne, gdy tylko są w stanie zobrazować wprowadzone zmiany.
3. **Używaj szablonów**: Jeśli repozytorium twojego projektu posiada szablony PR lub issue, wypełniaj je, aby zachować spójny format w całym zespole.

## Sugerowane dobre praktyki i dodatkowe pomysły dla kierowników

1. **Automatyczne integracje**:

   - Rozważ włączenie powiadomień z GitHuba do dedykowanego kanału na Discord. Dzięki temu zespół może na bieżąco widzieć nowe PR i dyskusje.
   - Jeśli macie system zarządzania zadaniami (np. GitHub Proejcts, Asanę, Trello, Notion, Jirę), warto ustawić integrację z Discord, by kluczowe akcje (np. zamknięcie zadania) były widoczne od razu.

2. **Porządkowanie wątków**:

   - W Messenger trudno wrócić do starych wątków. Jeśli temat wymaga dłuższych ustaleń, **przenieś** dyskusję na Discord.
   - W przypadku krytycznych decyzji dot. kodu — przechodź na GitHuba (Issues/PR), aby był łatwy dostęp do kontekstu w przyszłości.

3. **Archiwizacja**:
   - Po zakończeniu projektu lub sprintu, przejrzyjcie kanały (szczególnie na Discord i Messenger), by najważniejsze informacje trafiły do oficjalnej dokumentacji (np. Handbooka, repozytorium, lub Google Drive).

> **Notka**: Powyższy podział nie jest sztywny. Zespół może decydować o elastycznym korzystaniu z dowolnego kanału. **Jednakże**, proponowany podział jest mocno zalecany. Musi być on jednolity dla całego programu (i.e. w każdym projekcie). Najważniejsze, by ustalenia, które będą istotne w przyszłości, zawsze były odpowiednio udokumentowane i łatwe do odnalezienia.

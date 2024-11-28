---
title: FAQ
description: Poradnik w świecie web developmentu, jak zacząć i żyć?
---

## Co to Server Components i po co ich używać?

  RSC (React Server Components) to komponenty, których kodzik jest wykonywany WYŁĄCZNIE po stronie serwera i ani gram javascriptu nie idzie do przeglądarki, to są obecnie domyślne komponenty w Nextjs 13-15. Ułatwiają pobieranie danych z serwera, bo nie trzeba np. wyświetlać stanu loadingu, od razu otrzymujemy gotowe dane, możemy wykonywać zapytania do bazki od razu w kodzie komponentu co jest mega wygodne. Minus taki, że nie możecie tutaj używać żadnych hooków ani obsługiwać eventów, do tego są potrzebne Client Components.
  tl;dr;
  Kiedy używać RSC?
  Zawsze
  Kiedy używać Client Components?
  Wtedy kiedy nie możecie RSC (czyli potrzebujecie hooków itp)

  Dogłebniej opisane to jest tutaj: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns

## Jak działaja Client Components?

  Wbrew intuicji początkujących one są też wykonywane po stronie serwera (https://github.com/reactwg/server-components/discussions/4) i serwer wysyła gotowy html wraz z javascriptem, który potem jest wykonywany po stronie klienta i następuje proces hydracji, czyli React "przejmuje" html, który dostał i sam zaczyna go obsługiwać.

  Polecam bardzo opis z dokumentacji Nextjs, dobrze to opisali: https://nextjs.org/docs/app/building-your-application/rendering/client-components

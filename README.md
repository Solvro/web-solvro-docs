# Dokumentacja programistyczna Solvro

Teoretycznie powinno się tu znaleźć wszystko co powinieneś/aś wiedzieć o programowaniu u nas, w praktyce jest bardzo work in progress 😭

## FAQ

- Jak dodać nową stronę?
  1. Dodaj nowy plik .md folderze `content/docs/solvro/` np. `mario.md`
  2. W pliku `mario.md` musisz napisać tytuł i opis jako fronmatter, przykładowo:

  ```md
  ---
  title: Gaming section
  description: Oto jak w Solvro gramy w mario.
  ---

  Heeej, to jest treść strony!
  ```

## Jak odpalić?

Wymagania:

- Node.js 22.12+

1. Instalujemy dependencies

```bash
npm install
```

2. Odpalamy lokalny serwer

```bash
npm run dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

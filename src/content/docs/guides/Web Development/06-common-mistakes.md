---
title: Częste błędy
description: Poradnik w świecie web developmentu, jak zacząć i żyć?
---

## Używanie useEffect tam gdzie nie trzeba

useEffect służy do synchronizowania stanu z zewnętrznym systemem (ref. dokumentacja reacta), jeśli w useEffecie nie macie odwołania do zewnętrznego systemu (localStorage, api serwera, inne api przeglądarki) to znaczy, że go źle użyliście, przykładowy zły kod:

```jsx
function handleMuscleClick(muscle: string) {
  setSelectedMuscles((prevSelectedMuscles) => {
    if (prevSelectedMuscles.includes(muscle)) {
      return prevSelectedMuscles.filter((m) => m !== muscle);
    } else {
      return [...prevSelectedMuscles, muscle];
    }
  });
}

useEffect(() => {
  table.getColumn("targetMuscle")?.setFilterValue(selectedMuscles);
}, [selectedMuscles, table]);
```

Tutaj synchronizujemy `selectedMuscles` z filtrowana wartościa z tabelce, tabelka żyje w świecie reacta i nie jest zewnętrznym systemem i równie dobrze możemy to zrobić w ten sposób:

```jsx
function handleMuscleClick(muscle: string) {
  const newSelectedMuscles = selectedMuscles.includes(muscle)
    ? prevSelectedMuscles.filter((m) => m !== muscle)
    : [...prevSelectedMuscles, muscle];

  table.getColumn("targetMuscle")?.setFilterValue(newSelectedMuscles);
  setSelectedMuscles(newSelectedMuscles);
}
```

Teraz jest bardzo jasne, że po kliknięciu na mięsień, zostaje też zupdate’owana tabelka.

Ten przykład jeszcze nie jest taki zły, przy 1 useEffectcie dość łatwo się połapać co się dzieje, przy 11 robi się już kłopot i raz u mnie w pracy przez coś takiego padła produkcja 😭

## Nieużywanie lub nadużywanie `useMemo`

Hook `useMemo` pozwala na zapamiętanie wyniku funkcji obliczeniowej między renderami komponentu, co może pomóc w optymalizacji wydajności aplikacji. Jest używany głównie w przypadku "drogich" obliczeń (obliczenia, które swoją złożonością mają istotny wpływ na wydajność), które nie muszą być wykonywane na nowo przy każdym renderze.

Składnia:
```jsx
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
```
- **computeValue**: Funkcja zwracająca wynik obliczeń.
- **[a, b]**: useMemo ponownie obliczy wartość tylko wtedy, gdy jedna z zależności w tej tablicy się zmieni.

### Kiedy używać `useMemo`?

- Przy "kosztownych" obliczeniach, takich jak złożone przekształcenia dużych ilości danych.
- Kiedy wynik obliczeń jest wielokrotnie używany w danym renderze (np. w innych hookach).
- Przy obliczeniach, które zależą od dynamicznie zmieniających się danych.

### Kiedy nie używać `useMemo`?

- Jeśli obliczenia są szybkie i nie mają zauważalnego wpływu na wydajność.
- Gdy dodanie useMemo bardziej komplikuje kod niż przynosi korzyści.
- Gdy zależności często się zmieniają, co może prowadzić do częstych ponownych obliczeń.

:::tip
Nie należy go używać na siłę. Najpierw upewnij się, że istnieje faktyczny problem z wydajnością, zanim go zastosujesz.
:::
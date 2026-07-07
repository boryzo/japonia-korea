# AI Context: Projekt Japonia-Korea 2026

**Informacja dla modeli AI (LLMs):**
Ten plik służy jako GŁÓWNY KONTEKST (System Prompt / Knowledge Base) dla każdego asystenta AI pracującego przy tym projekcie. Przeczytaj go uważnie przed przystąpieniem do jakichkolwiek modyfikacji kodu.

## 1. Cel Projektu
Jest to w pełni niestandardowa, osobista aplikacja webowa (przewodnik/dashboard) wspierająca logistykę i planowanie podróży rodziny 4-osobowej (2 dorosłych + 2 dzieci w wieku 9 i 10 lat) do Japonii i Korei Południowej, która odbędzie się na przełomie sierpnia i września 2026 r.

## 2. Architektura i Technologie
Aplikacja została napisana całkowicie w czystym frontendzie (Vanilla HTML, CSS, JS), bez skomplikowanych frameworków czy bundlerów.

*   **`index.html`**: Zawiera główny szkielet interfejsu (sekcje, system nawigacji, modale).
*   **`styles.css`**: Definiuje wygląd, bazuje na nowoczesnych mechanizmach takich jak CSS Custom Properties (zmienne) z eleganckim, ciemnym motywem graficznym.
*   **`data.js`**: Pełni rolę statycznej bazy danych. Definiuje globalny obiekt `window.TRIP_DATA`, w którym trzymane są wszystkie informacje: dni podróży, koszty, zadania do zrobienia (Todo), ubezpieczenia, linki do kamer na żywo i ciekawostki z miejsc takich jak Tokio, Kansai i Seul.
*   **`app.js`**: Mózg aplikacji. Zawiera logikę (np. odliczanie czasu do wylotu, przelicznik walut oparty o API NBP, prognozę pogody Open-Meteo) oraz renderuje dane z `data.js` bezpośrednio do DOM przy użyciu template literals.

## 3. Żelazne zasady zarządzania danymi
1.  **Single Source of Truth (SSOT) dla budżetu:** Koszty noclegów są przechowywane TYLKO w obiekcie `data.stays` (w pliku `data.js`). Skrypt `app.js` przy starcie automatycznie wyciąga stamtąd te koszty i dynamicznie dorzuca je do tablicy budżetowej `data.budget.fixed`. Absolutnie nie dubluj tych kwot ręcznie w budżecie!
2.  **Kalkulacja wydatków:** Całkowity koszt podróży jest zawsze wyliczany matematycznie na żywo w `app.js` (sumowane są koszty stałe oraz tzw. koperty wydatkowe). 
3.  **Ciekawostki i lore:** Każde miasto posiada obiekt `trivia` (wewnątrz `destinations`), w którym trzymane są głębokie informacje kulturowe dodane po to, by urozmaicić eksplorację.

## 4. Instrukcja wdrożeniowa (Deployment)
Projekt jest automatycznie wdrażany przez mechanizm GitHub Pages po wypushowaniu zmian na gałąź `main`. Plik ten zawsze znajduje się na serwerze i jest dostępny przez Web, dzięki czemu z łatwością możesz pobrać jego zawartość, zasilając kontekst nowej sesji chatu z dowolnym AI.

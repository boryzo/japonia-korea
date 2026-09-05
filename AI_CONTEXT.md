# AI Context: Projekt Japonia-Korea 2026

**Informacja dla modeli AI (LLMs):**
Ten plik służy jako GŁÓWNY KONTEKST (System Prompt / Knowledge Base) dla każdego asystenta AI pracującego przy tym projekcie. Przeczytaj go uważnie przed przystąpieniem do jakichkolwiek modyfikacji kodu.

## 1. Cel Projektu
Jest to w pełni niestandardowa, osobista aplikacja webowa (przewodnik/dashboard) wspierająca logistykę i planowanie podróży rodziny 4-osobowej (2 dorosłych + 2 dzieci w wieku 8 i 10 lat) do Japonii i Korei Południowej, która odbędzie się na przełomie sierpnia i września 2026 r.

## 2. Architektura i Technologie
Aplikacja została napisana całkowicie w czystym frontendzie (Vanilla HTML, CSS, JS), bez skomplikowanych frameworków czy bundlerów.

*   **`index.html`**: Zawiera główny szkielet interfejsu (sekcje, system nawigacji, modale).
*   **`styles.css`**: Definiuje wygląd, bazuje na nowoczesnych mechanizmach takich jak CSS Custom Properties (zmienne) z eleganckim, ciemnym motywem graficznym.
*   **`trip-data.json`**: Jedyne źródło danych aplikacji. Zawiera plan, zadania, noclegi i centralny katalog `costs`, w którym każda cena występuje tylko raz.
*   **`app.js`**: Mózg aplikacji. Ładuje `trip-data.json`, oblicza budżet, rozwiązuje odwołania `costRef` i znaczniki `{{cost:id}}`, a następnie renderuje dane do DOM. Zawiera też odliczanie, przelicznik walut NBP i prognozę Open-Meteo.

## 3. Żelazne zasady zarządzania danymi
1.  **Single Source of Truth (SSOT) dla cen:** Każda cena jest przechowywana wyłącznie w `trip-data.json`, w obiekcie `costs`. Noclegi, dni, zadania i budżet wskazują ceny przez `costRef`, a teksty używają znaczników `{{cost:id}}`. Nigdy nie wpisuj tej samej kwoty ponownie w opisie ani w `app.js`.
2.  **Kalkulacja wydatków:** `budget.fixedRefs` i `budget.envelopeRefs` zawierają wyłącznie identyfikatory rekordów z `costs`. Całkowity koszt podróży jest zawsze wyliczany matematycznie w `app.js`; pozycje z `kind: "covered"` mieszczą się w kopertach i nie mogą być dodawane drugi raz.
3.  **Rozliczenie po podróży i prywatność:** `budget.actual` przechowuje zbiorczą kwotę wydatków na miejscu, zwroty i dojazdy po powrocie. `app.js` wylicza koszt brutto, koszt netto po zwrotach, wykorzystanie koperty 9 000 PLN oraz faktyczny koszt całej podróży. Publiczny plik nie może zawierać nazw użytych kart, wypłat, sprzedawców ani pojedynczych transakcji. `settlementPln` służy wyłącznie do rozliczenia wcześniej publicznych pozycji planu, np. Shinkansenu lub biletów.
4.  **Ciekawostki i lore:** Każde miasto posiada obiekt `trivia` (wewnątrz `destinations`), w którym trzymane są głębokie informacje kulturowe dodane po to, by urozmaicić eksplorację.

## 4. Aktualny stan planu
*   Podróż odbyła się od 20 sierpnia do 5 września 2026 r.; dashboard zawiera teraz także rozliczenie po powrocie.
*   Trasa prowadziła przez Tokio, Osakę i region Kansai oraz Seul. Przejazd Tokio–Osaka odbył się Shinkansenem, a transport regionalny obejmował WEST-QR Kansai Mini Pass.
*   Noclegi, loty, Shinkansen, Disneyland, DMZ, Kansai Mini Pass, N Seoul Tower, bagaż i pociąg powrotny są opłacone. Dwa przejazdy Uberem po powrocie w Polsce są kosztami stałymi poza kopertą 9 000 PLN.
*   Faktyczne wydatki na miejscu są publikowane wyłącznie jako jedna zbiorcza suma, bez nazw kart, wypłat i pojedynczych transakcji. Zwrot 238 PLN od dzieci jest opisany oddzielnie; duplikaty przepływów zostały usunięte przed agregacją.
*   Rezerwacja Peach zawiera jedną wspólną walizkę rejestrowaną. LOT WAW → NRT pozostaje bez bagażu rejestrowanego; jedna walizka na LO100 ICN → WAW została opłacona. Plan zakłada zakup taniej walizki w Osace jako prywatnego przedmiotu do późniejszego użycia; nie jest ona wliczona do prognozy podróży.
*   Plan zakłada trzy regionalne eSIM Japonia + Korea o ważności 30 dni. Dokładna cena i parametry oferty znajdują się wyłącznie w rekordzie `costs.esim`.
*   Wszystkie aktualne kwoty, kursy, rabaty i status wliczenia do prognozy należy odczytywać z `trip-data.json`, nie z dokumentacji Markdown.

## 5. Walidacja i uruchamianie lokalne
*   Po zmianie danych sprawdź poprawność JSON-a oraz to, czy wszystkie `costRef`, `fixedRefs`, `envelopeRefs`, listy w `budget.actual` i znaczniki `{{cost:id}}` wskazują istniejące rekordy w `costs`.
*   Aplikację uruchamiaj przez lokalny serwer HTTP, ponieważ `app.js` pobiera `trip-data.json` przez `fetch`; samo otwarcie `index.html` z dysku nie jest miarodajnym testem.
*   Przed publikacją sprawdź obliczoną prognozę, pozycje pokrywane przez koperty oraz zachowanie aplikacji przy niedostępnym API kursów lub pogody.

## 6. Instrukcja wdrożeniowa (Deployment)
Projekt jest automatycznie wdrażany przez mechanizm GitHub Pages po wypushowaniu zmian na gałąź `main`. Plik ten zawsze znajduje się na serwerze i jest dostępny przez Web, dzięki czemu z łatwością możesz pobrać jego zawartość, zasilając kontekst nowej sesji chatu z dowolnym AI.

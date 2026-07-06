(function () {
  "use strict";
  const data = window.TRIP_DATA;
  const money = new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" });
  const statusLabels = { paid: "opłacone", reserved: "rezerwacja", planned: "do kupienia", decision: "decyzja", confirmed: "potwierdzone" };
  const mapInstances = {};

  const sum = items => items.reduce((total, item) => total + item.amount, 0);
  const fixedTotal = sum(data.budget.fixed);
  const envelopeTotal = sum(data.budget.envelopes);
  const forecastTotal = fixedTotal + envelopeTotal;
  const remaining = data.meta.budgetLimit - forecastTotal;

  function renderCountdown() {
    const target = new Date(data.meta.start).getTime();
    const now = Date.now();
    const delta = Math.max(0, target - now);
    const days = Math.floor(delta / 86400000);
    const hours = Math.floor(delta / 3600000) % 24;
    const minutes = Math.floor(delta / 60000) % 60;
    const seconds = Math.floor(delta / 1000) % 60;
    document.querySelector("#countdown").innerHTML = `<div class="countdown-label"><strong>Do wylotu z Gdańska</strong><span>20.08.2026 · 18:25</span></div>${[
      [days, "dni"], [hours, "godz."], [minutes, "min"], [seconds, "sek"]
    ].map(([value, label]) => `<div class="countdown-item"><b>${String(value).padStart(2, "0")}</b><span>${label}</span></div>`).join("")}`;
  }

  function routeMarkup() {
    return `<div class="card route-card"><div class="route">${data.route.map(stop => `
      <div class="route-stop ${stop.status}">
        <span class="route-dot">${stop.code}</span><b>${stop.city}</b><small>${stop.date}</small>
        ${stop.time ? `<small style="color:var(--text-muted); display:block; margin-top:2px;">${stop.time}</small>` : ""}
        ${stop.duration ? `<small style="color:var(--accent); display:block;">${stop.duration}</small>` : ""}
      </div>`).join("")}</div></div>`;
  }

  function renderOverview() {
    const stayTotal = Object.values(data.stays).reduce((t, stay) => t + stay.price, 0);
    document.querySelector("#view-overview").innerHTML = `
      <div class="section-head"><div><span class="section-label">Plan w skrócie</span><h2>Cała podróż na jednej osi</h2><p>${data.meta.travelers} · 16 dni · 15 noclegów</p></div></div>
      <div class="grid grid-4">
        <article class="card stat-card"><span class="stat-icon">✈️</span><strong>6 etapów</strong><p>Samoloty, transport w Japonii i końcowy pociąg do Gdańska</p></article>
        <article class="card stat-card"><span class="stat-icon">🏠</span><strong>${money.format(stayTotal)}</strong><p>Wszystkie noclegi · 15 nocy</p></article>
        <article class="card stat-card"><span class="stat-icon">🎯</span><strong>${money.format(forecastTotal)}</strong><p>Aktualna prognoza całości</p></article>
        <article class="card stat-card"><span class="stat-icon">🧳</span><strong>0 PC</strong><p>Brak bagażu rejestrowanego</p></article>
      </div>
      ${routeMarkup()}
      <div class="section-head"><div><span class="section-label">3 bazy</span><h2>Gdzie jedziemy</h2></div></div>
      <div class="grid grid-3">${Object.entries(data.destinations).map(([key, city], i) => `
        <button class="card city-card" data-jump-view="${key}" style="--image:url('${city.image}')">
          <div><span class="number">0${i + 1}</span><h3>${city.name}</h3><p>${city.dates}</p></div>
        </button>`).join("")}</div>
      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Noclegi</span><h2>Nasze trzy bazy</h2></div></div>
      <div class="grid grid-3">${Object.values(data.stays).map(stay => `
        <article class="card hotel-card"><img src="${stay.image}" alt="${stay.name}" loading="lazy"><div class="hotel-card-copy"><span class="section-label">${stay.dates} · ${stay.nights} nocy</span><h3>${stay.name}</h3><p>${stay.address}</p><strong>${money.format(stay.price)}</strong><div class="hotel-links"><a href="${stay.mapUrl}" target="_blank" rel="noopener">Mapa ↗</a><a href="${stay.bookingUrl}" target="_blank" rel="noopener">Zdjęcia i rezerwacja ↗</a></div></div></article>`).join("")}</div>
      <article class="card decision-banner">
        <div class="decision-title"><span class="section-label">Otwarta decyzja</span><h3>Tokio → Osaka<br>25 sierpnia</h3><p>Obie wersje zostają w planie do czasu zakupu.</p></div>
        <div class="decision-option"><strong>✈️ Lot HND → ITM</strong><ul><li>roboczo około 833 zł za 4 osoby</li><li>więcej transferów lotniskowych</li><li>przylot blisko centrum Osaki</li></ul></div>
        <div class="decision-option"><strong>🚄 Shinkansen Nozomi</strong><ul><li>43 540 JPY za 2+2 z rezerwacją miejsc</li><li>około 1 012 zł po kursie NBP</li><li>centrum → centrum, około 2,5 godziny</li></ul></div>
      </article>
      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Powrót i ochrona</span><h2>Ważne organizacyjnie</h2></div></div>
      <div class="grid grid-2">
        <article class="card train-card"><span class="stat-icon">🚆</span><div><span class="section-label">05.09 · WAW → Gdańsk</span><h3>Cel: pociąg około 20:29/20:30</h3><p>Lądowanie z Seulu o 18:30. Bez bagażu rejestrowanego zakładamy, że dwie godziny wystarczą na przejście granicy i dojazd na dworzec. Późniejsze połączenie zostaje jako plan awaryjny.</p><small>${data.returnTrain.note}</small></div></article>
        <article class="card"><span class="section-label">Mamy</span><h3>Ubezpieczenia i Priority Pass</h3><div class="protection-list">${data.travelProtection.map(item => `<div class="protection-item"><span>${item.icon}</span><div><strong>${item.title}</strong><p>${item.detail}</p></div></div>`).join("")}</div></article>
      </div>`;
  }

  function renderDestination(key) {
    const city = data.destinations[key];
    const stay = data.stays[key];
    document.querySelector(`#view-${key}`).innerHTML = `
      <article class="destination-hero">
        <img src="${city.image}" alt="${city.name}">
        <div class="destination-copy"><span class="section-label" style="color:${city.color}">${city.kicker}</span><h2>${city.name}</h2><p>${city.intro}</p><span class="destination-meta">${city.dates}</span>
        <button class="pill history-btn" data-history="${key}" style="margin-top:12px; background:rgba(255,255,255,0.2); color:#fff; border:1px solid rgba(255,255,255,0.4); cursor:pointer">📖 Poznaj tło historyczne</button>
        </div>
      </article>
      <div class="grid grid-2">
        <article class="card stay-card stay-card-photo"><img src="${stay.image}" alt="${stay.name}" loading="lazy"><div class="stay-details"><span class="section-label">Nasza baza</span><h3>${stay.name}</h3><p>${stay.address}</p><p>Zameldowanie / wymeldowanie: ${stay.check}</p><div class="hotel-links"><a href="${stay.mapUrl}" target="_blank" rel="noopener">Otwórz mapę ↗</a><a href="${stay.bookingUrl}" target="_blank" rel="noopener">Galeria obiektu ↗</a></div></div><div class="stay-price"><strong>${money.format(stay.price)}</strong><small>${money.format(stay.price / stay.nights)} / noc</small></div></article>
        <article class="card"><span class="section-label">Założenie</span><h3>Jedna baza, zero przenoszenia walizek</h3><p>Plan jest elastyczny. Atrakcje opcjonalne można wymieniać bez zmiany noclegu.</p></article>
      </div>
      <div class="section-head" style="margin-top:48px"><div><span class="section-label">Dzień po dniu</span><h2>Plan pobytu</h2></div></div>
      <div class="timeline">${city.days.map((day, idx) => `
        <article class="day ${day.must ? "must" : ""} ${day.details ? "clickable" : ""}" data-city="${key}" data-day="${idx}" ${day.details ? 'tabindex="0" role="button" aria-label="Zobacz szczegóły dnia"' : ''}>
          <div class="day-date"><b>${day.date}</b><span>${day.day}</span></div><span class="day-dot"></span>
          <div class="day-body"><h3>${day.title}</h3><p>${day.text}</p><div class="day-tags"><span class="pill">${day.pace}</span>${day.must ? '<span class="pill must">must-do</span>' : ""}</div></div>
          <span class="day-cost">${day.cost}</span>
        </article>`).join("")}</div>
      <div class="section-head" style="margin-top:48px"><div><span class="section-label">Polecane</span><h2>Tanie i świetne restauracje</h2><p>Miejsca z najlepszym stosunkiem jakości do ceny (oceny Google 4.0+).</p></div></div>
      <div class="grid grid-2 restaurants-grid">${city.restaurants.map(rest => `
        <article class="card rest-card">
          <div class="rest-head">
            <h3><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rest.name + ' ' + (key === 'kansai' ? 'Osaka' : key === 'seoul' ? 'Seoul' : 'Tokyo'))}" target="_blank" rel="noopener" style="color: inherit; text-decoration: none; border-bottom: 1px dashed var(--accent); transition: color 0.2s;">${rest.name} ↗</a></h3>
            <span class="rest-rating">⭐ ${rest.rating} <small>(${rest.reviewCount})</small></span>
          </div>
          <span class="pill rest-type">${rest.type}</span>
          <p>${rest.desc}</p>
        </article>`).join("")}</div>
      <div class="section-head" style="margin-top:48px"><div><span class="section-label">Mapa</span><h2>Baza i miejsca</h2></div></div>
      <div class="map-wrap"><div class="map-source-badge">OpenStreetMap</div><div class="map" id="map-${key}" aria-label="Mapa OpenStreetMap miejsc: ${city.name}"></div></div><p class="map-note">Standardowa mapa OpenStreetMap. Punkt noclegu jest orientacyjny. Kliknij marker, aby zobaczyć nazwę miejsca.</p>
      <article class="card"><h3>Opcje — jeszcze nie są częścią planu</h3><div class="options-list">${city.options.map(option => `<span class="option-chip">${option}</span>`).join("")}</div></article>`;
  }

  function renderBudget() {
    const usedPercent = Math.min(100, forecastTotal / data.meta.budgetLimit * 100);
    document.querySelector("#view-budget").innerHTML = `
      <article class="card budget-hero">
        <div class="budget-summary"><span class="section-label">Limit podróży</span><h2>${money.format(data.meta.budgetLimit)}</h2><p>Prognoza obejmuje znane rezerwacje, transport między miastami oraz realny budżet na miejscu.</p><div class="budget-meter ${remaining < 0 ? "over" : ""}"><span style="width:${usedPercent}%"></span></div><div class="budget-numbers"><span>Prognoza: ${money.format(forecastTotal)}</span><span>Zapas: ${money.format(remaining)}</span></div></div>
        <div class="currency-box"><span class="section-label">Kalkulator NBP</span><h3>Przelicz JPY / KRW na PLN</h3><p>Kurs średni pobierany automatycznie. Działa też awaryjnie offline.</p><div class="converter"><div class="field"><label for="currency-amount">Kwota</label><input id="currency-amount" type="number" min="0" value="1000" inputmode="decimal"></div><span class="converter-equals">×</span><div class="field"><label for="currency-code">Waluta</label><select id="currency-code"><option value="JPY">JPY · jen</option><option value="KRW">KRW · won</option></select></div></div><div class="converted" id="converted-value">—</div><p class="rate-note" id="rate-note">Pobieram kurs NBP…</p></div>
      </article>
      <div class="grid grid-2">
        <article class="card"><span class="section-label">Koszty znane i planowane</span><h3>${money.format(fixedTotal)}</h3>${data.budget.fixed.map(item => `<div class="budget-row"><div><strong>${item.label}</strong>${item.note ? `<small>${item.note}</small>` : ""}</div><span class="amount">${money.format(item.amount)}</span><span class="status ${item.status}">${statusLabels[item.status]}</span></div>`).join("")}</article>
        <div><article class="card"><span class="section-label">Budżet na miejscu</span><h3>${money.format(envelopeTotal)}</h3>${data.budget.envelopes.map(item => `<div class="budget-row envelope"><span>${item.icon}</span><div><strong>${item.label}</strong></div><b>${money.format(item.amount)}</b></div>`).join("")}</article><article class="card" style="margin-top:18px"><h3>Jak czytać liczby?</h3><p>Rezerwacje są ostateczne. Tokio → Osaka pozostaje kwotą roboczą, a lot do Seulu ma twardy limit 1 700 zł. Prognoza zmieni się po podjęciu tych decyzji.</p></article></div>
      </div>`;
  }

  function renderPractical() {
    document.querySelector("#view-practical").innerHTML = `
      <div class="section-head"><div><span class="section-label">Pogoda na trasie</span><h2>Prognoza i warunki</h2><p>Dokładna prognoza pojawi się automatycznie, gdy termin znajdzie się w 16-dniowym oknie.</p></div></div>
      <div class="grid grid-3 weather-grid">${data.weather.map(city => `
        <article class="card weather-card" data-weather="${city.key}">
          <div class="weather-top"><span class="weather-icon">◌</span><span class="status planned">oczekiwanie</span></div>
          <h3>${city.city}</h3><p>${city.seasonal}</p><div class="forecast-days"></div><small class="weather-note">Łączenie z Open-Meteo…</small>
        </article>`).join("")}</div>

      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Na żywo</span><h2>Kamery internetowe</h2><p>Podgląd pogody, tłumów i atmosfery. Transmisje są zewnętrzne i czasem mogą być chwilowo niedostępne.</p></div></div>
      <div class="grid grid-3 webcam-grid">${data.webcams.map(cam => `
        <article class="card webcam-card"><a class="webcam-frame" href="${cam.url}" target="_blank" rel="noopener"><img src="${cam.preview}" data-live-preview="${cam.preview}" data-fallback="${cam.fallback}" referrerpolicy="no-referrer" alt="Ostatnia klatka: ${cam.title}" loading="lazy"><span class="live-badge">● PODGLĄD</span></a><div class="webcam-copy"><span class="section-label">${cam.city} · ${cam.provider}</span><h3>${cam.title}</h3><p>Ostatnia dostępna klatka; próba odświeżenia co 60 sekund.</p><div class="hotel-links"><a href="${cam.url}" target="_blank" rel="noopener">Otwórz kamerę ↗</a>${cam.secondaryUrl ? `<a href="${cam.secondaryUrl}" target="_blank" rel="noopener">Oficjalne CCTV TOPIS ↗</a>` : ""}</div></div></article>`).join("")}</div>

      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Telefon przed podróżą</span><h2>Jakie aplikacje instalujemy</h2><p>Krótka lista: najpierw niezbędne, reszta tylko zależnie od planu.</p></div></div>
      <div class="grid grid-2 apps-grid">
        <article class="card"><span class="section-label">🇯🇵 Japonia</span><h3>Aplikacje na Tokio i Kansai</h3><div class="app-list">${data.travelApps.japan.map(app => `<a class="app-item" href="${app.url}" target="_blank" rel="noopener"><span class="app-letter">${app.name[0]}</span><span><strong>${app.name}</strong><small>${app.purpose}</small></span><em class="app-priority ${app.priority}">${app.priority === "must" ? "konieczna" : app.priority === "recommended" ? "warto" : app.priority === "decision" ? "jeśli Shinkansen" : "opcjonalna"}</em></a>`).join("")}</div></article>
        <article class="card"><span class="section-label">🇰🇷 Korea</span><h3>Aplikacje na Seul</h3><div class="app-list">${data.travelApps.korea.map(app => `<a class="app-item" href="${app.url}" target="_blank" rel="noopener"><span class="app-letter">${app.name[0]}</span><span><strong>${app.name}</strong><small>${app.purpose}</small></span><em class="app-priority ${app.priority}">${app.priority === "must" ? "konieczna" : app.priority === "recommended" ? "warto" : "opcjonalna"}</em></a>`).join("")}</div></article>
      </div>

      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Zakupy i markety</span><h2>Gdzie robić zakupy z rodziną</h2><p>${data.shopping.intro}</p></div></div>
      <div class="grid grid-2">
        <article class="card">
          <span class="section-label">Prosty plan dla Was</span>
          <ul class="packing-list" style="margin-top: 15px;">
            ${data.shopping.tips.map(tip => `<li>${tip}</li>`).join("")}
          </ul>
        </article>
        <article class="card">
          <span class="section-label">Too Good To Go & Zniżki</span>
          <ul class="packing-list" style="margin-top: 15px; gap: 10px;">
            ${data.shopping.discounts.map(disc => `<li style="font-size:14px; line-height:1.4">${disc}</li>`).join("")}
          </ul>
        </article>
      </div>
      <div class="grid grid-3" style="margin-top:20px;">
        ${Object.values(data.shopping.cities).map(city => `
        <article class="card">
          <span class="section-label">${city.name}</span>
          <h3>${city.supermarkets.split(',')[0]} i inne</h3>
          <p style="margin-bottom:15px; font-size:13px; color:var(--text-muted);">${city.supermarkets}</p>
          <ul class="packing-list" style="gap:10px;">
            ${city.details.map(det => `<li style="font-size:14px; line-height:1.4">${det}</li>`).join("")}
          </ul>
        </article>`).join("")}
      </div>

      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Zwiedzanie</span><h2>Free Walking Tours</h2><p>${data.freeTours.intro}</p></div></div>
      <div class="grid grid-2">
        <article class="card">
          <span class="section-label">Japonia (Tokio) 🇯🇵</span>
          <ul class="packing-list" style="margin-top: 15px; gap: 10px;">
            ${data.freeTours.tokyo.map(tour => `<li style="font-size:14px; line-height:1.4">${tour}</li>`).join("")}
          </ul>
        </article>
        <article class="card">
          <span class="section-label">Korea Południowa (Seul) 🇰🇷</span>
          <ul class="packing-list" style="margin-top: 15px; gap: 10px;">
            ${data.freeTours.seoul.map(tour => `<li style="font-size:14px; line-height:1.4">${tour}</li>`).join("")}
          </ul>
        </article>
      </div>

      <div class="section-head" style="margin-top:50px"><div><span class="section-label">Bagaż</span><h2>Jak pakujemy 4 osoby</h2><p>${data.baggage.allowance}</p></div></div>
      <article class="card baggage-hero"><div><span class="baggage-size">55<small>×</small>40<small>×</small>20</span><span>cm · rozważany plecak</span></div><div><h3>Tak, ten rozmiar pasuje do LOT</h3><p>Oficjalny limit LOT to 55×40×23 cm i 8 kg na osobę. Plecak będzie wygodniejszy na schodach i w transporcie, ale musi trzymać kształt po zapakowaniu.</p><p class="warning-note">${data.baggage.warning}</p></div></article>
      <div class="grid grid-4 bag-grid">${data.baggage.bags.map(bag => `<article class="card bag-card"><span class="bag-icon">🎒</span><h3>${bag.name}</h3><p>${bag.load}</p><strong>${bag.target}</strong></article>`).join("")}</div>
      <div class="grid grid-2 packing-grid"><article class="card"><span class="section-label">Strategia</span><h3>${data.baggage.targetWeight}</h3><p>Pakujemy ubrania na 5–6 dni i korzystamy z prania. Cztery plecaki wypchane do 8 kg byłyby męczące przy zmianach transportu.</p></article><article class="card"><span class="section-label">Lista pakowania</span><ul class="packing-list">${data.baggage.checklist.map(item => `<li>${item}</li>`).join("")}</ul></article></div>`;
  }

  function weatherSymbol(code) {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 48) return "🌫️";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "🌨️";
    if (code <= 82) return "🌦️";
    return "⛈️";
  }

  async function initWeather() {
    const today = new Date();
    await Promise.all(data.weather.map(async city => {
      const card = document.querySelector(`[data-weather="${city.key}"]`);
      const start = new Date(`${city.stayStart}T00:00:00`);
      const daysUntil = Math.ceil((start - today) / 86400000);
      if (daysUntil > 15) {
        const available = new Date(start.getTime() - 15 * 86400000);
        card.querySelector(".weather-icon").textContent = "🌡️";
        card.querySelector(".weather-note").textContent = `Prognoza od około ${available.toLocaleDateString("pl-PL", { day: "numeric", month: "long" })}. Teraz pokazujemy typowe warunki.`;
        return;
      }
      try {
        const [lat, lon] = city.coords;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=16`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("weather unavailable");
        const result = await response.json();
        const rows = result.daily.time.map((date, i) => ({ date, code: result.daily.weather_code[i], max: result.daily.temperature_2m_max[i], min: result.daily.temperature_2m_min[i], rain: result.daily.precipitation_probability_max[i] })).filter(row => row.date >= city.stayStart && row.date <= city.stayEnd);
        if (!rows.length) throw new Error("forecast not in range");
        card.querySelector(".status").className = "status confirmed";
        card.querySelector(".status").textContent = "prognoza";
        card.querySelector(".weather-icon").textContent = weatherSymbol(rows[0].code);
        card.querySelector(".forecast-days").innerHTML = rows.slice(0, 5).map(row => `<div><span>${new Date(`${row.date}T12:00:00`).toLocaleDateString("pl-PL", { day: "2-digit", month: "2-digit" })}</span><b>${weatherSymbol(row.code)} ${Math.round(row.max)}°</b><small>${Math.round(row.min)}° · deszcz ${row.rain ?? 0}%</small></div>`).join("");
        card.querySelector(".weather-note").textContent = "Aktualizacja online: Open-Meteo. Sprawdzaj ponownie przed każdym dniem.";
      } catch (_) {
        card.querySelector(".weather-icon").textContent = "🌡️";
        card.querySelector(".weather-note").textContent = "Dokładna prognoza jeszcze niedostępna. Pokazujemy typowe warunki sezonowe.";
      }
    }));
  }

  function renderTodo() {
    const credits = data.photoCredits.map(item => `<li>${item.place}: <a href="${item.url}" target="_blank" rel="noopener">${item.author}, ${item.license}</a></li>`).join("");
    document.querySelector("#view-todo").innerHTML = `
      <div class="section-head"><div><span class="section-label">Lista działań</span><h2>Co jeszcze trzeba ogarnąć</h2><p>Stan odhaczania zapisuje się tylko w tej przeglądarce.</p></div></div>
      <div class="todo-controls"><button class="filter-button active" data-filter="all">Wszystko</button><button class="filter-button" data-filter="transport">Transport</button><button class="filter-button" data-filter="attractions">Atrakcje</button><button class="filter-button" data-filter="logistics">Logistyka</button></div>
      <div class="todo-list">${data.todos.map((item, index) => `<article class="todo-item" data-category="${item.category}" data-todo="${index}"><input class="todo-check" type="checkbox" aria-label="Oznacz jako zrobione: ${item.title}"><div><h3>${item.title}</h3><p>${item.detail}</p></div><span class="priority ${item.priority}" title="Priorytet: ${item.priority}"></span></article>`).join("")}</div>
      <details class="card source-card"><summary>Źródła zdjęć i danych</summary><ul class="credits">${credits}<li>Zdjęcia noclegów i informacje o obiektach: strony obiektów w Booking.com.</li><li>Kursy: <a href="https://api.nbp.pl/" target="_blank" rel="noopener">API Narodowego Banku Polskiego</a></li><li>Shinkansen: <a href="https://smart-ex.jp/en/lp/app/" target="_blank" rel="noopener">oficjalny SmartEX / JR Central</a></li><li>Pogoda: <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a></li><li>Mapy: © OpenStreetMap contributors</li></ul></details>`;
  }

  function initMap(key) {
    if (mapInstances[key] || !window.L) return;
    const city = data.destinations[key];
    const map = L.map(`map-${key}`).setView(city.map.center, city.map.zoom);
    const englishTiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    });
    const localTiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    });
    englishTiles.addTo(map);
    L.control.layers({
      "Angielski (czytelny)": englishTiles,
      "Lokalny (domyślny)": localTiles
    }).addTo(map);
    city.places.forEach(place => {
      const icon = L.divIcon({ className: "", html: `<div class="custom-marker ${place.type}"></div>`, iconSize: [18,18], iconAnchor: [9,9] });
      L.marker(place.coords, { icon }).addTo(map).bindPopup(`<strong>${place.name}</strong>`);
    });
    mapInstances[key] = map;
    [50, 250, 650].forEach(delay => setTimeout(() => map.invalidateSize({ animate: false }), delay));
  }

  async function initCurrency() {
    const fallback = { JPY: { rate: 0.023237, date: "03.07.2026", live: false }, KRW: { rate: 0.002445, date: "03.07.2026", live: false } };
    const rates = { ...fallback };
    await Promise.all(["JPY", "KRW"].map(async code => {
      try {
        const response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code.toLowerCase()}/?format=json`);
        if (!response.ok) throw new Error("NBP unavailable");
        const result = await response.json();
        rates[code] = { rate: result.rates[0].mid, date: result.rates[0].effectiveDate, live: true };
      } catch (_) { /* zostaje kurs awaryjny */ }
    }));
    const amount = document.querySelector("#currency-amount");
    const code = document.querySelector("#currency-code");
    const output = document.querySelector("#converted-value");
    const note = document.querySelector("#rate-note");
    const update = () => {
      const selected = rates[code.value];
      output.textContent = money.format((Number(amount.value) || 0) * selected.rate);
      note.textContent = `1 ${code.value} = ${selected.rate.toFixed(6)} PLN · ${selected.live ? "NBP" : "kurs awaryjny"} · ${selected.date}`;
    };
    amount.addEventListener("input", update);
    code.addEventListener("change", update);
    update();
  }

  function setView(name, updateHash = true) {
    document.querySelectorAll("[data-view-panel]").forEach(panel => panel.classList.toggle("active", panel.dataset.viewPanel === name));
    document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.view === name));
    document.querySelector("#main-nav").classList.remove("open");
    document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
    if (updateHash) history.replaceState(null, "", `#${name}`);
    if (["tokyo", "kansai", "seoul"].includes(name)) {
      initMap(name);
      if (mapInstances[name]) [50, 250].forEach(delay => setTimeout(() => mapInstances[name].invalidateSize({ animate: false }), delay));
    }
    if (name === "budget") initCurrencyOnce();
    window.scrollTo({ top: document.querySelector(".app-shell").offsetTop - 72, behavior: "smooth" });
  }

  let currencyInitialized = false;
  function initCurrencyOnce() { if (!currencyInitialized) { currencyInitialized = true; initCurrency(); } }

  function initTodos() {
    const done = JSON.parse(localStorage.getItem("trip-todos") || "[]");
    document.querySelectorAll(".todo-item").forEach(item => {
      const index = Number(item.dataset.todo);
      const checkbox = item.querySelector("input");
      checkbox.checked = done.includes(index);
      item.classList.toggle("done", checkbox.checked);
      checkbox.addEventListener("change", () => {
        const current = new Set(JSON.parse(localStorage.getItem("trip-todos") || "[]"));
        checkbox.checked ? current.add(index) : current.delete(index);
        localStorage.setItem("trip-todos", JSON.stringify([...current]));
        item.classList.toggle("done", checkbox.checked);
      });
    });
    document.querySelector(".todo-controls").addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      document.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b === button));
      document.querySelectorAll(".todo-item").forEach(item => {
        item.hidden = button.dataset.filter !== "all" && item.dataset.category !== button.dataset.filter;
      });
    });
  }

  renderCountdown();
  setInterval(renderCountdown, 1000);
  renderOverview();
  ["tokyo", "kansai", "seoul"].forEach(renderDestination);
  renderBudget();
  renderPractical();
  renderTodo();
  initTodos();
  initWeather();
  document.querySelectorAll("[data-live-preview]").forEach(image => image.addEventListener("error", () => { image.src = image.dataset.fallback; image.removeAttribute("data-live-preview"); }, { once: true }));
  setInterval(() => document.querySelectorAll("[data-live-preview]").forEach(image => { const separator = image.dataset.livePreview.includes("?") ? "&" : "?"; image.src = `${image.dataset.livePreview}${separator}refresh=${Date.now()}`; }), 60000);

  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-view]");
    const jump = event.target.closest("[data-jump-view]");
    if (nav) setView(nav.dataset.view);
    if (jump) setView(jump.dataset.jumpView);
  });
  document.querySelector(".menu-button").addEventListener("click", event => {
    const open = document.querySelector("#main-nav").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });

  const initial = location.hash.slice(1);
  if (["overview", "tokyo", "kansai", "seoul", "budget", "practical", "todo"].includes(initial)) setView(initial, false);

  // Modal logic
  const modal = document.querySelector("#day-modal");
  const modalClose = document.querySelector("#modal-close-btn");
  if (modal && modalClose) {
    modalClose.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  // History modal logic
  const historyModal = document.querySelector("#history-modal");
  document.querySelector("#history-close-btn").addEventListener("click", () => historyModal.close());
  historyModal.addEventListener("click", e => {
    const dialogDimensions = historyModal.getBoundingClientRect();
    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
      historyModal.close();
    }
  });

  document.addEventListener("click", event => {
    // History btn click
    const historyBtn = event.target.closest(".history-btn");
    if (historyBtn) {
      const key = historyBtn.dataset.history;
      const historyData = key === "overview" ? data.meta.history : data.destinations[key].history;
      if (historyData) {
        document.querySelector("#history-title").textContent = historyData.title;
        document.querySelector("#history-content").innerHTML = historyData.content;
        historyModal.showModal();
      }
    }

    // Day card click
    const dayCard = event.target.closest(".day.clickable");
    if (dayCard) {
      const cityKey = dayCard.dataset.city;
      const dayIdx = dayCard.dataset.day;
      const dayData = data.destinations[cityKey].days[dayIdx];
      if (dayData && dayData.details) {
        document.querySelector("#modal-title").textContent = dayData.title;
        document.querySelector("#modal-date").textContent = `${dayData.date} · ${dayData.day}`;
        document.querySelector("#modal-desc").textContent = dayData.details.desc;
        document.querySelector("#modal-image").src = dayData.details.image;
        document.querySelector("#modal-transport-text").textContent = dayData.details.transport;
        modal.showModal();
      }
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && document.querySelector("#main-nav").classList.contains("open")) {
      document.querySelector("#main-nav").classList.remove("open");
      document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
    }
  });
})();

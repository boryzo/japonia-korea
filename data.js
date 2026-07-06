/* Główne źródło danych strony. Większość aktualizacji podróży robimy tutaj. */
window.TRIP_DATA = {
  meta: {
    title: "Japonia + Korea 2026",
    start: "2026-08-20T18:25:00+02:00",
    end: "2026-09-05T18:30:00+02:00",
    travelers: "2 dorosłych + dzieci 9 i 10 lat",
    budgetLimit: 30000,
    history: {
      title: "Tło: Japonia a Korea",
      content: "<p>Japonia i Korea to kraje o fascynującej, ale bardzo skomplikowanej wspólnej historii. Japończycy to naród niezwykle uprzejmy, powściągliwy, w którym najważniejsza jest harmonia (<em>wa</em>) i dobro ogółu. Z kolei Koreańczycy z Południa słyną z kultury <em>palli-palli</em> (szybko-szybko) – są niezwykle dynamiczni, bardziej bezpośredni, a ich styl bycia jest pełen ekspresji.</p><p>Choć historyczne zaszłości bywały bardzo bolesne (w tym trudna japońska okupacja Półwyspu Koreańskiego w latach 1910–1945), dziś oba te rozwinięte technologicznie społeczeństwa wzajemnie napędzają się gospodarczo i fascynują swoją popkulturą.</p>"
    }
  },
  route: [
    { code: "GDN", city: "Gdańsk", date: "20.08", time: "wylot 18:25", duration: "lot 0h 55m", status: "confirmed" },
    { code: "WAW", city: "Warszawa", date: "20.08", time: "wylot 22:50", duration: "lot 12h 35m", status: "confirmed" },
    { code: "NRT", city: "Tokio", date: "21.08", time: "przylot 18:25", duration: "", status: "confirmed" },
    { code: "TYO", city: "Tokio", date: "25.08", time: "odjazd ~10:00", duration: "pociąg ~2.5h", status: "planned" },
    { code: "OSA", city: "Osaka", date: "25.08", time: "przyjazd ~12:30", duration: "", status: "planned" },
    { code: "KIX", city: "Osaka", date: "30.08", time: "wylot 12:50", duration: "lot 2h 10m", status: "planned" },
    { code: "SEL", city: "Seul", date: "30.08", time: "przylot 15:00", duration: "", status: "planned" },
    { code: "ICN", city: "Seul", date: "05.09", time: "wylot 12:35", duration: "lot 12h 55m", status: "confirmed" },
    { code: "WAW", city: "Warszawa", date: "05.09", time: "odjazd ~20:30", duration: "pociąg ~2.5h", status: "planned" },
    { code: "GDN", city: "Gdańsk", date: "05.09", time: "przyjazd ~23:00", duration: "", status: "planned" }
  ],
  flights: [
    { date: "20.08", route: "GDN → WAW", number: "LO3816", time: "18:25–19:20", status: "confirmed" },
    { date: "20–21.08", route: "WAW → NRT", number: "LO79", time: "22:50–18:25 (+1)", status: "confirmed" },
    { date: "25.08", route: "Tokio → Osaka", number: "Shinkansen Nozomi", time: "~2.5h (Smart EX)", status: "planned" },
    { date: "30.08", route: "KIX → ICN", number: "BX 171 (rozważany)", time: "12:50–15:00", status: "planned" },
    { date: "05.09", route: "ICN → WAW", number: "LO100", time: "12:35–18:30", status: "confirmed" }
  ],
  returnTrain: {
    date: "05.09",
    route: "Warszawa Centralna → Gdańsk Główny",
    recommended: "około 20:29/20:30",
    alternative: "około 21:01 lub późniejszy — plan awaryjny",
    rejected: "",
    status: "timetable-check",
    note: "Lądowanie o 18:30, brak bagażu rejestrowanego. Zakładamy sprawne przejście granicy i dojazd z Lotniska Chopina na dworzec. Potwierdzić dokładną godzinę w oficjalnym rozkładzie na 05.09.2026."
  },
  travelProtection: [
    { title: "Revolut Metal", detail: "Ubezpieczenie podróżne — potwierdzić zakres ochrony całej rodziny, limity i warunki aktywacji.", icon: "🛡️" },
    { title: "Karta kredytowa Żubr", detail: "Ubezpieczony właściciel karty + 1 osoba dodatkowa. Sprawdzić, kogo obejmuje oraz czy wymagane jest opłacenie podróży kartą.", icon: "💳" },
    { title: "Priority Pass", detail: "Dostęp do saloników. Przed podróżą sprawdzić dostępne lotniska, liczbę bezpłatnych wejść i zasady dla dzieci/gości.", icon: "✦" }
  ],
  weather: [
    { key: "tokyo", city: "Tokio", coords: [35.6762, 139.6503], stayStart: "2026-08-21", stayEnd: "2026-08-25", seasonal: "Zwykle bardzo ciepło i wilgotno: około 25–32°C. Możliwe ulewy i pogoda tajfunowa." },
    { key: "kansai", city: "Osaka / Kansai", coords: [34.6937, 135.5023], stayStart: "2026-08-25", stayEnd: "2026-08-30", seasonal: "Zwykle gorąco i parno: około 26–33°C. Dużo słońca, ale możliwe gwałtowne opady." },
    { key: "seoul", city: "Seul", coords: [37.5665, 126.9780], stayStart: "2026-08-30", stayEnd: "2026-09-05", seasonal: "Zwykle ciepło i wilgotno: około 22–30°C. Wieczory mogą być łagodniejsze, nadal możliwy deszcz." }
  ],
  webcams: [
    { city: "Tokio", title: "Shibuya Crossing", preview: "https://www.worldcam.pl/images/webcams/420x236/67877e6eacb47.jpg", fallback: "assets/images/tokyo.webp", provider: "WorldCam", url: "https://worldcam.eu/webcams/asia/japan/34844-tokyo-shibuya-scramble-crossing" },
    { city: "Osaka", title: "Dotonbori i Ebisu Bridge", preview: "https://cdn.skylinewebcams.com/social1858.jpg", fallback: "assets/images/osaka.webp", provider: "SkylineWebcams", url: "https://www.skylinewebcams.com/en/webcam/japan/kansai/osaka/osaka-dotonbori.html" },
    { city: "Seul", title: "Han River", preview: "https://cdn.skylinewebcams.com/social3140.jpg", fallback: "assets/images/seoul.webp", provider: "SkylineWebcams / TOPIS", url: "https://www.skylinewebcams.com/en/webcam/south-korea/seoul-capital/seoul/han-river.html", secondaryUrl: "https://topis.seoul.go.kr/map/openCctvMap.do" }
  ],
  baggage: {
    allowance: "4 × bagaż kabinowy do 55×40×23 cm i 8 kg każdy na rejsach LOT",
    chosenSize: "Rozważane plecaki 55×40×20 cm — mieszczą się w limicie LOT",
    targetWeight: "Cel praktyczny: 22–26 kg łącznie, nie pełne 32 kg",
    warning: "Limit lotu KIX–Seul sprawdzamy dopiero po wyborze przewoźnika. Tanie linie mogą mieć mniejszą wagę lub inaczej liczyć przedmiot osobisty.",
    bags: [
      { name: "Plecak 1 · dorosły", load: "Ubrania dorosłego + część wspólnych rzeczy", target: "6–7 kg" },
      { name: "Plecak 2 · dorosły", load: "Ubrania dorosłego + kosmetyki i apteczka", target: "6–7 kg" },
      { name: "Plecak 3 · dziecko", load: "Własne lekkie ubrania + mała rzecz na drogę", target: "4–5 kg" },
      { name: "Plecak 4 · dziecko", load: "Własne lekkie ubrania + mała rzecz na drogę", target: "4–5 kg" }
    ],
    checklist: [
      "5–6 lekkich koszulek na osobę",
      "2–3 pary krótkich spodni + 1 para długich",
      "6 kompletów bielizny; pranie co 4–5 dni",
      "cienka bluza i lekka kurtka przeciwdeszczowa",
      "wygodne, rozchodzone buty; opcjonalnie lekkie sandały",
      "czapki, okulary, krem SPF i małe ręczniki/chusty chłodzące",
      "leki, plastry i elektrolity",
      "adaptery, ładowarki i przewody opisane właścicielem",
      "powerbanki wyłącznie do kabiny",
      "kosmetyki w pojemnikach do 100 ml",
      "po jednym komplecie ubrań każdej osoby w innym plecaku"
    ]
  },
  travelApps: {
    japan: [
      { name: "Google Maps", purpose: "Główna nawigacja, metro, pociągi i dojścia piesze.", priority: "must", url: "https://maps.google.com/" },
      { name: "Google Translate", purpose: "Aparat, tłumaczenie menu i pakiet japoński offline.", priority: "must", url: "https://translate.google.com/about/" },
      { name: "Tokyo Disney Resort App", purpose: "Mapa parku, kolejki, bilety, Premier Access i zamówienia w Disneylandzie.", priority: "must", url: "https://www.tokyodisneyresort.jp/en/tdr/app.html" },
      { name: "SmartEX", purpose: "Rezerwacja Shinkansenu, jeśli wybierzemy pociąg Tokio → Osaka.", priority: "decision", url: "https://smart-ex.jp/en/lp/app/" },
      { name: "Suica / PASMO", purpose: "Transport i drobne płatności. Na iPhonie można dodać kartę do Wallet; inaczej kupić kartę fizyczną.", priority: "recommended", url: "https://www.jreast.co.jp/multi/en/welcomesuica/welcomesuica.html" },
      { name: "Japan Travel by NAVITIME", purpose: "Awaryjna druga nawigacja kolejowa i warianty tras.", priority: "optional", url: "https://japantravel.navitime.com/en/" }
    ],
    korea: [
      { name: "Naver Map", purpose: "Podstawowa nawigacja piesza i transport publiczny; ustawić język angielski.", priority: "must", url: "https://map.naver.com/" },
      { name: "Papago", purpose: "Tłumaczenie koreańskiego, także ze zdjęcia i głosu.", priority: "must", url: "https://papago.naver.com/" },
      { name: "Kakao T", purpose: "Zamawianie taksówek i kontrola ceny przejazdu.", priority: "recommended", url: "https://www.kakaomobility.com/service-kakaot" },
      { name: "KakaoMap", purpose: "Druga mapa i wyszukiwanie lokalnych miejsc; Naver Map pozostaje podstawą.", priority: "optional", url: "https://map.kakao.com/" },
      { name: "Emergency Ready App", purpose: "Anglojęzyczne alerty kryzysowe i informacje bezpieczeństwa.", priority: "recommended", url: "https://www.safekorea.go.kr/idsiSFK/neo/main/main.html" },
      { name: "KorailTalk", purpose: "Tylko jeśli zdecydujemy się na daleki przejazd koleją poza Seul.", priority: "optional", url: "https://www.letskorail.com/" }
    ]
  },
  shopping: {
    intro: "Zasady zakupów: Japonia = Life/Gyomu/OK/Seiyu + konbini, Korea = No Brand/Lotte Mart/E-mart/Homeplus + CU/GS25.",
    tips: [
      "Dzień przyjazdu: konbini — woda, coś dla dzieci, śniadanie na rano.",
      "Następnego dnia: normalny supermarket — zakupy na 2–3 dni.",
      "Wieczorem: supermarket po przecenione bento/sushi/gotowce.",
      "Przed wylotem z Seulu: Lotte Mart albo E-mart na rameny, słodycze, algi, kawy instant, przekąski do Polski."
    ],
    discounts: [
      "<b>Too Good To Go (Japonia):</b> Aplikacja wystartowała w Tokio w 2026 r. (działa m.in. w Shibuya/Shinjuku). Alternatywą jest popularna japońska aplikacja <b>TABETE</b> (pokazuje konkretne jedzenie, nie tylko niespodzianki).",
      "<b>Aplikacje w Korei:</b> Użyj <b>Lucky Meal (럭키밀)</b> (odpowiednik TGTG dla piekarni/kawiarni) lub <b>Last Order (라스트오더)</b> z rabatami 30–70% na koniec dnia.",
      "<b>Naklejki rabatowe (w obu krajach):</b> Prawdziwym hitem wciąż pozostają wieczorne wizyty (po 19:00-20:00) w supermarketach (i konbini). Pracownicy przyklejają naklejki z procentowym lub kwotowym rabatem (nawet 50%) na gotowe bento, sushi, kanapki, by sprzedać je przed zamknięciem."
    ],
    equivalents: [
      { pl: "Biedronka / Lidl", jp: "Gyomu Super, OK Store, Seiyu, czasem Aeon", kr: "No Brand, Lotte Mart, E-mart, Homeplus" },
      { pl: "Mercadona", jp: "Life, Maruetsu, KOHYO, Aeon, MaxValu", kr: "Lotte Super, GS The Fresh, E-mart Everyday" },
      { pl: "Żabka (konbini)", jp: "7-Eleven, Lawson, FamilyMart", kr: "CU, GS25, 7-Eleven, emart24" },
      { pl: "Tanie / Drogeria", jp: "Matsumoto Kiyoshi, Don Quijote, Daiso", kr: "Olive Young, Daiso, No Brand, Lotte Mart" }
    ],
    cities: {
      tokyo: {
        name: "Tokio",
        supermarkets: "Life supermarket, Maruetsu, Seiyu, OK Store, Gyomu Super, Aeon My Basket",
        details: [
          "<b>Konbini:</b> 7-Eleven, Lawson, FamilyMart na szybkie śniadanie / wodę / onigiri / kawę.",
          "<b>Koszyk rodzinny:</b> Life, Maruetsu, Seiyu, Aeon/MaxValu.",
          "<b>Taniej:</b> Gyomu Super (dobre na mrożonki, napoje, makarony, duże paczki) albo OK Store.",
          "<b>Gotowce:</b> Idź po 19:00-20:00. Bento i sushi mają naklejki z rabatami 20-50%."
        ]
      },
      kansai: {
        name: "Osaka",
        supermarkets: "Life, KOHYO, MaxValu, Aeon, Gyomu Super, Super Tamade",
        details: [
          "<b>Codziennie:</b> Life (najbezpieczniejszy wybór), KOHYO (często przy stacjach), MaxValu / Aeon.",
          "<b>Taniej pod rodzinę:</b> Gyomu Super, Super Tamade (bardzo osakowy, tani, lekki chaos).",
          "<b>Pamiątki/Słodycze:</b> Don Quijote (świetny na nocne zakupy).",
          "Wpisuj w mapy \"supermarket near me\". Konbini z 4-osobową rodziną wychodzi drogo."
        ]
      },
      seoul: {
        name: "Seul",
        supermarkets: "Lotte Mart, E-mart, Homeplus, No Brand",
        details: [
          "<b>Duży market:</b> Lotte Mart (Zettaplex Seoul Station świetny pod zakupy do Polski - ma tax refund > 30k KRW), E-mart, Homeplus.",
          "<b>Dyskonty:</b> No Brand (Lidl/Aldi vibes, np. w DOOTA Mall).",
          "<b>Konbini:</b> CU, GS25, 7-Eleven (śniadania, woda, ramen, mleko bananowe).",
          "<b>UWAGA:</b> Duże markety bywają obowiązkowo zamknięte (np. 2. i 4. środa/niedziela). Zawsze sprawdzaj hasło <em>휴무일</em> w Naver Map."
        ]
      }
    }
  },
  freeTours: {
    intro: "Zarówno w Tokio, jak i w Seulu można skorzystać z opcji darmowego zwiedzania z przewodnikami (najczęściej po angielsku).",
    tokyo: [
      "<b>Wolontariusze (TFWT / TFG):</b> Organizacje takie jak <a href=\"https://www.tfwt.jp/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);\">Tokyo Free Walking Tour</a> lub <a href=\"https://www.tokyofreeguide.org/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);\">Tokyo Free Guide</a>. Prowadzane przez pasjonatów. Nie płacisz za samą usługę, ale dobrym tonem jest pokrycie kosztów przewodnika (np. jego bilety na przejazd, wejściówki czy ewentualny lunch).",
      "<b>Tip-based (np. <a href=\"https://www.guruwalk.com/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);\">GuruWalk</a>):</b> Klasyczne free walking tours. Rezerwujesz miejsce, a na końcu dajesz przewodnikowi napiwek (tip) zależny od tego, jak bardzo podobała Ci się wycieczka (np. Asakusa, Shibuya)."
    ],
    seoul: [
      "<b>Oficjalne zwiedzanie miasta:</b> Rządowy program (Seoul Cultural Tourism Volunteer Guides). Oferują około 40 tras (w tym pałace). Jest w 100% darmowy, płacisz tylko za swoje bilety wstępu. <b>Wymagana rezerwacja z min. 3-dniowym wyprzedzeniem</b> (<a href=\"https://dobo.visitseoul.net/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);\">dobo.visitseoul.net</a>).",
      "<b>Tip-based (np. <a href=\"https://www.guruwalk.com/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);\">GuruWalk</a> / <a href=\"https://www.freetour.com/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);\">Freetour</a>):</b> Wycieczki prowadzone przez lokalsów. Zazwyczaj zostawia się około 10-15 USD napiwku od osoby po zakończeniu spaceru."
    ]
  },
  stays: {
    tokyo: { name: "7House", dates: "21–25.08", nights: 4, price: 1462, area: "Adachi-ku, Tokio", address: "〒120-0015 東京都足立区足立3-8-5", check: "15:00 / 11:00", image: "assets/images/hotels/7house.webp", bookingUrl: "https://www.booking.com/hotel/jp/narita-haneda-airport-is-convenient-quiet-homestay.html", mapUrl: "https://www.google.com/maps/search/?api=1&query=東京都足立区足立3-8-5" },
    kansai: { name: "SunriseHouse TD501", dates: "25–30.08", nights: 5, price: 680.27, area: "Teradacho, Tennoji-ku, Osaka", address: "〒543-0052 大阪府大阪市天王寺区大道4丁目9-3 エスタピア寺田町 TD501", check: "16:00 / 10:00", image: "assets/images/hotels/sunrisehouse.webp", bookingUrl: "https://www.booking.com/hotel/jp/nearest-jr-teradacho-station-3-minutes-on-foot-direct-access-to-umeda-osaka-cast.html", mapUrl: "https://www.google.com/maps/search/?api=1&query=大阪府大阪市天王寺区大道4丁目9-3" },
    seoul: { name: "Soft Minimal 2BR Home near Dongdaemun", dates: "30.08–05.09", nights: 6, price: 1981, area: "Dongdaemun / Jung-gu, Seul", address: "중구 다산로39가길 8, 2층 202호, 서울 04612", check: "16:00 / 11:00", image: "assets/images/hotels/seoul-home.webp", bookingUrl: "https://www.booking.com/hotel/kr/cozy-2br-home-near-ddp-myeongdong-dongdaemun.html", mapUrl: "https://www.google.com/maps/search/?api=1&query=서울 중구 다산로39가길 8" }
  },
  destinations: {
    tokyo: {
      name: "Tokio", kicker: "Neony, topki i Disney", dates: "21–25 sierpnia · 4 noce", image: "assets/images/tokyo.webp", color: "#ff5a68",
      history: {
        title: "Tło: Od wioski do giganta",
        content: "<p>Tokio, znane pierwotnie jako Edo, z małej wioski rybackiej przekształciło się w największą i najbardziej zamożną metropolię na świecie. Przez wieki było siedzibą szogunów Tokugawa, którzy w XVII wieku zjednoczyli i niemal całkowicie zamknęli Japonię przed światem (okres izolacji <em>Sakoku</em>).</p><p>Po restauracji Meiji w 1868 roku, cesarz przeniósł tu stolicę z Kioto, zmieniając nazwę na <strong>Tokio</strong> (Wschodnia Stolica). Miasto heroicznie podniosło się z popiołów trzęsienia ziemi w 1923 roku oraz zniszczeń z czasów II wojny światowej, stając się globalnym symbolem ultranowoczesności po Igrzyskach Olimpijskich w 1964 r.</p>"
      },
      intro: "Cztery noce na klasyczne Tokio, jeden pełny dzień w Disneylandzie i spokojne wejście w podróż po długim locie.",
      map: { center: [35.682, 139.75], zoom: 11 },
      places: [
        { name: "Baza: 7House (orientacyjnie)", coords: [35.75, 139.80], type: "stay" },
        { name: "Shibuya Crossing", coords: [35.6595, 139.7005], type: "visit" },
        { name: "Meiji Jingu / Harajuku", coords: [35.6764, 139.6993], type: "visit" },
        { name: "Sensō-ji, Asakusa", coords: [35.7148, 139.7967], type: "visit" },
        { name: "Akihabara", coords: [35.6984, 139.7731], type: "visit" },
        { name: "Tokyo Disneyland", coords: [35.6329, 139.8804], type: "must" }
      ],
      days: [
        { date: "21.08", day: "Piątek", title: "Lądowanie i miękki start", text: "NRT 18:25 → dojazd → zameldowanie → konbini lub ramen. Bez ambitnego zwiedzania.", cost: "¥", pace: "lekko", details: { image: "assets/images/tokyo_days/nrt.jpg", desc: "Przylot na lotnisko Narita (NRT) wieczorem. Po przejściu kontroli celnej odbierzemy bagaże i udamy się na pociąg do centrum. To będzie długi dzień w podróży, więc po zameldowaniu w hotelu (okolice stacji, np. 7House) pójdziemy tylko do najbliższego konbini (FamilyMart/7-Eleven) po przekąski lub zjemy szybki ramen w okolicy.", transport: "Z Narity najszybciej do centrum dojedziemy pociągiem Keisei Skyliner (do Ueno/Nippori) lub Narita Express (N'EX) bezpośrednio do głównych stacji w Tokio." } },
        { date: "22.08", day: "Sobota", title: "Nowoczesne Tokio", text: "Shibuya Crossing, Hachikō, Harajuku, Takeshita Street, Meiji Jingu i Shinjuku po zmroku.", cost: "¥", pace: "dużo chodzenia", details: { image: "assets/images/tokyo_days/shibuya.jpg", desc: "Zanurzamy się w nowoczesne i szalone Tokio! Zaczniemy od słynnego skrzyżowania Shibuya Crossing i pomnika psa Hachiko. Następnie przejdziemy do Harajuku – przejdziemy przez kolorową Takeshita Street pełną crêpes i szalonej mody, a potem odpoczniemy w leśnym kompleksie świątyni Meiji Jingu. Wieczór spędzimy w rozświetlonym neonami Shinjuku.", transport: "Poruszamy się głównie linią JR Yamanote (zielona pętla), która łączy Shibuyę, Harajuku i Shinjuku." } },
        { date: "23.08", day: "Niedziela", title: "Klasyka i popkultura", text: "Asakusa i Sensō-ji, Ueno oraz Akihabara. Wieczorem bezpłatny punkt widokowy w Tokyo Metropolitan Government Building.", cost: "¥", pace: "średnio", details: { image: "assets/images/tokyo_days/asakusa.jpg", desc: "Dzień pełen kontrastów. Rano odwiedzimy najstarszą świątynię w Tokio – Sensō-ji w historycznej dzielnicy Asakusa. Przejdziemy przez bramę Kaminarimon i uliczkę Nakamise. Następnie udamy się do Akihabary – mekki elektroniki, anime i gier wideo. Wieczorem wyjedziemy na 45. piętro Tokyo Metropolitan Government Building po darmowe widoki na panoramę miasta.", transport: "Do Asakusy dojedziemy metrem (linia Ginza lub Asakusa). Z Asakusy do Akihabary szybko dostaniemy się np. z przesiadką na stacji Ueno." } },
        { date: "24.08", day: "Poniedziałek", title: "Tokyo Disneyland", text: "Cały dzień w parku. Disneyland jest obowiązkowy; DisneySea zostaje poza planem bazowym.", cost: "¥¥¥", pace: "cały dzień", must: true, details: { image: "assets/images/tokyo_days/disney.jpg", desc: "Czeka nas magiczny, całodniowy pobyt w Tokyo Disneyland! Zobaczymy Zamek Kopciuszka, klasyczne parady i mnóstwo bajkowych atrakcji. To jeden z najchętniej odwiedzanych parków rozrywki na świecie. Warto być przed otwarciem, żeby wejść jako jedni z pierwszych.", transport: "Dojazd pociągiem JR linii Keiyo lub Musashino ze stacji Tokyo do stacji Maihama. Podróż ze stacji Tokyo trwa około 15 minut." } },
        { date: "25.08", day: "Wtorek", title: "Tokio → Osaka", text: "Wymeldowanie, lekki poranek i przejazd na stację Shinkansenu.", cost: "¥¥¥", pace: "transfer", details: { image: "assets/images/tokyo_days/shinkansen.jpg", desc: "Opuszczamy Tokio i ruszamy na południe, do regionu Kansai! Rano spokojnie się wymeldujemy. Trasę Tokio-Osaka (około 500 km) pokonamy super-szybkim pociągiem Shinkansen Nozomi, co potrwa około 2.5 godziny.", transport: "Shinkansen Nozomi (kupiony przez Smart EX) ze stacji Tokyo lub Shinagawa bezpośrednio do stacji Shin-Osaka." } }
      ],
      restaurants: [
        { name: "Ichiran Shibuya", type: "Ramen", rating: "4.5", reviewCount: "7000+", desc: "Kultowy ramen jedzony w prywatnych boksach. Doświadczenie samo w sobie." },
        { name: "Harajuku Gyozaro", type: "Gyoza", rating: "4.3", reviewCount: "4000+", desc: "Jedne z najlepszych i najtańszych smażonych pierożków gyoza w Tokio." },
        { name: "Uobei Shibuya Dogenzaka", type: "Sushi", rating: "4.4", reviewCount: "10000+", desc: "Szybkie, tanie i pyszne sushi dostarczane ekspresowo taśmociągiem na Twoje miejsce." },
        { name: "Kikanbo Kanda", type: "Ramen", rating: "4.5", reviewCount: "5000+", desc: "Ekstremalnie pikantny i niezwykle aromatyczny ramen tylko dla odważnych." },
        { name: "Curry Station Niagara", type: "Curry", rating: "4.4", reviewCount: "1500+", desc: "Tanie japońskie curry dostarczane do stolika przez jeżdżący miniaturowy pociąg." },
        { name: "Gyukatsu Motomura", type: "Gyukatsu", rating: "4.6", reviewCount: "6000+", desc: "Smażona wołowina w panierce, którą dosmażasz samodzielnie na własnym gorącym kamieniu." },
        { name: "Nakiryu", type: "Ramen", rating: "4.2", reviewCount: "2000+", desc: "Wybitny Ramen odznaczony gwiazdką Michelin, a przy tym bardzo przyjazny dla portfela." },
        { name: "Katsukura Shinjuku", type: "Tonkatsu", rating: "4.4", reviewCount: "2500+", desc: "Znakomity i chrupiący panierowany kotlet wieprzowy (tonkatsu) w przystępnej cenie." },
        { name: "Fuunji Shinjuku", type: "Tsukemen", rating: "4.3", reviewCount: "4000+", desc: "Gęsty bulion rybno-wieprzowy, w którym macza się zimny makaron (tsukemen)." },
        { name: "Sometaro Asakusa", type: "Okonomiyaki", rating: "4.2", reviewCount: "1200+", desc: "Tradycyjne placki okonomiyaki przygotowywane w bardzo klimatycznym, starym drewnianym domu." }
      ],
      shoppingTips: [
        {
          title: "Oryginalne japońskie ubrania i T-shirty",
          intro: "Zamiast tandetnych pamiątek z napisem 'I ❤️ Japan', warto kupić graficzne T-shirty lub rzeczy z japońskich sieciówek (szukajcie w okolicach Harajuku i Shibuya). <b>Ważne: noś paszport!</b> Zakupy powyżej 5 500 JPY (z podatkiem) w jednym sklepie uprawniają do tax-free. (Przebitka: 1000 JPY ≈ 23 zł).",
          places: [
            { name: "Graniph", desc: "Mój nr 1. Świetne grafiki, fajna jakość, kolaboracje z anime, popkulturą i artystami. T-shirt: ~2900 JPY (ok. 67 zł)." },
            { name: "UNIQLO UT", desc: "Tanie, oficjalne koszulki z mangą/anime/popkulturą. Często ok. 1990 JPY (ok. 46 zł)." },
            { name: "GU", desc: "Tańsza siostra Uniqlo. Basicowe T-shirty potrafią być od 590 JPY, czapki unisex za ok. 990 JPY. Dobra jakość za grosze." },
            { name: "WEGO", desc: "Ulubieniec młodzieży z Harajuku: czapki, streetwear, oversize, dużo tanich akcesoriów." },
            { name: "2nd Street / Vintage", desc: "Świetny japoński second-hand. Używane ubrania często w bardzo dobrym stanie, ceny od 300-1000 JPY, idealne na polowanie." }
          ]
        },
        {
          title: "Hypebeast & Premium Streetwear",
          intro: "Jeśli celujecie w autentyczną kulturę sneakersową i streetwearową, po prostu zgubcie się w bocznych uliczkach Harajuku (tzw. Cat Street i Ura-Hara) oraz w Shibuya.",
          places: [
            { name: "KITH Tokyo", desc: "W centrum Miyashita Park (Shibuya). Piękny butik, który wygląda jak galeria sztuki. Często są tam limitowane dropy." },
            { name: "Dover Street Market Ginza", desc: "Wielopiętrowy dom handlowy (Comme des Garçons). Mieszanka wielkiej mody i najlepszego streetwearu." },
            { name: "SNKRDUNK (Harajuku / Shibuya)", desc: "Najlepsze miejsce, jeśli szukacie limitowanych, pożądanych sneakersów (od rzadkich Jordanów po New Balance)." },
            { name: "Sklepy w Ura-Harajuku (Ura-Hara)", desc: "Znajdziecie tu legendarne flagowe sklepy takie jak Supreme, A Bathing Ape (BAPE) czy japońskie Neighborhood." },
            { name: "Union Tokyo", desc: "Filia kultowego sklepu streetwearowego z Los Angeles zlokalizowana w Harajuku." }
          ]
        }
      ],
      options: ["teamLab Borderless", "Odaiba", "Tokyo Skytree", "Ueno Zoo"]
    },
    kansai: {
      name: "Osaka + Kansai", kicker: "Osaka, Kyoto, Nara i opcjonalnie Kobe", dates: "25–30 sierpnia · 5 nocy", image: "assets/images/osaka.webp", color: "#f6a23c",
      history: {
        title: "Tło: Kuchnia narodu",
        content: "<p>Region Kansai to historyczne i kulturowe serce Japonii. Przez ponad tysiąc lat (do 1868 r.) to właśnie <strong>Kioto</strong> było siedzibą cesarza. To tutaj wykształciła się klasyczna japońska estetyka, ceremonia parzenia herbaty, teatr kabuki oraz wyrafinowana kuchnia <em>kaiseki</em>.</p><p>Osaka, nazywana „kuchnią narodu”, od zawsze była centrum handlu i wolnej myśli. W przeciwieństwie do powściągliwego Tokio, mieszkańcy Osaki słyną ze swojego otwarcia, humoru i luźniejszego podejścia do życia. Region ten zachował najwięcej autentycznego ducha dawnej Japonii, mimo że jego nowoczesne metropolie dynamicznie parły naprzód.</p>"
      },
      intro: "Jedna niedroga baza w Osace. Z niej robimy wycieczki do Kyoto i Nary, a wieczory zostają na jedzenie i neony.",
      map: { center: [34.83, 135.55], zoom: 9 },
      places: [
        { name: "Baza: Teradacho", coords: [34.647, 135.523], type: "stay" },
        { name: "Dotonbori", coords: [34.6687, 135.5013], type: "visit" },
        { name: "Fushimi Inari, Kyoto", coords: [34.9671, 135.7727], type: "must" },
        { name: "Kiyomizu-dera / Gion", coords: [34.9949, 135.785], type: "visit" },
        { name: "Nara Park", coords: [34.6851, 135.843], type: "must" },
        { name: "Kobe (opcja)", coords: [34.69, 135.1955], type: "option" }
      ],
      days: [
        { date: "25.08", day: "Wtorek", title: "Przyjazd do Osaki", text: "Transfer do Teradacho, zameldowanie od 16:00 i pierwszy wieczór z jedzeniem w okolicy lub Dotonbori.", cost: "¥¥", pace: "transfer", details: { image: "assets/images/osaka_days/teradacho.jpg", desc: "Zmieniamy bazę z Tokio na Osakę. Po podróży Shinkansenem i dotarciu do naszego domu w dzielnicy Teradacho (okolice stacji Tennoji) odświeżymy się i udamy na spokojny obiad. Teradacho ma swój lokalny urok, idealny na odpoczynek przed jutrzejszym Kyoto.", transport: "Z Shin-Osaka dojazd pociągami JR (np. linia Osaka Loop) do stacji Teradacho. Dom znajduje się blisko stacji." } },
        { date: "26.08", day: "Środa", title: "Kyoto: pocztówkowa Japonia", text: "Fushimi Inari wcześnie rano, Kiyomizu-dera, uliczki Higashiyamy i Gion wieczorem. Wypożyczenie tradycyjnych strojów dla 1 dorosłego i 2 dzieci.", cost: "¥¥", pace: "dużo chodzenia", must: true, details: { image: "assets/images/osaka_days/kyoto.jpg", desc: "Startujemy bardzo wcześnie! Kyoto to historyczna perła. Zaczniemy od magicznego, ciągnącego się kilometrami szlaku tysięcy czerwonych bram torii w Fushimi Inari. Potem przejdziemy do wspaniałej świątyni Kiyomizu-dera z widokiem na miasto i przespacerujemy się tradycyjnymi uliczkami Gionu. Wypożyczymy tu tradycyjne japońskie stroje (kimono/yukata) dla 1 dorosłej osoby i dwójki dzieci, by zrobić niezapomniane zdjęcia w klimatycznych alejkach. Wieczorem może uda nam się dojrzeć Gejsze.", transport: "Do Fushimi Inari jedziemy pociągiem Keihan ze stacji Yodoyabashi (lub Kyobashi) w Osace bezpośrednio do stacji Fushimi-Inari (ok. 45-50 min)." } },
        { date: "27.08", day: "Czwartek", title: "Osaka: jedzenie i neony", text: "Kuromon Market, Namba, Dotonbori, Den Den Town i salony arcade. Osaka Castle opcjonalnie z zewnątrz.", cost: "¥¥", pace: "średnio", details: { image: "assets/images/osaka_days/dotonbori.jpg", desc: "Dzień pełen jedzenia i miejskiego zgiełku (tzw. Kuidaore - jedz aż padniesz). Odwiedzimy targ Kuromon po uliczne przekąski, a następnie uderzymy w okolice Namby i kultowego kanału Dotonbori. Wieczorem zobaczymy wielkiego kraba i słynny neon Glico Man. Odwiedzimy też pobliskie salony gier arcade.", transport: "W obrębie Osaki korzystamy z metra (np. linia Midosuji). Z Teradacho do Namby jest to bardzo szybki i bezpośredni dojazd linią JR lub metrem z Tennoji." } },
        { date: "28.08", day: "Piątek", title: "Nara i jelonki", text: "Nara Park, Todai-ji i spokojny rodzinny spacer. Karmimy jelonki wyłącznie specjalnymi krakersami.", cost: "¥¥", pace: "średnio", must: true, details: { image: "assets/images/osaka_days/nara.jpg", desc: "Wycieczka poza miasto do dawnej stolicy – Nary. Główną atrakcją jest ogromny park, po którym swobodnie wędrują setki oswojonych jelonków sika. Zobaczymy też olbrzymią świątynię Todai-ji z wielkim pomnikiem Buddy (Daibutsu).", transport: "Najwygodniej dojechać pociągiem Kintetsu Nara Line z Namby bezpośrednio do stacji Kintetsu Nara. Podróż zajmuje zaledwie około 40 minut." } },
        { date: "29.08", day: "Sobota", title: "Bufor: Osaka albo Kobe", text: "Tani dzień w Osace. Opcjonalnie Kobe Animal Kingdom, Suma Beach albo dodatkowy dzień w Kyoto.", cost: "¥ / ¥¥¥", pace: "elastycznie", details: { image: "assets/images/osaka_days/castle.jpg", desc: "Dzień do naszej dyspozycji. Możemy zostać w Osace i obejrzeć zamek w Osace z pięknymi ogrodami, pójść na zakupy, lub pojechać pociągiem do Kobe, aby spróbować wołowiny i odwiedzić wspaniały park Kobe Animal Kingdom, gdzie zwierzęta chodzą bez klatek (świetne dla dzieci!).", transport: "Jeśli jedziemy do zamku w Osace – JR Osaka Loop Line do stacji Osakajokoen. Jeśli do Kobe – linia JR Kobe Line ze stacji Osaka." } },
        { date: "30.08", day: "Niedziela", title: "Osaka → Seul", text: "Wymeldowanie do 10:00, dojazd na KIX i bezpośredni lot do GMP lub ICN. Limit lotu: 1 700 zł za rodzinę.", cost: "do 1 700 zł", pace: "transfer", details: { image: "assets/images/osaka_days/kix.jpg", desc: "Żegnamy się z Japonią. Rano musimy sprawnie się spakować i zostawić nasz dom w Teradacho. Przejedziemy na lotnisko Kansai (KIX) pociągiem i udamy się do hali odlotów. Po około 2-godzinnym locie wylądujemy w Seulu, gotowi na koreański rozdział podróży!", transport: "Z Tennoji (najbliższy hub przy Teradacho) łapiemy bezpośredni pociąg JR Haruka Airport Express lub tańszy JR Kansai Airport Rapid Service bezpośrednio na KIX." } }
      ],
      restaurants: [
        { name: "Okonomiyaki Mizuno", type: "Okonomiyaki", rating: "4.3", reviewCount: "3500+", desc: "Jedne z najstarszych i najlepszych okonomiyaki wprost na kultowym Dotonbori." },
        { name: "Takoyaki Doraku Wanaka", type: "Takoyaki", rating: "4.4", reviewCount: "5000+", desc: "Klasyczne, parzące język ośmiorniczki w cieście. Ulubieniec lokalsów z Namby." },
        { name: "Kushikatsu Daruma", type: "Kushikatsu", rating: "4.2", reviewCount: "4000+", desc: "Głęboko smażone japońskie szaszłyki (mięso i warzywa), wielka ikona dzielnicy Shinsekai." },
        { name: "Kinryu Ramen", type: "Ramen", rating: "4.0", reviewCount: "3000+", desc: "Kultowy ramen serwowany na ulicy, na matach tatami, pod wielkim rzeźbionym smokiem." },
        { name: "Rikuro Ojisan no Mise", type: "Deser", rating: "4.5", reviewCount: "8000+", desc: "Słynny, puszysty i niesamowicie trzęsący się sernik japoński (na wynos)." },
        { name: "551 Horai", type: "Bao", rating: "4.2", reviewCount: "2000+", desc: "Tanie, sycące i niesamowicie smaczne gorące bułeczki na parze z mięsem wieprzowym (Butaman)." },
        { name: "Ajinoya", type: "Okonomiyaki", rating: "4.2", reviewCount: "2500+", desc: "Znakomite miejsce z odznaczeniem Bib Gourmand za świetne omlety z kapustą." },
        { name: "Harukoma Sushi", type: "Sushi", rating: "4.4", reviewCount: "2000+", desc: "Bardzo lubiane lokalne sushi z wyjątkowo grubymi kawałkami ryb. Ulokowane przy handlowej ulicy Tenma." },
        { name: "Yakitori no Meimon Akiyoshi", type: "Yakitori", rating: "4.3", reviewCount: "1500+", desc: "Tanie i przepyszne szaszłyki z kurczaka, perfekcyjne jako przekąska do zimnego piwa." },
        { name: "Chibo Dotonbori", type: "Okonomiyaki", rating: "4.0", reviewCount: "3000+", desc: "Wielka, kilkupiętrowa restauracja serwująca okonomiyaki i yakisobę – klasyk Dotonbori." }
      ],
      shoppingTips: [
        {
          title: "Oryginalne japońskie ubrania i T-shirty",
          intro: "Osaka może być nawet lepsza cenowo niż Tokio! Najlepszym rejonem na modowe zakupy jest Shinsaibashi oraz Amerikamura (młodzieżowa dzielnica pełna second-handów i streetwearu). <b>Pamiętaj o paszporcie</b> do zakupów tax-free powyżej 5 500 JPY z podatkiem.",
          places: [
            { name: "Graniph (Shinsaibashi)", desc: "Koszulki graficzne i anime z oryginalnym, świetnym designem (ok. 2900 JPY)." },
            { name: "WEGO (Amerikamura)", desc: "Ogromny wybór taniego streetwearu, czapek i oversize'owych ubrań dla nastolatków." },
            { name: "2nd Street (różne lokacje)", desc: "W Osace perełki vintage można wyłowić znacznie taniej niż w Tokio. Ceny startują często już od 300 JPY." },
            { name: "UNIQLO / GU", desc: "Klasyki na szybkie zakupy basiców i tanich czapek (od 590-990 JPY)." }
          ]
        }
      ],
      options: ["Kobe Animal Kingdom", "Suma Beach", "Universal Studios Japan", "drugi dzień w Kyoto"]
    },
    seoul: {
      name: "Seul i okolice",
      kicker: "K-pop, technologia i pałace",
      dates: "30 sierpnia – 5 września (6 nocy)",
      intro: "Hipernowoczesna stolica Korei Południowej. Szybkie życie, przepyszne jedzenie, wszechobecna kultura k-popowa i doskonale zachowane pałace dynastii Joseon.",
      image: "assets/images/seoul.webp",
      color: "var(--brand-teal)",
      history: {
        title: "Tło: Cud nad rzeką Han",
        content: "<p>Seul to miasto-feniks. Przez 500 lat był potężną stolicą wielkiej dynastii <strong>Joseon</strong>, po której w samym sercu miasta zachowało się pięć wspaniałych pałaców królewskich (w tym słynny Gyeongbokgung). Na początku XX wieku miasto, jak i cała Korea, ucierpiało podczas ciężkiej japońskiej aneksji.</p><p>Prawdziwa tragedia nadeszła jednak w trakcie niszczycielskiej <strong>wojny koreańskiej</strong> (1950–1953). Seul został niemal całkowicie zrównany z ziemią, przechodząc z rąk do rąk walczących armii aż cztery razy. Od tego czasu Seul doświadczył tzw. <em>\"Cudu nad rzeką Han\"</em> – błyskawicznego, bezprecedensowego w skali świata wzrostu gospodarczego. Z wojennych zgliszcz narodziło się jedno z najbardziej technologicznie zaawansowanych, zamożnych i kulturotwórczych (K-Pop, K-Drama) miejsc na Ziemi.</p>"
      },
      map: { center: [37.5665, 126.992], zoom: 11 },
      places: [
        { name: "Baza: Dongdaemun / Jung-gu", coords: [37.565, 127.012], type: "stay" },
        { name: "Hongdae", coords: [37.5563, 126.9236], type: "must" },
        { name: "Myeongdong", coords: [37.5636, 126.9869], type: "visit" },
        { name: "Gyeongbokgung", coords: [37.5796, 126.977], type: "visit" },
        { name: "N Seoul Tower", coords: [37.5512, 126.9882], type: "visit" },
        { name: "COEX / Gangnam", coords: [37.5125, 127.059], type: "visit" },
        { name: "Suwon (opcja)", coords: [37.285, 127.01], type: "option" }
      ],
      days: [
        { date: "30.08", day: "Niedziela", title: "Pierwszy wieczór w Korei", text: "Przylot, transfer, zameldowanie od 16:00. Krótki wieczór w Dongdaemun lub Myeongdong.", cost: "₩₩", pace: "lekko", details: { image: "assets/images/seoul_days/dongdaemun.jpg", desc: "Z lotniska Incheon dojedziemy szybkimi pociągami AREX lub metrem bezpośrednio do centrum. Po zameldowaniu w hotelu (od 16:00) czeka nas luźny wieczór. Idealny moment na pierwsze koreańskie jedzenie w okolicy Dongdaemun lub Myeongdong, gdzie zobaczymy futurystyczny budynek DDP i tłumy ludzi.", transport: "Z ICN najlepiej wziąć pociąg AREX do stacji Seoul Station, a stamtąd metro linii 4 (niebieska) w kierunku Dongdaemun." } },
        { date: "31.08", day: "Poniedziałek", title: "K-pop i Hongdae", text: "Sklepy albumowe, photo booths, street dance, Yeonnam-dong i wieczorne jedzenie.", cost: "₩₩", pace: "średnio", must: true, details: { image: "assets/images/seoul_days/hongdae.jpg", desc: "Dzień dedykowany młodzieżowej kulturze! W Hongdae skupimy się na k-popie: odwiedzimy sklepy z albumami muzycznymi, zrobimy pamiątkowe zdjęcia w koreańskich photo booths, a wieczorem posłuchamy i zobaczymy ulicznych artystów (busking i street dance). Możemy też zjeść popularne corndogi.", transport: "Dojazd metrem linią 2 (zielona), stacja Hongik University." } },
        { date: "01.09", day: "Wtorek", title: "Tradycyjny Seul", text: "Gyeongbokgung, Bukchon Hanok Village i Insadong. Hanbok zostaje opcją.", cost: "₩₩", pace: "dużo chodzenia", details: { image: "assets/images/seoul_days/gyeongbokgung.jpg", desc: "Odkrywamy historyczną stronę Korei. Zwiedzimy największy pałac Gyeongbokgung, zobaczymy tradycyjne domki w wiosce Bukchon Hanok oraz przespacerujemy się artystyczną ulicą Insadong. Wypożyczenie hanboka jest super opcją na świetne zdjęcia, ale zadecydujemy na miejscu w zależności od pogody i chęci (przy dużej wilgotności może być w nim gorąco).", transport: "Najlepiej podjechać metrem linii 3 (pomarańczowa) do stacji Gyeongbokgung (wyjście 5) lub Anguk." } },
        { date: "02.09", day: "Środa", title: "Gangnam i COEX", text: "Starfield Library, Gangnam i nowoczesna strona miasta. Dzień łatwy do skrócenia.", cost: "₩₩", pace: "średnio", details: { image: "assets/images/seoul_days/gangnam.jpg", desc: "Przekraczamy rzekę Han, by zobaczyć nowoczesny i bogaty Gangnam. Głównym punktem będzie słynna, dwupiętrowa biblioteka Starfield Library w centrum handlowym COEX, gdzie można zrobić niesamowite zdjęcia. Okolica pełna jest wieżowców, szerokich alei, neonów i drogich butików.", transport: "Dojazd metrem linią 2 (zielona) bezpośrednio do stacji Samseong (COEX) lub Gangnam." } },
        { date: "03.09", day: "Czwartek", title: "Namsan i widoki", text: "Spacer po Namsan, N Seoul Tower bez konieczności płatnego wjazdu, street food i Myeongdong.", cost: "₩ / ₩₩", pace: "średnio", details: { image: "assets/images/seoul_days/namsan.jpg", desc: "Wyjście na wzgórze Namsan (możemy podjechać autobusem Namsan Sunhwan lub wjechać kolejką linową). Pod samą wieżą N Seoul Tower rozciągają się przepiękne widoki na całe miasto – płatny wjazd na taras nie jest konieczny! Po zejściu zahaczymy o Myeongdong na słynny koreański street food.", transport: "Na wzgórze Namsan kursują specjalne żółte autobusy elektryczne (nr 01) ze stacji Chungmuro lub Dongguk Univ." } },
        { date: "04.09", day: "Piątek", title: "Dzień elastyczny", text: "Powrót do ulubionych miejsc, zakupy i pakowanie. Opcjonalnie tani day trip do Suwon.", cost: "₩ / ₩₩", pace: "elastycznie", details: { image: "assets/images/seoul_days/hongdae.jpg", desc: "Ostatni pełny dzień traktujemy elastycznie. Jeśli będzie chęć na krótką wycieczkę za miasto, pojedziemy metrem do Suwon, by przejść się murami twierdzy Hwaseong. Jeśli wolicie zostać na miejscu, wrócimy na zakupy (np. kosmetyki czy k-pop w Hongdae/Myeongdong) i zaczniemy pakować walizki.", transport: "Do Suwon dojeżdża bezpośrednio linia metra nr 1, podróż zajmuje ok. godziny. Na miejscu poruszamy się lokalnymi autobusami." } },
        { date: "05.09", day: "Sobota", title: "ICN → Warszawa", text: "Wymeldowanie do 11:00. Wyjazd na ICN odpowiednio wcześnie; LO100 startuje o 12:35.", cost: "₩", pace: "transfer", details: { image: "assets/images/seoul_days/icn.jpg", desc: "Koniec naszej azjatyckiej przygody! Wymeldowanie nastąpi do 11:00, ale my będziemy musieli wyjechać z hotelu znacznie wcześniej. Nasz lot (LO 100) startuje o 12:35, więc na lotnisku Incheon (ICN) musimy być ok. 9:30-10:00 rano.", transport: "Z hotelu musimy sprawnie dostać się na stację Seoul Station z walizkami, a potem szybkim pociągiem ekspresowym AREX na lotnisko Incheon (Terminal 1)." } }
      ],
      restaurants: [
        { name: "Myeongdong Kyoja", type: "Kalguksu", rating: "4.4", reviewCount: "15000+", desc: "Legendarna zupa z domowym makaronem ciętym nożem i wspaniałymi pierożkami mandu." },
        { name: "Isaac Toast", type: "Śniadanie", rating: "4.5", reviewCount: "5000+", desc: "Kultowe i niezwykle tanie koreańskie tosty na słodko-słono. Idealne na pyszne śniadanie do ręki." },
        { name: "Gwangjang Market", type: "Street Food", rating: "4.3", reviewCount: "30000+", desc: "Hala pełna tanich i autentycznych stoisk. Warto spróbować placków z fasoli mung (Bindaetteok) i kimbap." },
        { name: "Jinokhwa Halmae", type: "Dakhanmari", rating: "4.2", reviewCount: "6000+", desc: "Pożywny, gotowany na środku stołu cały kurczak w aromatycznym rosole w sercu Dongdaemun." },
        { name: "Tosokchon Samgyetang", type: "Zupa z kurczaka", rating: "4.2", reviewCount: "8000+", desc: "Znana zupa z młodego kurczaka faszerowanego ryżem i żeń-szeniem, tuż obok pałacu Gyeongbokgung." },
        { name: "Kyochon Chicken", type: "Chimaek", rating: "4.3", reviewCount: "2500+", desc: "Koreański smażony kurczak i piwo (Chimaek). Kyochon to absolutny klasyk z pysznym miodowym sosem." },
        { name: "Hwangsaengga Kalguksu", type: "Kalguksu", rating: "4.1", reviewCount: "3000+", desc: "Nagrodzony przez Michelina pyszny i niedrogi domowy makaron oraz pierożki tuż przy wiosce Bukchon." },
        { name: "Sinseon Seolleongtang", type: "Zupa", rating: "4.1", reviewCount: "4000+", desc: "Kojący, kremowy wywar na kościach wołowych serwowany z cienkimi plasterkami pysznego mięsa." },
        { name: "Yoogane Dakgalbi", type: "Dakgalbi", rating: "4.1", reviewCount: "2500+", desc: "Smażony z ostrym sosem kurczak, kapusta i warzywa. Wymieszane na patelni i przykryte serem." },
        { name: "Wangbijib Myeongdong", type: "K-BBQ", rating: "4.4", reviewCount: "3500+", desc: "Wysokiej jakości koreański grill (K-BBQ) przyjazny obcokrajowcom. Warto zjeść tanie zestawy lunchowe." }
      ],
      shoppingTips: [
        {
          title: "Gdzie po albumy K-pop (np. ILLIT)?",
          intro: "Wasza baza przy Dongdaemun to idealne miejsce wypadowe do Myeongdong – zagłębia k-popowego. Orientacyjne ceny: album ok. 43–47 zł, mniejsza wersja (np. GLLIT) 25–34 zł, lightstick ~109 zł. (Przebitka: 10 000 KRW ≈ 24-25 zł).<br>W sklepie możesz zapytać: <b>'아일릿 앨범 있어요?'</b> (Czy macie album ILLIT?).",
          places: [
            { name: "WITHMUU Myeongdong", desc: "Najlepszy pierwszy strzał (16 Myeongdong 7-gil). Zazwyczaj 11:00-21:00. Dużo albumów, oficjalne gadżety, czasem eventy i lucky draws." },
            { name: "MusicKorea Myeongdong 2nd Branch", desc: "Świetny sklep stricte z albumami. (134 Toegye-ro, blisko popularnego Daiso)." },
            { name: "Myeongdong Underground / C.T.Record / K-MECCA", desc: "Podziemia przy stacji Myeongdong to raj na tańsze albumy, breloczki i setki photocardów dla fanów." },
            { name: "Ktown4u COEX", desc: "Gigantyczny kompleks K-pop, jeśli akurat zwiedzacie Gangnam/COEX. Adres: 513 Yeongdong-daero." }
          ]
        }
      ],
      options: ["Suwon i Hwaseong", "Lotte World", "hanbok", "płatny wjazd na N Seoul Tower"]
    }
  },
  budget: {
    fixed: [
      { label: "Loty główne 2+2", amount: 13114.64, status: "paid", note: "dorośli 2 × 3 539,66 zł; dzieci 2 × 3 017,66 zł" },
      { label: "Nocleg Tokio · 4 noce", amount: 1462, status: "reserved" },
      { label: "Nocleg Osaka · 5 nocy", amount: 680.27, status: "reserved" },
      { label: "Nocleg Seul · 6 nocy", amount: 1981, status: "reserved" },
      { label: "Tokio → Osaka", amount: 1012, status: "planned", note: "budżet wg Shinkansenu Nozomi (Smart EX): 43 540 ¥ dla 2+2" },
      { label: "KIX → Seul", amount: 1700, status: "planned", note: "maksymalny budżet" },
      { label: "2 × regionalna eSIM · Japonia + Korea", amount: 46.40, status: "planned", note: "2 × 6,20 USD · każda: 10 GB / 15 dni · kurs NBP 3,7420 PLN/USD z 03.07.2026" },
      { label: "Pociąg WAW → GDN po powrocie", amount: 200, status: "planned", note: "05.09 · cel: odjazd około 20:29/20:30" }
    ],
    envelopes: [
      { label: "Jedzenie", amount: 6800, icon: "🍜" },
      { label: "Transport lokalny", amount: 2100, icon: "🚇" },
      { label: "Atrakcje", amount: 1600, icon: "🎟️" },
      { label: "Pamiątki + 1 album K-pop", amount: 500, icon: "🛍️" }
    ]
  },
  todos: [
    { title: "Kupić bilety Tokio → Osaka", detail: "25.08 · Shinkansen Nozomi (Smart EX) · 43 540 ¥", priority: "high", category: "transport" },
    { title: "Kupić lot KIX → Seul", detail: "30.08 · najlepiej 11:00–15:00 · limit 1 700 zł", priority: "high", category: "transport" },
    { title: "Kupić Tokyo Disneyland", detail: "24.08 · bilety 2+2", priority: "high", category: "attractions" },
    { title: "Zaplanować bagaż kabinowy", detail: "Bilety LOT mają 0PC bagażu rejestrowanego", priority: "high", category: "logistics" },
    { title: "Wybrać 4 plecaki kabinowe", detail: "Rozważany rozmiar 55×40×20 cm; zważyć każdy po próbnym pakowaniu", priority: "medium", category: "logistics" },
    { title: "Kupić i aktywować 2 regionalne eSIM", detail: "Każda: 10 GB · 15 dni · Japonia i Korea · 6,20 USD", priority: "medium", category: "logistics" },
    { title: "Ubezpieczenie podróżne", detail: "Japonia + Korea · cała rodzina", priority: "medium", category: "logistics" },
    { title: "Transfer NRT → nocleg", detail: "Dopiąć po potwierdzeniu dokładnej lokalizacji", priority: "medium", category: "transport" },
    { title: "Transfer nocleg → KIX", detail: "Sprawdzić trasę i godzinę po zakupie lotu", priority: "medium", category: "transport" },
    { title: "Transfer Seul → ICN", detail: "LO100 odlatuje 05.09 o 12:35", priority: "medium", category: "transport" },
    { title: "Kupić pociąg WAW → Gdańsk", detail: "05.09 · celować w odjazd około 20:29/20:30; późniejszy pociąg jako awaryjny", priority: "high", category: "transport" },
    { title: "Zweryfikować zakres obu ubezpieczeń", detail: "Revolut Metal + karta Żubr: osoby objęte ochroną, limity, warunki i sporty", priority: "medium", category: "logistics" },
    { title: "Sprawdzić Priority Pass", detail: "Salony na trasie, wejścia dla dzieci i gości oraz ewentualne opłaty", priority: "low", category: "logistics" },
    { title: "Zainstalować aplikacje podróżne", detail: "Japonia: Maps, Translate, Disney; Korea: Naver Map, Papago, Kakao T", priority: "medium", category: "logistics" },
    { title: "Zdecydować o atrakcjach opcjonalnych", detail: "teamLab, Kobe Animal Kingdom, Suwon, Lotte World", priority: "low", category: "attractions" },
    { title: "Pranie podczas podróży", detail: "Ważne przy małym bagażu i sierpniowym upale", priority: "low", category: "logistics" }
  ],
  photoCredits: [
    { place: "Tokio", author: "Jorge Láscar", license: "CC BY 3.0", url: "https://commons.wikimedia.org/wiki/File:Shibuya_at_dusk_-_Tokyo_-_Japan.jpg" },
    { place: "Osaka", author: "Martin Falbisoner", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Dotonbori,_Osaka,_at_night,_November_2016.jpg" },
    { place: "Seul", author: "Jimmy McIntyre", license: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Seoul_Skyline_from_Namsan_(6907572103).jpg" }
  ]
};

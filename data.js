/* Główne źródło danych strony. Większość aktualizacji podróży robimy tutaj. */
window.TRIP_DATA = {
  meta: {
    title: "Japonia + Korea 2026",
    start: "2026-08-20T18:25:00+02:00",
    end: "2026-09-05T18:30:00+02:00",
    travelers: "2 dorosłych + dzieci 9 i 10 lat",
    budgetLimit: 30000
  },
  route: [
    { code: "GDN", city: "Gdańsk", date: "20.08", status: "confirmed" },
    { code: "WAW", city: "Warszawa", date: "20.08", status: "confirmed" },
    { code: "NRT", city: "Tokio", date: "21.08", status: "confirmed" },
    { code: "HND", city: "Tokio", date: "25.08", status: "decision" },
    { code: "ITM", city: "Osaka", date: "25.08", status: "decision" },
    { code: "KIX", city: "Osaka", date: "30.08", status: "planned" },
    { code: "SEL", city: "Seul", date: "30.08", status: "planned" },
    { code: "ICN", city: "Seul", date: "05.09", status: "confirmed" },
    { code: "WAW", city: "Warszawa", date: "05.09", status: "confirmed" },
    { code: "GDN", city: "Gdańsk", date: "05.09", status: "planned" }
  ],
  flights: [
    { date: "20.08", route: "GDN → WAW", number: "LO3816", time: "18:25–19:20", status: "confirmed" },
    { date: "20–21.08", route: "WAW → NRT", number: "LO79", time: "22:50–18:25 (+1)", status: "confirmed" },
    { date: "25.08", route: "Tokio → Osaka", number: "Lot HND–ITM lub Shinkansen", time: "do decyzji", status: "decision" },
    { date: "30.08", route: "KIX → GMP/ICN", number: "lot bezpośredni", time: "najlepiej 11:00–15:00", status: "planned" },
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
  stays: {
    tokyo: { name: "7House", dates: "21–25.08", nights: 4, price: 1462, area: "Adachi-ku, Tokio", address: "〒120-0015 東京都足立区足立3-8-5", check: "15:00 / 11:00", image: "assets/images/hotels/7house.webp", bookingUrl: "https://www.booking.com/hotel/jp/narita-haneda-airport-is-convenient-quiet-homestay.html", mapUrl: "https://www.google.com/maps/search/?api=1&query=東京都足立区足立3-8-5" },
    kansai: { name: "SunriseHouse TD501", dates: "25–30.08", nights: 5, price: 680.27, area: "Teradacho, Tennoji-ku, Osaka", address: "〒543-0052 大阪府大阪市天王寺区大道4丁目9-3 エスタピア寺田町 TD501", check: "16:00 / 10:00", image: "assets/images/hotels/sunrisehouse.webp", bookingUrl: "https://www.booking.com/hotel/jp/nearest-jr-teradacho-station-3-minutes-on-foot-direct-access-to-umeda-osaka-cast.html", mapUrl: "https://www.google.com/maps/search/?api=1&query=大阪府大阪市天王寺区大道4丁目9-3" },
    seoul: { name: "Soft Minimal 2BR Home near Dongdaemun", dates: "30.08–05.09", nights: 6, price: 1981, area: "Dongdaemun / Jung-gu, Seul", address: "중구 다산로39가길 8, 2층 202호, 서울 04612", check: "16:00 / 11:00", image: "assets/images/hotels/seoul-home.webp", bookingUrl: "https://www.booking.com/hotel/kr/cozy-2br-home-near-ddp-myeongdong-dongdaemun.html", mapUrl: "https://www.google.com/maps/search/?api=1&query=서울 중구 다산로39가길 8" }
  },
  destinations: {
    tokyo: {
      name: "Tokio", kicker: "Neony, topki i Disney", dates: "21–25 sierpnia · 4 noce", image: "assets/images/tokyo.webp", color: "#ff5a68",
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
        { date: "25.08", day: "Wtorek", title: "Tokio → Osaka", text: "Wymeldowanie, lekki poranek i przejazd na HND albo stację Shinkansenu. Wybór transportu pozostaje otwarty.", cost: "?", pace: "transfer", details: { image: "assets/images/tokyo_days/shinkansen.jpg", desc: "Opuszczamy Tokio i ruszamy na południe, do regionu Kansai! Rano spokojnie się wymeldujemy. Trasę Tokio-Osaka (około 500 km) pokonamy super-szybkim pociągiem Shinkansen, co potrwa około 2.5 godziny, lub samolotem z lotniska Haneda.", transport: "Jeśli wybierzemy pociąg: Shinkansen Nozomi ze stacji Tokyo lub Shinagawa bezpośrednio do stacji Shin-Osaka." } }
      ],
      options: ["teamLab Borderless", "Odaiba", "Tokyo Skytree", "Ueno Zoo"]
    },
    kansai: {
      name: "Osaka + Kansai", kicker: "Osaka, Kyoto, Nara i opcjonalnie Kobe", dates: "25–30 sierpnia · 5 nocy", image: "assets/images/osaka.webp", color: "#f6a23c",
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
        { date: "25.08", day: "Wtorek", title: "Przyjazd do Osaki", text: "Transfer do Teradacho, zameldowanie od 16:00 i pierwszy wieczór z jedzeniem w okolicy lub Dotonbori.", cost: "¥¥", pace: "transfer" },
        { date: "26.08", day: "Środa", title: "Kyoto: pocztówkowa Japonia", text: "Fushimi Inari wcześnie rano, Kiyomizu-dera, uliczki Higashiyamy i Gion wieczorem.", cost: "¥¥", pace: "dużo chodzenia", must: true },
        { date: "27.08", day: "Czwartek", title: "Osaka: jedzenie i neony", text: "Kuromon Market, Namba, Dotonbori, Den Den Town i salony arcade. Osaka Castle opcjonalnie z zewnątrz.", cost: "¥¥", pace: "średnio" },
        { date: "28.08", day: "Piątek", title: "Nara i jelonki", text: "Nara Park, Todai-ji i spokojny rodzinny spacer. Karmimy jelonki wyłącznie specjalnymi krakersami.", cost: "¥¥", pace: "średnio", must: true },
        { date: "29.08", day: "Sobota", title: "Bufor: Osaka albo Kobe", text: "Tani dzień w Osace. Opcjonalnie Kobe Animal Kingdom, Suma Beach albo dodatkowy dzień w Kyoto.", cost: "¥ / ¥¥¥", pace: "elastycznie" },
        { date: "30.08", day: "Niedziela", title: "Osaka → Seul", text: "Wymeldowanie do 10:00, dojazd na KIX i bezpośredni lot do GMP lub ICN. Limit lotu: 1 700 zł za rodzinę.", cost: "do 1 700 zł", pace: "transfer" }
      ],
      options: ["Kobe Animal Kingdom", "Suma Beach", "Universal Studios Japan", "drugi dzień w Kyoto"]
    },
    seoul: {
      name: "Seul", kicker: "K-pop, widoki i koreańskie jedzenie", dates: "30 sierpnia – 5 września · 6 nocy", image: "assets/images/seoul.webp", color: "#5b8cff",
      intro: "Sześć nocy w jednej bazie blisko Dongdaemun. Plan łączy K-pop, tradycyjną Koreę, nowoczesne dzielnice i dzień bez pośpiechu.",
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
      options: ["Suwon i Hwaseong", "Lotte World", "hanbok", "płatny wjazd na N Seoul Tower"]
    }
  },
  budget: {
    fixed: [
      { label: "Loty główne 2+2", amount: 13114.64, status: "paid", note: "dorośli 2 × 3 539,66 zł; dzieci 2 × 3 017,66 zł" },
      { label: "Nocleg Tokio · 4 noce", amount: 1462, status: "reserved" },
      { label: "Nocleg Osaka · 5 nocy", amount: 680.27, status: "reserved" },
      { label: "Nocleg Seul · 6 nocy", amount: 1981, status: "reserved" },
      { label: "Tokio → Osaka", amount: 1026.15, status: "decision", note: "budżet wg Shinkansenu Nozomi: 44 160 JPY dla 2+2; lot HND–ITM około 833 zł" },
      { label: "KIX → Seul", amount: 1700, status: "planned", note: "maksymalny budżet" },
      { label: "2 × regionalna eSIM · Japonia + Korea", amount: 46.40, status: "planned", note: "2 × 6,20 USD · każda: 10 GB / 15 dni · kurs NBP 3,7420 PLN/USD z 03.07.2026" },
      { label: "Pociąg WAW → GDN po powrocie", amount: 200, status: "planned", note: "05.09 · cel: odjazd około 20:29/20:30" }
    ],
    envelopes: [
      { label: "Jedzenie", amount: 4800, icon: "🍜" },
      { label: "Transport lokalny", amount: 2100, icon: "🚇" },
      { label: "Atrakcje", amount: 1600, icon: "🎟️" },
      { label: "Pamiątki + 1 album K-pop", amount: 500, icon: "🛍️" }
    ]
  },
  todos: [
    { title: "Wybrać: lot czy Shinkansen", detail: "Tokio → Osaka · 25.08", priority: "high", category: "transport" },
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

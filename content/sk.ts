// Všetky slovenské texty webu na jednom mieste. Komponenty ich len zobrazujú.
// Český (cz.ts) a anglický (en.ts) slovník majú presne rovnakú štruktúru.
// Odkazy sa zadávajú kľúčom stránky (`to`), adresu v danom jazyku doplní lib/i18n.ts.

import type { RouteKey } from "@/lib/i18n";

type Link = { label: string; to: RouteKey; hash?: string };

export const sk = {
  site: {
    tagline: "Automatizácia procesov a AI pre firmy",
    description:
      "Novorsa mapuje, kde vaša firma stráca čas ručnou prácou, a zavádza automatizáciu, AI a prepojenie systémov tam, kde sa to oplatí.",
    country: "Slovenská republika",
    register: "zapísaná v Obchodnom registri Mestského súdu Bratislava III, oddiel: Sro, vložka č. 170377/B",
    ogAlt: "Novorsa – automatizácia procesov a AI pre firmy",
  },

  meta: {
    home: { title: "Automatizácia procesov a AI pre firmy", description: "" },
    solutions: {
      title: "Riešenia",
      description: "Automatizácia a AI pre obchod, HR, financie, prevádzku, nákup a vedenie firmy. Firemné aplikácie na mieru.",
    },
    process: {
      title: "Ako pracujeme",
      description: "Od úvodného rozhovoru cez audit a pilot až po zavedenie. Postup v šiestich krokoch a časté otázky.",
    },
    calculator: {
      title: "Kalkulačka úspory času",
      description: "Vyčíslite, koľko hodín ročne vám berie jeden opakovaný proces a akú kapacitu môže automatizácia uvoľniť.",
    },
    about: {
      title: "O nás",
      description: "Novorsa spája prax v ekonomickom a HR poradenstve s automatizáciou procesov a AI.",
    },
    apps: {
      title: "Aplikácie na mieru",
      description: "Firemné aplikácie na mieru: interné nástroje, klientske portály, webové a mobilné aplikácie napojené na vaše systémy.",
    },
    contact: { title: "Kontakt", description: "Dohodnite si úvodnú konzultáciu zadarmo. Ozveme sa do dvoch pracovných dní." },
    privacy: { title: "Ochrana osobných údajov", description: "Ako Novorsa spracúva osobné údaje z kontaktného formulára a webu." },
    cookies: { title: "Cookies", description: "Aké cookies používa web Novorsa a ako môžete zmeniť svoj súhlas." },
  },

  ui: {
    skipLink: "Preskočiť na obsah",
    logoAria: "Novorsa – úvodná stránka",
    navAria: "Hlavná navigácia",
    mobileNavAria: "Mobilná navigácia",
    menuOpen: "Otvoriť menu",
    menuClose: "Zavrieť menu",
    headerCta: "Konzultácia zadarmo",
    langSwitchAria: "Jazyk webu",
    more: "Viac",
    open: "Otvoriť",
    howItWorks: "Ako to funguje",
  },

  nav: [
    { label: "Riešenia", to: "solutions" },
    { label: "Aplikácie", to: "apps" },
    { label: "Ako pracujeme", to: "process" },
    { label: "Kalkulačka", to: "calculator" },
    { label: "O nás", to: "about" },
    { label: "Kontakt", to: "contact" },
  ] as Link[],

  footer: {
    tagline: "Automatizácia procesov a AI pre firmy. Najprv biznis a návratnosť, potom technológia.",
    solutions: "Riešenia",
    company: "Firma",
    contact: "Kontakt",
    links: [
      { label: "Ako pracujeme", to: "process" },
      { label: "Úspešné projekty", to: "solutions", hash: "ukazky" },
      { label: "Kalkulačka úspory času", to: "calculator" },
      { label: "Časté otázky", to: "process", hash: "otazky" },
      { label: "O nás", to: "about" },
      { label: "Kontakt", to: "contact" },
    ] as Link[],
    privacy: "Ochrana osobných údajov",
    cookies: "Cookies",
  },

  hero: {
    eyebrow: "Automatizácia procesov a AI pre firmy",
    title: "Vaši ľudia robia prácu, ktorú môže",
    titleAccent: "robiť technológia.",
    lead: "Zmapujeme, kde vaša firma stráca čas ručnou prácou, a zavedieme automatizáciu, AI a prepojenie systémov tam, kde sa to naozaj oplatí. Najprv biznis a návratnosť, potom technológia.",
    primaryCta: { label: "Požiadať o konzultáciu", to: "contact" } as Link,
    secondaryCta: { label: "Ako pracujeme", to: "process" } as Link,
    note: "Úvodná konzultácia je zadarmo a nezáväzná.",
    flow: {
      aria: "Príklad automatizovaného procesu: generovanie obchodných leadov od vyhľadania firmy po zápis do CRM",
      top: "Automatizovaný proces · obchodné leady",
      live: "Ukážka procesu",
      steps: [
        { title: "Vyhľadanie potenciálnych klientov", meta: "registre · weby · databázy podľa vašich kritérií", tag: "AI", kind: "ai" },
        { title: "Analýza spoločnosti", meta: "finančné zdravie · história · plánované aktivity", tag: "AI", kind: "ai" },
        { title: "Schválenie obchodníkom", meta: "vyhodnotenie leadu jedným kliknutím", tag: "človek", kind: "human" },
        { title: "Príprava podkladov a postupu", meta: "profil firmy · návrh oslovenia", tag: "AI", kind: "ai" },
        { title: "Zápis do CRM", meta: "kompletná história a tracking", tag: "hotovo", kind: "done" },
      ] as { title: string; meta: string; tag: string; kind: "ai" | "human" | "done" }[],
      stats: [
        { strong: "Automatické vyhľadávanie", text: "beží priebežne" },
        { strong: "Každý lead", text: "schvaľuje obchodník" },
        { strong: "Prehľad všetkých krokov", text: "minimum administratívy" },
      ],
    },
  },

  trust: {
    aria: "Na čom si zakladáme",
    items: [
      { title: "Dáta v EÚ", text: "Kde je to možné, spracúvame dáta na serveroch v Európskej únii." },
      { title: "Riešenie patrí vám", text: "Žiadna závislosť od nás. Dostanete prístupy aj dokumentáciu." },
      { title: "Človek má posledné slovo", text: "Kritické kroky vždy schvaľuje zodpovedná osoba." },
      { title: "SK · CZ · EN", text: "Pracujeme po slovensky, česky aj anglicky." },
    ],
  },

  caseTeaser: {
    eyebrow: "Z praxe",
    title: "Automatizované spracovanie obchodných leadov",
    text: "Firma v oblasti služieb so 100 zamestnancami. Nové leady sa samé zozbierajú, vyhodnotia, zapíšu do CRM a priradia obchodníkovi.",
    link: "Všetky úspešné projekty",
    stats: [
      { dt: "ušetrí každý obchodník", dd: "5 hodín týždenne" },
      { dt: "implementácia", dd: "2 dni" },
      { dt: "zamestnancov", dd: "100" },
    ],
  },

  pains: {
    eyebrow: "Kde sa stráca čas",
    title: "Spoznáte v tom svoju firmu?",
    lead: "Väčšina firiem nestráca čas na veľkých veciach, ale na desiatkach malých úkonov, ktoré sa opakujú každý deň.",
    items: [
      { title: "Prepisovanie údajov", text: "Údaje z e-mailov, PDF a tabuliek sa ručne prenášajú do systémov." },
      { title: "Schvaľovanie rôznymi kanálmi", text: "Žiadosti, objednávky a faktúry putujú cez preposielané e-maily, správy a ďalšie kanály a nikto nevie, kde sa zasekli." },
      { title: "Reporty na celý deň", text: "Prehľady pre vedenie sa každý mesiac skladajú ručne z niekoľkých zdrojov." },
      { title: "Pomalá odpoveď klientom", text: "Dopyty a leady čakajú na reakciu príliš dlho a časť z nich sa stratí." },
      { title: "Údaje, ktoré si odporujú", text: "Rovnaké údaje žijú v CRM, účtovníctve a tabuľkách a navzájom nesedia." },
      { title: "HR a administratíva", text: "Životopisy, nástupy a žiadosti zamestnancov zaberajú ľuďom väčšinu dňa." },
    ],
  },

  beforeAfter: {
    eyebrow: "Pred a po",
    title: "Ten istý proces, dva spôsoby",
    lead: "Na príklade generovania obchodných leadov: od vyhľadania firmy po zápis do CRM.",
    beforeLabel: "Dnes",
    afterLabel: "S automatizáciou",
    before: [
      "Potenciálnych klientov obchodníci hľadajú ručne",
      "Informácie o firmách sa zbierajú z rôznych portálov",
      "Podklady sú neúplné a každý ich pripravuje inak",
      "Údaje sa do CRM zapisujú ručne, ak vôbec",
    ],
    after: [
      "AI priebežne vyhľadáva firmy podľa vašich kritérií",
      "Ku každej pripraví analýzu: financie, vývoj, plánované aktivity",
      "Obchodník schváli lead a dostane podklady s návrhom postupu",
      "Všetko sa zapíše do CRM s kompletnou históriou",
    ],
    beforeFoot: "Viac času nad rešeršou než nad obchodom",
    afterFoot: "Viac času na reálny obchod",
    note: "Ilustračný príklad. Koľko času by ste ušetrili vy, si orientačne vyčíslite v",
    noteLink: "kalkulačke",
  },

  outcomes: {
    eyebrow: "Výsledok",
    title: "Čo sa zmení",
    mainTag: "Hlavný prínos každého projektu",
    items: [
      {
        title: "Kapacita pre prácu s pridanou hodnotou",
        text: "Rutinné úkony prevezmú automatizované procesy. Tím sa sústredí na činnosti, ktoré vyžadujú odborný úsudok a kontakt s klientom.",
      },
      {
        title: "Kratší čas reakcie",
        text: "Dopyty, žiadosti a schvaľovania sa spracúvajú priebežne, bez čakania vo frontách a e-mailových schránkach.",
      },
      {
        title: "Spoľahlivé a konzistentné údaje",
        text: "Údaje sa medzi systémami prenášajú automaticky. Klesá chybovosť a rozhodnutia stoja na rovnakých číslach.",
      },
      {
        title: "Transparentnosť a kontrola",
        text: "Každý krok má záznam o tom, kto, čo a kedy urobil. Úzke miesta v procese sú viditeľné včas.",
      },
      {
        title: "Rast bez rastu réžie",
        text: "Firma zvládne väčší objem zákaziek bez úmerného nárastu administratívy a back-office.",
      },
    ],
  },

  solutions: {
    eyebrow: "Riešenia",
    title: "Riešenia podľa oddelení",
    lead: "Automatizácia nie je projekt IT. Je to odpoveď na konkrétny problém konkrétneho oddelenia.",
    tabsAria: "Oddelenia",
    items: [
      {
        id: "obchod",
        label: "Obchod",
        title: "Viac kvalifikovaných leadov a efektívnejší obchodný proces",
        text: "AI priebežne vyhľadáva a vyhodnocuje potenciálnych klientov, pripraví analýzu firmy a návrh postupu. Obchodník sa venuje len tým najperspektívnejším.",
        examples: ["Vyhľadávanie a kvalifikácia leadov", "Analýza firmy pred prvým kontaktom", "Automatický zápis a follow-up v CRM", "Prehľad pipeline bez ručného zápisu"],
      },
      {
        id: "hr",
        label: "HR",
        title: "HR tím sa venuje ľuďom, nie papierom",
        text: "Od prvého životopisu po posledný deň v práci: opakované kroky bežia samé, rozhodnutia zostávajú na ľuďoch.",
        examples: ["Predvýber životopisov podľa kritérií", "Onboarding nového kolegu krok za krokom", "Žiadosti o dovolenku a dokumenty", "Odpovede na časté otázky zamestnancov"],
      },
      {
        id: "financie",
        label: "Financie",
        title: "Automatizované spracovanie dokladov",
        text: "Doklady sa prečítajú, priradia, pošlú na schválenie a zapíšu do účtovníctva. Človek rieši len výnimky.",
        examples: ["Vyťaženie údajov z faktúr", "Schvaľovanie výdavkov s históriou", "Párovanie platieb", "Mesačný reporting pre vedenie"],
      },
      {
        id: "prevadzka",
        label: "Prevádzka",
        title: "Riadenie procesov s prehľadom v každom kroku",
        text: "Rutinné úlohy bežia automaticky, informácie sa zbierajú na jednom mieste a dostanú sa k správnym ľuďom včas. Zákazky a projekty máte pod kontrolou od zadania po odovzdanie.",
        examples: ["Automatizácia rutinných úloh", "Zoskupovanie a odovzdávanie informácií medzi tímami", "Projektové riadenie zákaziek", "Prehľad o stave úloh a termínov"],
      },
      {
        id: "nakup",
        label: "Nákup a dodávatelia",
        title: "Nákup s prehľadom od dopytu po objednávku",
        text: "Dopyty sa rozpošlú automaticky, ponuky sa porovnajú na jednom mieste a objednávka prejde schválením bez naháňania.",
        examples: ["Rozposielanie dopytov dodávateľom", "Porovnanie cenových ponúk", "Schvaľovanie objednávok", "Prehľad o dodávateľoch a zmluvách"],
      },
      {
        id: "vedenie",
        label: "Vedenie",
        title: "Správne čísla, keď ich potrebujete",
        text: "Manažérske prehľady sa skladajú z vašich systémov automaticky a obsahujú aj stručné zhrnutie.",
        examples: ["Dashboardy z viacerých systémov", "Týždenné zhrnutie kľúčových čísel", "Upozornenia na riziká", "Podklady na porady bez príprav"],
      },
    ],
  },

  customApps: {
    id: "aplikacie",
    badge: "Vývoj na mieru",
    label: "Aplikácie na mieru",
    title: "Firemné aplikácie na mieru",
    teaser: "Keď hotové nástroje nestačia, vyvinieme aplikáciu presne pre váš proces.",
    text: "Keď hotové nástroje nestačia, navrhneme a vyvinieme aplikáciu presne pre váš proces. Spolu s naším vývojovým partnerom zabezpečíme celý projekt od návrhu až po spustenie a podporu.",
    types: [
      { title: "Interné aplikácie", text: "schvaľovanie, evidencie, plánovanie a nástroje pre tímy" },
      { title: "Klientske portály", text: "objednávky, dokumenty a stav zákaziek pre vašich klientov" },
      { title: "Webové a mobilné aplikácie", text: "pre zamestnancov v kancelárii aj v teréne" },
      { title: "Prepojenie systémov", text: "jedna aplikácia nad CRM, ERP a ďalšími nástrojmi" },
    ],
    points: ["Aplikácia patrí vám", "Napojená na systémy, ktoré už používate", "S AI tam, kde dáva zmysel"],
    cta: "Prebrať nápad na aplikáciu",
    more: "Viac o aplikáciách",
  },

  appsPage: {
    eyebrow: "Aplikácie na mieru",
    title: "Aplikácie, ktoré sedia na vaše procesy",
    lead: "Keď hotové nástroje nestačia, navrhneme a vyvinieme aplikáciu presne pre váš proces. Napojenú na systémy, ktoré už používate, s AI tam, kde dáva zmysel.",
    areasEyebrow: "Zameranie",
    areasTitle: "Kde aplikácie pomáhajú najviac",
    areasLead: "Aplikáciu postavíme pre akúkoľvek oblasť firmy. Najviac skúseností máme z HR, obchodu a financií. Príklady aplikácií, ktoré vieme postaviť:",
    areas: [
      { title: "HR", text: "Od náboru po nástup a každodennú agendu zamestnancov.", items: ["Onboarding nových zamestnancov", "Žiadosti a dokumenty zamestnancov", "Prehľad náboru a kandidátov", "Interný portál pre zamestnancov"] },
      { title: "Obchod", text: "Viac času na klientov, menej administratívy okolo obchodu.", items: ["Klientsky portál", "Príprava ponúk", "Prehľad obchodných príležitostí", "Rozšírenia CRM"] },
      { title: "Financie", text: "Doklady, schvaľovanie a čísla na jednom mieste.", items: ["Schvaľovanie výdavkov a objednávok", "Evidencia a spracovanie dokladov", "Reporting pre vedenie", "Prepojenie s účtovníctvom a ERP"] },
    ],
    processEyebrow: "Postup",
    processTitle: "Ako vzniká aplikácia",
    processLead: "Vyvíjame po častiach. Výsledok vidíte priebežne, nie až na konci.",
    steps: [
      { title: "Úvodný rozhovor", text: "Prejdeme, čo má aplikácia riešiť a pre koho. Zadarmo.", out: "Prvý odhad rozsahu" },
      { title: "Analýza a návrh", text: "Zmapujeme proces a navrhneme obrazovky a napojenia na vaše systémy.", out: "Návrh a pevná cena" },
      { title: "Vývoj po častiach", text: "Aplikáciu staviame po etapách a pravidelne vám ukazujeme hotové časti.", out: "Priebežné ukážky" },
      { title: "Testovanie s vašimi ľuďmi", text: "Aplikáciu vyskúšajú ľudia, ktorí s ňou budú pracovať.", out: "Overená aplikácia" },
      { title: "Spustenie a zaškolenie", text: "Spustíme aplikáciu, zaškolíme používateľov a odovzdáme dokumentáciu.", out: "Aplikácia v prevádzke" },
      { title: "Podpora a rozvoj", text: "Riešime požiadavky a aplikáciu ďalej rozvíjame podľa potreby.", out: "Dlhodobá podpora" },
    ],
    faqTitle: "Časté otázky k aplikáciám",
    faq: [
      { q: "Koľko stojí aplikácia na mieru?", a: "Závisí od rozsahu. Po analýze a návrhu dostanete pevnú cenu, ktorá sa bez vášho súhlasu nemení." },
      { q: "Ako dlho trvá vývoj?", a: "Podľa rozsahu aplikácie. Presný harmonogram dostanete spolu s návrhom a prvé funkčné časti uvidíte priebežne počas vývoja." },
      { q: "Komu patrí hotová aplikácia?", a: "Pri vývoji na mieru je aplikácia vaša. Vlastnícke práva a prístup k zdrojovému kódu presne upraví zmluva." },
      { q: "Dá sa aplikácia napojiť na naše systémy?", a: "Áno. Napájame aplikácie na Microsoft 365, CRM, ERP, účtovné, HR a náborové systémy cez API. Možnosti prepojenia overíme v analýze." },
      { q: "Kto aplikáciu vyvíja?", a: "Návrh a riadenie projektu robíme my, vývoj zabezpečujeme s naším overeným vývojovým partnerom. Máte jedného partnera, ktorý zodpovedá za celý výsledok." },
      { q: "Čo po spustení?", a: "Aplikáciu podporujeme, riešime požiadavky používateľov a podľa potreby ju ďalej rozvíjame." },
    ],
  },

  workProcess: {
    eyebrow: "Postup",
    title: "Ako pracujeme",
    lead: "Začíname malým, merateľným krokom. Ďalej pokračujeme len vtedy, keď prvý krok priniesol výsledok.",
    srTitle: "Postup v šiestich krokoch",
    steps: [
      { title: "Úvodný rozhovor", text: "30 minút o vašej firme a o tom, kde to najviac bolí. Zadarmo.", out: "Prvý odhad potenciálu" },
      { title: "Audit a vyčíslenie", text: "Zmapujeme procesy a ku každej príležitosti vyčíslime čas, náklady a náročnosť.", out: "Mapa príležitostí a plán" },
      { title: "Návrh riešenia", text: "Navrhneme postup, systémy a miesta, kde rozhoduje človek.", out: "Architektúra a rozpočet" },
      { title: "Pilot", text: "Jeden proces s najvyššou návratnosťou spustíme v ostrej prevádzke.", out: "Merateľný výsledok" },
      { title: "Zavedenie", text: "Rozšírime riešenie, zaškolíme ľudí a odovzdáme dokumentáciu.", out: "Riešenie patrí vám" },
      { title: "Monitoring a zlepšovanie", text: "Sledujeme chod, riešime výnimky a hľadáme ďalšie úspory.", out: "Pravidelný report" },
    ],
    audit: {
      badge: "Krok 2 · Audit",
      title: "Čo dostanete z auditu",
      text: "Audit je platený. Pevnú cenu si dohodneme vopred podľa rozsahu, bez prekvapení na faktúre.",
      items: [
        { strong: "Zoznam procesov", text: "zoradený podľa prínosu pre vašu firmu" },
        { strong: "Odhad nákladov", text: "a uvoľnenej kapacity pri každej príležitosti" },
        { strong: "Návrh prvého pilotu", text: "s rozsahom, termínom a cenou" },
      ],
    },
    humanStrong: "Pri dôležitých krokoch rozhoduje človek.",
    humanText:
      "AI pripraví podklady, ale o tom, ktorý lead osloviť, či je dokument hotový alebo čo odíde klientovi, rozhodne vždy zodpovedná osoba. Každý krok má záznam.",
  },

  roi: {
    eyebrow: "Kalkulačka úspory času",
    title: "Koľko času vám berie ručná práca?",
    lead: "Zadajte jeden opakovaný proces a pozrite sa, akú kapacitu by mohla automatizácia uvoľniť.",
    aria: "Kalkulačka",
    formAria: "Vstupy kalkulačky",
    numberLocale: "sk-SK",
    currency: "EUR",
    rate: { min: 8, max: 80, step: 1, initial: 18, unit: "€" },
    fields: {
      people: { label: "Koľko ľudí robí túto úlohu", hint: "Napríklad 3 ľudia v účtovníctve" },
      minutesPerTask: { label: "Koľko minút trvá jedna úloha", hint: "Jedno spracovanie, napr. jedna faktúra" },
      timesPerWeek: { label: "Koľkokrát týždenne ju robí jeden človek", hint: "Opakovania na osobu za týždeň" },
      hourlyCost: { label: "Cena hodiny práce vrátane odvodov", hint: "Celková cena práce pre firmu" },
      automationShare: { label: "Koľko sa dá automatizovať", hint: "Konzervatívny odhad je 50 až 70 %" },
    },
    big: "Uvoľnená kapacita ročne",
    fte: "Ekvivalent úväzkov",
    value: "Hodnota uvoľnenej kapacity",
    manual: "Súčasná ručná práca",
    perYear: "/ rok",
    disclaimer:
      "Orientačný odhad, nie garantovaná úspora. Počítame so 48 pracovnými týždňami a úväzkom 1 920 hodín ročne. Uvoľnená kapacita sa nerovná automaticky úspore nákladov.",
    cta: "Overiť odhad na konzultácii",
  },

  caseStudies: {
    eyebrow: "Z praxe",
    title: "Úspešné projekty",
    lead: "Vybrané projekty z našej praxe.",
    client: "Klient",
    result: "Výsledok",
    goal: "Zadanie",
    solution: "Riešenie",
    stackAria: "Použité nástroje",
    items: [
      {
        area: "Obchod",
        title: "Automatizované spracovanie obchodných leadov",
        company: "Firma v oblasti služieb, 100 zamestnancov",
        meta: [{ label: "Implementácia", value: "2 dni" }],
        goal: "Automatické spracovanie nových leadov a ich kompletná evidencia v CRM, bez ručnej práce obchodníkov.",
        steps: [
          "Zozbieranie dát o potenciálnych klientoch z firemných zdrojov",
          "Analýza a vyhodnotenie leadov podľa kritérií klienta",
          "Automatický zápis do CRM",
          "Priradenie obchodníkovi s kompletnými informáciami",
        ],
        result: {
          headline: "5 hodín týždenne",
          text: "ušetrí každý obchodník na vyhľadávaní, preverovaní a zapisovaní leadov.",
        },
        stack: ["Grok bot", "Microsoft 365", "CRM"],
      },
      {
        area: "Obchod",
        title: "AI radar top obchodných príležitostí",
        company: "Firma v oblasti služieb, 70 zamestnancov",
        meta: [{ label: "Implementácia", value: "2 týždne" }],
        goal: "Nájsť top príležitosti pre jednu špecifickú službu. Nie čo najviac leadov, ale tie najperspektívnejšie: kvalita namiesto kvantity.",
        steps: [
          "Vyhľadávanie firiem podľa signálov skutočnej potreby",
          "Analýza prevádzky a preverenie finančného zdravia",
          "Bodové hodnotenie podľa kritérií klienta",
          "Schválenie obchodníkom: o každej firme rozhoduje človek",
          "Podklady na stretnutie a návrh oslovenia",
          "Automatický zápis schválených leadov do CRM s kompletnými informáciami a podkladmi",
        ],
        result: {
          headline: "Top preverené leady",
          text: "Radar pravidelne identifikuje a pripraví najperspektívnejšie firmy so skóre, overenými zdrojmi a návrhom oslovenia. Obchodník venuje čas stretnutiam, nie rešerši.",
        },
        stack: ["Claude", "Microsoft 365", "CRM"],
      },
      {
        area: "Prevádzka",
        title: "AI asistent pre tím konzultantov",
        company: "Personálna agentúra, 60 zamestnancov",
        meta: [{ label: "Implementácia", value: "1 týždeň" }],
        goal: "Vytvorenie spoľahlivého asistenta pre celý tím na prácu s evidenciou zamestnancov, prípravu reportov a dokumentov. Každý konzultant pracuje so svojimi projektmi a len s nevyhnutnými osobnými údajmi.",
        steps: [
          "Napojenie na centrálnu evidenciu zamestnancov v cloude",
          "Vytvorenie znalostnej bázy: mapa údajov, zjednotenie pravidiel a postupov",
          "Spoločný projekt v ChatGPT pre celý tím",
          "Pravidelné rutiny, ktoré sledujú dôležité termíny, a nastavenie notifikácií",
          "Príprava dokumentov a ich schválenie konzultantom: o každom výstupe rozhoduje človek",
        ],
        result: {
          headline: "Prehľad bez prehľadávania",
          text: "Tím má automatizovaný prehľad nad zamestnancami, systém notifikácií a pravidelných reportov a pripravené podklady a dokumenty pre povinnosti podľa legislatívy aj pre klientov. Čas venuje klientom a zamestnancom, nie prehľadávaniu tabuliek.",
        },
        stack: ["ChatGPT", "Microsoft 365"],
      },
      {
        area: "HR",
        title: "Automatické týždenné reporty z náboru",
        company: "Firma v oblasti služieb, 200 zamestnancov",
        meta: [{ label: "Implementácia", value: "1 týždeň" }],
        goal: "Pravidelný a spoľahlivý prehľad o stave náboru bez ručného skladania reportov z ATS.",
        steps: [
          "Napojenie na ATS cez API",
          "Týždenné vyhodnotenie otvorených pozícií, kandidátov a fáz náboru",
          "Reporty pre HR: otvorené pozície, počet kandidátov, fázy procesu, čakajúci feedback od hiring manažérov, nástupy a úspešnosť náboru",
          "Uloženie reportov na SharePoint a záloha zdrojových dát",
          "Súhrnný report pre vybraný tím priamo v\u00a0kanáli Microsoft Teams",
        ],
        result: {
          headline: "Prehľad náboru každý týždeň",
          text: "HR aj vedenie majú každý týždeň aktuálne čísla o\u00a0nábore na jednom mieste. Je vidieť, kde proces stojí, kde sa čaká na feedback od hiring manažéra a\u00a0aká je úspešnosť náboru. Bez ručného skladania reportov.",
        },
        stack: ["Grok bot", "Microsoft 365", "ATS"],
      },
    ],
  },

  integrations: {
    eyebrow: "Integrácie",
    title: "Pracujeme s tým, čo už máte",
    lead: "Technológiu vyberáme podľa problému, nie naopak. Väčšinou nepotrebujete nový systém, ale prepojiť tie existujúce.",
    groups: [
      {
        title: "Vaše firemné systémy",
        text: "Prepojíme nástroje, ktoré už denne používate.",
        items: ["Microsoft 365", "Google Workspace", "CRM", "ERP a účtovníctvo", "HR systémy", "ATS (náborové systémy)"],
      },
      {
        title: "Automatizácia procesov",
        text: "Overené platformy, ktoré spájajú systémy a riadia tok úloh.",
        items: ["Power Automate", "n8n", "API prepojenia"],
      },
      {
        title: "Umelá inteligencia",
        text: "Model vyberáme podľa úlohy, bezpečnosti a miesta spracovania dát.",
        items: ["OpenAI (ChatGPT)", "Anthropic Claude", "Google Gemini", "xAI Grok", "Microsoft Copilot", "Mistral AI (EÚ)"],
      },
    ],
  },

  explore: {
    eyebrow: "Ďalej",
    title: "Čo vás zaujíma?",
    items: [
      { to: "process", label: "Ako pracujeme", title: "Od rozhovoru po riešenie v 6 krokoch", text: "Začíname malým pilotom a pokračujeme, len keď prináša výsledok." },
      { to: "calculator", label: "Kalkulačka", title: "Koľko času vám berie ručná práca?", text: "Vyčíslite jeden proces za minútu a uvidíte, akú kapacitu môžete uvoľniť." },
      { to: "about", label: "O nás", title: "Najprv biznis, potom technológia", text: "Kto za Novorsou stojí a kedy pre vás naopak nie sme vhodní." },
    ] as { to: RouteKey; label: string; title: string; text: string }[],
  },

  cta: {
    title: "Zistite, čo sa dá vo vašej firme automatizovať",
    text: "Úvodná konzultácia trvá 30 minút, je zadarmo a nezáväzná.",
    button: "Dohodnúť konzultáciu",
  },

  why: {
    title: "Prečo Novorsa",
    lead: "Za Novorsou stojí prax v ekonomickom a HR poradenstve. Rozumieme samotnému riadeniu firmy, nielen nástrojom.",
    srTitle: "Na čom si zakladáme",
    items: [
      { title: "Najprv biznis", text: "Začíname procesom a číslami, technológia prichádza na rad až potom." },
      { title: "Merateľná návratnosť", text: "Každý projekt má vopred dohodnutý cieľ a spôsob merania." },
      { title: "Bezpečnosť a kontrola", text: "Prístupové práva, záznamy o činnosti a schválenie človekom pri dôležitých krokoch." },
      { title: "Dokumentácia a vlastníctvo", text: "Riešenie, prístupy aj návod patria vám." },
      { title: "Nezávislosť od dodávateľov", text: "Nie sme viazaní na jeden nástroj, z viacerých dostupných vyberáme ten správny pre vás." },
      { title: "Dlhodobá podpora", text: "Po spustení riešenie sledujeme a ďalej zlepšujeme." },
    ],
    founder: {
      name: "Jaroslav Pavlisko",
      initials: "JP",
      role: "Zakladateľ · procesy a automatizácia",
      text: "Jaroslav Pavlisko má 10 rokov praxe v ekonomickom a HR poradenstve so zameraním na riadenie firiem, optimalizáciu procesov a HR procesy. Silné procesné a analytické myslenie mu pomáha rýchlo nájsť miesta, kde firma stráca čas, a vyčísliť, čo prinesie ich zlepšenie. Novorsu založil, aby firmám pomohol využiť automatizáciu a AI tam, kde reálne šetria čas, s dôrazom na návratnosť a bezpečné nasadenie.",
      projectsTitle: "Jeho úspešné implementácie",
      projects: [
        "Migrácia náborového systému (ATS)",
        "Implementácia ERP systému",
        "Automatizácia obchodných procesov",
        "Zavedenie finančného reportingu",
      ],
    },
    team: {
      title: "Náš tím",
      lead: "Malý tím, ktorý pozná vašu firmu. S klientom pracujeme priamo, bez sprostredkovateľov.",
      members: [
        {
          name: "Daniela Kurek",
          initials: "DK",
          role: "Klientská podpora a poradenstvo",
          text: "Daniela je vaším prvým kontaktom počas projektu aj po spustení. Má 8 rokov praxe v HR a dobre pozná firemné procesy a systémy. Pomôže s doladením a úpravami a technické požiadavky rieši priamo so zakladateľom a vývojovým tímom.",
        },
      ],
      partners: {
        title: "S kým spolupracujeme",
        text: "Na projektoch spolupracujeme s overenými partnermi. Tím zostavíme podľa toho, čo projekt potrebuje.",
        items: ["Vývoj softvéru a aplikácií", "Programovanie integrácií", "Serverové a cloudové nastavenia", "Dizajn"],
      },
    },
    notFit: {
      title: "Kedy pre vás nie sme vhodní",
      items: [
        "Proces beží len niekoľkokrát mesačne a zaberie pár minút.",
        "Proces sa ešte mení a nie je jasné, ako má fungovať.",
        "Hľadáte najlacnejšieho dodávateľa jedného nástroja bez analýzy.",
      ],
      text: "V takých prípadoch vám radšej poradíme, ako proces najprv zjednodušiť.",
    },
  },

  faq: {
    eyebrow: "Otázky",
    title: "Časté otázky",
    items: [
      {
        q: "Je to bezpečné a v súlade s GDPR?",
        a: "Pri každom projekte riešime, aké údaje sa spracúvajú, kde sú uložené a kto k nim má prístup. Spracúvame len nevyhnutné údaje, prednostne na serveroch v EÚ a v súlade s platnou legislatívou. Konkrétne nastavenie vždy prispôsobíme vašim pravidlám.",
      },
      {
        q: "S akými systémami pracujete?",
        a: "S bežnými firemnými systémami: Microsoft 365, Google Workspace, CRM, ERP, účtovné a HR systémy či ATS (náborové systémy). Prepájame ich cez API, webhooky alebo platformy ako Power Automate či n8n. Konkrétnu možnosť prepojenia vždy overíme v audite.",
      },
      {
        q: "Robíte aj aplikácie na mieru?",
        a: "Áno. Ak hotové nástroje nestačia, navrhneme a vyvinieme internú, webovú alebo mobilnú aplikáciu či klientsky portál. Vývoj zabezpečujeme s naším vývojovým partnerom. Aplikácia patrí vám a napojíme ju na systémy, ktoré už používate.",
      },
      {
        q: "Ako dlho trvá projekt?",
        a: "Audit zvyčajne trvá od niekoľkých dní po niekoľko týždňov podľa veľkosti firmy a zložitosti procesov. Prvý pilot spúšťame tak, aby ste výsledok videli čo najskôr. Presný harmonogram dostanete po úvodnom rozhovore.",
      },
      {
        q: "Čo keď sa AI pomýli?",
        a: "Počítame s tým. AI nasadzujeme tam, kde chybu včas zachytíme, a pri dôležitých krokoch vždy rozhoduje človek. Riešenie pred spustením testujeme na vašich reálnych prípadoch a po spustení ho priebežne vyhodnocujeme a zlepšujeme.",
      },
      {
        q: "Potrebujeme vlastné IT oddelenie?",
        a: "Nie je to nevyhnutné. Návrh, zavedenie aj správu vieme zabezpečiť my. Ak máte vlastné IT, radi s ním spolupracujeme a odovzdáme mu dokumentáciu.",
      },
      {
        q: "Koľko to stojí?",
        a: "Úvodná konzultácia je zadarmo. Audit má pevnú cenu podľa rozsahu a ďalšie kroky naceníme vždy vopred. Investíciu porovnávame s uvoľnenou kapacitou, aby ste videli návratnosť.",
      },
      {
        q: "Komu patrí hotové riešenie?",
        a: "Vám. Dostanete prístupy, dokumentáciu aj možnosť riešenie ďalej rozvíjať bez nás.",
      },
    ],
  },

  contact: {
    eyebrow: "Konzultácia zadarmo",
    title: "Zistite, čo sa dá vo vašej firme automatizovať",
    lead: "Napíšte nám, čo vám berie najviac času. Ozveme sa do dvoch pracovných dní a dohodneme si úvodnú konzultáciu zadarmo.",
    points: ["30 minút, online alebo osobne", "Bez záväzkov a predajného tlaku", "Odídete s prvým odhadom, čo sa oplatí automatizovať"],
    directEmail: "Radšej e-mail?",
    phone: "Telefón:",
    companyId: "IČO",
    areas: ["Obchod a CRM", "HR a nábor", "Financie a administratíva", "Prevádzka", "Nákup a dodávatelia", "Reporting pre vedenie", "Aplikácia na mieru", "Zatiaľ neviem"],
    areaUnknown: "Zatiaľ neviem",
  },

  form: {
    firstName: "Meno",
    lastName: "Priezvisko",
    company: "Spoločnosť",
    ico: "IČO",
    email: "E-mail",
    phone: "Telefónne číslo",
    optional: "(nepovinné)",
    area: "Čo chcete zlepšiť?",
    areaPlaceholder: "Vyberte oblasť",
    message: "Čo vášmu tímu berie najviac času?",
    messagePlaceholder: "Napr. faktúry prepisujeme ručne do účtovníctva, trvá to dvom ľuďom pol dňa týždenne.",
    notePrefix: "Údaje použijeme na vybavenie vášho dopytu. Podrobnosti nájdete v",
    noteLink: "zásadách ochrany osobných údajov",
    submit: "Požiadať o konzultáciu",
    sending: "Odosielam…",
    successMore: "Medzitým si môžete prejsť",
    successProjects: "úspešné projekty",
    successOr: "alebo",
    successCalc: "vyčísliť ďalší proces",
    errors: {
      firstNameLong: "Meno je príliš dlhé alebo obsahuje nepovolené znaky.",
      lastNameLong: "Priezvisko je príliš dlhé alebo obsahuje nepovolené znaky.",
      companyLong: "Názov spoločnosti je príliš dlhý alebo obsahuje nepovolené znaky.",
      emailLong: "E-mailová adresa je príliš dlhá.",
      phone: "Skontrolujte, prosím, telefónne číslo.",
      firstName: "Napíšte, prosím, svoje meno.",
      lastName: "Napíšte, prosím, svoje priezvisko.",
      company: "Napíšte, prosím, názov spoločnosti.",
      ico: "IČO má 6 až 8 číslic.",
      email: "Skontrolujte, prosím, e-mailovú adresu.",
      area: "Vyberte oblasť.",
      message: "Popis je príliš dlhý (max. 4 000 znakov).",
      summary: "Skontrolujte, prosím, označené polia.",
      bot: "Správu sa nepodarilo overiť. Napíšte nám, prosím, priamo na info@novorsa.sk.",
      rate: "Odoslali ste priveľa správ. Skúste to, prosím, neskôr.",
      unavailable: "Formulár je dočasne nedostupný. Napíšte nám, prosím, priamo na info@novorsa.sk.",
      send: "Správu sa nepodarilo odoslať. Skúste to znova alebo nám napíšte na info@novorsa.sk.",
      network: "Správu sa teraz nepodarilo odoslať. Skúste to o pár minút alebo nám napíšte na info@novorsa.sk.",
    },
    ok: "Ďakujeme! Správa dorazila a ozveme sa do dvoch pracovných dní.",
    honeypotOk: "Ďakujeme, ozveme sa do dvoch pracovných dní.",
  },

  email: {
    subject: "Ďakujeme za správu | Novorsa",
    thanks: "ďakujeme za Vašu správu.",
    reply: "Ozveme sa Vám do dvoch pracovných dní.",
    areaLabel: "Vybraná oblasť:",
    addMore: "Ak chcete niečo doplniť, stačí odpovedať na tento e-mail.",
    regards: "S pozdravom",
    signature: "tím Novorsa",
    brandOf: "Novorsa je značka spoločnosti",
  },

  consent: {
    title: "Cookies a meranie návštevnosti",
    textStart: "Nevyhnutné cookies zabezpečujú fungovanie webu. S vaším súhlasom použijeme aj",
    textAnalytics: " analytické cookies na meranie návštevnosti",
    textAnd: " a",
    textMarketing: " marketingové cookies na meranie a zobrazovanie reklamy",
    textEnd: ". Súhlas môžete kedykoľvek zmeniť.",
    more: "Viac o cookies",
    necessary: "Nevyhnutné",
    necessaryText: "Fungovanie a bezpečnosť webu. Vždy zapnuté.",
    analytics: "Analytické",
    analyticsText: "Meranie návštevnosti, aby sme vedeli web zlepšovať.",
    marketing: "Marketingové",
    marketingText: "Meranie účinnosti reklamy a zobrazovanie relevantných ponúk.",
    save: "Uložiť výber",
    settings: "Nastavenia",
    reject: "Odmietnuť",
    accept: "Prijať všetko",
    footerButton: "Nastavenia cookies",
  },

  cookiesPage: {
    title: "Cookies",
    intro: "Cookies sú malé súbory, ktoré web ukladá vo vašom prehliadači. Nevyhnutné cookies používame vždy",
    introBoth: ", analytické a marketingové len s vaším súhlasom.",
    introAnalytics: ", analytické len s vaším súhlasom.",
    introMarketing: ", marketingové len s vaším súhlasom.",
    change: "Svoj súhlas môžete kedykoľvek zmeniť:",
    cols: { name: "Názov", provider: "Poskytovateľ", purpose: "Účel", duration: "Platnosť" },
    necessaryTitle: "Nevyhnutné",
    necessaryText: "Zabezpečujú fungovanie a bezpečnosť webu. Súhlas na ne nepotrebujeme.",
    statsTitle: "Štatistiky bez cookies",
    statsText:
      "Používame aj Vercel Web Analytics, ktoré merajú návštevnosť bez cookies a bez ukladania čohokoľvek do vášho prehliadača. Výsledkom sú len súhrnné čísla.",
    analyticsTitle: "Analytické (so súhlasom)",
    analyticsText: "Pomáhajú nám pochopiť, ako návštevníci web používajú, aby sme ho mohli zlepšovať.",
    marketingTitle: "Marketingové (so súhlasom)",
    marketingText: "Merajú účinnosť reklamy a umožňujú zobrazovať relevantné ponuky na iných weboch a sociálnych sieťach.",
    moreTitle: "Viac informácií",
    moreText: "Ako spracúvame osobné údaje, nájdete v časti",
    questions: "Otázky:",
    rows: {
      consent: { name: "novorsa_consent", purpose: "Uloží vašu voľbu v cookie lište.", duration: "6 mesiacov" },
      bot: { name: "Ochrana pred robotmi", purpose: "Pri odoslaní formulára overí, že ho neodosiela robot. Môže v prehliadači uložiť technický údaj.", duration: "relácia" },
      ga: { purpose: "Rozlíši návštevníkov pre meranie návštevnosti.", duration: "2 roky" },
      gaSession: { purpose: "Uchováva stav aktuálnej návštevy.", duration: "2 roky" },
      gads: { purpose: "Meranie konverzií z reklám Google Ads.", duration: "3 mesiace" },
      meta: { purpose: "Meranie a zobrazovanie reklamy na Facebooku a Instagrame.", duration: "3 mesiace" },
      linkedin: { purpose: "Meranie konverzií a zobrazovanie reklamy na LinkedIne.", duration: "až 1 rok" },
    },
  },
};

export type Dict = typeof sk;

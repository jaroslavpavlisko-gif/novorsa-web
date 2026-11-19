// Všetky texty webu na jednom mieste. Komponenty ich len zobrazujú.

export const site = {
  name: "Novorsa",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novorsa.sk",
  tagline: "Automatizácia procesov a AI pre firmy",
  description:
    "Novorsa mapuje, kde vaša firma stráca čas ručnou prácou, a zavádza automatizáciu, AI a prepojenie systémov tam, kde sa to oplatí.",
  email: "info@novorsa.sk",
  phone: "", // doplniť, napr. "+421 900 000 000"
  linkedin: "", // doplniť URL firemného profilu
  company: {
    name: "JP Business Solutions s. r. o.",
    ico: "55530435",
    street: "Kukučínova 4257/4",
    city: "900 25 Chorvátsky Grob",
    country: "Slovenská republika",
  },
};

export const nav = [
  { label: "Riešenia", href: "/riesenia" },
  { label: "Ako pracujeme", href: "/ako-pracujeme" },
  { label: "Kalkulačka", href: "/kalkulacka" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export const hero = {
  eyebrow: "Automatizácia procesov a AI pre firmy",
  title: "Vaši ľudia robia prácu, ktorú môže",
  titleAccent: "robiť technológia.",
  lead: "Zmapujeme, kde vaša firma stráca čas ručnou prácou, a zavedieme automatizáciu, AI a prepojenie systémov tam, kde sa to naozaj oplatí. Najprv biznis a návratnosť, potom technológia.",
  primaryCta: { label: "Zistiť, čo vieme automatizovať", href: "/kontakt" },
  secondaryCta: { label: "Ako pracujeme", href: "/ako-pracujeme" },
  note: "Úvodná konzultácia je zadarmo a nezáväzná.",
};

export const trust = [
  { title: "Dáta v EÚ", text: "Kde je to možné, spracúvame dáta na serveroch v Európskej únii." },
  { title: "Riešenie patrí vám", text: "Žiadna závislosť od nás. Dostanete prístupy aj dokumentáciu." },
  { title: "Človek má posledné slovo", text: "Kritické kroky vždy schvaľuje zodpovedná osoba." },
  { title: "SK · CZ · EN", text: "Pracujeme po slovensky, česky aj anglicky." },
];

export const pains = {
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
};

export const outcomes = {
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
};

export type Solution = { id: string; label: string; title: string; text: string; examples: string[] };

export const solutions: { title: string; lead: string; items: Solution[] } = {
  title: "Riešenia podľa oddelení",
  lead: "Automatizácia nie je projekt IT. Je to odpoveď na konkrétny problém konkrétneho oddelenia.",
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
      text: "Úlohy a požiadavky prechádzajú medzi tímami s kompletnými údajmi, stav každej je viditeľný a odchýlky sa ukážu včas.",
      examples: ["Objednávky a stav skladu", "Riadenie úloh naprieč tímami", "Digitálne kontrolné zoznamy", "Upozornenia na odchýlky"],
    },
    {
      id: "servis",
      label: "Zákaznícky servis",
      title: "Rýchle odpovede, ľudský prístup",
      text: "Požiadavky sa roztriedia, pripravia sa návrhy odpovedí a zložité prípady idú rovno správnemu človeku.",
      examples: ["Triedenie a smerovanie požiadaviek", "Návrhy odpovedí na schválenie", "Znalostný asistent pre tím", "Prehľad spokojnosti zákazníkov"],
    },
    {
      id: "vedenie",
      label: "Vedenie",
      title: "Správne čísla, keď ich potrebujete",
      text: "Manažérske prehľady sa skladajú z vašich systémov automaticky a obsahujú aj stručné zhrnutie.",
      examples: ["Dashboardy z viacerých systémov", "Týždenné zhrnutie kľúčových čísel", "Upozornenia na riziká", "Podklady na porady bez príprav"],
    },
  ],
};

export const workProcess = {
  title: "Ako pracujeme",
  lead: "Začíname malým, merateľným krokom. Ďalej pokračujeme len vtedy, keď prvý krok priniesol výsledok.",
  steps: [
    { title: "Úvodný rozhovor", text: "30 minút o vašej firme a o tom, kde to najviac bolí. Zadarmo.", out: "Prvý odhad potenciálu" },
    { title: "Audit a vyčíslenie", text: "Zmapujeme procesy a ku každej príležitosti vyčíslime čas, náklady a náročnosť.", out: "Mapa príležitostí a plán" },
    { title: "Návrh riešenia", text: "Navrhneme postup, systémy a miesta, kde rozhoduje človek.", out: "Architektúra a rozpočet" },
    { title: "Pilot", text: "Jeden proces s najvyššou návratnosťou spustíme v ostrej prevádzke.", out: "Merateľný výsledok" },
    { title: "Zavedenie", text: "Rozšírime riešenie, zaškolíme ľudí a odovzdáme dokumentáciu.", out: "Riešenie vo vašom vlastníctve" },
    { title: "Monitoring a zlepšovanie", text: "Sledujeme chod, riešime výnimky a hľadáme ďalšie úspory.", out: "Pravidelný report" },
  ],
};

export const roi = {
  title: "Koľko času vám berie ručná práca?",
  lead: "Zadajte jeden opakovaný proces a pozrite sa, akú kapacitu by mohla automatizácia uvoľniť.",
  disclaimer:
    "Orientačný odhad, nie garantovaná úspora. Počítame so 48 pracovnými týždňami a úväzkom 1 920 hodín ročne. Uvoľnená kapacita sa nerovná automaticky úspore nákladov.",
};

export const showcases = {
  title: "Ukážkové riešenia",
  lead: "Takto vyzerajú typické projekty. Ide o ilustračné príklady, nie o referencie konkrétnych klientov.",
  items: [
    {
      area: "HR a nábor",
      title: "Predvýber životopisov bez prepisovania",
      problem: "Personalista ručne číta desiatky životopisov a prepisuje údaje do tabuľky.",
      solution: "AI vyťaží údaje, porovná ich s kritériami pozície a pripraví poradie. Personalista vidí odôvodnenie a rozhoduje.",
      result: "Personalista sa venuje pohovorom namiesto triedenia.",
      stack: ["E-mail", "ATS", "AI", "Microsoft 365"],
    },
    {
      area: "Financie",
      title: "Faktúry od e-mailu po účtovníctvo",
      problem: "Faktúry prichádzajú v PDF, ručne sa prepisujú a schvaľovanie sa zasekáva v e-mailoch.",
      solution: "Doklad sa prečíta, priradí k nákladovému stredisku, pošle na schválenie a po potvrdení zapíše do účtovníctva.",
      result: "Účtovníčka rieši len výnimky a nejasné doklady.",
      stack: ["E-mail", "AI čítanie dokladov", "Schvaľovanie", "Účtovný systém"],
    },
    {
      area: "Obchod",
      title: "Follow-up, na ktorý sa nezabudne",
      problem: "Dopyty z webu a e-mailu čakajú na odpoveď a časť z nich sa stratí.",
      solution: "Dopyt sa zapíše do CRM, doplní sa o údaje o firme a obchodník dostane návrh odpovede a pripomienku.",
      result: "Každý dopyt má odpoveď a vlastníka.",
      stack: ["Webový formulár", "CRM", "AI", "Notifikácie"],
    },
  ],
};

export const integrations = {
  title: "Pracujeme s tým, čo už máte",
  lead: "Technológiu vyberáme podľa problému, nie naopak. Väčšinou nepotrebujete nový systém, ale prepojiť tie existujúce.",
  groups: [
    {
      title: "Vaše firemné systémy",
      text: "Prepojíme nástroje, ktoré už denne používate.",
      items: ["Microsoft 365", "Google Workspace", "CRM", "ERP a účtovníctvo", "HR systémy"],
    },
    {
      title: "Automatizácia procesov",
      text: "Overené platformy, ktoré spájajú systémy a riadia tok úloh.",
      items: ["Power Automate", "n8n", "API prepojenia"],
    },
    {
      title: "Umelá inteligencia",
      text: "Model vyberáme podľa úlohy, bezpečnosti a miesta spracovania dát.",
      items: ["OpenAI (ChatGPT)", "Anthropic Claude", "Google Gemini", "Microsoft Copilot", "Mistral AI (EÚ)"],
    },
  ],
};

export const why = {
  title: "Prečo Novorsa",
  lead: "Za Novorsou stojí prax v ekonomickom a HR poradenstve. Rozumieme riadeniu firmy, nie len nástrojom.",
  items: [
    { title: "Najprv biznis", text: "Začíname procesom a číslami, technológia prichádza na rad až potom." },
    { title: "Merateľná návratnosť", text: "Každý projekt má vopred dohodnutý cieľ a spôsob merania." },
    { title: "Bezpečnosť a kontrola", text: "Prístupové práva, záznamy o činnosti a schválenie človekom pri dôležitých krokoch." },
    { title: "Dokumentácia a vlastníctvo", text: "Riešenie, prístupy aj návod patria vám." },
    { title: "Nezávislosť od dodávateľov", text: "Nie sme viazaní na jeden nástroj, vyberáme ten správny." },
    { title: "Dlhodobá podpora", text: "Po spustení riešenie sledujeme a ďalej zlepšujeme." },
  ],
  founder: {
    name: "[Meno zakladateľa]",
    role: "Zakladateľ · procesy a automatizácia",
    text: "[Krátky profil: prax v ekonomickom a HR poradenstve, roky skúseností, zameranie. Doplníme.]",
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
};

export const faq = {
  title: "Časté otázky",
  items: [
    {
      q: "Je to bezpečné a v súlade s GDPR?",
      a: "Pri každom projekte riešime, aké údaje sa spracúvajú, kde sú uložené a kto k nim má prístup. Spracúvame len nevyhnutné údaje, prednostne na serveroch v EÚ, a so spracovateľmi uzatvárame zmluvy. Konkrétne nastavenie vždy prispôsobíme vašim pravidlám.",
    },
    {
      q: "S akými systémami pracujete?",
      a: "S bežnými firemnými systémami: Microsoft 365, Google Workspace, CRM, ERP, účtovné a HR systémy. Prepájame ich cez API, webhooky alebo platformy ako Power Automate či n8n. Konkrétnu možnosť prepojenia vždy overíme v audite.",
    },
    {
      q: "Ako dlho trvá projekt?",
      a: "Audit zvyčajne trvá niekoľko týždňov podľa veľkosti firmy. Prvý pilot spúšťame tak, aby ste výsledok videli čo najskôr. Presný harmonogram dostanete po úvodnom rozhovore.",
    },
    {
      q: "Čo keď sa AI pomýli?",
      a: "Počítame s tým. AI nasadzujeme tam, kde chybu včas zachytíme, a pri dôležitých krokoch vždy rozhoduje človek. Riešenie pred spustením testujeme na vašich reálnych prípadoch.",
    },
    {
      q: "Potrebujeme vlastné IT oddelenie?",
      a: "Nie. Návrh, zavedenie aj správu vieme zabezpečiť my. Ak máte vlastné IT, radi s ním spolupracujeme a odovzdáme mu dokumentáciu.",
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
};

export const contact = {
  title: "Zistite, čo sa dá vo vašej firme automatizovať",
  lead: "Napíšte nám, čo vám berie najviac času. Ozveme sa do dvoch pracovných dní a dohodneme si úvodnú konzultáciu zadarmo.",
  sizes: ["1–9 ľudí", "10–49 ľudí", "50–249 ľudí", "250 a viac"],
  areas: ["Obchod a CRM", "HR a nábor", "Financie a administratíva", "Prevádzka", "Zákaznícky servis", "Reporting pre vedenie", "Zatiaľ neviem"],
};

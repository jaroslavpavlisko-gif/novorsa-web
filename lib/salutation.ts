/**
 * Oslovenie v e-maile: „Dobrý deň, pán Novák,“ / „Dobrý deň, pani Nováková,“.
 * Pohlavie odhadujeme podľa priezviska a krstného mena. Ak si nie sme istí,
 * použijeme neutrálne „Dobrý deň,“, aby sme nikoho neoslovili nesprávne.
 */

// Mužské mená končiace na -a (alebo inak „ženským“ tvarom).
const MALE_EXCEPTIONS = new Set([
  "luca", "luka", "ilja", "nikita", "jozua", "joshua", "kuba", "mustafa", "elia", "jona", "noa",
  "rené", "rene", "jiří", "jiri",
]);

// Ženské mená, ktoré nekončia na -a.
const FEMALE_EXCEPTIONS = new Set([
  "ruth", "miriam", "ingrid", "dagmar", "karin", "ester", "carmen", "ivet", "jasmin", "nikol",
  "rachel", "elisabeth", "natali", "noemi", "mercedes", "beatrix", "agnes", "abigail", "sarah",
  "hannah", "ann", "doris", "iris", "lilian", "marion", "edith", "gretchen", "judit",
  "babeta", "alžbeta", "nicole", "michelle", "isabelle", "natalie", "natálie", "marie", "simone",
  "denise", "ilse", "liz", "ines", "dolores", "lujza", "rút", "sofie", "zoe", "chloe",
]);

// Mená používané pre mužov aj ženy: radšej neutrálne oslovenie.
const AMBIGUOUS = new Set(["saša", "sasa", "alex", "robin", "kim", "dominique", "kai", "sam", "chris"]);

type Gender = "m" | "f" | null;

function guessGender(firstName: string, lastName: string): Gender {
  const f = firstName.trim().toLowerCase().split(/[\s-]+/)[0] ?? "";
  const l = lastName.trim().toLowerCase();

  // Slovenské a české ženské priezviská: -ová, -ská, -cká, -á.
  if (/(ová|á)$/.test(l)) return "f";
  if (AMBIGUOUS.has(f)) return null;
  if (FEMALE_EXCEPTIONS.has(f)) return "f";
  if (MALE_EXCEPTIONS.has(f)) return "m";
  if (/(a|ia|ie)$/.test(f)) return "f";
  // Meno končiace na spoluhlásku alebo -o (Peter, Marek, Marko, Ján) je takmer vždy mužské.
  if (/[bcčdďfghjklľĺmnňpqrřsštťvwxzž]$|o$/.test(f)) return "m";
  return null;
}

/** Priezvisko s veľkým začiatočným písmenom, aj keď ho niekto napísal malými. */
function properCase(s: string) {
  return s
    .trim()
    .split(/(\s+|-)/)
    .map((p) => (p === p.toLowerCase() || p === p.toUpperCase() ? p.charAt(0).toUpperCase() + p.slice(1).toLowerCase() : p))
    .join("");
}

export function salutation(firstName: string, lastName: string): string {
  const g = guessGender(firstName, lastName);
  if (!g || !lastName.trim()) return "Dobrý deň,";
  return `Dobrý deň, ${g === "m" ? "pán" : "pani"} ${properCase(lastName)},`;
}

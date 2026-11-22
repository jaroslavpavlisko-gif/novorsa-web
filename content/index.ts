import type { Lang } from "@/lib/i18n";
import { sk, type Dict } from "./sk";
import { cz } from "./cz";
import { en } from "./en";

export type { Dict };
export type Solution = Dict["solutions"]["items"][number];

const dicts: Record<Lang, Dict> = { sk, cz, en };

/** Texty webu v danom jazyku. */
export const getDict = (lang: Lang): Dict => dicts[lang];

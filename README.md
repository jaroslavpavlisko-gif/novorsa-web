# Novorsa – web (novorsa.sk)

Next.js 16 + TypeScript. Bez ďalších knižníc na dizajn – štýly sú v `app/globals.css` (farby a rozostupy ako premenné na začiatku súboru).

## Kde čo zmeniť

| Čo | Súbor |
| --- | --- |
| Všetky texty webu, kontakt, údaje firmy | `content/site.ts` |
| Farby, písmo, rozostupy | `app/globals.css` (sekcia „Dizajnové tokeny“) |
| Poradie sekcií na úvodnej stránke | `app/page.tsx` |
| Logo | `components/layout/Logo.tsx` |
| Výpočet kalkulačky | `lib/roi.ts` |
| Ochrana osobných údajov / Cookies | `app/ochrana-osobnych-udajov/page.tsx`, `app/cookies/page.tsx` |

Miesta na doplnenie sú v hranatých zátvorkách, napr. `[Meno zakladateľa]`.

## Spustenie na Verceli

1. **GitHub:** vytvorte nový prázdny repozitár (napr. `novorsa-web`) a nahrajte doň obsah tohto priečinka
   (na github.com: *Add file → Upload files*, pretiahnite všetky súbory a priečinky, *Commit*).
2. **Vercel:** *Add New → Project → Import* vášho repozitára. Framework sa zistí sám (Next.js). Kliknite *Deploy*.
3. **Premenné prostredia** (Vercel → Project → Settings → Environment Variables), podľa `.env.example`:
   - `NEXT_PUBLIC_SITE_URL` = `https://novorsa.sk`
   - `RESEND_API_KEY` = kľúč z resend.com
   - `CONTACT_TO` = e-mail, kam majú chodiť dopyty
   - `CONTACT_FROM` = napr. `Novorsa web <web@novorsa.sk>` (doménu najprv overte v Resende)
   Po uložení dajte *Redeploy*.
4. **Doména:** Vercel → Settings → Domains → pridajte `novorsa.sk` a `www.novorsa.sk`. U registrátora nastavte
   DNS záznamy, ktoré vám Vercel zobrazí. Nemeňte MX záznamy, ak máte na doméne e-mail.
5. **Analytika:** Vercel → Analytics → Enable (štatistiky bez cookies).
6. **Google Search Console:** pridajte doménu a odošlite `https://novorsa.sk/sitemap.xml`.

## Lokálny vývoj (voliteľné)

```bash
npm install
npm run dev   # http://localhost:3000
```

Bez premenných `RESEND_*` formulár zobrazí hlásenie, že je dočasne nedostupný – web inak funguje normálne.

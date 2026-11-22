// Spoločné údaje pre všetky jazykové verzie (kontakty, firma). Preložiteľné texty sú v sk.ts, cz.ts a en.ts.

export const site = {
  name: "Novorsa",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novorsa.sk",
  email: "info@novorsa.sk",
  phone: "+421 903 526 823",
  linkedin: "", // doplniť URL firemného profilu
  company: {
    name: "JP Business Solutions s. r. o.",
    ico: "55530435",
    street: "Kukučínova 4257/4",
    city: "900 25 Chorvátsky Grob",
  },
};

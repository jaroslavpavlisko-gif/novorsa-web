import { initBotId } from "botid/client/core";

// Vercel BotID: chráni odoslanie kontaktného formulára pred robotmi.
// Server action formulára sa odosiela metódou POST na kontaktnú stránku v danom jazyku.
initBotId({
  protect: [
    { path: "/kontakt", method: "POST" },
    { path: "/cz/kontakt", method: "POST" },
    { path: "/en/contact", method: "POST" },
  ],
});

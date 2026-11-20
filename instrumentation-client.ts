import { initBotId } from "botid/client/core";

// Vercel BotID: chráni odoslanie kontaktného formulára pred robotmi.
// Server action formulára sa odosiela metódou POST na stránku /kontakt.
initBotId({
  protect: [{ path: "/kontakt", method: "POST" }],
});

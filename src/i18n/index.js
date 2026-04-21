// ─────────────────────────────────────────────────────────────────────────────
//  DEFAULT_LANGUAGE — change this to switch the app's startup language
//  Accepted values: "en" | "ro"
// ─────────────────────────────────────────────────────────────────────────────
export const DEFAULT_LANGUAGE = "ro"

export const LANGUAGES = {
  en: "English",
  ro: "Română",
}

// ── Date/Time locale per language ──────────────────────────────────────────
export const DATE_LOCALES = {
  en: "en-US",
  ro: "ro-RO",
}

// ── UI Strings ──────────────────────────────────────────────────────────────
export const UI = {
  en: {
    // Window controls
    close:    "Close",
    minimize: "Minimize",
    maximize: "Maximize",
    restore:  "Restore",

    // Settings panel
    settingsTitle:   "System Settings",
    langSection:     "Region & Language",
    windowsSection:  "Windows",
    displaySection:  "Display",
    stackWindows:    "Cascade Windows",
    tileWindows:     "Tile Windows",
    minimizeAll:     "Minimize All",
    closeAll:        "Close All Windows",
    clock24h:        "24-Hour Clock",
    showEQ:          "Show EQ Visualizer",

    // Boot sequence
    bootLines: [
      { text: "AXON_OS  v2.1.0  — kernel init",               color: "#bac2de44" },
      { text: "[  0.312]  Mounting cognitive_base.img  ··· OK", color: "#89b4fa88" },
      { text: "[  0.587]  Initializing LLM subsystems  ···· OK",color: "#89b4fa88" },
      { text: "[  0.891]  Loading knowledge manifold  ····· OK", color: "#89b4fa88" },
      { text: "[  1.204]  Calibrating inference engine  ···· OK",color: "#89b4fa88" },
      { text: "[  1.560]  Authenticating session  ············ OK",color: "#cba6f788" },
      { text: "",                                                 color: "" },
      { text: "  AI for Everyone — A Human Guide",               color: "#bac2decc" },
      { text: "  to the Most Exciting Technology of Our Time",   color: "#bac2de88" },
      { text: "",                                                 color: "" },
      { text: "> Launching desktop environment_",                color: "#89b4fa" },
    ],
  },

  ro: {
    // Window controls
    close:    "Închide",
    minimize: "Minimizează",
    maximize: "Maximizează",
    restore:  "Restaurează",

    // Settings panel
    settingsTitle:   "Setări Sistem",
    langSection:     "Regiune și Limbă",
    windowsSection:  "Ferestre",
    displaySection:  "Afișaj",
    stackWindows:    "Aranjează în Cascadă",
    tileWindows:     "Împarte Ecranul",
    minimizeAll:     "Minimizează Tot",
    closeAll:        "Închide Toate Ferestrele",
    clock24h:        "Ceas 24 de ore",
    showEQ:          "Afișează Vizualizator EQ",

    // Boot sequence
    bootLines: [
      { text: "AXON_OS  v2.1.0  — inițializare kernel",              color: "#bac2de44" },
      { text: "[  0.312]  Montare cognitive_base.img  ········· OK",   color: "#89b4fa88" },
      { text: "[  0.587]  Inițializare subsisteme LLM  ·········· OK", color: "#89b4fa88" },
      { text: "[  0.891]  Încărcare bază de cunoștințe  ········ OK",  color: "#89b4fa88" },
      { text: "[  1.204]  Calibrare motor inferențe  ·········· OK",   color: "#89b4fa88" },
      { text: "[  1.560]  Autentificare sesiune  ··············· OK",  color: "#cba6f788" },
      { text: "",                                                        color: "" },
      { text: "  AI pentru Toți — Un Ghid Uman",                       color: "#bac2decc" },
      { text: "  pentru Cea Mai Captivantă Tehnologie a Timpului",      color: "#bac2de88" },
      { text: "",                                                        color: "" },
      { text: "> Lansare mediu desktop_",                               color: "#00e5ff" },
    ],
  },
}

// ── Chapter Translations ────────────────────────────────────────────────────
// "en" is empty — chapters.js already has English content.
// For Romanian, each key matches the chapter id.
export const CHAPTER_TR = {
  en: {},
  ro: {
    intro: {
      label:    "intro.sys",
      title:    "Ce Este Cu Adevărat Inteligența Artificială",
      subtitle: "Un Ghid Uman pentru Cea Mai Captivantă Tehnologie a Timpului Nostru",
      intro: `Se întâmplă ceva straniu acum și se întâmplă repede.
AI-ul nu mai este o idee futuristă din filme sau TED Talks. Este aici,
în filele pe care le deschidem în fiecare zi, în instrumentele pe care
studenții le folosesc pentru a studia, în aplicațiile pe care creatorii
le folosesc pentru a proiecta. Schimbarea nu mai este teoretică — este personală.`,
      sections: [
        {
          heading: "LLM-ul Explicat Simplu",
          body: `La baza sa, inteligența artificială de astăzi este alimentată de Modele de Limbaj de
Mari Dimensiuni — LLM-uri. Aceste modele sunt antrenate pe cantități enorme de text și
învață tipare în limbaj pentru a putea prezice ce urmează. Explicația umană este mai
simplă: AI-ul modern este o mașinărie care a citit atât de mult din internet încât
poate acum răspunde într-un mod care pare surprinzător de conversațional.`,
        },
        {
          heading: "Diferit de Tot Software-ul Anterior",
          body: `Software-ul tradițional se comportă ca un calculator: introduci ceva specific,
primești ceva specific înapoi. AI-ul se comportă mai mult ca un improvizator. Poate
adapta, reformula, face brainstorming și genera. Minunea AI-ului și riscul AI-ului
vin din același loc — este flexibil, nu fix.`,
          highlight: "AI-ul este un instrument. Ca orice instrument puternic din istorie, poate aprofunda creativitatea umană sau o poate aplana — depinde în întregime de modul în care îl folosim.",
        },
      ],
    },

    chap2: {
      label:    "models.db",
      title:    "Cine Este Cel Mai Bun?",
      subtitle: "Războaiele Modelelor — Claude, GPT, Gemini și nu Numai",
      intro: `Una dintre cele mai frecvente întrebări: care model AI este cu adevărat cel mai bun?
Răspunsul sincer este că nu există un campion universal. Cursa AI seamănă mai puțin
cu un singur câștigător care trece linia de finish și mai mult cu un decatlon unde
diferiți concurenți domină diferite probe.`,
      sections: [
        {
          heading: "Cei Mari Trei",
          body: `Claude a devenit deosebit de respectat pentru programare, scriere de lungă durată
și raționament atent. GPT rămâne cel mai recunoscut cultural — a ajutat AI să se
transforme dintr-un subiect de nișă într-un obicei global zilnic. Gemini se remarcă
deoarece Google l-a poziționat nu doar ca un creier de chatbot, ci ca parte dintr-un
ecosistem mai larg care ajunge la terminal, instrumente de design și fluxuri conectate.`,
        },
        {
          heading: "Povestea Este Mult Mai Mare",
          body: `DeepSeek descrie liniile sale mai noi ca modele axate pe raționament, construite
pentru agenți. MiniMax prezintă modele multimodale și orientate spre programare cu
context lung. GLM-5, lansat de Zhipu, a fost raportat ca unul dintre cele mai puternice
modele open din începutul anului 2026. Viitorul AI nu este scris de un singur laborator.`,
          highlight: "Cel mai bun AI este cel care se potrivește intenției tale.",
        },
      ],
    },

    chap3: {
      label:    "agents.cli",
      title:    "Claude Code și Gemini CLI",
      subtitle: "Primul AI Care Lucrează Alături de Tine",
      intro: `Dacă chatbot-urile obișnuite par asistenți inteligenți care dau sfaturi,
instrumente precum Claude Code și Gemini CLI par primul glimps al unui AI care poate
cu adevărat lucra alături de tine. Un chatbot normal îți spune cum să faci ceva.
Un instrument agentic poate inspecta fișiere, scrie cod, rula comenzi și acționa
într-un flux de lucru complet.`,
      sections: [
        {
          heading: "Claude Code",
          body: `Claude Code citește baza ta de cod, editează fișiere, rulează comenzi și se
integrează cu medii de terminal, IDE, desktop și browser. Este construit pentru a
intra într-un proiect și a-l avansa — flexibil, scriptabil și low-level. Crearea
de software se simte mai puțin ca intrarea într-o profesie accesibilă doar unora
și mai mult ca o conversație cu o mașinărie care poate construi alături de tine.`,
        },
        {
          heading: "Gemini CLI și MCP",
          body: `Gemini CLI este un agent AI gratuit, open-source, care aduce Gemini 2.5 Pro
direct în terminal — open source sub Apache 2.0. Apoi există MCP: Protocolul de
Context al Modelului de la Anthropic, un standard deschis pentru conectarea aplicațiilor
AI la sisteme externe. AI-ul învață să nu mai fie prins într-o singură fereastră de chat.`,
          highlight: "Odată ce MCP prinde sens, viitorul pare mai puțin un 'chatbot pe un website' și mai mult un 'strat de inteligență peste tot.'",
        },
      ],
    },

    chap4: {
      label:    "creative.lab",
      title:    "AI pentru Design și Video",
      subtitle: "Când Mașina Învață să Se Exprime",
      intro: `AI-ul nu schimbă doar modul în care oamenii scriu sau programează. Schimbă și
modul în care oamenii imaginează, schițează, proiectează, animează și editează. Aceasta
este zona unde tehnologia devine deosebit de emoțională — design-ul și video-ul trăiesc
mai aproape de identitate. Când AI intră în acel spațiu, oamenii nu se întreabă doar
dacă funcționează. Se întreabă dacă mai simte a fi uman.`,
      sections: [
        {
          heading: "Google Stitch",
          body: `Google Stitch este unul dintre cele mai clare exemple ale AI care intră în
design — un instrument care ajută la proiectarea frontendurilor prin generarea de elemente
UI și cod din prompturi text sau imagini. A evoluat într-o platformă nativă AI pentru
crearea, iterarea și colaborarea pe UI de înaltă fidelitate. Un student cu o idee de
aplicație nu mai trebuie să se uite la o pânză de design goală și să se simtă înfrânt.`,
        },
        {
          heading: "Runway și Video",
          body: `Runway a devenit un nume de referință în video AI — text-to-video, eliminare
fundal, urmărire mișcare, efecte generative și un flux de lucru prietenos aimed la
creatori. Video-ul a fost tradițional un mediu cu frecare ridicată. Instrumentele
AI reduc această barieră. Creația în sine devine conversațională.`,
          highlight: "Oamenii nu mai sunt obligați să traducă manual fiecare idee în cod, cadre și cronologii. Pot descrie rezultatul și rafina prin iterație.",
        },
      ],
    },

    chap5: {
      label:    "agents.local",
      title:    "Agenți Personali",
      subtitle: "OpenClaw și Ascensiunea AI-ului Care Îți Aparține",
      intro: `Una dintre cele mai fascinante întoarceri în AI este ascensiunea agenților
personali — sisteme care nu doar răspund la un prompt și dispar, ci persistă, memorează,
automatizează și acționează. Acesta este locul unde AI-ul începe să semene mai puțin
cu un produs și mai mult cu o infrastructură.`,
      sections: [
        {
          heading: "OpenClaw",
          body: `OpenClaw este un framework open-source de automatizare AI construit pentru
dezvoltatori și echipe tehnice, proiectat pentru a fi auto-găzduit, extensibil și fără
dependență de vânzători. Poate citi și scrie fișiere, rula scripturi, controla browsere
printr-un sandbox, menține memorie persistentă și se conecta cu multe integrări terțe.
O persoană poate construi un asistent profund personalizat care trăiește în propriul mediu.`,
        },
        {
          heading: "Filosofia Proprietății",
          body: `Într-o lume digitală dominată de abonamente, ecosisteme închise și extracție
de date, un framework deschis care poate fi implementat pe propria infrastructură poartă
o filosofie diferită. Oamenii încep să vrea un AI care le aparține — nu un AI pe care
îl împrumută pur și simplu.`,
          highlight: "Viitorul AI nu trebuie să însemne cedarea mai mult control. Ar putea însemna recâștigarea lui — cu sisteme pe care le poți inspecta, adapta și în care poți avea încredere pe propriile termeni.",
        },
      ],
    },

    chap6: {
      label:    "privacy.log",
      title:    "Frică, Risc și Confidențialitate",
      subtitle: "Conversația Sinceră pe care Trebuie să o Avem",
      intro: `Niciun articol despre AI nu ar fi complet fără a confrunta frica din jurul său.
O parte din frică este frică leneșă — tipul generat de titluri și presimțiri vagi. Dar
o parte din frică este complet justificată. Oamenii se îngrijorează pentru că simt că
AI-ul se mișcă mai repede decât instituțiile, mai repede decât școlile, mai repede decât legea.`,
      sections: [
        {
          heading: "Cloud vs Local — Un Compromis Real de Confidențialitate",
          body: `Instrumentele cloud AI implică adesea trimiterea de prompturi și fișiere către
servicii externe. Framework-uri auto-găzduite precum OpenClaw pun accent pe menținerea
infrastructurii și datelor sub controlul utilizatorului. LM Studio este o aplicație
desktop local-first pentru descoperirea, descărcarea și rularea LLM-urilor pe propriul
computer — fără abonament cloud. Ollama notează că modelele de 7B rulează cu 8 GB de RAM.`,
        },
        {
          heading: "Curiozitate Disciplinată",
          body: `AI-ul poate fi greșit, manipulativ, părtinitor sau prea încrezător. Un răspuns
frumos formulat poate conține în continuare o eroare factuală. Un agent de programare
poate în continuare strica lucruri. De aceea postura corectă față de AI nu este nici
venerarea, nici respingerea. Scopul nu este să ai încredere oarbă în mașinărie, ci să
înveți unde este puternică, unde este slabă și unde judecata umană contează cel mai mult.`,
          highlight: "Postura corectă față de AI este curiozitatea disciplinată — nu venerare, nu frică.",
        },
      ],
    },

    chap7: {
      label:    "local-ai.run",
      title:    "Rularea AI-ului Local",
      subtitle: "Ollama, LM Studio și Revoluția Calculului Personal",
      intro: `Una dintre cele mai împuternicitoare aspecte ale peisajului AI actual este că nu
totul trebuie să se întâmple în cloud. Instrumente precum Ollama și LM Studio fac AI-ul
local accesibil oamenilor obișnuiți, și asta schimbă textura emoțională a tehnologiei.
Când AI rulează pe propria ta mașinărie, nu mai pare un serviciu îndepărtat și începe
să pară o capacitate personală.`,
      sections: [
        {
          heading: "Ollama",
          body: `Ollama a devenit una dintre cele mai ușoare modalități de a rula modele locale
din terminal. Modelele mai mici rulează pe hardware consumer obișnuit — aproximativ 8 GB
de RAM pentru modele de 7B, 16 GB pentru modele de 13B și 32 GB pentru modele de 33B.
AI-ul local nu mai este o fantezie rezervată celor cu servere uriașe. Este din ce în ce
mai accesibil pentru studenți, amatori și constructori independenți.`,
        },
        {
          heading: "LM Studio",
          body: `LM Studio servește un vis similar cu o experiență desktop mai prietenoasă — o
aplicație user-friendly pentru descoperirea, descărcarea și rularea modelelor locale fără
a necesita un abonament cloud. Importanța mai profundă este confidențialitatea, controlul
și reziliența. Aceste instrumente reprezintă o versiune a AI-ului care pare mai personală,
mai suverană și poate puțin mai sinceră.`,
          highlight: "AI-ul local nu este doar o preferință tehnică — este una filosofică.",
        },
      ],
    },
  },
}

// ── Helper: get translated chapter overlay ─────────────────────────────────
// Returns the translated fields merged over the original chapter object.
// If language is "en" or no translation exists, returns the chapter unchanged.
export function translateChapter(chapter, language) {
  if (language === "en") return chapter
  const tr = CHAPTER_TR[language]?.[chapter.id]
  if (!tr) return chapter
  return { ...chapter, ...tr }
}

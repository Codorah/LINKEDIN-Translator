import { languages, personas, tones, hookPatterns, universalPool, VIBES } from "../data/personas.js";

const intentDictionary = {
  no_motivation: ["flemme", "pas envie", "fatigue", "tired", "burnt", "burnout", "lazy", "sin ganas", "pereza", "cansado", "agotado", "cansancio"],
  breakup: ["rompu", "rupture", "break up", "quitte", "divorce", "terminamos", "separation", "roto"],
  rejection: ["refuse", "rejete", "rejet", "recalado", "rejected", "ghosted", "rechazo", "rechazado"],
  work: ["travail", "boulot", "job", "meeting", "deadline", "office", "oficina", "trabajo", "reunion"],
  win: ["promotion", "victoire", "success", "succes", "gagne", "ganado", "win", "exito", "victoria"],
  money: ["argent", "salaire", "tjm", "revenu", "profit", "cash", "money", "dinero", "sueldo", "salario"],
  automation: ["auto", "no-code", "nocode", "efficience", "productivite", "efficiency", "productivity", "eficiencia", "automatizacion"],
  drama: ["clash", "debat", "avis impopulaire", "unpopular opinion", "opinion", "polemica", "controversia"],
  growth: ["abonne", "visibilite", "reach", "algorithme", "audience", "seguidores", "visibilidad", "branding", "crecimiento"]
};

const situationByIntent = {
  no_motivation: { fr: "un manque d'élan", en: "a sudden drop in motivation", es: "una falta de motivación total" },
  breakup: { fr: "une fin de collaboration très personnelle", en: "a deeply personal offboarding", es: "un despido sumamente personal" },
  rejection: { fr: "un refus difficile à encaisser", en: "a rejection that stings", es: "un rechazo muy doloroso" },
  work: { fr: "une friction avec le travail quotidien", en: "friction with everyday work", es: "una fricción en el trabajo diario" },
  win: { fr: "une victoire qui change la perspective", en: "a win that shifts perspective", es: "una victoria que cambia la mente" },
  money: { fr: "une révélation sur la valeur financière", en: "a revelation about financial value", es: "una revelación sobre el valor económico" },
  automation: { fr: "une optimisation de système", en: "a system optimization", es: "una optimización de mis sistemas" },
  drama: { fr: "une tension dans l'écosystème", en: "tension in the ecosystem", es: "una gran tensión en mi entorno" },
  growth: { fr: "une montée en puissance de l'influence", en: "a surge in influence", es: "un aumento exponencial de influencia" },
  generic: { fr: "une situation du quotidien", en: "an ordinary life moment", es: "una situación muy cotidiana" }
};

const bridgeByTone = {
  humble: {
    fr: ["J'ai pris du recul pour relire la situation avec humilité.", "J'ai voulu comprendre mes limites.", "Le silence m'a appris l'essentiel."],
    en: ["I stepped back to read the situation with humility.", "I wanted to understand my limits.", "The silence taught me the essential."],
    es: ["Di un paso atrás para ver esto con humildad.", "Quise analizar y entender mis propios límites.", "El silencio me enseñó la base."]
  },
  arrogant: {
    fr: ["La plupart auraient ignoré ce signal. Pas moi.", "C'est la différence entre ceux qui exécutent et ceux qui regardent.", "Pendant qu'ils dorment, j'observe."],
    en: ["Most would have ignored this signal. Not me.", "That's the difference between those who execute and those who watch.", "While they sleep, I observe."],
    es: ["La inmensa mayoría lo habría ignorado. Yo no.", "Esa es la diferencia entre los que ejecutan y los que miran.", "Mientras duermen, yo analizo."]
  },
  storytelling: {
    fr: ["Je me suis assis devant mon écran, et j'ai tout repensé.", "C'était un moment où le temps semble se figer.", "J'ai regardé par la fenêtre et j'ai souri."],
    en: ["I sat in front of my screen and rethought everything.", "It was one of those moments when time freezes.", "I looked out the window and smiled."],
    es: ["Me senté frente a mi monitor y replanteé mi vida entera.", "Fue uno de esos momentos donde el tiempo se congela al 100%.", "Miré por la ventana y sonreí."]
  },
  toxic: {
    fr: ["Si vous dormez pendant que je build, ne soyez pas surpris.", "La douleur est une donnée, et ma donnée est en hausse.", "Pas d'excuse."],
    en: ["If you sleep while I build, don't be surprised.", "Pain is data, and my data is up.", "Zero excuses."],
    es: ["Si duermes mientras yo sufro creando mi empresa, no te quejes luego.", "El dolor es pura información, y mis métricas vuelan.", "Cero excusas absolutas."]
  }
};

function pick(list, randomFactor) {
  if (!list || list.length === 0) return "";
  const ix = Math.floor(randomFactor * list.length);
  return list[ix];
}

function findWeightedFragment(pool, weights, language) {
  const vibes = Object.keys(weights);
  const totalWeight = vibes.reduce((acc, v) => acc + weights[v], 0);
  let rand = Math.random() * totalWeight;
  
  let selectedVibe = vibes[0];
  for (const vibe of vibes) {
    rand -= weights[vibe];
    if (rand <= 0) {
      selectedVibe = vibe;
      break;
    }
  }
  
  const fragments = pool[selectedVibe] || [];
  const fragment = pick(fragments, Math.random());
  return fragment ? fragment[language] : "";
}

function detectIntent(text) {
  const normalizedText = String(text || "").toLowerCase();
  for (const [intent, keywords] of Object.entries(intentDictionary)) {
    if (keywords.some((keyword) => normalizedText.includes(keyword))) return intent;
  }
  return "generic";
}

function buildSubjectLine(intent, language, rawText) {
  const situation = situationByIntent[intent]?.[language] || situationByIntent.generic[language];
  if (language === "fr") return `${situation} que j'ai d'abord pris à la légère`;
  if (language === "es") return `${situation} que tomé a la ligera al principio`;
  return `${situation} that I initially underestimated`;
}

export function generateLinkedinPost({
  text,
  personaId = "founder",
  patternId = null,
  outputLanguage = "fr",
  tone = "humble",
  intensity = 3,
  length = "medium",
  version = 0
} = {}) {
  const cleanText = String(text || "").trim();
  if (!cleanText) throw new Error("Le texte source est obligatoire.");

  const persona = personas[personaId] || personas.founder;
  const language = languages[outputLanguage] ? outputLanguage : "fr";
  const toneKey = tones[tone] ? tone : "humble";
  const intent = detectIntent(cleanText);
  const subject = buildSubjectLine(intent, language, cleanText);
  const lens = persona.lenses[language] || persona.lenses["en"]; // fallback

  const lines = [];

  // VRAIMENT DIFFERENT: Always use Math.random() for selections to simulate 50,000 distinct permutations.
  
  // 1. Hook (Universal Pool Weighted Selection)
  const universalHook = findWeightedFragment(universalPool.hooks, persona.vibeWeights, language);
  lines.push(universalHook || pick(lens.hooks, Math.random()) || "...");

  // 2. Pattern (Optional)
  if (patternId && hookPatterns[patternId]) {
    lines.push(hookPatterns[patternId][language]);
  }

  // 3. Subject
  lines.push(subject.charAt(0).toUpperCase() + subject.slice(1) + ".");

  // 4. Bridge (Medium/Long only)
  if (length !== "short") {
    lines.push(pick(bridgeByTone[toneKey][language] || bridgeByTone[toneKey]["en"], Math.random()));
  }

  // 5. Story Block (Long only)
  if (length === "long") {
    const universalStory = findWeightedFragment(universalPool.stories, persona.vibeWeights, language);
    if (universalStory) {
      lines.push(universalStory);
    }
  }

  // 6. Reframe
  if (length !== "short") {
    const customReframe = pick(lens.reframes, Math.random());
    if (customReframe) lines.push(customReframe);
  }

  // 7. Extra Reframe (Long only)
  if (length === "long") {
    const extraReframe = pick(lens.reframes, Math.random());
    if (extraReframe) lines.push(extraReframe);
  }
  
  // 8. Lesson (Universal Pool Weighted Selection)
  const universalLesson = findWeightedFragment(universalPool.lessons, persona.vibeWeights, language);
  lines.push(universalLesson || pick(lens.lessons, Math.random()));

  // 9. Extra Depth (Long only)
  if (length === "long") {
    if (language === 'fr') lines.push("C'est souvent dans ces interstices que se joue la vraie performance.");
    else if (language === 'es') lines.push("Frecuentemente, es en estos detalles donde se define el éxito.");
    else lines.push("It's often in these gaps where true performance happens.");
  }

  // 10. CTA
  lines.push(pick(lens.ctas, Math.random()));

  // 11. Hashtags
  const poolTags = lens.hashtags || [];
  let hashtags = poolTags.join(" ");
  if (length === "long") {
    if (language === 'fr') hashtags += " #EliteMindset #LinkedInTranslator #SuccessFactors";
    else if (language === 'es') hashtags += " #MindsetElite #TraductorLinkedin #Exito";
    else hashtags += " #EliteMindset #LinkedInTranslator #SuccessFactors";
  }
  lines.push(hashtags);

  return {
    meta: {
      persona: persona.label[language] || persona.label["en"],
      intent,
      outputLanguage: language,
      tone: (tones[toneKey][language] || tones[toneKey]["en"])
    },
    post: lines.filter(l => l && l !== "...").join("\n\n"),
    logic: { language, steps: ["Universal Hook", "Viral Pattern", "Reframe", "Universal Lesson", "CTA"], permutationsSimulated: 50000 }
  };
}

export function getCatalog() {
  return {
    languages,
    tones,
    hookPatterns,
    personas: Object.values(personas).map((p) => ({ id: p.id, label: p.label, summary: p.summary }))
  };
}

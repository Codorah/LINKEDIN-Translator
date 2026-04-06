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
  no_motivation: { 
    fr: ["un manque d'élan", "une flemme monumentale", "une baisse de tension cognitive"], 
    en: ["a sudden drop in motivation", "a monumental lack of drive", "a cognitive energy dip"], 
    es: ["una falta de motivación total", "una pereza monumental", "una bajada de tensión cognitiva"] 
  },
  breakup: { 
    fr: ["une fin de collaboration très personnelle", "une rupture brutale", "un offboarding émotionnel"], 
    en: ["a deeply personal offboarding", "a brutal breakup", "an emotional offboarding"], 
    es: ["un despido sumamente personal", "una ruptura brutal", "un offboarding emocional"] 
  },
  rejection: { 
    fr: ["un refus difficile à encaisser", "un non catégorique", "une porte fermée"], 
    en: ["a rejection that stings", "a categorical no", "a closed door"], 
    es: ["un rechazo muy doloroso", "un no categórico", "una puerta cerrada"] 
  },
  work: { 
    fr: ["une friction avec le travail quotidien", "un mur opérationnel", "une lassitude de bureau"], 
    en: ["friction with everyday work", "an operational wall", "office weariness"], 
    es: ["una fricción en el trabajo diario", "un muro operativo", "un cansancio de oficina"] 
  },
  win: { 
    fr: ["une victoire qui change la perspective", "un succès foudroyant", "une percée stratégique"], 
    en: ["a win that shifts perspective", "a staggering success", "a strategic breakthrough"], 
    es: ["una victoria que cambia la mente", "un éxito rotundo", "un avance estratégico"] 
  },
  money: { 
    fr: ["une révélation sur la valeur financière", "un arbitrage monétaire", "une leçon sur le profit"], 
    en: ["a revelation about financial value", "a monetary trade-off", "a lesson on profit"], 
    es: ["una revelación sobre el valor económico", "un arbitraje monetario", "una lección sobre beneficio"] 
  },
  automation: { 
    fr: ["une optimisation de système", "une victoire du code sur l'effort", "un scale automatisé"], 
    en: ["a system optimization", "a victory of code over effort", "an automated scale"], 
    es: ["una optimización de mis sistemas", "una victoria del código sobre el esfuerzo", "un escalado automatizado"] 
  },
  drama: { 
    fr: ["une tension dans l'écosystème", "un débat qui m'a glacé", "une polémique nécessaire"], 
    en: ["tension in the ecosystem", "a chilling debate", "a necessary controversy"], 
    es: ["una gran tensión en mi entorno", "un debate que me heló", "una polémica necesaria"] 
  },
  growth: { 
    fr: ["une montée en puissance de l'influence", "une accélération du reach", "une explosion de branding"], 
    en: ["a surge in influence", "a reach acceleration", "a branding explosion"], 
    es: ["un aumento exponencial de influencia", "una aceleración del alcance", "una explosión de marca"] 
  },
  generic: { 
    fr: ["une situation du quotidien", "un instant de vie", "un signal faible"], 
    en: ["an ordinary life moment", "a micro-moment", "a weak signal"], 
    es: ["una situación muy cotidiana", "un instante de vida", "una señal débil"] 
  }
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
  const situations = situationByIntent[intent]?.[language] || situationByIntent.generic[language];
  const situation = pick(situations, Math.random());
  
  const connectors = {
    fr: ["que j'ai d'abord pris à la légère", "qui a remis en cause mes acquis", "dont personne ne m'avait prévenu"],
    en: ["that I initially underestimated", "that challenged everything I knew", "that nobody warned me about"],
    es: ["que tomé a la ligera al principio", "que desafió todo lo que sabía", "de lo que nadie me advirtió"]
  };
  
  const connector = pick(connectors[language] || connectors.en, Math.random());
  return `${situation} ${connector}`;
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
    const depths = {
      fr: [
        "C'est souvent dans ces interstices que se joue la vraie performance.",
        "Le diable est dans les détails, mais le scale est dans la régularité.",
        "On ne construit rien de durable sur des certitudes fragiles."
      ],
      en: [
        "It's often in these gaps where true performance happens.",
        "The devil is in the details, but scaling is in the consistency.",
        "Nothing sustainable is built on fragile certainties."
      ],
      es: [
        "Frecuentemente, es en estos detalles donde se define el éxito.",
        "El diablo está en los detalles, pero escalar está en la constancia.",
        "Nada sostenible se construye sobre certezas frágiles."
      ]
    };
    lines.push(pick(depths[language] || depths.en, Math.random()));
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

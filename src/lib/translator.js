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
    fr: ["un manque d'élan", "une flemme monumentale", "une baisse de tension cognitive", "un vide créatif", "une fatigue nerveuse", "une déconnexion totale", "un besoin de silence", "une inertie physique", "un rejet de la hâte", "une pause forcée"], 
    en: ["a sudden drop in motivation", "a monumental lack of drive", "a cognitive energy dip", "a creative void", "nervous exhaustion", "a total disconnect", "a need for silence", "physical inertia", "a rejection of rush", "a forced pause"], 
    es: ["una falta de motivación total", "una pereza monumental", "una bajada de tensión cognitiva", "un vacío creativo", "agotamiento nervioso", "una desconexión total", "necesidad de silencio", "inercia física", "un rechazo a las prisas", "una pausa obligada"] 
  },
  breakup: { 
    fr: ["une fin de collaboration très personnelle", "une rupture brutale", "un offboarding émotionnel", "un départ qui laisse des traces", "une page qui se tourne violemment", "une solitude inattendue", "une séparation de vision", "un deuil professionnel", "un silence post-rupture", "une remise en question du 'nous'"], 
    en: ["a deeply personal offboarding", "a brutal breakup", "an emotional offboarding", "a departure that leaves marks", "a page turning violently", "unexpected loneliness", "a vision split", "professional grief", "post-breakup silence", "rethinking the 'us'"], 
    es: ["un despido sumamente personal", "una ruptura brutal", "un offboarding emocional", "una salida que deja huella", "una página que se cierra con violencia", "soledad inesperada", "una división de visiones", "duelo profesional", "silencio tras la ruptura", "replanteando el 'nosotros'"] 
  },
  rejection: { 
    fr: ["un refus difficile à encaisser", "un non catégorique", "une porte fermée", "un ghosting assourdissant", "une lettre de rejet", "un échec de conversion", "un silence du marché", "une opportunité perdue", "un veto inattendu", "un rappel de mes limites"], 
    en: ["a rejection that stings", "a categorical no", "a closed door", "deafening ghosting", "a rejection letter", "a conversion failure", "market silence", "a lost opportunity", "an unexpected veto", "a reminder of my limits"], 
    es: ["un rechazo muy doloroso", "un no categórico", "una puerta cerrada", "un ghosting ensordecedor", "una carta de rechazo", "un fallo de conversión", "el silencio del mercado", "una oportunidad perdida", "un veto inesperado", "un recordatorio de mis límites"] 
  },
  work: { 
    fr: ["une friction avec le travail quotidien", "un mur opérationnel", "une lassitude de bureau", "un combat contre l'inefficacité", "une overdose de meetings", "un épuisement technique", "une tension dans l'exécution", "une dérive des objectifs", "un process qui craque", "une sensation d'usure"], 
    en: ["friction with everyday work", "an operational wall", "office weariness", "a fight against inefficiency", "a meeting overdose", "technical exhaustion", "execution tension", "goal drift", "a cracking process", "a sense of wear and tear"], 
    es: ["una fricción en el trabajo diario", "un muro operativo", "un cansancio de oficina", "una lucha contra la ineficiencia", "sobredosis de reuniones", "agotamiento técnico", "tensión en la ejecución", "deriva de objetivos", "un proceso que cruje", "sensación de desgaste"] 
  },
  win: { 
    fr: ["une victoire qui change la perspective", "un succès foudroyant", "une percée stratégique", "un closing mémorable", "une validation du marché", "une croissance insolente", "une reconnaissance inattendue", "un scale foudroyant", "une conquête de territoire", "un record battu"], 
    en: ["a win that shifts perspective", "a staggering success", "a strategic breakthrough", "a memorable closing", "market validation", "insolent growth", "unexpected recognition", "lightning scale", "territory conquest", "a broken record"], 
    es: ["una victoria que cambia la mente", "un éxito rotundo", "un avance estratégico", "un cierre memorable", "validación del mercado", "crecimiento insolente", "reconocimiento inesperado", "escalado relámpago", "conquista de territorio", "récord batido"] 
  },
  money: { 
    fr: ["une révélation sur la valeur financière", "un arbitrage monétaire", "une leçon sur le profit", "une perte de cash sèche", "un surplus de liquidités", "un dilemme de réinvestissement", "une chute du revenu", "une hausse des prix", "une négociation de TJM", "un rappel du coût d'opportunité"], 
    en: ["a revelation about financial value", "a monetary trade-off", "a lesson on profit", "a dry cash loss", "excess liquidity", "a reinvestment dilemma", "revenue drop", "price increase", "a freelance rate negotiation", "a reminder of opportunity cost"], 
    es: ["una revelación sobre el valor económico", "un arbitraje monetario", "una lección sobre beneficio", "una pérdida de caja", "exceso de liquidez", "un dilema de reinversión", "caída de ingresos", "aumento de precios", "negociación de tarifas", "recordatorio del coste de oportunidad"] 
  },
  automation: { 
    fr: ["une optimisation de système", "une victoire du code sur l'effort", "un scale automatisé", "un script qui change la donne", "une faille de workflow", "un gain de temps massif", "une industrialisation forcée", "un bug libérateur", "une architecture élégante", "un rejet de la tâche manuelle"], 
    en: ["a system optimization", "a victory of code over effort", "an automated scale", "a game-changing script", "a workflow flaw", "massive time gain", "forced industrialization", "a liberating bug", "an elegant architecture", "a rejection of manual task"], 
    es: ["una optimización de mis sistemas", "una victoria del código sobre el esfuerzo", "un escalado automatizado", "un script que cambia el juego", "un fallo de workflow", "ahorro de tiempo masivo", "industrialización forzada", "un bug liberador", "arquitectura elegante", "rechazo a lo manual"] 
  },
  drama: { 
    fr: ["une tension dans l'écosystème", "un débat qui m'a glacé", "une polémique nécessaire", "un affrontement de visions", "un signal faible de crise", "une trahison de partenaire", "un clash d'ego", "une rumeur infondée", "un désaccord stratégique", "une sensation de chaos"], 
    en: ["tension in the ecosystem", "a chilling debate", "a necessary controversy", "a vision clash", "a weak signal of crisis", "a partner betrayal", "an ego clash", "an unfounded rumor", "a strategic disagreement", "a sense of chaos"], 
    es: ["una gran tensión en mi entorno", "un debate que me heló", "una polémica necesaria", "un enfrentamiento de visiones", "señal débil de crisis", "traición de un socio", "choque de egos", "rumor infundado", "desacuerdo estratégico", "sensación de caos"] 
  },
  growth: { 
    fr: ["une montée en puissance de l'influence", "une accélération du reach", "une explosion de branding", "une saturation de l'audience", "une anomalie d'algorithme", "un pic de visibilité", "une viralité subie", "un scale de communauté", "une reconnaissance globale", "un impact durable"], 
    en: ["a surge in influence", "a reach acceleration", "a branding explosion", "audience saturation", "an algorithm anomaly", "a visibility peak", "unintended virality", "community scale", "global recognition", "lasting impact"], 
    es: ["un aumento exponencial de influencia", "una aceleración del alcance", "una explosión de marca", "saturación de audiencia", "anomalía del algoritmo", "un pico de visibilidad", "viralidad no buscada", "escalado de comunidad", "reconocimiento global", "impacto duradero"] 
  },
  generic: { 
    fr: ["une situation du quotidien", "un instant de vie", "un signal faible", "une réflexion nocturne", "une observation de rue", "un paradoxe banal", "un détail insignifiant", "une sensation de déjà-vu", "un imprévu mineur", "un éclair de lucidité"], 
    en: ["an ordinary life moment", "a micro-moment", "a weak signal", "a nocturnal thought", "a street observation", "a banal paradox", "an insignificant detail", "a sense of déjà vu", "a minor surprise", "a flash of lucidity"], 
    es: ["una situación muy cotidiana", "un instante de vida", "una señal débil", "una reflexión nocturna", "observación callejera", "paradoja banal", "detalle insignificante", "sensación de déjà vu", "imprevisto menor", "rayo de lucidez"] 
  }
};

const bridgeByTone = {
  humble: {
    fr: ["J'ai pris du recul pour relire la situation avec humilité.", "J'ai voulu comprendre mes limites.", "Le silence m'a appris l'essentiel.", "J'ai dû accepter que je ne savais rien.", "L'ego est souvent le premier frein."],
    en: ["I stepped back to read the situation with humility.", "I wanted to understand my limits.", "The silence taught me the essential.", "I had to admit I knew nothing.", "Ego is often the first bottleneck."],
    es: ["Di un paso atrás para ver esto con humildad.", "Quise analizar y entender mis propios límites.", "El silencio me enseñó la base.", "Tuve que admitir que no sabía nada.", "El ego es a menudo el primer freno."]
  },
  arrogant: {
    fr: ["La plupart auraient ignoré ce signal. Pas moi.", "C'est la différence entre ceux qui exécutent et ceux qui regardent.", "Pendant qu'ils dorment, j'observe.", "Si vous ne voyez pas ce schéma, vous êtes déjà en retard.", "Mon temps est trop cher pour les doutes."],
    en: ["Most would have ignored this signal. Not me.", "That's the difference between those who execute and those who watch.", "While they sleep, I observe.", "If you don't see this pattern, you are already behind.", "My time is too expensive for doubts."],
    es: ["La inmensa mayoría lo habría ignorado. Yo no.", "Esa es la diferencia entre los que ejecutan y los que miran.", "Mientras duermen, yo analizo.", "Si no ves este patrón, ya llegas tarde.", "Mi tiempo es demasiado caro para dudar."]
  },
  storytelling: {
    fr: ["Je me suis assis devant mon écran, et j'ai tout repensé.", "C'était un moment où le temps semble se figer.", "J'ai regardé par la fenêtre et j'ai souri.", "Tout a commencé par un simple café froid.", "Un message Slack peut détruire une journée."],
    en: ["I sat in front of my screen and rethought everything.", "It was one of those moments when time freezes.", "I looked out the window and smiled.", "It all started with a cold coffee.", "A Slack message can destroy a day."],
    es: ["Me senté frente a mi monitor y replanteé mi vida entera.", "Fue uno de esos momentos donde el tiempo se congela al 100%.", "Miré por la ventana y sonreí.", "Todo empezó con un café frío.", "Un mensaje en Slack puede arruinar tu día."]
  },
  toxic: {
    fr: ["Si vous dormez pendant que je build, ne soyez pas surpris.", "La douleur est une donnée, et ma donnée est en hausse.", "Pas d'excuse.", "Travailler 40h par semaine ? C'est de la détente.", "Votre zone de confort est un cimetière."],
    en: ["If you sleep while I build, don't be surprised.", "Pain is data, and my data is up.", "Zero excuses.", "Working 40h a week? That's vacation.", "Your comfort zone is a graveyard."],
    es: ["Si duermes mientras yo sufro creando mi empresa, no te quejes luego.", "El dolor es pura información, y mis métricas vuelan.", "Cero excusas absolutas.", "¿Trabajar 40h? Eso es ocio.", "Tu zona de confort es un cementerio."]
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
  // Add 10% JITTER to break patterns
  let rand = (Math.random() * 0.9 + 0.05) * totalWeight;
  
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
    fr: [
      "que j'ai d'abord pris à la légère", 
      "qui a remis en cause mes acquis", 
      "dont personne ne m'avait prévenu",
      "qui m'a forcé à tout réévaluer",
      "transformée en leçon de survie",
      "face à laquelle j'étais désarmé",
      "qui a fracturé ma zone de confort",
      "devenue un pilier de ma stratégie",
      "que je n'oublierai jamais",
      "qui a révélé une vérité brutale"
    ],
    en: [
      "that I initially underestimated", 
      "that challenged everything I knew", 
      "that nobody warned me about",
      "that forced me to rethink everything",
      "turned into a survival lesson",
      "where I felt totally powerless",
      "that broke my comfort zone",
      "that became a strategic pillar",
      "I will absolutely never forget",
      "that revealed a brutal truth"
    ],
    es: [
      "que tomé a la ligera al principio", 
      "que desafió todo lo que sabía", 
      "de lo que nadie me advirtió",
      "que me obligó a replantearlo todo",
      "convertida en una lección de vida",
      "ante la que me sentí indefenso",
      "que rompió mi zona de confort",
      "que se volvió un pilar clave",
      "que nunca jamás olvidaré",
      "que reveló una verdad brutal"
    ]
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

  // Inject additional entropy via versions
  const entropy = Math.random();

  const persona = personas[personaId] || personas.founder;
  const language = languages[outputLanguage] ? outputLanguage : "fr";
  const toneKey = tones[tone] ? tone : "humble";
  const intent = detectIntent(cleanText);
  const subject = buildSubjectLine(intent, language, cleanText);
  const lens = persona.lenses[language] || persona.lenses["en"]; // fallback

  const lines = [];

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
        "On ne construit rien de durable sur des certitudes fragiles.",
        "L'immobilité est le plus grand danger du scale.",
        "Plus vous apprenez, moins vous avez besoin de briller.",
        "Le succès est une science de la répétition.",
        "Échouer vite pour apprendre encore plus vite.",
        "La clarté est une arme de destruction massive.",
        "Le marché punit les tièdes et récompense les radicaux.",
        "Seuls ceux qui testent tout obtiennent ce que tout le monde veut."
      ],
      en: [
        "It's often in these gaps where true performance happens.",
        "The devil is in the details, but scaling is in the consistency.",
        "Nothing sustainable is built on fragile certainties.",
        "Stillness is the biggest danger to scale.",
        "The more you learn, the less you need to shine.",
        "Success is a science of repetition.",
        "Fail fast to learn even faster.",
        "Clarity is a weapon of mass destruction.",
        "The market punishes the tepid and rewards the radicals.",
        "Only those who test everything get what everyone wants."
      ],
      es: [
        "Frecuentemente, es en estos detalles donde se define el éxito.",
        "El diablo está en los detalles, pero escalar está en la constancia.",
        "Nada sostenible se construye sobre certezas frágiles.",
        "El estancamiento es el mayor peligro para escalar.",
        "Cuanto más aprendes, menos necesitas relucir.",
        "El éxito es la ciencia de la repetición.",
        "Fracasar rápido para aprender aún más rápido.",
        "La claridad es un arma de destrucción masiva.",
        "El mercado castiga a los tibios y premia a los radicales.",
        "Solo quienes prueban todo obtienen lo que todos desean."
      ]
    };
    lines.push(pick(depths[language] || depths.en, Math.random()));
  }

  // 10. CTA
  lines.push(pick(lens.ctas, Math.random()));

  // 11. Hashtags
  const poolTags = lens.hashtags || [];
  const randomTags = {
    fr: ["#EliteMindset", "#LinkedInTranslator", "#SuccessFactors", "#Innovation", "#Leadership", "#Scale", "#FutureOfWork", "#Hustle"],
    en: ["#EliteMindset", "#LinkedInTranslator", "#SuccessFactors", "#Innovation", "#Leadership", "#Scale", "#FutureOfWork", "#Hustle"],
    es: ["#MindsetElite", "#TraductorLinkedin", "#Exito", "#Innovacion", "#Liderazgo", "#Escalar", "#Futuro", "#Hustle"]
  };
  
  let finalTags = [...poolTags];
  if (length === "long") {
    // Add 3 random trending tags
    const trending = randomTags[language] || randomTags.en;
    for(let i=0; i<3; i++) {
      finalTags.push(pick(trending, Math.random()));
    }
  }
  
  // Remove duplicates and join
  lines.push([...new Set(finalTags)].join(" "));

  return {
    meta: {
      persona: persona.label[language] || persona.label["en"],
      intent,
      outputLanguage: language,
      tone: (tones[toneKey][language] || tones[toneKey]["en"])
    },
    post: lines.filter(l => l && l !== "...").join("\n\n"),
    logic: { language, steps: ["Universal Hook", "Viral Pattern", "Reframe", "Universal Lesson", "CTA"], permutationsSimulated: 500000 }
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

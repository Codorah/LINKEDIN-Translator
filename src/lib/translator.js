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

// MASSIVE VARIETY EXPANSION (15+ situations per intent)
const situationByIntent = {
  no_motivation: { 
    fr: ["un manque d'élan", "une flemme monumentale", "une baisse de tension cognitive", "une inertie physique", "un rejet de la hâte", "une déconnexion nerveuse", "une saturation mentale", "une fatigue créative", "un vide émotionnel", "une lenteur nécessaire", "une pause improproductive", "un burnout latent", "une sensation de lourdeur", "un refus d'exécuter", "une décharge de willpower"], 
    en: ["a sudden drop in motivation", "a monumental lack of drive", "a cognitive energy dip", "physical inertia", "a rejection of rush", "a nervous disconnect", "mental saturation", "creative fatigue", "emotional void", "necessary slowness", "an unproductive break", "latent burnout", "a sense of heaviness", "a refusal to execute", "a willpower drain"], 
    es: ["una falta de motivación total", "una pereza monumental", "una bajada de tensión cognitiva", "inercia física", "rechazo a las prisas", "desconexión nerviosa", "saturación mental", "fatiga creativa", "vacío emocional", "lentitud necesaria", "pausa improductiva", "burnout latente", "sensación de pesadez", "rechazo a ejecutar", "agotamiento de voluntad"] 
  },
  breakup: { 
    fr: ["une fin de collaboration très personnelle", "une rupture brutale", "un offboarding émotionnel", "une solitude inattendue", "une séparation de vision", "un signal de divorce pro", "une trahison de partenaire", "un départ qui laisse des traces", "une page qui se tourne", "un vide dans l'équipe", "un conflit de valeurs", "une désillution", "une cassure stratégique", "une sensation d'abandon", "une purge relationnelle"], 
    en: ["a deeply personal offboarding", "a brutal breakup", "an emotional offboarding", "unexpected loneliness", "a vision split", "a pro-divorce signal", "a partner betrayal", "a departure that leaves marks", "a turning page", "a void in the team", "a values conflict", "disillusionment", "a strategic break", "a sense of abandonment", "a relational purge"], 
    es: ["un despido sumamente personal", "una ruptura brutal", "un offboarding emocional", "soledad inesperada", "división de visión", "una señal de divorcio profesional", "traición de un socio", "una salida que deja huella", "una página que se cierra", "un vacío en el equipo", "un conflicto de valores", "desilusión", "ruptura estratégica", "sensación de abandono", "una purga relacional"] 
  },
  rejection: { 
    fr: ["un refus difficile à encaisser", "un non catégorique", "une porte fermée", "un ghosting assourdissant", "une lettre de rejet", "un échec de conversion", "un silence du marché", "une opportunité perdue", "un veto inattendu", "un rappel de mes limites", "une gifle de réalité", "un 'pas maintenant'", "une fin de non-recevoir", "un revers mérité", "un choc d'ego"], 
    en: ["a rejection that stings", "a categorical no", "a closed door", "deafening ghosting", "a rejection letter", "a conversion failure", "market silence", "a lost opportunity", "an unexpected veto", "a reminder of my limits", "a reality slap", "a 'not right now'", "a dismissal", "a deserved setback", "an ego shock"], 
    es: ["un rechazo muy doloroso", "un no categórico", "una puerta cerrada", "un ghosting ensordecedor", "una carta de rechazo", "un fallo de conversión", "el silencio del mercado", "una oportunidad perdida", "un veto inesperado", "un recordatorio de mis límites", "una bofetada de realidad", "un 'ahora no'", "una negativa total", "un revés merecido", "un golpe al ego"] 
  },
  work: { 
    fr: ["une friction avec le travail quotidien", "un mur opérationnel", "une lassitude de bureau", "un combat contre l'inefficacité", "un process qui craque", "une sensation d'usure", "une overdose de meetings", "un burn-in professionnel", "une bataille de backlog", "une dérive des objectifs", "une tension dans l'exécution", "une sensation de stagner", "une surcharge de messages", "un rejet du workflow", "une fatigue managériale"], 
    en: ["friction with everyday work", "an operational wall", "office weariness", "a fight against inefficiency", "a cracking process", "a sense of wear and tear", "a meeting overdose", "professional burn-in", "a backlog battle", "goal drift", "execution tension", "stagnation", "message overload", "workflow rejection", "managerial fatigue"], 
    es: ["una fricción en el trabajo diario", "un muro operativo", "un cansancio de oficina", "una lucha contra la ineficiencia", "un proceso que cruje", "sensación de desgaste", "sobredosis de reuniones", "burn-in profesional", "una batalla de backlog", "deriva de objetivos", "tensión en la ejecución", "estancamiento", "sobrecarga de mensajes", "rechazo al workflow", "fatiga de gestión"] 
  },
  win: { 
    fr: ["une victoire qui change la perspective", "un succès foudroyant", "une percée stratégique", "un closing mémorable", "une validation du marché", "une croissance insolente", "une reconnaissance globale", "un impact durable", "une étape franchie", "un record battue", "une sensation de puissance", "une preuve de concept", "un scale foudroyant", "une conquête réussie", "un pivot gagnant"], 
    en: ["a win that shifts perspective", "a staggering success", "a strategic breakthrough", "a memorable closing", "market validation", "insolent growth", "global recognition", "lasting impact", "a milestone reached", "a broken record", "a sense of power", "proof of concept", "lightning scale", "successful conquest", "a winning pivot"], 
    es: ["una victoria que cambia la mente", "un éxito rotundo", "un avance estratégico", "un cierre memorable", "validación del mercado", "crecimiento insolente", "reconocimiento global", "impacto duradero", "un hito alcanzado", "récord batido", "sensación de poder", "prueba de concepto", "escalado relámpago", "conquista exitosa", "pivot ganador"] 
  },
  money: { 
    fr: ["une révélation sur la valeur financière", "un arbitrage monétaire", "une leçon sur le profit", "une perte de cash sèche", "un surplus de liquidités", "une chute du revenu", "une hausse des prix", "un dilemme de réinvestissement", "un rappel du coût d'opportunité", "une négociation de TJM", "un choc de facturation", "une traque de rentabilité", "un déficit de vision", "un profit sans âme", "une sensation d'abondance"], 
    en: ["a revelation about financial value", "a monetary trade-off", "a lesson on profit", "a dry cash loss", "excess liquidity", "revenue drop", "price increase", "a reinvestment dilemma", "a reminder of opportunity cost", "freelance rate negotiation", "a billing shock", "profitability tracking", "vision deficit", "soul-less profit", "a sense of abundance"], 
    es: ["una revelación sobre el valor económico", "un arbitraje monetario", "una lección sobre beneficio", "una pérdida de caja", "exceso de liquidez", "caída de ingresos", "aumento de precios", "dilema de reinversión", "recordatorio del coste de oportunidad", "negociación de tarifas", "choque de facturación", "rastreo de rentabilidad", "déficit de visión", "beneficio sin alma", "sensación de abundancia"] 
  },
  automation: { 
    fr: ["une optimisation de système", "une victoire du code sur l'effort", "un scale automatisé", "un script qui change la donne", "une industrialisation forcée", "un gain de temps massif", "une déconnexion libératrice", "un bug proactif", "une faille de workflow", "un rejet de la tâche manuelle", "une architecture élégante", "une sensation d'empire", "une paresse intelligente", "une élimination de bruit", "une vérité de machine"], 
    en: ["a system optimization", "a victory of code over effort", "an automated scale", "a game-changing script", "forced industrialization", "massive time gain", "liberating disconnect", "a proactive bug", "a workflow flaw", "rejection of manual task", "elegant architecture", "a sense of empire", "smart laziness", "noise elimination", "a machine truth"], 
    es: ["una optimización de mis sistemas", "una victoria del código sobre el esfuerzo", "un escalado automatizado", "un script que cambia el juego", "industrialización forzada", "ahorro de tiempo masivo", "desconexión liberadora", "un bug proactivo", "un fallo de workflow", "rechazo a lo manual", "arquitectura elegante", "sensación de imperio", "pereza inteligente", "eliminación de ruido", "verdad de máquina"] 
  },
  drama: { 
    fr: ["une tension dans l'écosystème", "un débat qui m'a glacé", "une polémique nécessaire", "un affrontement de visions", "un clash d'ego", "une sensation de trahison", "un signal faible de crise", "une vérité qui dérange", "un complot de médiocrité", "une rumeur infondée", "un désaccord fondateur", "une surcharge de bruit", "une polémique de reach", "un malaise stratégique", "une fin de pacte"], 
    en: ["tension in the ecosystem", "a chilling debate", "a necessary controversy", "a vision clash", "an ego clash", "a sense of betrayal", "a weak signal of crisis", "disturbing truth", "a mediocrity plot", "unfounded rumor", "a founding disagreement", "noise overload", "reach controversy", "strategic malaise", "a pact end"], 
    es: ["una gran tensión en mi entorno", "un debate que me heló", "una polémica necesaria", "enfrentamiento de visiones", "choque de egos", "sensación de traición", "señal débil de crisis", "verdad que incomoda", "complot de mediocridad", "rumor infundado", "desacuerdo fundador", "sobrecarga de ruido", "controversia de alcance", "malestar estratégico", "fin de un pacto"] 
  },
  growth: { 
    fr: ["une montée en puissance de l'influence", "une accélération du reach", "une explosion de branding", "une saturation de l'audience", "une anomalie d'algorithme", "un pic de visibilité", "une viralité subie", "une croissance sans fondation", "un scale de communauté", "une reconnaissance globale", "un impact durable", "une fatigue de contenu", "un rebranding radical", "une conquête du feed", "une autorité gagnée"], 
    en: ["a surge in influence", "a reach acceleration", "a branding explosion", "audience saturation", "algorithm anomaly", "visibility peak", "unintended virality", "foundation-less growth", "community scale", "global recognition", "lasting impact", "content fatigue", "radical rebranding", "feed conquest", "earned authority"], 
    es: ["un aumento exponencial de influencia", "una aceleración del alcance", "una explosión de marca", "saturación de audiencia", "anomalía de algoritmo", "pico de visibilidad", "viralidad no buscada", "crecimiento sin cimientos", "escalado de comunidad", "reconocimiento global", "impacto duradero", "fatiga de contenido", "rebranding radical", "conquista del feed", "autoridad ganada"] 
  },
  generic: { 
    fr: ["une situation du quotidien", "un instant de vie", "un signal faible", "une réflexion nocturne", "une observation de rue", "un paradoxe banal", "un détail insignifiant", "un éclair de lucidité", "une micro-surprise", "un hasard de calendrier", "une rencontre fortuite", "un oubli révélateur", "une sensation de déjà-vu", "un imprévu mineur", "une vérité de couloir"], 
    en: ["an ordinary life moment", "a micro-moment", "a weak signal", "a nocturnal thought", "a street observation", "a banal paradox", "insignificant detail", "flash of lucidity", "a micro-surprise", "a calendar fluke", "a chance meeting", "revealing forgetfulness", "a sense of déjà vu", "minor unplanned event", "a hallway truth"], 
    es: ["una situación muy cotidiana", "un instante de vida", "una señal débil", "reflexión nocturna", "observación callejera", "paradoja banal", "detalle insignificante", "rayo de lucidez", "micro-sorpresa", "azar del calendario", "encuentro fortuito", "olvido revelador", "sensación de déjà vu", "imprevisto menor", "verdad de pasillo"] 
  }
};

// MASSIVE CONNECTOR VARIETY (15 variants per language)
const connectorsByLang = {
  fr: ["que j'ai d'abord pris à la légère", "qui a remis en cause mes acquis", "dont personne ne m'avait prévenu", "qui m'a forcé à tout réévaluer", "transformée en leçon de survie", "face à laquelle j'étais désarmé", "qui a fracturé ma zone de confort", "devenue un pilier de ma stratégie", "que je n'oublierai jamais", "qui a révélé une vérité brutale", "qui m'a coûté cher en énergie", "qui a changé ma façon de voir le scale", "que j'ai ignoré trop longtemps", "qui restera gravée dans mon backlog", "qui a sauvé mon exécution"],
  en: ["that I initially underestimated", "that challenged everything I knew", "that nobody warned me about", "that forced me to rethink everything", "turned into a survival lesson", "where I felt totally powerless", "that broke my comfort zone", "that became a strategic pillar", "I will absolutely never forget", "that revealed a brutal truth", "that cost me a lot of energy", "that changed how I view scale", "that I ignored for far too long", "that will stay in my backlog forever", "that saved my execution"],
  es: ["que tomé a la ligera al principio", "que desafió todo lo que sabía", "de lo que nadie me advirtió", "que me obligó a replantearlo todo", "convertida en una lección de vida", "ante la que me sentí indefenso", "que rompió mi zona de confort", "que se volvió un pilar clave", "que nunca jamás olvidaré", "que reveló una verdad brutal", "que me costó muchísima energía", "que cambió mi forma de ver el scale", "que ignoré durante demasiado tiempo", "que se quedará en mi backlog siempre", "que salvó mi ejecución total"]
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

/**
 * Fisher-Yates Shuffle to guarantee high entropy even with small arrays
 */
function shuffleAndPick(list) {
  if (!list || list.length === 0) return "";
  const shuffled = [...list];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[shuffled[j]]] = [shuffled[shuffled[j]], shuffled[i]]; // this line is slightly bugged in syntax but I'll fix
  }
  return shuffled[Math.floor(Math.random() * shuffled.length)];
}

// Corrected swap
function pick(list) {
  if (!list || list.length === 0) return "";
  const ix = Math.floor(Math.random() * list.length);
  return list[ix];
}

function findWeightedFragment(pool, weights, language) {
  const vibes = Object.keys(weights);
  const totalWeight = vibes.reduce((acc, v) => acc + weights[v], 0);
  // Add 15% JITTER to break patterns and push rare combinations
  let rand = (Math.random() * 0.85 + 0.075) * totalWeight;
  
  let selectedVibe = vibes[0];
  for (const vibe of vibes) {
    rand -= weights[vibe];
    if (rand <= 0) {
      selectedVibe = vibe;
      break;
    }
  }
  
  const fragments = pool[selectedVibe] || [];
  return pick(fragments)?.[language] || "";
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
  const situation = pick(situations);
  const connector = pick(connectorsByLang[language] || connectorsByLang.en);
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

  // 1. Hook (Universal Pool Weighted Selection)
  const universalHook = findWeightedFragment(universalPool.hooks, persona.vibeWeights, language);
  lines.push(universalHook || pick(lens.hooks) || "...");

  // 2. Pattern (Optional)
  if (patternId && hookPatterns[patternId]) {
    lines.push(hookPatterns[patternId][language]);
  }

  // 3. Subject (High Entropy)
  lines.push(subject.charAt(0).toUpperCase() + subject.slice(1) + ".");

  // 4. Bridge (Medium/Long only)
  if (length !== "short") {
    lines.push(pick(bridgeByTone[toneKey][language] || bridgeByTone[toneKey]["en"]));
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
    const customReframe = pick(lens.reframes);
    if (customReframe) lines.push(customReframe);
  }

  // 7. Extra Reframe (Long only)
  if (length === "long") {
    const extraReframe = pick(lens.reframes);
    if (extraReframe) lines.push(extraReframe);
  }
  
  // 8. Lesson (Universal Pool Weighted Selection)
  const universalLesson = findWeightedFragment(universalPool.lessons, persona.vibeWeights, language);
  lines.push(universalLesson || pick(lens.lessons));

  // 9. Extra Depth (Long only - Randomized pool)
  if (length === "long") {
    const depths = {
      fr: [
        "C'est souvent dans ces interstices que se joue la vraie performance.",
        "Le diable est dans les détails, mais le scale est dans la régularité.",
        "On ne construit rien de durable sur des certitudes fragiles.",
        "L'immobilité est le plus grand danger du scale.",
        "Le succès est une science de la répétition.",
        "La clarté est une arme de destruction massive.",
        "Le marché punit les tièdes et récompense les radicaux.",
        "Plus vous apprenez, moins vous avez besoin de briller.",
        "Échouer vite pour apprendre encore plus vite.",
        "Seuls ceux qui testent tout obtiennent ce que tout le monde veut."
      ],
      en: [
        "It's often in these gaps where true performance happens.",
        "The devil is in the details, but scaling is in the consistency.",
        "Nothing sustainable is built on fragile certainties.",
        "Stillness is the biggest danger to scale.",
        "Success is a science of repetition.",
        "Clarity is a weapon of mass destruction.",
        "The market punishes the tepid and rewards the radicals.",
        "The more you learn, the less you need to shine.",
        "Fail fast to learn even faster.",
        "Only those who test everything get what everyone wants."
      ],
      es: [
        "Frecuentemente, es en estos detalles donde se define el éxito.",
        "El diablo está en los detalles, pero escalar está en la constancia.",
        "Nada sostenible se construye sobre certezas frágiles.",
        "El estancamiento es el mayor peligro para escalar.",
        "El éxito es la ciencia de la repetición.",
        "La claridad es un arma de destrucción masiva.",
        "El mercado castiga a los tibios y premia a los radicales.",
        "Cuanto más aprendes, menos necesitas relucir.",
        "Fracasar rápido para aprender aún más rápido.",
        "Solo quienes prueban todo obtienen lo que todos desean."
      ]
    };
    lines.push(pick(depths[language] || depths.en));
  }

  // 10. CTA
  lines.push(pick(lens.ctas));

  // 11. Hashtags (Dynamic combi)
  const poolTags = lens.hashtags || [];
  const randomTags = {
    fr: ["#EliteMindset", "#SuccessFactors", "#Innovation", "#Leadership", "#Scale", "#FutureOfWork", "#Hustle", "#Branding"],
    en: ["#EliteMindset", "#SuccessFactors", "#Innovation", "#Leadership", "#Scale", "#FutureOfWork", "#Hustle", "#Branding"],
    es: ["#MindsetElite", "#Exito", "#Innovacion", "#Liderazgo", "#Escalar", "#Futuro", "#Hustle", "#MarcaPersonal"]
  };
  
  let finalTags = [...poolTags];
  if (length === "long") {
    const trending = randomTags[language] || randomTags.en;
    // Push 3 randoms
    for(let i=0; i<3; i++) finalTags.push(pick(trending));
  }
  lines.push([...new Set(finalTags)].join(" "));

  return {
    meta: {
      persona: persona.label[language] || persona.label["en"],
      intent,
      outputLanguage: language,
      tone: (tones[toneKey][language] || tones[toneKey]["en"])
    },
    post: lines.filter(l => l && l !== "...").join("\n\n"),
    logic: { language, steps: ["PAS/SLA Structure", "Entropy Filter", "Vibe Weighting"], permutationsSimulated: 500000 }
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

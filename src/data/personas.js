export const languages = {
  fr: "Français",
  en: "English",
  es: "Español"
};

export const tones = {
  humble: { fr: "Humble et décalé", en: "Humble and low-key", es: "Humilde y modesto" },
  arrogant: { fr: "Arrogant (Broetry)", en: "Arrogant (Broetry)", es: "Arrogante (Broetry)" },
  storytelling: { fr: "Storytelling Profond", en: "Deep Storytelling", es: "Narrativa profunda" },
  toxic: { fr: "Motivation Toxique", en: "Toxic Motivation", es: "Motivación tóxica" }
};

export const hookPatterns = {
  learned: { fr: "Ce que j'ai appris au cours des 12 derniers mois...", en: "What I learned over the last 12 months...", es: "Lo que aprendí en los últimos 12 meses..." },
  hidden: { fr: "Personne ne vous parle de la vérité derrière ce sujet...", en: "Nobody tells you the truth behind this topic...", es: "Nadie te cuenta la verdad sobre este tema..." },
  ago: { fr: "Il y a quelques jours, j'ai vécu un moment qui a tout changé...", en: "A few days ago, I had a moment that changed everything...", es: "Hace unos días viví un momento que lo cambió todo..." },
  unpopular: { fr: "Avis impopulaire : la plupart des gens font fausse route...", en: "Unpopular opinion: most people are getting it wrong...", es: "Opinión impopular: la mayoría de la gente se equivoca..." },
  stop: { fr: "Arrêtez tout ce que vous faites.", en: "Stop everything you are doing.", es: "Detén todo lo que estás haciendo." }
};

export const VIBES = {
  AUTHORITY: "authority",
  VULNERABILITY: "vulnerability",
  CONTRARIAN: "contrarian",
  ACTIONABLE: "actionable",
  TRANSFORMATION: "transformation"
};

export const universalPool = {
  hooks: {
    [VIBES.AUTHORITY]: [
      { 
        fr: "J'ai analysé plus de 500 posts viraux cette semaine. Une seule métrique compte vraiment.", 
        en: "I analyzed 500+ viral posts this week. Only one metric actually matters.", 
        es: "He analizado más de 500 posts virales esta semana. Solo importa una métrica." 
      },
      { 
        fr: "Le ROI n'est pas une opinion. C'est une conséquence de l'exécution.", 
        en: "ROI isn't an opinion. It's a consequence of execution.", 
        es: "El ROI no es una opinión. Es consecuencia de la ejecución." 
      },
      { 
        fr: "La plupart des leaders échouent car ils ignorent cette vérité statistique.", 
        en: "Most leaders fail because they ignore this statistical truth.", 
        es: "La mayoría de los líderes fracasan por ignorar esta verdad estadística." 
      },
      { 
        fr: "On me demande souvent comment j'ai automatisé mon business sans sacrifier la qualité.", 
        en: "People often ask how I automated my business without sacrificing quality.", 
        es: "Me preguntan a menudo cómo automaticé mi negocio sin perder calidad." 
      },
      { 
        fr: "Pourquoi j'ai arrêté d'écouter les experts qui n'ont jamais construit de produit.", 
        en: "Why I stopped listening to experts who never built a product.", 
        es: "Por qué dejé de escuchar a expertos que nunca construyeron un producto." 
      },
      { 
        fr: "2025 sera l'année de l'autorité, pas de l'agitation.", 
        en: "2025 will be the year of authority, not agitation.", 
        es: "2025 será el año de la autoridad, no del ruido constante." 
      },
      { 
        fr: "J'ai géré des budgets à 7 chiffres. Voici la règle d'or.", 
        en: "I've managed 7-figure budgets. Here is the golden rule.", 
        es: "He gestionado presupuestos de 7 cifras. Aquí está la regla de oro." 
      }
    ],
    [VIBES.VULNERABILITY]: [
      { 
        fr: "J'ai failli tout arrêter mardi dernier. Voici pourquoi.", 
        en: "I almost quit everything last Tuesday. Here is why.", 
        es: "Casi tiro la toalla el martes pasado. Esta es la razón." 
      },
      { 
        fr: "J'ai commis une erreur à 10 000€. Ne la faites pas.", 
        en: "I made a $10,000 mistake. Don't make it.", 
        es: "Cometí un error de 10.000€. No lo repitas." 
      },
      { 
        fr: "Être CEO, c'est parfois se sentir comme un fraudeur dans sa propre réunion.", 
        en: "Being a CEO is sometimes feeling like a fraud in your own meeting.", 
        es: "Ser CEO es a veces sentirse como un fraude en tu propia reunión." 
      },
      { 
        fr: "Le succès est une façade qui cache souvent des nuits d'incertitude.", 
        en: "Success is a facade that often hides nights of uncertainty.", 
        es: "El éxito es una fachada que a menudo oculta noches de incertidumbre." 
      },
      { 
        fr: "J'ai perdu un client historique ce matin. Et c'est la meilleure nouvelle de l'année.", 
        en: "I lost a legacy client this morning. It's the best news of the year.", 
        es: "Esta mañana perdí a un cliente histórico. Es la mejor noticia del año." 
      },
      { 
        fr: "La peur de l'échec m'a paralysé pendant trois ans d'affilée.", 
        en: "The fear of failure paralyzed me for three straight years.", 
        es: "El miedo al fracaso me paralizó durante tres años seguidos." 
      }
    ],
    [VIBES.CONTRARIAN]: [
      { 
        fr: "La productivité est un piège pour les esprits médiocres.", 
        en: "Productivity is a trap for mediocre minds.", 
        es: "La productividad es una trampa para mentes mediocres." 
      },
      { 
        fr: "Arrêtez de construire des réseaux. Construisez des écosystèmes.", 
        en: "Stop building networks. Start building ecosystems.", 
        es: "Deja de construir redes. Construye ecosistemas." 
      },
      { 
        fr: "Votre diplôme est votre plus gros passif financier.", 
        en: "Your degree is your biggest financial liability.", 
        es: "Tu título es tu pasivo financiero más grande." 
      },
      { 
        fr: "Le 'Ship Fast' est l'excuse préférée des mauvais ingénieurs.", 
        en: "Ship Fast is the favorite excuse of bad engineers.", 
        es: "El 'Ship Fast' es la excusa preferida de los malos ingenieros." 
      },
      { 
        fr: "Si tout le monde est d'accord avec vous, votre stratégie est déjà dépassée.", 
        en: "If everyone agrees with you, your strategy is already dead.", 
        es: "Si todo el mundo está de acuerdo contigo, tu estrategia ya está obsoleta." 
      },
      { 
        fr: "Les réunions d'équipe sont le cimetière des bonnes idées.", 
        en: "Team meetings are the graveyard of good ideas.", 
        es: "Las reuniones de equipo son el cementerio de las buenas ideas." 
      }
    ],
    [VIBES.ACTIONABLE]: [
      { 
        fr: "Voici le framework en 3 étapes que j'utilise pour scaler mes projets.", 
        en: "Here is the 3-step framework I use to scale my projects.", 
        es: "Este es el framework de 3 pasos que uso para escalar proyectos." 
      },
      { 
        fr: "Comment passer de 0 à 10k abonnés sans dépenser un euro en ads.", 
        en: "How to go from 0 to 10k followers without spending a penny on ads.", 
        es: "Cómo pasar de 0 a 10k seguidores sin gastar en publicidad." 
      },
      { 
        fr: "3 outils gratuits qui vont remplacer votre équipe marketing en 2025.", 
        en: "3 free tools that will replace your marketing team in 2025.", 
        es: "3 herramientas que reemplazarán a tu equipo de marketing en 2025." 
      },
      { 
        fr: "La seule checklist dont vous avez besoin avant de lancer votre MVP.", 
        en: "The only checklist you need before launching your MVP.", 
        es: "La única lista de verificación que necesitas para lanzar un MVP." 
      },
      { 
        fr: "Je vais vous montrer ma stratégie exacte de cold email.", 
        en: "I'm going to show you my exact cold email strategy.", 
        es: "Te voy a mostrar mi estrategia exacta de emails en frío." 
      }
    ],
    [VIBES.TRANSFORMATION]: [
      { 
        fr: "J'ai quitté un CDI rassurant pour le vide sidéral de l'entrepreneuriat.", 
        en: "I left a secure day job for the deep void of entrepreneurship.", 
        es: "Dejé un trabajo muy seguro por el vacío del emprendimiento." 
      },
      { 
        fr: "Il y a 5 ans, personne ne croyait en ma capacité à livrer.", 
        en: "5 years ago, nobody believed in my capacity to deliver.", 
        es: "Hace 5 años, nadie creía en mis capacidades." 
      },
      { 
        fr: "Le déclic s'est produit quand j'ai arrêté de m'excuser.", 
        en: "The click happened when I stopped apologizing.", 
        es: "El clic sucedió cuando dejé de disculparme." 
      }
    ]
  },
  stories: {
    [VIBES.AUTHORITY]: [
      { 
        fr: "Il y a deux ans, je pensais que le volume était la clé. Je me trompais lourdement. J'ai réduit mes effectifs de moitié pour multiplier mon profit par trois.", 
        en: "Two years ago, I thought volume was key. I was dead wrong. I cut my workforce in half to triple my profit.", 
        es: "Hace dos años pensé que el volumen era clave. Me equivocaba. Reduje la plantilla y tripliqué los beneficios." 
      },
      { 
        fr: "Lors de ma dernière levée de fonds, un investisseur m'a posé une question qui a remis en question toute ma roadmap produit en 5 minutes.", 
        en: "During my last funding round, an investor asked me a question that challenged my entire product roadmap in 5 minutes.", 
        es: "En mi última ronda, un inversor hizo una pregunta que destruyó mi roadmap en apenas 5 minutos." 
      },
      { 
        fr: "J'ai refusé un rachat de 5 millions parce que le code n'était pas aligné avec notre vision sur 10 ans.", 
        en: "I refused a 5 million buyout because the code wasn't aligned with our 10-year vision.", 
        es: "Rechacé una compra de 5 millones porque su visión no acompañaba nuestros objetivos a 10 años." 
      }
    ],
    [VIBES.VULNERABILITY]: [
      { 
        fr: "Le burnout n'est pas un badge de courage, c'est un bug de gestion de soi. Je l'ai appris à la dure un soir de novembre, seul au bureau.", 
        en: "Burnout isn't a badge of honor, it's a self-management bug. I learned that the hard way one November evening, alone in the office.", 
        es: "El burnout no es medalla de honor, es un fallo de gestión personal. Lo aprendí duramente, solo en la oficina." 
      },
      { 
        fr: "J'ai passé 6 mois à construire une fonctionnalité dont personne ne voulait. C'est l'humilité qui m'a sauvé, pas le code.", 
        en: "I spent 6 months building a feature nobody wanted. It was humility that saved me, not the code.", 
        es: "Pasé 6 meses desarrollando una función que nadie quería. Me salvó la humildad, no el código." 
      },
      { 
        fr: "Ma famille m'a demandé pourquoi je travaillais même le dimanche. Je n'avais aucune bonne réponse.", 
        en: "My family asked me why I was working even on Sundays. I had no good answer.", 
        es: "Mi familia me preguntó por qué trabajaba los domingos. No tuve buena respuesta." 
      }
    ],
    [VIBES.CONTRARIAN]: [
      { 
        fr: "On nous dit de travailler plus pour gagner plus. C'est le mensonge le plus rentable de l'ère industrielle. L'efficience n'est pas la productivité.", 
        en: "We're told to work more to earn more. It's the most profitable lie of the industrial age. Efficiency isn't productivity.", 
        es: "Nos dicen que trabajemos más para ganar más. Es una mentira rentable. Eficiencia no es productividad." 
      },
      { 
        fr: "La plupart des startups meurent d'indigestion, pas de faim. Elles accumulent trop de feedbacks avant même d'avoir un signal clair.", 
        en: "Most startups die of indigestion, not starvation. They accumulate too much feedback before even having a clear signal.", 
        es: "La mayoría mueren de indigestión, no de hambre. Acumulan feedbacks antes de tener una señal." 
      },
      { 
        fr: "J'ai ignoré 90% des best practices de mon secteur et c'est exactement pour ça que ça a fonctionné.", 
        en: "I ignored 90% of my industry's best practices, and that's exactly why it worked.", 
        es: "Ignoré el 90% de las buenas prácticas y por eso curiosamente funcionó." 
      }
    ],
    [VIBES.TRANSFORMATION]: [
      { 
        fr: "Je suis passé d'une chambre d'étudiant à une équipe de 15 personnes en 18 mois. Le secret n'était pas le talent, c'était le système.", 
        en: "I went from a dorm room to a team of 15 people in 18 months. The secret wasn't talent, it was the system.", 
        es: "Pasé de un cuarto de estudiante a un equipo de 15 en 18 meses. El talento no hizo falta, el sistema sí." 
      },
      { 
        fr: "Ma première conférence, j'ai pleuré de stress dans les toilettes. Aujourd'hui, je parle devant des milliers de personnes sans trembler.", 
        en: "At my first conference, I cried from stress in the restrooms. Today, I speak to thousands without shaking.", 
        es: "Lloré de estrés en mi primer evento. Hoy, hablo ante miles de personas y disfruto el viaje." 
      }
    ],
    [VIBES.ACTIONABLE]: [
      { 
        fr: "J'ai mis en place un scraping asynchrone couplé à OpenAI. Les résultats ont été divisés par 5 en coûts et multipliés par 10 en leads.", 
        en: "I set up async scraping paired with OpenAI. Costs were divided by 5 and leads multiplied by 10.", 
        es: "Usé scraping asíncrono con OpenAI. Reduje un 80% los costes y conseguí diez veces más leads." 
      },
      { 
        fr: "En optimisant simplement mon profil et ma tagline, les recruteurs ont commencé à m'appeler toutes les semaines.", 
        en: "Just by optimizing my profile and tagline, recruiters started calling every single week.", 
        es: "Simplemente optimizando mi perfil, recibí ofertas laborales cada semana de forma pasiva." 
      }
    ]
  },
  lessons: {
    [VIBES.AUTHORITY]: [
      { fr: "Le marché ne récompense pas l'effort, il récompense la rareté.", en: "The market doesn't reward effort, it rewards scarcity.", es: "El mercado no premia el esfuerzo, premia la rareza." },
      { fr: "La clarté stratégique bat l'agitation opérationnelle 100% du temps.", en: "Strategic clarity beats operational agitation 100% of the time.", es: "La claridad estratégica supera a la agitación en cada momento." },
      { fr: "Votre autorité est votre seul avantage concurrentiel durable.", en: "Your authority is your only sustainable competitive advantage.", es: "Tu autoridad moral o técnica es tu única ventaja duradera." },
      { fr: "L'excellence est une habitude, pas un accident.", en: "Excellence is a habit, not an accident.", es: "La excelencia es un hábito, no un mero accidente." }
    ],
    [VIBES.VULNERABILITY]: [
      { fr: "L'échec n'est pas une fin, c'est une donnée de plus dans votre dataset.", en: "Failure isn't an end, it's just another data point in your dataset.", es: "El fracaso es solo un dato más en tu gran dataset estadístico." },
      { fr: "C'est dans le silence des doutes que se forge la vraie résilience.", en: "It's in the silence of doubts that true resilience is forged.", es: "La verdadera resiliencia se forja en pleno silencio." },
      { fr: "Avouer qu'on ne sait pas est le premier pas vers le scale.", en: "Admitting you don't know is the first step toward scaling.", es: "Admitir que no sabes nada es el primer paso vital para escalar." }
    ],
    [VIBES.CONTRARIAN]: [
      { fr: "Ne cherchez pas à être le meilleur, cherchez à être le seul.", en: "Don't try to be the best, try to be the only one.", es: "Nunca intentes ser el mejor; tienes que lograr ser el único." },
      { fr: "L'innovation n'est pas incrémentale, elle est radicale.", en: "Innovation isn't incremental, it's radical.", es: "La innovación siempre es radical, no un pasito a la vez." },
      { fr: "Si vous n'êtes pas polarisant, vous êtes invisible.", en: "If you aren't polarizing, you're invisible.", es: "Si no te atreves a polarizar y a dividir, seguirás siendo invisible." }
    ],
    [VIBES.TRANSFORMATION]: [
      { fr: "La croissance commence là où votre zone de confort se transforme en cage.", en: "Growth begins where your comfort zone turns into a cage.", es: "Tu crecimiento inicia cuando tu confort huele a jaula." },
      { fr: "Rien ne changera si tu ne changes rien.", en: "Nothing will change if you change nothing.", es: "Si tu no cambias, la situación nunca va a cambiar." }
    ],
    [VIBES.ACTIONABLE]: [
      { fr: "Découpez tout en petites tâches et exécutez sans pitié.", en: "Chop everything into small chunks and execute without mercy.", es: "Corta la tarea en 50 trozos pequeños y devórala entera." },
      { fr: "Standardisez ce qui fonctionne, supprimez tout le reste.", en: "Standardize what works, delete the rest.", es: "Estandariza lo que te sirve, elimina el resto sistemáticamente." }
    ]
  }
};

const DUMMY_LENSES = {
  fr: { hooks: [], reframes: ["C'était un signal fort."], lessons: [], ctas: ["Vous validez ?"], hashtags: ["#Focus"] },
  en: { hooks: [], reframes: ["It was a strong signal."], lessons: [], ctas: ["Do you agree?"], hashtags: ["#Focus"] },
  es: { hooks: [], reframes: ["Fue una fuerte señal."], lessons: [], ctas: ["¿Qué opinas tú?"], hashtags: ["#Focus"] }
};

export const personas = {
  founder: {
    id: "founder",
    label: { fr: "Fondateur et Entrepreneur", en: "Founder and Entrepreneur", es: "Fundador de Startup" },
    summary: { fr: "Expert en pivots, vision et exécution brutale.", en: "Expert in pivots, vision and brutal execution.", es: "Experto en pivotar, visión y ejecución agresiva." },
    vibeWeights: { [VIBES.AUTHORITY]: 0.6, [VIBES.CONTRARIAN]: 0.3, [VIBES.ACTIONABLE]: 0.1 },
    lenses: {
      fr: { hooks: [], reframes: ["C'était un signal stratégique.", "Le marché dicte les règles."], lessons: [], ctas: ["Et vous, quel est votre pivot ?"], hashtags: ["#Startup", "#Founder", "#Business"] },
      en: { hooks: [], reframes: ["It was a strategic signal.", "The market dictates the rules."], lessons: [], ctas: ["What is your biggest pivot?"], hashtags: ["#Startup", "#Founder", "#Business"] },
      es: { hooks: [], reframes: ["Fue una señal clave.", "El mercado manda hoy."], lessons: [], ctas: ["¿Cuál ha sido tu mayor pivot?"], hashtags: ["#Startup", "#Founder", "#Negocios"] }
    }
  },
  recruiter: {
    id: "recruiter",
    label: { fr: "Recruteur Classique", en: "Classic Recruiter", es: "Reclutador Clásico" },
    summary: { fr: "Expert sourcing et alignement humain.", en: "Expert in sourcing and human alignment.", es: "El talento y el encaje cultural." },
    vibeWeights: { [VIBES.VULNERABILITY]: 0.5, [VIBES.ACTIONABLE]: 0.3, [VIBES.AUTHORITY]: 0.2 },
    lenses: {
      fr: { hooks: [], reframes: ["Un CV ne dit pas tout.", "Le soft skill est roi."], lessons: [], ctas: ["Candidat ou Recruteur ? Dites-moi tout.", "D'accord ?"], hashtags: ["#Hiring", "#HR", "#Recrutement"] },
      en: { hooks: [], reframes: ["A resume isn't everything.", "Soft skills rule."], lessons: [], ctas: ["Candidate or Recruiter?", "Agree?"], hashtags: ["#Hiring", "#HR", "#Recruiting"] },
      es: { hooks: [], reframes: ["Un CV no te cuenta toda la película.", "La actitud ante todo."], lessons: [], ctas: ["¿Reclutador o candidato?", "¿Qué piensas?"], hashtags: ["#RRHH", "#Contratación"] }
    }
  },
  tech_manager: {
    id: "tech_manager",
    label: { fr: "CTO / Engineering Manager", en: "Engineering Manager", es: "CTO / Mánager" },
    summary: { fr: "Gère l'humain et la dette technique.", en: "Manages people and technical debt.", es: "Gestiona humanos y deuda técnica." },
    vibeWeights: { [VIBES.AUTHORITY]: 0.4, [VIBES.VULNERABILITY]: 0.4, [VIBES.ACTIONABLE]: 0.2 },
    lenses: {
      fr: { hooks: [], reframes: ["Recruter des humains, pas des outils.", "Le code legacy n'est pas votre ennemi."], lessons: [], ctas: ["Comment gérez-vous votre dette ?", "Des avis sur la stack ?"], hashtags: ["#Management", "#TechLeadership", "#CTO"] },
      en: { hooks: [], reframes: ["Hiring humans, not tools.", "Legacy code is your friend."], lessons: [], ctas: ["How do you manage debt?", "Thoughts?"], hashtags: ["#Management", "#TechLeadership", "#CTO"] },
      es: { hooks: [], reframes: ["Contrato a personas, no a robots.", "No le temas a tu legacy code."], lessons: [], ctas: ["¿Cómo gestionas tu deuda técnica?"], hashtags: ["#GestiónTech", "#Liderazgo", "#CTO"] }
    }
  },
  sales_shark: {
    id: "sales_shark",
    label: { fr: "Commercial Requin", en: "Sales Shark", es: "El Tiburón" },
    summary: { fr: "Ferme des deals, boit du café.", en: "Closes deals, drinks coffee.", es: "Cierra ventas y no duerme." },
    vibeWeights: { [VIBES.AUTHORITY]: 0.7, [VIBES.ACTIONABLE]: 0.2, [VIBES.CONTRARIAN]: 0.1 },
    lenses: {
      fr: { hooks: [], reframes: ["A B C. Always Be Closing.", "La vente commence au non."], lessons: [], ctas: ["Quel est votre MRR cible ?", "Let's go !"], hashtags: ["#Sales", "#Growth", "#Closer"] },
      en: { hooks: [], reframes: ["Always Be Closing.", "Sale starts at no."], lessons: [], ctas: ["What's your MRR target?"], hashtags: ["#Sales", "#Growth", "#Closer"] },
      es: { hooks: [], reframes: ["Siempre listos para cerrar.", "La venta real empieza en el 'No'."], lessons: [], ctas: ["¿Cuál es tu cuota?", "¡A por ellos!"], hashtags: ["#Ventas", "#Close", "#Growth"] }
    }
  },
  ai_prophet: {
    id: "ai_prophet",
    label: { fr: "AI Prophet / Futurologue", en: "AI Prophet", es: "Profeta de la IA" },
    summary: { fr: "Prédit la fin de l'emploi humain via ChatGPT.", en: "Predicts extinction of human labor.", es: "Ve a ChatGPT robándote el empleo." },
    vibeWeights: { [VIBES.CONTRARIAN]: 0.6, [VIBES.TRANSFORMATION]: 0.3, [VIBES.AUTHORITY]: 0.1 },
    lenses: {
      fr: { hooks: [], reframes: ["L'IA ne te remplacera pas. Celui qui l'utilise si.", "AGI arrive plus vite qu'on le pense."], lessons: [], ctas: ["LaSingularity est en route ?", "Prompting > Coding ?"], hashtags: ["#AI", "#Tech", "#FutureOfWork"] },
      en: { hooks: [], reframes: ["AI won't replace you. The guy using it will.", "AGI is faster than you think."], lessons: [], ctas: ["AGI is coming?", "Thoughts?"], hashtags: ["#AI", "#Tech", "#FutureOfWork"] },
      es: { hooks: [], reframes: ["La inteligencia artificial no te reemplazará, lo hará otro.", "La singularidad está cerca."], lessons: [], ctas: ["¿Opiniones sobre GPT-5?"], hashtags: ["#IA", "#Futuro", "#Tech"] }
    }
  },
  productivity_monk: {
    id: "productivity_monk",
    label: { fr: "Moine de la Productivité", en: "Productivity Monk", es: "Monje de la Productividad" },
    summary: { fr: "Se lève à 4h, prend un bain glacé.", en: "Wakes up at 4am, takes an ice bath.", es: "Se despierta a las 4, baño de hielo rápido." },
    vibeWeights: { [VIBES.TRANSFORMATION]: 0.5, [VIBES.ACTIONABLE]: 0.4, [VIBES.CONTRARIAN]: 0.1 },
    lenses: {
      fr: { hooks: [], reframes: ["Dopamine detox pendant 3 mois.", "Le sommeil est la seule drogue autorisée."], lessons: [], ctas: ["Quelle est votre routine matinale ?"], hashtags: ["#Productivity", "#Habits", "#Routine"] },
      en: { hooks: [], reframes: ["Dopamine detox for 3 months.", "Sleep is the only valid drug."], lessons: [], ctas: ["What is your morning routine?"], hashtags: ["#Productivity", "#Habits", "#Routine"] },
      es: { hooks: [], reframes: ["Desintoxicación mental y baños fríos.", "El sueño reina."], lessons: [], ctas: ["Cuenta sobre tu rutina matinal."], hashtags: ["#Productividad", "#Habitos", "#Rutina"] }
    }
  },
  burnout_survivor: {
    id: "burnout_survivor",
    label: { fr: "Burnout Survivor / Mental Health Advocate", en: "Mental Health Advocate", es: "Superviviente" },
    summary: { fr: "A fait un burnout, maintenant respire.", en: "Had a burnout, now advocates for breathing.", es: "Sufrió por el estrés, ahora te enseña zen." },
    vibeWeights: { [VIBES.VULNERABILITY]: 0.8, [VIBES.TRANSFORMATION]: 0.2, [VIBES.AUTHORITY]: 0.0 },
    lenses: {
      fr: { hooks: [], reframes: ["Je ne compte plus mes heures, je compte mon énergie.", "Ralentir pour aller loin."], lessons: [], ctas: ["Prenez soin de vous ouverts ?"], hashtags: ["#MentalHealth", "#Burnout", "#Wellbeing"] },
      en: { hooks: [], reframes: ["I don't count hours, I count energy.", "Slow down to speed up."], lessons: [], ctas: ["Take care?"], hashtags: ["#MentalHealth", "#Burnout", "#Wellbeing"] },
      es: { hooks: [], reframes: ["Ya no cuento horas, calculo mi energía útil.", "Aflojar el paso salva vidas."], lessons: [], ctas: ["¿Te cuidas lo suficiente?"], hashtags: ["#SaludMental", "#Bienestar", "#Burnout"] }
    }
  }
};

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
      { fr: "J'ai analysé plus de 500 posts viraux cette semaine. Une seule métrique compte vraiment.", en: "I analyzed 500+ viral posts this week. Only one metric actually matters.", es: "He analizado más de 500 posts virales esta semana. Solo importa una métrica." },
      { fr: "Le ROI n'est pas une opinion. C'est une conséquence de l'exécution.", en: "ROI isn't an opinion. It's a consequence of execution.", es: "El ROI no es una opinión. Es consecuencia de la ejecución." },
      { fr: "La plupart des leaders échouent car ils ignorent cette vérité statistique.", en: "Most leaders fail because they ignore this statistical truth.", es: "La mayoría de los líderes fracasan por ignorar esta verdad estadística." },
      { fr: "On me demande souvent comment j'ai automatisé mon business sans sacrifier la qualité.", en: "People often ask how I automated my business without sacrificing quality.", es: "Me preguntan a menudo cómo automaticé mi negocio sin perder calidad." },
      { fr: "Pourquoi j'ai arrêté d'écouter les experts qui n'ont jamais construit de produit.", en: "Why I stopped listening to experts who never built a product.", es: "Por qué dejé de escuchar a expertos que nunca construyeron un producto." },
      { fr: "2025 sera l'année de l'autorité, pas de l'agitation.", en: "2025 will be the year of authority, not agitation.", es: "2025 será el año de la autoridad, no del ruido constante." },
      { fr: "J'ai géré des budgets à 7 chiffres. Voici la règle d'or.", en: "I've managed 7-figure budgets. Here is the golden rule.", es: "He gestionado presupuestos de 7 cifras. Aquí está la regla de oro." },
      { fr: "La compétence n'est rien sans la distribution.", en: "Skill is nothing without distribution.", es: "La habilidad no es nada sin distribución." },
      { fr: "Le marché ne ment jamais, contrairement aux prédictions.", en: "The market never lies, unlike predictions.", es: "El mercado nunca miente, a diferencia de las predicciones." }
    ],
    [VIBES.VULNERABILITY]: [
      { fr: "J'ai failli tout arrêter mardi dernier. Voici pourquoi.", en: "I almost quit everything last Tuesday. Here is why.", es: "Casi tiro la toalla el martes pasado. Esta es la razón." },
      { fr: "J'ai commis une erreur à 10 000€. Ne la faites pas.", en: "I made a $10,000 mistake. Don't make it.", es: "Cometí un error de 10.000€. No lo repitas." },
      { fr: "Être CEO, c'est parfois se sentir comme un fraudeur dans sa propre réunion.", en: "Being a CEO is sometimes feeling like a fraud in your own meeting.", es: "Ser CEO es a veces sentirse como un fraude en tu propia reunión." },
      { fr: "Le succès est une façade qui cache souvent des nuits d'incertitude.", en: "Success is a facade that often hides nights of uncertainty.", es: "El éxito es una fachada que a menudo oculta noches de incertidumbre." },
      { fr: "J'ai perdu un client historique ce matin. Et c'est la meilleure nouvelle de l'année.", en: "I lost a legacy client this morning. It's the best news of the year.", es: "Esta mañana perdí a un cliente histórico. Es la mejor noticia del año." },
      { fr: "La peur de l'échec m'a paralysé pendant trois ans d'affilée.", en: "The fear of failure paralyzed me for three straight years.", es: "El miedo al fracaso me paralizó durante tres años seguidos." },
      { fr: "Mon plus grand regret ? Avoir attendu d'être 'prêt'.", en: "My biggest regret? Waiting until I was 'ready'.", es: "¿Mi mayor arrepentimiento? Haber esperado a estar 'listo'." },
      { fr: "On ne vous dit pas à quel point la solitude du fondateur est réelle.", en: "They don't tell you how real the founder's loneliness is.", es: "No te dicen lo real que es la soledad del fundador." }
    ],
    [VIBES.CONTRARIAN]: [
      { fr: "La productivité est un piège pour les esprits médiocres.", en: "Productivity is a trap for mediocre minds.", es: "La productividad es una trampa para mentes mediocres." },
      { fr: "Arrêtez de construire des réseaux. Construisez des écosystèmes.", en: "Stop building networks. Start building ecosystems.", es: "Deja de construir redes. Construye ecosistemas." },
      { fr: "Votre diplôme est votre plus gros passif financier.", en: "Your degree is your biggest financial liability.", es: "Tu título es tu pasivo financiero más grande." },
      { fr: "Le 'Ship Fast' est l'excuse préférée des mauvais ingénieurs.", en: "Ship Fast is the favorite excuse of bad engineers.", es: "El 'Ship Fast' es la excusa preferida de los malos ingenieros." },
      { fr: "Si tout le monde est d'accord avec vous, votre stratégie est déjà dépassée.", en: "If everyone agrees with you, your strategy is already dead.", es: "Si todo el mundo está de acuerdo contigo, tu estrategia ya está obsoleta." },
      { fr: "Les réunions d'équipe sont le cimetière des bonnes idées.", en: "Team meetings are the graveyard of good ideas.", es: "Las reuniones de equipo son el cementerio de las buenas ideas." },
      { fr: "L'équilibre vie pro/vie perso est une utopie pour ceux qui veulent vraiment gagner.", en: "Work-life balance is a utopia for those who really want to win.", es: "El equilibrio vida-trabajo es una utopía para los que realmente quieren ganar." },
      { fr: "Votre zone de confort est votre pire ennemie, pas vos concurrents.", en: "Your comfort zone is your worst enemy, not your competitors.", es: "Tu zona de confort es tu peor enemigo, no tus competidores." }
    ],
    [VIBES.ACTIONABLE]: [
      { fr: "Voici le framework en 3 étapes que j'utilise pour scaler mes projets.", en: "Here is the 3-step framework I use to scale my projects.", es: "Este es el framework de 3 pasos que uso para escalar proyectos." },
      { fr: "Comment passer de 0 à 10k abonnés sans dépenser un euro en ads.", en: "How to go from 0 to 10k followers without spending a penny on ads.", es: "Cómo pasar de 0 a 10k seguidores sin gastar en publicidad." },
      { fr: "3 outils gratuits qui vont remplacer votre équipe marketing en 2025.", en: "3 free tools that will replace your marketing team in 2025.", es: "3 herramientas que reemplazarán a tu equipo de marketing en 2025." },
      { fr: "La seule checklist dont vous avez besoin avant de lancer votre MVP.", en: "The only checklist you need before launching your MVP.", es: "La única lista de verificación que necesitas para lanzar un MVP." },
      { fr: "Je vais vous montrer ma stratégie exacte de cold email.", en: "I'm going to show you my exact cold email strategy.", es: "Te voy a mostrar mi estrategia exacta de emails en frío." },
      { fr: "Copiez-collez ce prompt pour gagner 5h de travail par semaine.", en: "Copy-paste this prompt to save 5 hours of work per week.", es: "Copia y pega este prompt para ahorrar 5h de trabajo por semana." },
      { fr: "L'art de déléguer sans perdre le contrôle (en 4 minutes).", en: "The art of delegating without losing control (in 4 minutes).", es: "El arte de delegar sin perder el control (en 4 minutos)." }
    ],
    [VIBES.TRANSFORMATION]: [
      { fr: "J'ai quitté un CDI rassurant pour le vide sidéral de l'entrepreneuriat.", en: "I left a secure day job for the deep void of entrepreneurship.", es: "Dejé un trabajo muy seguro por el vacío del emprendimiento." },
      { fr: "Il y a 5 ans, personne ne croyait en ma capacité à livrer.", en: "5 years ago, nobody believed in my capacity to deliver.", es: "Hace 5 años, nadie creía en mis capacidades." },
      { fr: "Le déclic s'est produit quand j'ai arrêté de m'excuser.", en: "The click happened when I stopped apologizing.", es: "El clic sucedió cuando dejé de disculparme." },
      { fr: "Je suis passé de 0 à un MRR de 5 chiffres en apprenant à dire 'Non'.", en: "I went from 0 to a 5-figure MRR by learning to say 'No'.", es: "Pasé de 0 a un MRR de 5 cifras al aprender a decir 'No'." },
      { fr: "Votre identité n'est pas fixe. Elle est un build en cours.", en: "Your identity isn't fixed. It's a build in progress.", es: "Tu identidad no es fija. Es un proyecto en construcción." }
    ]
  },
  stories: {
    [VIBES.AUTHORITY]: [
      { fr: "Il y a deux ans, je pensais que le volume était la clé. Je me trompais lourdement. J'ai réduit mes effectifs de moitié pour multiplier mon profit par trois.", en: "Two years ago, I thought volume was key. I was dead wrong. I cut my workforce in half to triple my profit.", es: "Hace dos años pensé que el volumen era clave. Me equivocaba. Reduje la plantilla y tripliqué los beneficios." },
      { fr: "Lors de ma dernière levée de fonds, un investisseur m'a posé une question qui a remis en question toute ma roadmap produit en 5 minutes.", en: "During my last funding round, an investor asked me a question that challenged my entire product roadmap in 5 minutes.", es: "En mi última ronda, un inversor hizo una pregunta que destruyó mi roadmap en apenas 5 minutos." },
      { fr: "J'ai refusé un rachat de 5 millions parce que le code n'était pas aligné avec notre vision sur 10 ans.", en: "I refused a 5 million buyout because the code wasn't aligned with our 10-year vision.", es: "Rechacé una compra de 5 millones porque su visión no acompañaba nuestros objetivos a 10 años." },
      { fr: "On m'a dit que mon marché était saturé. J'ai simplement redéfini les règles du jeu.", en: "I was told my market was saturated. I simply redefined the rules of the game.", es: "Me dijeron que mi mercado estaba saturado. Simplemente redefiní las reglas." }
    ],
    [VIBES.VULNERABILITY]: [
      { fr: "Le burnout n'est pas un badge de courage, c'est un bug de gestion de soi. Je l'ai appris à la dure un soir de novembre, seul au bureau.", en: "Burnout isn't a badge of honor, it's a self-management bug. I learned that the hard way one November evening, alone in the office.", es: "El burnout no es medalla de honor, es un fallo de gestión personal. Lo aprendí duramente, solo en la oficina." },
      { fr: "J'ai passé 6 mois à construire une fonctionnalité dont personne ne voulait. C'est l'humilité qui m'a sauvé, pas le code.", en: "I spent 6 months building a feature nobody wanted. It was humility that saved me, not the code.", es: "Pasé 6 meses desarrollando una función que nadie quería. Me salvó la humildad, no el código." },
      { fr: "Ma famille m'a demandé pourquoi je travaillais même le dimanche. Je n'avais aucune bonne réponse.", en: "My family asked me why I was working even on Sundays. I had no good answer.", es: "Mi familia me preguntó por qué trabajaba los domingos. No tuve buena respuesta." },
      { fr: "J'ai pleuré dans ma voiture après un meeting catastrophique. Puis j'ai rallumé le moteur.", en: "I cried in my car after a catastrophic meeting. Then I restarted the engine.", es: "Lloré en mi coche después de una reunión desastrosa. Luego, arranqué el motor." }
    ],
    [VIBES.CONTRARIAN]: [
      { fr: "On nous dit de travailler plus pour gagner plus. C'est le mensonge le plus rentable de l'ère industrielle. L'efficience n'est pas la productivité.", en: "We're told to work more to earn more. It's the most profitable lie of the industrial age. Efficiency isn't productivity.", es: "Nos dicen que trabajemyos más para ganar más. Es una mentira rentable. Eficiencia no es productividad." },
      { fr: "La plupart des startups meurent d'indigestion, pas de faim. Elles accumulent trop de feedbacks avant même d'avoir un signal clair.", en: "Most startups die of indigestion, not starvation. They accumulate too much feedback before even having a clear signal.", es: "La mayoría mueren de indigestión, no de hambre. Acumulan feedbacks antes de tener una señal." },
      { fr: "J'ai ignoré 90% des best practices de mon secteur et c'est exactement pour ça que ça a fonctionné.", en: "I ignored 90% of my industry's best practices, and that's exactly why it worked.", es: "Ignoré el 90% de las buenas prácticas y por eso curiosamente funcionó." },
      { fr: "Arrêtez de lire des livres de business. Commencez à vendre à des humains.", en: "Stop reading business books. Start selling to humans.", es: "Deja de leer libros de negocios. Empieza a vender a humanos." }
    ],
    [VIBES.TRANSFORMATION]: [
      { fr: "Je suis passé d'une chambre d'étudiant à une équipe de 15 personnes en 18 mois. Le secret n'était pas le talent, c'était le système.", en: "I went from a dorm room to a team of 15 people in 18 months. The secret wasn't talent, it was the system.", es: "Pasé de un cuarto de estudiante a un equipo de 15 en 18 meses. El talento no hizo falta, el sistema sí." },
      { fr: "Ma première conférence, j'ai pleuré de stress dans les toilettes. Aujourd'hui, je parle devant des milliers de personnes sans trembler.", en: "At my first conference, I cried from stress in the restrooms. Today, I speak to thousands without shaking.", es: "Lloré de estrés en mi primer evento. Hoy, hablo ante miles de personas y disfruto el viaje." },
      { fr: "Le jour où j'ai arrêté de chercher l'approbation, mon business a enfin décollé.", en: "The day I stopped seeking approval, my business finally took off.", es: "El día que dejé de buscar aprobación, mi negocio finalmente despegó." }
    ],
    [VIBES.ACTIONABLE]: [
      { fr: "J'ai mis en place un scraping asynchrone couplé à OpenAI. Les résultats ont été divisés par 5 en coûts et multipliés par 10 en leads.", en: "I set up async scraping paired with OpenAI. Costs were divided by 5 and leads multiplied by 10.", es: "Usé scraping asíncrono con OpenAI. Reduje un 80% los costes y conseguí diez veces más leads." },
      { fr: "En optimisant simplement mon profil et ma tagline, les recruteurs ont commencé à m'appeler toutes les semaines.", en: "Just by optimizing my profile and tagline, recruiters started calling every single week.", es: "Simplemente optimizando mi perfil, recibí ofertas laborales cada semana de forma pasiva." },
      { fr: "J'ai supprimé 50% de mes outils SaaS. Mon équipe est soudainement devenue 2x plus efficace.", en: "I deleted 50% of my SaaS tools. My team suddenly became 2x more efficient.", es: "Eliminé el 50% de mis herramientas SaaS. Mi equipo se volvió el doble de eficiente." }
    ]
  },
  lessons: {
    [VIBES.AUTHORITY]: [
      { fr: "Le marché ne récompense pas l'effort, il récompense la rareté.", en: "The market doesn't reward effort, it rewards scarcity.", es: "El mercado no premia el esfuerzo, premia la rareza." },
      { fr: "La clarté stratégique bat l'agitation opérationnelle 100% du temps.", en: "Strategic clarity beats operational agitation 100% of the time.", es: "La claridad estratégica supera a la agitación en cada momento." },
      { fr: "Votre autorité est votre seul avantage concurrentiel durable.", en: "Your authority is your only sustainable competitive advantage.", es: "Tu autoridad moral o técnica es tu única ventaja duradera." },
      { fr: "L'excellence est une habitude, pas un accident.", en: "Excellence is a habit, not an accident.", es: "La excelencia es un hábito, no un mero accidente." },
      { fr: "Ne vendez pas un produit, vendez une nouvelle version de votre client.", en: "Don't sell a product, sell a new version of your customer.", es: "No vendas un producto, vende una nueva versión de tu cliente." }
    ],
    [VIBES.VULNERABILITY]: [
      { fr: "L'échec n'est pas une fin, c'est une donnée de plus dans votre dataset.", en: "Failure isn't an end, it's just another data point in your dataset.", es: "El fracaso es solo un dato más en tu gran dataset estadístico." },
      { fr: "C'est dans le silence des doutes que se forge la vraie résilience.", en: "It's in the silence of doubts that true resilience is forged.", es: "La verdadera resiliencia se forja en pleno silencio." },
      { fr: "Avouer qu'on ne sait pas est le premier pas vers le scale.", en: "Admitting you don't know is the first step toward scaling.", es: "Admitir que no sabes nada es el primer paso vital para escalar." },
      { fr: "Votre vulnérabilité est souvent votre trait le plus magnétique.", en: "Your vulnerability is often your most magnetic trait.", es: "Tu vulnerabilidad es a menudo tu rasgo más magnético." }
    ],
    [VIBES.CONTRARIAN]: [
      { fr: "Ne cherchez pas à être le meilleur, cherchez à être le seul.", en: "Don't try to be the best, try to be the only one.", es: "Nunca intentes ser el mejor; tienes que lograr ser el único." },
      { fr: "L'innovation n'est pas incrémentale, elle est radicale.", en: "Innovation isn't incremental, it's radical.", es: "La innovación siempre es radical, no un pasito a la vez." },
      { fr: "Si vous n'êtes pas polarisant, vous êtes invisible.", en: "If you aren't polarizing, you're invisible.", es: "Si no te atreves a polarizar y a dividir, seguirás siendo invisible." },
      { fr: "La perfection est l'ennemie du scale. L'imperfection est un signal d'humanité.", en: "Perfection is the enemy of scale. Imperfection is a signal of humanity.", es: "La perfección es enemiga del escalado. La imperfección es señal de humanidad." }
    ],
    [VIBES.TRANSFORMATION]: [
      { fr: "La croissance commence là où votre zone de confort se transforme en cage.", en: "Growth begins where your comfort zone turns into a cage.", es: "Tu crecimiento inicia cuando tu confort huele a jaula." },
      { fr: "Rien ne changera si tu ne changes rien.", en: "Nothing will change if you change nothing.", es: "Si tu no cambias, la situación nunca va a cambiar." },
      { fr: "On devient ce que l'on tolère.", en: "You become what you tolerate.", es: "Te conviertes en lo que toleras." }
    ],
    [VIBES.ACTIONABLE]: [
      { fr: "Découpez tout en petites tâches et exécutez sans pitié.", en: "Chop everything into small chunks and execute without mercy.", es: "Corta la tarea en 50 trozos pequeños y devórala entera." },
      { fr: "Standardisez ce qui fonctionne, supprimez tout le reste.", en: "Standardize what works, delete the rest.", es: "Estandariza lo que te sirve, elimina el resto sistemáticamente." },
      { fr: "Le secret n'est pas dans l'intensité, mais dans la consistance.", en: "The secret isn't in intensity, but in consistency.", es: "El secreto no está en la intensidad, sino en la consistencia." }
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
      fr: { hooks: [], reframes: ["C'était un signal stratégique.", "Le marché dicte les règles.", "L'exécution est la seule métrique."], lessons: [], ctas: ["Et vous, quel est votre pivot ?", "Qui d'autre a vécu ça ?", "Hustle ?"], hashtags: ["#Startup", "#Founder", "#Business", "#Strategy"] },
      en: { hooks: [], reframes: ["It was a strategic signal.", "The market dictates the rules.", "Execution is the only metric."], lessons: [], ctas: ["What is your biggest pivot?", "Who else relates?", "Hustle?"], hashtags: ["#Startup", "#Founder", "#Business", "#Strategy"] },
      es: { hooks: [], reframes: ["Fue una señal clave.", "El mercado manda hoy.", "La ejecución es la única métrica."], lessons: [], ctas: ["¿Cuál ha sido tu mayor pivot?", "¿Alguien más?", "¿Hustle?"], hashtags: ["#Startup", "#Founder", "#Negocios", "#Estrategia"] }
    }
  },
  recruiter: {
    id: "recruiter",
    label: { fr: "Recruteur Classique", en: "Classic Recruiter", es: "Reclutador Clásico" },
    summary: { fr: "Expert sourcing et alignement humain.", en: "Expert in sourcing and human alignment.", es: "El talento y el encaje cultural." },
    vibeWeights: { [VIBES.VULNERABILITY]: 0.5, [VIBES.ACTIONABLE]: 0.3, [VIBES.AUTHORITY]: 0.2 },
    lenses: {
      fr: { hooks: [], reframes: ["Un CV ne dit pas tout.", "Le soft skill est roi.", "Derrière chaque profil, un humain."], lessons: [], ctas: ["Candidat ou Recruteur ? Dites-moi tout.", "D'accord ?", "Impact ?"], hashtags: ["#Hiring", "#HR", "#Recrutement", "#HumanFirst"] },
      en: { hooks: [], reframes: ["A resume isn't everything.", "Soft skills rule.", "Behind every profile is a human."], lessons: [], ctas: ["Candidate or Recruiter?", "Agree?", "Impact?"], hashtags: ["#Hiring", "#HR", "#Recruiting", "#HumanFirst"] },
      es: { hooks: [], reframes: ["Un CV no te cuenta toda la película.", "La actitud ante todo.", "Detrás de cada perfil hay una persona."], lessons: [], ctas: ["¿Reclutador o candidato?", "¿Qué piensas?", "¿Impacto?"], hashtags: ["#RRHH", "#Contratación", "#Talento"] }
    }
  },
  tech_manager: {
    id: "tech_manager",
    label: { fr: "CTO / Engineering Manager", en: "Engineering Manager", es: "CTO / Mánager" },
    summary: { fr: "Gère l'humain et la dette technique.", en: "Manages people and technical debt.", es: "Gestiona humanos y deuda técnica." },
    vibeWeights: { [VIBES.AUTHORITY]: 0.4, [VIBES.VULNERABILITY]: 0.4, [VIBES.ACTIONABLE]: 0.2 },
    lenses: {
      fr: { hooks: [], reframes: ["Recruter des humains, pas des outils.", "Le code legacy n'est pas votre ennemi.", "La technique doit servir le métier."], lessons: [], ctas: ["Comment gérez-vous votre dette ?", "Des avis sur la stack ?", "Legacy ou Clean ?"], hashtags: ["#Management", "#TechLeadership", "#CTO", "#Engineering"] },
      en: { hooks: [], reframes: ["Hiring humans, not tools.", "Legacy code is your friend.", "Tech must serve the business."], lessons: [], ctas: ["How do you manage debt?", "Thoughts?", "Legacy or Clean?"], hashtags: ["#Management", "#TechLeadership", "#CTO", "#Engineering"] },
      es: { hooks: [], reframes: ["Contrato a personas, no a robots.", "No le temas a tu legacy code.", "La tecnología es un medio, no el fin."], lessons: [], ctas: ["¿Cómo gestionas tu deuda técnica?", "¿Opiniones?", "¿Legacy o Clean?"], hashtags: ["#GestiónTech", "#Liderazgo", "#CTO", "#Ingeniería"] }
    }
  },
  sales_shark: {
    id: "sales_shark",
    label: { fr: "Commercial Requin", en: "Sales Shark", es: "El Tiburón" },
    summary: { fr: "Ferme des deals, boit du café.", en: "Closes deals, drinks coffee.", es: "Cierra ventas y no duerme." },
    vibeWeights: { [VIBES.AUTHORITY]: 0.7, [VIBES.ACTIONABLE]: 0.2, [VIBES.CONTRARIAN]: 0.1 },
    lenses: {
      fr: { hooks: [], reframes: ["A B C. Always Be Closing.", "La vente commence au non.", "Pas de closing, pas de business."], lessons: [], ctas: ["Quel est votre MRR cible ?", "Let's go !", "Closing ?"], hashtags: ["#Sales", "#Growth", "#Closer", "#Money"] },
      en: { hooks: [], reframes: ["Always Be Closing.", "Sale starts at no.", "No closing, no business."], lessons: [], ctas: ["What's your MRR target?", "Let's go!", "Closing?"], hashtags: ["#Sales", "#Growth", "#Closer", "#Money"] },
      es: { hooks: [], reframes: ["Siempre listos para cerrar.", "La venta real empieza en el 'No'.", "Sin cierre no hay paraíso."], lessons: [], ctas: ["¿Cuál es tu cuota?", "¡A por ellos!", "¿Cierre?"], hashtags: ["#Ventas", "#Close", "#Growth", "#Dinero"] }
    }
  },
  ai_prophet: {
    id: "ai_prophet",
    label: { fr: "AI Prophet / Futurologue", en: "AI Prophet", es: "Profeta de la IA" },
    summary: { fr: "Prédit la fin de l'emploi humain via ChatGPT.", en: "Predicts extinction of human labor.", es: "Ve a ChatGPT robándote el empleo." },
    vibeWeights: { [VIBES.CONTRARIAN]: 0.6, [VIBES.TRANSFORMATION]: 0.3, [VIBES.AUTHORITY]: 0.1 },
    lenses: {
      fr: { hooks: [], reframes: ["L'IA ne te remplacera pas. Celui qui l'utilise si.", "AGI arrive plus vite qu'on le pense.", "Prompting is the new coding."], lessons: [], ctas: ["LaSingularity est en route ?", "Prompting > Coding ?", "Prêt ?"], hashtags: ["#AI", "#Tech", "#FutureOfWork", "#AGI"] },
      en: { hooks: [], reframes: ["AI won't replace you. The guy using it will.", "AGI is faster than you think.", "Prompting is the new coding."], lessons: [], ctas: ["AGI is coming?", "Thoughts?", "Ready?"], hashtags: ["#AI", "#Tech", "#FutureOfWork", "#AGI"] },
      es: { hooks: [], reframes: ["La inteligencia artificial no te reemplazará, lo hará otro.", "La singularidad está cerca.", "El prompt es el nuevo código."], lessons: [], ctas: ["¿Opiniones sobre GPT-5?", "¿AGI?", "¿Listo?"], hashtags: ["#IA", "#Futuro", "#Tech", "#AGI"] }
    }
  },
  productivity_monk: {
    id: "productivity_monk",
    label: { fr: "Moine de la Productivité", en: "Productivity Monk", es: "Monje de la Productividad" },
    summary: { fr: "Se lève à 4h, prend un bain glacé.", en: "Wakes up at 4am, takes an ice bath.", es: "Se despierta a las 4, baño de hielo rápido." },
    vibeWeights: { [VIBES.TRANSFORMATION]: 0.5, [VIBES.ACTIONABLE]: 0.4, [VIBES.CONTRARIAN]: 0.1 },
    lenses: {
      fr: { hooks: [], reframes: ["Dopamine detox pendant 3 mois.", "Le sommeil est la seule drogue autorisée.", "La discipline bat le talent."], lessons: [], ctas: ["Quelle est votre routine matinale ?", "Routine ?", "Focus ?"], hashtags: ["#Productivity", "#Habits", "#Routine", "#DeepWork"] },
      en: { hooks: [], reframes: ["Dopamine detox for 3 months.", "Sleep is the only valid drug.", "Discipline beats talent."], lessons: [], ctas: ["What is your morning routine?", "Routine?", "Focus?"], hashtags: ["#Productivity", "#Habits", "#Routine", "#DeepWork"] },
      es: { hooks: [], reframes: ["Desintoxicación mental y baños fríos.", "El sueño reina.", "La disciplina supera al talento."], lessons: [], ctas: ["Cuenta sobre tu rutina matinal.", "¿Rutina?", "¿Enfoque?"], hashtags: ["#Productividad", "#Habitos", "#Rutina", "#DeepWork"] }
    }
  },
  burnout_survivor: {
    id: "burnout_survivor",
    label: { fr: "Burnout Survivor / Mental Health Advocate", en: "Mental Health Advocate", es: "Superviviente" },
    summary: { fr: "A fait un burnout, maintenant respire.", en: "Had a burnout, now advocates for breathing.", es: "Sufrió por el estrés, ahora te enseña zen." },
    vibeWeights: { [VIBES.VULNERABILITY]: 0.8, [VIBES.TRANSFORMATION]: 0.2, [VIBES.AUTHORITY]: 0.0 },
    lenses: {
      fr: { hooks: [], reframes: ["Je ne compte plus mes heures, je compte mon énergie.", "Ralentir pour aller loin.", "Votre santé est votre vrai ROI."], lessons: [], ctas: ["Prenez soin de vous ouverts ?", "Zen ?", "Energie ?"], hashtags: ["#MentalHealth", "#Burnout", "#Wellbeing", "#SelfCare"] },
      en: { hooks: [], reframes: ["I don't count hours, I count energy.", "Slow down to speed up.", "Health is your real ROI."], lessons: [], ctas: ["Take care?", "Zen?", "Energy?"], hashtags: ["#MentalHealth", "#Burnout", "#Wellbeing", "#SelfCare"] },
      es: { hooks: [], reframes: ["Ya no cuento horas, calculo mi energía útil.", "Aflojar el paso salva vidas.", "Tu salud es el mejor ROI."], lessons: [], ctas: ["¿Te cuidas lo suficiente?", "¿Zen?", "¿Energía?"], hashtags: ["#SaludMental", "#Bienestar", "#Burnout", "#Cuidados"] }
    }
  }
};

const personaIdInput = document.querySelector("#personaId");
const personaGallery = document.querySelector("#personaGallery");
const toneInput = document.querySelector("#tone");
const patternIdInput = document.querySelector("#patternId");
const languageInput = document.querySelector("#outputLanguage");
const lengthInput = document.querySelector("#length");
const intensityInput = document.querySelector("#intensity");

const composer = document.querySelector("#composer");
const resultText = document.querySelector("#resultText");
const logicText = document.querySelector("#logicText");
const copyButton = document.querySelector("#copyButton");
const regenerateButton = document.querySelector("#regenerateButton");
const sourceText = document.querySelector("#sourceText");
const exampleButtons = Array.from(document.querySelectorAll(".template-chip"));
const themeToggle = document.querySelector("#themeToggle");

let isTyping = false;
let currentVersion = 0;
let globalCatalog = null;

const uiTranslations = {
  appSubtitle: { fr: "LinkedIn Translator", en: "LinkedIn Translator", es: "Traductor de LinkedIn" },
  appTitle: { fr: "Transformer vos pensées en <span>posts viraux</span>.", en: "Transform your thoughts into <span>viral posts</span>.", es: "Transforma tus pensamientos en <span>posts virales</span>." },
  labelLanguage: { fr: "Langue / Idioma", en: "Language", es: "Idioma" },
  labelTone: { fr: "Personnalité", en: "Tone / Persona", es: "Personalidad" },
  labelPattern: { fr: "Pattern (Hook)", en: "Pattern (Hook)", es: "Patrón (Hook)" },
  labelLength: { fr: "Longueur", en: "Length", es: "Longitud" },
  lenShort: { fr: "Court", en: "Short", es: "Corto" },
  lenMedium: { fr: "Moyen", en: "Medium", es: "Medio" },
  lenLong: { fr: "Long", en: "Long", es: "Largo" },
  labelIntensity: { fr: "Intensité", en: "Intensity", es: "Intensidad" },
  inputArea: { fr: "Input", en: "Input", es: "Entrada" },
  inputTitle: { fr: "Raconte ce qui t'arrive...", en: "Tell me what happened...", es: "Cuéntame qué te pasó..." },
  inputPlaceholder: { fr: "Ex: J'ai mangé une pomme ce matin et j'ai réalisé que...", en: "Ex: I ate an apple this morning and realized that...", es: "Ej: Comí una manzana esta mañana y me di cuenta de..." },
  templatesLabel: { fr: "Templates :", en: "Templates :", es: "Plantillas :" },
  tplLazy: { fr: "😫 Flemme", en: "😫 Lazy", es: "😫 Pereza" },
  tplBreakup: { fr: "💔 Rupture", en: "💔 Breakup", es: "💔 Ruptura" },
  tplReject: { fr: "❌ Rejet", en: "❌ Rejection", es: "❌ Rechazo" },
  tplWin: { fr: "🏆 Victoire", en: "🏆 Small Win", es: "🏆 Victoria" },
  btnTransform: { fr: "Transformer en post LinkedIn", en: "Transform into LinkedIn post", es: "Transformar en post de LinkedIn" },
  outputArea: { fr: "Preview", en: "Preview", es: "Vista Previa" },
  btnCopy: { fr: "Copier", en: "Copy", es: "Copiar" },
  btnRegen: { fr: "Régénérer", en: "Regenerate", es: "Regenerar" },
  outputInitial: { fr: "Le post généré apparaîtra ici...", en: "The generated post will appear here...", es: "El post generado aparecerá aquí..." },
  outputLogicInitial: { fr: "En attente de data...", en: "Waiting for data...", es: "Esperando datos..." },
  personaTitle: { fr: "Choisis ton Expert de Satire", en: "Choose your Satirical Expert", es: "Elige a tu Experto de Sátira" }
};

const personaIcons = {
  founder: "rocket",
  recruiter: "users",
  coach: "heart",
  creator: "pen-tool",
  recruiter_expert: "search",
  founder_startup: "zap",
  dev_influential: "code",
  linkedin_creator: "trending-up",
  tech_manager: "shield",
  freelance_remote: "palm-tree",
  hybrid_god: "flame",
  sales_shark: "briefcase",
  ai_prophet: "cpu",
  productivity_monk: "battery-charging",
  burnout_survivor: "coffee"
};

function fillSelect(select, options) {
  if (!select) return;
  const currentVal = select.value;
  select.innerHTML = options
    .map((option) => `<option value="${option.value}" ${option.selected ? 'selected' : ''}>${option.label}</option>`)
    .join("");
  if (currentVal && Array.from(select.options).some(o => o.value === currentVal)) {
    select.value = currentVal;
  }
}

function renderPersonaGallery(personas, lang) {
  personaGallery.innerHTML = personas
    .map((persona) => {
      const iconName = personaIcons[persona.id] || "user";
      const isActive = persona.id === personaIdInput.value;
      const label = persona.label[lang] || persona.label["en"];
      const desc = persona.summary[lang] || persona.summary["en"];
      return `
        <div class="persona-card ${isActive ? 'active' : ''}" data-id="${persona.id}">
          <div class="persona-icon">
            <i data-lucide="${iconName}"></i>
          </div>
          <span class="persona-name">${label}</span>
          <span class="persona-desc">${desc.slice(0, 45)}...</span>
        </div>
      `;
    })
    .join("");

  lucide.createIcons();

  document.querySelectorAll(".persona-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".persona-card").forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      personaIdInput.value = card.dataset.id;
    });
  });
}

function updateUI() {
  const lang = languageInput ? languageInput.value : "fr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (uiTranslations[key] && uiTranslations[key][lang]) {
      el.innerHTML = uiTranslations[key][lang];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (uiTranslations[key] && uiTranslations[key][lang]) {
      el.placeholder = uiTranslations[key][lang];
    }
  });

  if (globalCatalog) {
    fillSelect(
      toneInput,
      Object.entries(globalCatalog.tones).map(([value, labels]) => ({
        value,
        label: labels[lang] || labels["en"]
      }))
    );

    const patternOptions = [
      { value: "", label: lang === 'fr' ? "Naturel / Aucun" : lang === 'es' ? "Natural / Ninguno" : "Natural / None" },
      ...Object.entries(globalCatalog.hookPatterns).map(([value, labels]) => ({
        value,
        label: labels[lang] || labels["en"]
      }))
    ];
    fillSelect(patternIdInput, patternOptions);

    renderPersonaGallery(globalCatalog.personas, lang);
  }
}

if (languageInput) {
  languageInput.addEventListener("change", updateUI);
}

function typeEffect(element, text, speed = 20) {
  isTyping = true;
  element.textContent = "";
  element.classList.add("typing");
  let i = 0;
  
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      element.classList.remove("typing");
      isTyping = false;
    }
  }, speed);
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  
  const icon = themeToggle.querySelector("i");
  icon.setAttribute("data-lucide", newTheme === "dark" ? "sun" : "moon");
  lucide.createIcons();
  
  localStorage.setItem("theme", newTheme);
}

async function loadCatalog() {
  const response = await fetch("/api/catalog");
  const catalog = await response.json();
  globalCatalog = catalog;

  fillSelect(
    languageInput,
    Object.entries(catalog.languages).map(([value, label]) => ({
      value,
      label: label
    }))
  );

  updateUI();
  
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  const icon = themeToggle.querySelector("i");
  icon.setAttribute("data-lucide", savedTheme === "dark" ? "sun" : "moon");
  lucide.createIcons();
}

async function handleTranslation() {
  if (isTyping) return;
  const text = sourceText.value.trim();
  if (!text) return;

  const payload = {
    text,
    personaId: personaIdInput.value,
    patternId: patternIdInput.value,
    outputLanguage: languageInput ? languageInput.value : "fr",
    tone: toneInput.value,
    intensity: Number(intensityInput.value),
    length: lengthInput.value,
    version: currentVersion
  };

  resultText.textContent = payload.outputLanguage === 'fr' ? "L'ALGORITHME COMPUTE..." : payload.outputLanguage === 'es' ? "EL ALGORITMO ESTÁ COMPUTANDO..." : "ALGORITHM IS THINKING...";
  logicText.textContent = payload.outputLanguage === 'fr' ? "Analyse des poids sémantiques et de la satire..." : payload.outputLanguage === 'es' ? "Analizando profundidad semántica..." : "Analyzing semantic depth and satirical weights...";

  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Generation failure");

    typeEffect(resultText, data.post, 10);
    
    logicText.innerHTML = `
      <strong>ENGINE REPORT:</strong> ${data.meta.persona} Mode 
      • Intent: ${data.meta.intent} 
      • Tone: ${data.meta.tone}
    `;
  } catch (err) {
    resultText.textContent = "ERROR: " + err.message;
  }
}

themeToggle.addEventListener("click", toggleTheme);

composer.addEventListener("submit", (e) => {
  e.preventDefault();
  currentVersion++;
  handleTranslation();
});

regenerateButton.addEventListener("click", () => {
  currentVersion++;
  handleTranslation();
});

exampleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sourceText.value = button.dataset.example || "";
    sourceText.focus();
  });
});

copyButton.addEventListener("click", async () => {
  if (isTyping) return;
  try {
    const lang = languageInput ? languageInput.value : "fr";
    await navigator.clipboard.writeText(resultText.textContent);
    const originalText = copyButton.textContent;
    copyButton.querySelector('span').textContent = lang === 'fr' ? "COPIÉ!" : lang === 'es' ? "¡COPIADO!" : "COPIED!";
    setTimeout(() => { copyButton.querySelector('span').textContent = uiTranslations.btnCopy[lang] || "Copy"; }, 1500);
  } catch (err) {
    copyButton.querySelector('span').textContent = "ERROR";
  }
});

loadCatalog().catch(() => {
  resultText.textContent = "CRITICAL: CATALOG FAIL.";
});

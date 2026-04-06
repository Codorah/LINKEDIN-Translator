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

// Lucide Icon mapping for personas
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
  hybrid_god: "flame"
};

function fillSelect(select, options) {
  if (!select) return;
  select.innerHTML = options
    .map((option) => `<option value="${option.value}" ${option.selected ? 'selected' : ''}>${option.label}</option>`)
    .join("");
}

function renderPersonaGallery(personas) {
  personaGallery.innerHTML = personas
    .map((persona) => {
      const iconName = personaIcons[persona.id] || "user";
      const isActive = persona.id === personaIdInput.value;
      return `
        <div class="persona-card ${isActive ? 'active' : ''}" data-id="${persona.id}">
          <div class="persona-icon">
            <i data-lucide="${iconName}"></i>
          </div>
          <span class="persona-name">${persona.label.fr}</span>
          <span class="persona-desc">${persona.summary.fr.slice(0, 45)}...</span>
        </div>
      `;
    })
    .join("");

  // Initialize icons after rendering
  lucide.createIcons();

  document.querySelectorAll(".persona-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".persona-card").forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      personaIdInput.value = card.dataset.id;
    });
  });
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

// Theme Toggle Logic
function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  
  // Update icon
  const icon = themeToggle.querySelector("i");
  icon.setAttribute("data-lucide", newTheme === "dark" ? "sun" : "moon");
  lucide.createIcons();
  
  localStorage.setItem("theme", newTheme);
}

async function loadCatalog() {
  const response = await fetch("/api/catalog");
  const catalog = await response.json();

  fillSelect(
    toneInput,
    Object.entries(catalog.tones).map(([value, labels]) => ({
      value,
      label: labels.fr
    }))
  );

  fillSelect(
    languageInput,
    Object.entries(catalog.languages).map(([value, label]) => ({
      value,
      label: label
    }))
  );

  const patternOptions = [
    { value: "", label: "Naturel / Aucun" },
    ...Object.entries(catalog.hookPatterns).map(([value, labels]) => ({
      value,
      label: labels.fr
    }))
  ];
  fillSelect(patternIdInput, patternOptions);

  renderPersonaGallery(catalog.personas);
  
  // Apply saved theme
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

  resultText.textContent = "ALGORITHM IS THINKING...";
  logicText.textContent = "Analyzing semantic depth and satirical weights...";

  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Generation failure");

    typeEffect(resultText, data.post);
    
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
    await navigator.clipboard.writeText(resultText.textContent);
    const originalText = copyButton.textContent;
    copyButton.textContent = "COPIED!";
    setTimeout(() => { copyButton.textContent = "Copier"; }, 1500);
  } catch (err) {
    copyButton.textContent = "ERROR";
  }
});

loadCatalog().catch(() => {
  resultText.textContent = "CRITICAL: CATALOG FAIL.";
});

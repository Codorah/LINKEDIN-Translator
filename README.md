# 🧬 LINKEDIN Translator: The Procedural Sarcasm Engine

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#) [![Engine](https://img.shields.io/badge/engine-Vanilla_JS-f7df1e)](#) [![AI Dependency](https://img.shields.io/badge/AI_Dependency-0%25-red)](#) [![Localization](https://img.shields.io/badge/Locales-FR%20%7C%20EN%20%7C%20ES-blue)](#)

LinkedIn Translator is a highly performant, stateless algorithmic content generator. It abandons heavy Large Language Models (LLMs) in favor of a **Procedural Generation Matrix**, specifically designed to emulate high-engagement corporate LinkedIn posts with absolute reliability and zero API cost.

## 🏗️ Architecture: The No-AI Paradigm

Modern tools overwhelmingly rely on OpenAI/Anthropic APIs, incurring latency, hallucination risks, and token costs. This project implements a radically different computational approach: **Combinatorial Lexical Synthesis**.

### 1. Semantic Intent Parser
A lightweight, O(n) complexity string parser (`detectIntent`) evaluates raw user input against multi-dimensional, multilingual hash-maps (`intentDictionary`). It extracts the dominant semantic vector (e.g., `burnout`, `monetization`, `productivity`), guaranteeing contextual logic.

### 2. Weighted Vibe Allocation
Instead of chaotic randomization, the generator routes data through strict probabilistic "Vibe Vectors". 
- If the selected persona is **Tech Manager**, the algorithm heavily loads `[VIBES.VULNERABILITY] (0.4)` and `[VIBES.AUTHORITY] (0.4)`.
- If the persona is **Sales Shark**, it bypasses vulnerability entirely, shifting `0.7` probability math onto `[VIBES.AUTHORITY]`.
- This ensures structural coherence while allowing for **over 50,000 statistically unique output permutations**.

### 3. Asynchronous i18n DOM Reconciliation
The frontend implements a virtually zero-dependency state-driven DOM updater. Leveraging `data-i18n` bindings, the interface intercepts `Change` events to swap entire locales (`fr` ↔ `en` ↔ `es`), seamlessly synchronizing input placeholders, dynamic template mappings, and persona payloads without a single page reload.

## 🚀 Execution & Local Deployment

The architecture is deliberately stripped of package managers and transpilers. Zero runtime dependencies via Node's native routing.

```bash
# Clone the repository
git clone https://github.com/Codorah/LINKEDIN-Translator.git

# Navigate to the core directory
cd LINKEDIN-Translator

# Boot the micro-server
node server.js
```
*Access the engine on `http://localhost:3000`.*

---
*Engineered entirely with JavaScript. Zero artificial intelligence, 100% artificial arrogance.*

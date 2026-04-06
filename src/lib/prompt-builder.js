import { personas } from "../data/personas.js";

export function buildMasterPrompt({
  text,
  personaId,
  sourceLanguage,
  outputLanguage,
  tone,
  intensity
}) {
  const persona = personas[personaId] || personas.founder;
  const personaName = persona.label[outputLanguage] || persona.label.fr;
  const personaSummary = persona.summary[outputLanguage] || persona.summary.fr;

  return [
    "SYSTEM PROMPT",
    "You are a multilingual satire copywriter specialized in LinkedIn-style broetry.",
    "Your task is not literal translation. Your task is style transfer.",
    `Target persona: ${personaName}.`,
    `Persona behavior: ${personaSummary}`,
    `Source language: ${sourceLanguage}.`,
    `Output language: ${outputLanguage}.`,
    `Tone: ${tone}.`,
    `Satire intensity from 1 to 5: ${intensity}.`,
    "",
    "NON-NEGOTIABLE RULES",
    "1. Keep the output concise: 6 to 9 short lines max, plus one hashtag line.",
    "2. Start with a strong hook that sounds serious or revelatory.",
    "3. Use one sentence per line to create suspense and 'see more' energy.",
    "4. Turn an ordinary personal event into a fake lesson about work, mindset, leadership or growth.",
    "5. Stay funny, sharp and recognizable, but avoid cruelty or harassment.",
    "6. End with a question designed to spark comments.",
    "7. Finish with 3 to 5 relevant hashtags.",
    "8. Never explain the joke. Write the post directly.",
    "",
    "USER INPUT",
    text || ""
  ].join("\n");
}

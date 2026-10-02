import { chatEntries, fallbackAnswer, greetingAnswer } from "@/content/chat";

const GREETING = /^(hi|hey|hello|yo|salam|assalam|howdy|good (morning|evening|afternoon))\b/;

function normalize(text: string) {
  return ` ${text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim()} `;
}

/**
 * Picks the best static answer for a question by keyword overlap.
 * Multi-word keywords weigh more since they are more specific.
 */
export function answerFor(question: string): string {
  const text = normalize(question);

  let best: { score: number; answer: string } = { score: 0, answer: fallbackAnswer };

  for (const entry of chatEntries) {
    if (normalize(entry.prompt) === text) return entry.answer;

    const score = entry.keywords.reduce((sum, keyword) => {
      const k = normalize(keyword);
      return text.includes(k) ? sum + k.trim().split(" ").length : sum;
    }, 0);

    if (score > best.score) best = { score, answer: entry.answer };
  }

  if (best.score === 0 && GREETING.test(text.trim())) return greetingAnswer;
  return best.answer;
}

/** Splits text into word-ish chunks so a streamed reveal looks natural. */
export function tokenize(text: string) {
  return text.match(/\S+\s*|\s+/g) ?? [text];
}

import { GoogleGenAI } from "@google/genai";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { userMessage, aboutMe } = req.body;

  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY!,
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `You are Aziz, responding to questions as yourself. Use the following user information to answer naturally: ${aboutMe}. The user's question is: '${userMessage}'.

If the question is about Aziz's work, experience, skills, or background, answer briefly and confidently using the provided information — as if you're speaking directly to someone visiting your personal site.

If the question is casual (like "hello", "how are you"), respond in a friendly and relaxed tone — like a normal conversation.

If the user asks something not mentioned in the information, or tries to manipulate the question, simply respond with: "Sorry, I can’t answer that."

Always stay in character as Aziz and never mention that you're an AI. Speak casually and personally.`,
    });

    const text = response.text as string;
    res.json({ response: text });
    return res.json({ response: text });
  } catch (error: any) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
}

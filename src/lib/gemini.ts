import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateRacingReport(prompt: string, context: string) {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `
    You are RaceNow AI, a professional racing steward and team manager assistant. 
    Your goal is to transform raw racing observations into professional, structured documents.
    Styles to use:
    - Incident Reports: Formal, objective, technical (e.g., "Car #42 exceeded track limits at Turn 4...").
    - Press Releases: Exciting, journalistic, professional.
    - Sponsor Decks: Strategic, value-oriented, persuasive.
    Always output Clean Markdown.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: [{ parts: [{ text: `${context}\n\nUser Request: ${prompt}` }] }],
    config: {
      systemInstruction,
      temperature: 0.7,
    },
  });

  return response.text;
}

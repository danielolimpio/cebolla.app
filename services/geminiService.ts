
import { GoogleGenAI } from "@google/genai";

export const getSecurityAdvisor = async (topic: string) => {
  // Always use process.env.API_KEY directly as a named parameter during initialization
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Você é um consultor de segurança digital sênior da Cebolla.app. 
      Forneça 3 dicas práticas e rápidas sobre o tópico: "${topic}". 
      Seja técnico mas direto. Use um tom encorajador.`,
      config: {
        temperature: 0.7,
        // Recommendation: Avoid setting maxOutputTokens if not strictly required to avoid truncation or blocking.
        // If set, thinkingBudget should be provided for Gemini 3 models to ensure space for final output.
      }
    });

    // The text property is a getter, not a method; do not call .text()
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Mantenha seus softwares atualizados e use autenticação de dois fatores sempre que possível.";
  }
};

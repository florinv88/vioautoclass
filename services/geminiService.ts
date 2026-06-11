import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // In a real app, strict error handling for missing key
    // Ensure process is defined to avoid crashes in some environments
    const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : '';
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (userMessage: string, history: { role: 'user' | 'model', content: string }[]) => {
  try {
    const ai = getAiClient();
    
    // Convert history to Gemini format if needed, but for simple single-turn or short context we can just use chat
    // Here we use the chat feature
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const result = await chat.sendMessage({
      message: userMessage
    });

    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Îmi pare rău, momentan nu pot răspunde. Te rog să ne contactezi telefonic.";
  }
};
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a helpful and knowledgeable virtual assistant for Dr. Moy's Painless Bunion Surgery clinic.
Your goal is to answer patient questions based on the following key facts about Dr. Moy and his procedures:

1. **The Procedure**: Dr. Moy has developed a proprietary bunion correction procedure that is virtually pain-free in over 97% of cases.
2. **Recovery**: Patients can typically walk immediately after surgery, drive the next day, and resume running after approximately six weeks.
3. **Experience**: Dr. Moy performs more bunion surgeries than any other surgeon worldwide. He is board-certified by the American Board of Podiatric Surgery.
4. **Transparency**: Dr. Moy provides 100% of patient evaluation surveys and before/after photos online.
5. **Efficiency**: The average surgical time is about 35 minutes.
6. **Location**: The clinic is located at 27462 Portola Parkway Suite 100, Foothill Ranch, CA 92610.
7. **Contact**: Phone: (949) 837-FEET (3338). Email: info@drmoy.com.
8. **Consultation**: Patients can request a consultation via the website form.

If a user asks a medical question you cannot answer with certainty based on this info, advise them to schedule a consultation with Dr. Moy.
Keep answers concise, professional, and empathetic.
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // In a real app, this key would be securely managed. 
    // For this demo, we assume it's in the environment variable.
    const apiKey = process.env.API_KEY || ''; 
    if (apiKey) {
      client = new GoogleGenAI({ apiKey });
    }
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "I'm sorry, but I am not currently connected to the AI service. Please try again later.";
  }

  try {
    // Construct a simple history context for the stateless call or use chat session if persisted
    // Here we use a single generateContent call with history as context for simplicity in this demo structure
    const prompt = `
      ${SYSTEM_INSTRUCTION}
      
      Previous conversation:
      ${history.join('\n')}
      
      User: ${message}
      Assistant:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I'm sorry, I didn't catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble processing your request right now.";
  }
};
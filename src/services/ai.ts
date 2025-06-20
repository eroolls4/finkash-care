import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export const generateResponse = async (userInput: string): Promise<string> => {
  try {
    const contextualInput = `
      You are Mithra, a compassionate mental health chatbot. 
      Respond with empathy, understanding, and helpful guidance.
      Provide support for emotional well-being in a conversational, friendly manner.
      If the user expresses severe distress, always include resources for immediate help.
      
      User message: ${userInput}
    `;
    
    const result = await model.generateContent(contextualInput);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return "I apologize, but I'm having trouble processing your request at the moment. Please try again.";
  }
};
import { GoogleGenerativeAI } from "@google/generative-ai";

class AiService {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY_FAQIH_AI);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async generateResponse(prompt) {
    try {
      const result = await this.model.generateContent(prompt);
      return result?.response?.text() || "Error: No response received";
    } catch (error) {
      console.error("AI Service Error:", error.response);
      return error.message;
    }
  }
}

export default new AiService();

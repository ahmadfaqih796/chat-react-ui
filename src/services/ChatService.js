// src/services/ChatService.js
import app from "./feathersClient";

class ChatService {
  constructor() {
    this.service = app.service("chat-lists");
  }

  async findChat() {
    try {
      const response = await this.service.find({});
      return response.data;
    } catch (error) {
      console.error("Error fetching chat:", error);
      throw error;
    }
  }

  async sendMessage(messageData) {
    try {
      return await this.service.create(messageData);
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }

  async getMessages(conversationId) {
    try {
      const response = await this.service.find({
        query: { conversationId, $sort: { createdAt: 1 } },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching messages:", error);
      throw error;
    }
  }

  async markMessageAsRead(messageId) {
    try {
      await this.service.patch(messageId, { is_read: true });
    } catch (error) {
      console.error("Error marking message as read:", error);
      throw error;
    }
  }

  listenForNewMessages(callback) {
    this.service.on("created", (newMessage) => {
      callback(newMessage);
    });
  }
}

// Singleton instance
const chatService = new ChatService();
export default chatService;

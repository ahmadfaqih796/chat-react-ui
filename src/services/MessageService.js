import app from "./feathersClient";

class MessageService {
  constructor() {
    this.service = app.service("messages");
  }

  async findMessage(params) {
    try {
      const response = await this.service.find({
        query: {
          ...params,
          $sort: {
            created_at: 1,
          },
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching chat:", error);
      throw error;
    }
  }

  async sendMessage(messageData) {
    try {
      const response = await this.service.create(messageData);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}

const messageService = new MessageService();
export default messageService;

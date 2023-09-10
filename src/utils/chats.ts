import { getItemFromStorage, setItemStorage } from ".";
import { Chat, ChatMessage } from "../../types/Chat";

export const saveChatOnStorage = (id: string, messages: ChatMessage[]) => {
  const chatsSaved: Chat[] = getItemFromStorage("chats") || [];
  const updatedCurrentChat = {
    id,
    messages,
    time: Date.now(),
  };
  const allChatsUpdated = [
    ...chatsSaved.filter((chat) => chat.id !== id),
    updatedCurrentChat,
  ];
  setItemStorage("chats", allChatsUpdated);

  return allChatsUpdated;
};

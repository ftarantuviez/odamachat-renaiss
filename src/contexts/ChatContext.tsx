"use client";
import { createContext, FC, useState } from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import {
  API_KEY,
  BASE_URL,
  MAX_TOKENS,
  OPENAI_MODEL,
  OPENAI_TEMP,
} from "@/constants";
import { getItemFromStorage, saveChatOnStorage, setItemStorage } from "@/utils";

import { ChatProviderProps, ChatProviderValues } from "./types";
import { Chat, ChatMessage, OpenAIResponse } from "../../types/Chat";

export const ChatContext = createContext<ChatProviderValues>({
  currentChat: {
    id: "",
    messages: [],
    time: 0,
  },
  allChatsSaved: [],
  loading: false,
  getNewPrompt: () => {},
  onNewSearch: () => {},
  onRemoveHistoryItem: () => {},
  selectPreviousChat: () => {},
});

const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Chat>({
    id: "",
    messages: [],
    time: 0,
  });
  const allChatsSaved = getItemFromStorage("chats") || [];
  const [allChats, setAllChats] = useState<Chat[]>(allChatsSaved);

  const getNewPrompt = async (query: string) => {
    setLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${API_KEY}`,
      };
      const newMessage: ChatMessage = {
        content: query,
        role: "user",
        time: Date.now(),
      };
      const updatedChat = [...currentChat.messages, newMessage];

      let id = currentChat.id ? currentChat.id : uuidv4();
      setCurrentChat({ id, messages: updatedChat, time: Date.now() });
      setAllChats(saveChatOnStorage(id, updatedChat));
      const body = {
        temperature: OPENAI_TEMP,
        model: OPENAI_MODEL,
        max_tokens: MAX_TOKENS,
        messages: updatedChat.map((m) => ({
          content: m.content,
          role: m.role,
        })),
      };
      const { data } = await axios.post<OpenAIResponse>(BASE_URL, body, {
        headers,
      });
      const response = { ...data.choices[0]?.message, time: Date.now() };

      updatedChat.push(response);
      setCurrentChat({ id, messages: updatedChat, time: Date.now() });
      setAllChats(saveChatOnStorage(id, updatedChat));
      setLoading(false);
    } catch (error) {
      alert("There was an error");
      console.log(error);
      setLoading(false);
    }
  };

  const onRemoveHistoryItem = (id: string) => {
    const updatedHistory = allChats.filter((chat) => chat.id !== id);
    setAllChats(updatedHistory);
    setItemStorage("chats", updatedHistory);
  };

  const selectPreviousChat = (id: string) => {
    const selectedChat = allChats.find((chat) => chat.id === id);
    setCurrentChat(selectedChat as Chat);
  };

  const onNewSearch = () => {
    setCurrentChat({
      id: "",
      messages: [],
      time: 0,
    });
  };

  const values: ChatProviderValues = {
    currentChat,
    allChatsSaved: allChats,
    loading,
    getNewPrompt,
    onNewSearch,
    onRemoveHistoryItem,
    selectPreviousChat,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatProvider;

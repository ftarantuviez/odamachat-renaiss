"use client";
import { createContext, FC, useState } from "react";
import { ChatProviderProps, ChatProviderValues } from "./types";
import { ChatMessage, OpenAIResponse } from "../../types/Chat";
import axios from "axios";
import {
  API_KEY,
  BASE_URL,
  MAX_TOKENS,
  OPENAI_MODEL,
  OPENAI_TEMP,
} from "@/app/constant";

export const ChatContext = createContext<ChatProviderValues>({
  currentChat: [],
  loading: false,
  getNewPrompt: () => {},
});

const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<ChatMessage[]>([]);

  const getNewPrompt = async (query: string) => {
    setLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${API_KEY}`,
      };
      const newMessage: ChatMessage = { content: query, role: "user" };
      const updatedChat = [...currentChat, newMessage];
      setCurrentChat(updatedChat);

      const body = {
        temperature: OPENAI_TEMP,
        model: OPENAI_MODEL,
        max_tokens: MAX_TOKENS,
        messages: updatedChat,
      };
      /* const { data } = await axios.post<OpenAIResponse>(BASE_URL, body, {
        headers,
      });
      const response = data.choices[0]?.message; */
      const response: ChatMessage = {
        role: "assistant",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      };

      setCurrentChat([...updatedChat, response]);
      setLoading(false);
    } catch (error) {
      alert("There was an error");
      console.log(error);
      setLoading(false);
    }
  };

  const values: ChatProviderValues = {
    currentChat,
    loading,
    getNewPrompt,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatProvider;

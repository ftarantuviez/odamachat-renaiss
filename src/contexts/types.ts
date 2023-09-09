import { ReactNode } from "react";
import { ChatMessage } from "../../types/Chat";

export type ChatProviderProps = {
  children: ReactNode;
};

export type ChatProviderValues = {
  currentChat: ChatMessage[];
  loading: boolean;
  getNewPrompt: (query: string) => void;
};

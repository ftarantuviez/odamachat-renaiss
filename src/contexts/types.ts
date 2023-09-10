import { ReactNode } from "react";
import { Chat } from "../../types/Chat";

export type ChatProviderProps = {
  children: ReactNode;
};

export type ChatProviderValues = {
  currentChat: Chat;
  allChatsSaved: Chat[];
  loading: boolean;
  getNewPrompt: (query: string) => void;
  onNewSearch: () => void;
  onRemoveHistoryItem: (id: string) => void;
  selectPreviousChat: (id: string) => void;
};

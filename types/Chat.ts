export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  time: number;
};

export type Chat = {
  id: string;
  messages: ChatMessage[];
  time: number;
};

export type OpenAIResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export type AllChats = {
  title: string;
  id: string;
  time: string;
}[];

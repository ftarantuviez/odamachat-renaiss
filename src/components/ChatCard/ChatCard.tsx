import React, { FC } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import { Card } from "../Card";
import { Button } from "../Button";
import { MessageCard } from "../MessageCard";
import { PromptInput } from "../PromptInput";

import { ChatMessage } from "../../../types/Chat";

import styles from "./ChatCard.module.scss";

type ChatCardProps = {
  messages: ChatMessage[];
  loading: boolean;
};
export const ChatCard: FC<ChatCardProps> = ({ messages, loading }) => {
  const lastMessage = messages[messages.length - 1];

  return (
    <div className={styles.chatCard}>
      <Card className={styles.chatCard__header}>
        <div className={styles.chatCard__header__container}>
          <h5>OdamaChat</h5>
          <Button variant="contained">
            <AiOutlinePlusCircle />
            Nueva búsqueda
          </Button>
        </div>
      </Card>
      <div className={styles.chat}>
        {messages?.map((message) => (
          <MessageCard
            key={message.content}
            message={message.content}
            role={message.role}
          />
        ))}
        {lastMessage?.role === "user" && loading && (
          <MessageCard message="" role="assistant" loading />
        )}
      </div>
      <Card className={styles.chatCard__bottom}>
        <PromptInput />
      </Card>
    </div>
  );
};

import React from "react";

import { Divider } from "antd";

import { Card } from "../Card";
import { Button } from "../Button";

import styles from "./ChatCard.module.scss";
import { MessageCard } from "../MessageCard";
import { PromptInput } from "../PromptInput";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const ChatCard = () => {
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
        <MessageCard />
      </div>
      <Card className={styles.chatCard__bottom}>
        <PromptInput />
      </Card>
    </div>
  );
};

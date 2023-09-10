import React, { FC } from "react";

import { Divider } from "antd";
import { BsThreeDots } from "react-icons/bs";

import { Card } from "../Card";

import { getTimeOfMessage } from "./MessageCard.utils";

import styles from "./MessageCard.module.scss";

type MessageCardProps = {
  time: number;
  message: string;
  role: "user" | "assistant";
  loading?: boolean;
};
export const MessageCard: FC<MessageCardProps> = ({
  message,
  role,
  loading,
  time,
}) => {
  const isUserRole = role === "user";
  return (
    <Card className={styles.messageCard}>
      <div className={styles.header}>
        <h5 className={!isUserRole ? styles.assistant : ""}>
          {isUserRole ? "Francisco Tarantuviez" : "OdamaChat"}
        </h5>
        {loading ? <BsThreeDots /> : <p>{getTimeOfMessage(time)}</p>}
      </div>
      <Divider className={styles.divider} />
      <div className={styles.message}>
        <p>{message}</p>
      </div>
    </Card>
  );
};

import React, { FC } from "react";
import { Divider } from "antd";

import { Card } from "../Card";

import styles from "./MessageCard.module.scss";
import { BsThreeDots } from "react-icons/bs";

type MessageCardProps = {
  time?: string;
  message: string;
  role: "user" | "assistant";
  loading?: boolean;
};
export const MessageCard: FC<MessageCardProps> = ({
  message,
  role,
  loading,
}) => {
  const isUserRole = role === "user";
  return (
    <Card className={styles.messageCard}>
      <div className={styles.header}>
        <h5 className={!isUserRole ? styles.assistant : ""}>
          {isUserRole ? "Francisco Tarantuviez" : "OdamaChat"}
        </h5>
        {loading ? <BsThreeDots /> : <p>5:00pm</p>}
      </div>
      <Divider className={styles.divider} />
      <div className={styles.message}>
        <p>{message}</p>
      </div>
    </Card>
  );
};

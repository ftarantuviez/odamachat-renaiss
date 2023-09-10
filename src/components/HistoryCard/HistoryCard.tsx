import React, { FC } from "react";

import { Divider } from "antd";

import { HistoryItem } from ".";
import { Card } from "../Card";

import { Chat } from "../../../types/Chat";

import styles from "./HistoryCard.module.scss";

type HistoryCardProps = {
  history: Chat[];
};
export const HistoryCard: FC<HistoryCardProps> = ({ history = [] }) => {
  const historySortedByTime = history?.sort((a, b) => b.time - a.time);

  return (
    <Card className={styles.historyCard}>
      <h5>Historial de Búsquedas</h5>
      <Divider className={styles.historyCard__divider} />
      <div className={styles.historyCard__list}>
        {historySortedByTime.map((item) => (
          <HistoryItem
            key={item.id}
            time={item.time}
            id={item.id}
            title={item.messages?.[0].content}
          />
        ))}
        {history.length === 0 && (
          <div className={styles.historyCard__emptyState}>
            No tienes búsquedas recientes
          </div>
        )}
      </div>
    </Card>
  );
};

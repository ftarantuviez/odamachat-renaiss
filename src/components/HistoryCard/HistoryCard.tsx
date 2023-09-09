import React from "react";

import { Divider } from "antd";

import { Card } from "../Card";
import { HistoryItem } from ".";

import styles from "./HistoryCard.module.scss";

const MOCK_DATA = [
  { isActive: true, title: "User Flow", time: "Ayer, quedan 24hs", id: "1" },
  { isActive: false, title: "World War I", time: "Ayer, quedan 2hs", id: "2" },
  { isActive: false, title: "Cold War", time: "Ayer, quedan 1hs", id: "3" },
  {
    isActive: false,
    title: "Argentinian History",
    time: "Ayer, quedan 0hs",
    id: "4",
  },
];
export const HistoryCard = () => {
  return (
    <Card className={styles.historyCard}>
      <h5>Historial de Búsquedas</h5>
      <Divider className={styles.historyCard__divider} />
      <div className={styles.historyCard__list}>
        {MOCK_DATA.map((item) => (
          <HistoryItem key={item.id} time={item.time} title={item.title} />
        ))}
      </div>
    </Card>
  );
};

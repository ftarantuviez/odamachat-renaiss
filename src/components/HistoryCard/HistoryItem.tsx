import React, { FC } from "react";

import { BsSearch } from "react-icons/bs";
import { TbHistoryToggle } from "react-icons/tb";

import styles from "./HistoryCard.module.scss";

type HistoryItemProps = {
  isActive: boolean;
  title: string;
  time: string;
};
export const HistoryItem: FC<HistoryItemProps> = ({
  isActive,
  title,
  time,
}) => {
  return (
    <div
      className={`${styles.historyItem} ${
        isActive && styles.historyItem__active
      }`}
    >
      <div className={styles.historyItem__left}>
        <span>
          <BsSearch />
        </span>
        <div>
          <p>{title}</p>
          <div className={styles.historyItem__left__time}>
            <TbHistoryToggle />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
"use client";
import React, { FC, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
import { TbHistoryToggle } from "react-icons/tb";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import useChatContext from "@/hooks/useChatContext";

import { getTimeRemaining, trimLargeText } from "./HistoryCard.utils";

import styles from "./HistoryCard.module.scss";

type HistoryItemProps = {
  title: string;
  time: number;
  id: string;
};
export const HistoryItem: FC<HistoryItemProps> = ({ title, time, id }) => {
  const { onRemoveHistoryItem, selectPreviousChat } = useChatContext();
  const [isDeleteActive, setIsDeleteActive] = useState<boolean>(false);

  const onClickDelete = () => setIsDeleteActive(!isDeleteActive);

  return (
    <div
      className={`${styles.historyItem} ${
        isDeleteActive && styles.historyItem__active
      }`}
    >
      <div
        className={styles.historyItem__left}
        onClick={() => selectPreviousChat(id)}
      >
        <span>
          <BsSearch />
        </span>
        <div>
          <p>{trimLargeText(title)}</p>
          <div className={styles.historyItem__left__time}>
            <TbHistoryToggle />
            <p>{getTimeRemaining(time)}</p>
          </div>
        </div>
      </div>
      <div className={styles.historyItem__right}>
        {isDeleteActive ? (
          <div>
            <button onClick={() => onRemoveHistoryItem(id)}>
              <AiOutlineCheck />
            </button>
            <button onClick={onClickDelete}>
              <AiOutlineClose />
            </button>
          </div>
        ) : (
          <button onClick={onClickDelete}>
            <BiTrashAlt />
          </button>
        )}
      </div>
    </div>
  );
};

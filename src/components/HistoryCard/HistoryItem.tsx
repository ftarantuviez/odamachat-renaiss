"use client";
import React, { FC, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { TbHistoryToggle } from "react-icons/tb";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

import styles from "./HistoryCard.module.scss";

type HistoryItemProps = {
  title: string;
  time: string;
};
export const HistoryItem: FC<HistoryItemProps> = ({ title, time }) => {
  const [isDeleteActive, setIsDeleteActive] = useState<boolean>(false);

  const onClickDelete = () => setIsDeleteActive(!isDeleteActive);
  return (
    <div
      className={`${styles.historyItem} ${
        isDeleteActive && styles.historyItem__active
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
      <div className={styles.historyItem__right}>
        {isDeleteActive ? (
          <div>
            <button>
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

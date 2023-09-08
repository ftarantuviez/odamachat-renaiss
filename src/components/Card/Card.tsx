import React, { FC } from "react";
import { Card as CardD } from "antd";
import styles from "./Card.module.scss";

type CardProps = {
  children?: React.ReactNode;
};
export const Card: FC<CardProps> = (props) => {
  const { children } = props;
  return <CardD className={styles.card}>{children}</CardD>;
};

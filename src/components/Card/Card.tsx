import React, { FC } from "react";

import { Card as CardD, CardProps } from "antd";

import styles from "./Card.module.scss";

export const Card: FC<CardProps> = (props) => {
  const { children, className } = props;
  return <CardD className={`${styles.card} ${className}`}>{children}</CardD>;
};

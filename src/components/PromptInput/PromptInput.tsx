import React from "react";

import { Input } from "antd";
import { BsSend } from "react-icons/bs";

import styles from "./PromptInput.module.scss";

export const PromptInput = () => {
  return (
    <Input
      className={styles.promptInput}
      suffix={<BsSend />}
      placeholder="Insertar Prompt"
    />
  );
};

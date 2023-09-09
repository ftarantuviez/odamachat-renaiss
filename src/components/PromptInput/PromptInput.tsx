"use client";
import React, { useState } from "react";

import { Input } from "antd";
import { BsSend } from "react-icons/bs";

import styles from "./PromptInput.module.scss";
import useChatContext from "@/hooks/useChatContext";

export const PromptInput = () => {
  const [value, setValue] = useState("");
  const { getNewPrompt } = useChatContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    await getNewPrompt(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        className={styles.promptInput}
        suffix={
          <button type="submit">
            <BsSend />
          </button>
        }
        placeholder="Insertar Prompt"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

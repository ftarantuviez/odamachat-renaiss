"use client";
import React, { FC, useState } from "react";

import { Input } from "antd";

import { MagicWandIcon, SendIcon } from "../Icons";

import useChatContext from "@/hooks/useChatContext";

import styles from "./PromptInput.module.scss";

type PromptInputProps = {
  isNewChat?: boolean;
};

export const PromptInput: FC<PromptInputProps> = ({ isNewChat }) => {
  const [value, setValue] = useState("");
  const { getNewPrompt } = useChatContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    await getNewPrompt(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        className={styles.promptInput}
        suffix={
          <button type="submit">
            <SendIcon />
            {!isNewChat && <MagicWandIcon />}
          </button>
        }
        placeholder="Insertar Prompt"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

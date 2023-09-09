import React, { FC } from "react";

import styles from "./Button.module.scss";

type TButtonProps = {
  variant?: "outlined" | "contained";
};
export const Button: FC<TButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
  variant = "outlined",
}) => {
  return (
    <button
      className={`${styles.button} ${
        variant === "contained" && styles.button__contained
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

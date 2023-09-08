import React, { FC } from "react";

import styles from "./Button.module.scss";

type TButtonProps = {
  variant?: string;
};
export const Button: FC<TButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
  variant,
}) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

import React from "react";

import { EmptyStateIcon } from "../Icons";

import styles from "./ChatCard.module.scss";

export const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <EmptyStateIcon />
      <h5>¡Escribe un mensaje para interactuar con Odama!</h5>
    </div>
  );
};

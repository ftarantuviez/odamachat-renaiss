import React from "react";
import { Divider } from "antd";

import { Card } from "../Card";

import styles from "./MessageCard.module.scss";

export const MessageCard = () => {
  return (
    <Card>
      <div className={styles.header}>
        <h5>Ana Clara</h5>
        <p>5:00pm</p>
      </div>
      <Divider className={styles.divider} />
      <div className={styles.message}>
        <p>Necesito los archivos que te pedí ayer.</p>
      </div>
    </Card>
  );
};

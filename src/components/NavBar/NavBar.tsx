import React from "react";

import { Button } from "../Button";
import { SideBarIcon, SettingsIcon, LeftArrowIcon } from "../Icons";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Button>
          <LeftArrowIcon />
          Atrás
        </Button>
        <Button className={styles.navbar__left__sidebar}>
          <SideBarIcon />
        </Button>
      </div>
      <div className={styles.navbar__right}>
        <Button>
          <SettingsIcon />
        </Button>
      </div>
    </nav>
  );
};

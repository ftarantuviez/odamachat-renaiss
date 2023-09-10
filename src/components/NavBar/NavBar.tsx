import React, { FC } from "react";

import { Button } from "../Button";
import { SideBarIcon, SettingsIcon, LeftArrowIcon } from "../Icons";

import styles from "./NavBar.module.scss";

type NavBarProps = {
  onSidebarClick: () => void;
  isSidebar: boolean;
};
export const NavBar: FC<NavBarProps> = ({ onSidebarClick, isSidebar }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Button>
          <LeftArrowIcon />
          Atrás
        </Button>
        <Button
          className={`${styles.navbar__left__sidebar} ${
            !isSidebar && styles.navbar__left__sidebarActive
          }`}
          onClick={onSidebarClick}
        >
          <SideBarIcon color={!isSidebar ? "#f97316" : "white"} />
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

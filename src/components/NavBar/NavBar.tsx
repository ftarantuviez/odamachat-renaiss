import React from "react";

import { BiChevronLeft } from "react-icons/bi";
import { FiSettings, FiSidebar } from "react-icons/fi";

import { Button } from "../Button";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Button>
          <BiChevronLeft />
          Atrás
        </Button>
        <Button className={styles.navbar__left__sidebar}>
          <FiSidebar />
        </Button>
      </div>
      <div className={styles.navbar__right}>
        <Button>
          <FiSettings />
        </Button>
      </div>
    </nav>
  );
};

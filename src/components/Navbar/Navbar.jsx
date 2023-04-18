import { Link } from "react-router-dom";

import logo from "../../assets/img/ball.png";
import styles from "./Navbar.module.css";

import React from "react";

const Navbar = () => {
  const navItems = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
  ];

  const navElems = navItems.map(({ title, to }) => (
    <li key={title}>
      <Link className={styles.link} to={to}>
        {title}
      </Link>
    </li>
  ));

  return (
    <>
      <nav className={styles.menu}>
        <div className="container">
          <div className={styles.wrapper}>
            <Link to={"/"}>
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <ul className={styles.list}>{navElems}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

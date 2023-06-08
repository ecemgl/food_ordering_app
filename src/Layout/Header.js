import React from "react";
import italyan from "../components/assets/italyan-yemekleri.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>İtalyan</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={italyan} alt="A table full of dishes" />
      </div>
    </React.Fragment>
  );
};

export default Header;

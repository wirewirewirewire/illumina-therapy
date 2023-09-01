import React from "react";
import Head from "next/head";
import styles from "./layout.module.scss";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Button } from "@un/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessagePlus } from "@fortawesome/pro-solid-svg-icons";

const Layout = ({ children, font, options }: any) => {
  return (
    <div className={font}>
      <Navigation options={options} />
      <div className={styles.layout}>{children}</div>
      <Footer /*options={options}*/ />
    </div>
  );
};

export default Layout;

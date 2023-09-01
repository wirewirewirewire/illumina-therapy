import React from "react";
import styles from "./link.module.scss";

export default function Link(props: any) {
  return <a className={styles.link} target="_blank" {...props} />;
}

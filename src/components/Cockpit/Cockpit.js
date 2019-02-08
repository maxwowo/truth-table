import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = props => (
  <div className={styles.cockpit}>
    <h1>Truth Table Generator</h1>
    <input onChange={props.onInputChanged} placeholder="Enter something" />
  </div>
);

export default cockpit;

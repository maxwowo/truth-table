import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Input, Container } from "reactstrap";
import classNames from "classnames";
import styles from "./Cockpit.module.css";

const Cockpit = props => (
  <Container className={classNames(styles.cockpit, styles.textCenter)}>
    <h1 className={styles.cockpitHeader}>Truth Table Generator</h1>
    <Input
      className={classNames(
        styles.textCenter,
        styles.transparent,
        styles.cockpitInput
      )}
      onChange={props.onInputChanged}
      onKeyPress={props.onKeyPress}
      placeholder="Enter expression"
      autoFocus
    />
  </Container>
);

export default Cockpit;

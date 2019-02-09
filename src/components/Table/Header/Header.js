import React from "react";
import Row from "../Row/Row";
import styles from "./Header.module.css";

const Header = props => (
  <thead>
    <tr>
      <Row row={props.row} />
    </tr>
  </thead>
);

export default Header;

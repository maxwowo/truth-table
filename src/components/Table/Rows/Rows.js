import React from "react";
import Row from "../Row/Row";
import styles from "./Rows.module.css";

const Rows = props =>
  props.content.map((row, index) => {
    return (
      <tr key={index}>
        <Row row={row} />
      </tr>
    );
  });

export default Rows;

import React from "react";
import styles from "./TruthTableRow.module.css";

const TruthTableRow = props =>
  props.row.map((col, index) => {
    return <td key={index}>{col}</td>;
  });

export default TruthTableRow;

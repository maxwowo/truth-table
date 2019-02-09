import React from "react";
import styles from "./TruthTableRow.module.css";

const TruthTableRow = props => (
  <tr>
    {props.row.map((col, index) => {
      return <td key={index}>{col}</td>;
    })}
  </tr>
);

export default TruthTableRow;

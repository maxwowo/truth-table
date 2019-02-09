import React from "react";
import TruthTableBody from "./TruthTableBody/TruthTableBody";
import TruthTableHead from "./TruthTableHead/TruthTableHead";
import styles from "./TruthTable.module.css";

const TruthTable = props => (
  <table>
    <TruthTableHead row={props.head} />
    <TruthTableBody content={props.content} />
  </table>
);

export default TruthTable;

import React from "react";
import TruthTableBody from "./TruthTableBody/TruthTableBody";
import TruthTableHead from "./TruthTableHead/TruthTableHead";
import styles from "./Table.module.css";

const Table = props => (
  <table>
    <TruthTableHead row={props.header} />
    <TruthTableBody content={props.content} />
  </table>
);

export default Table;

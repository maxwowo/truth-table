import React from "react";
import TruthTableRow from "../TruthTableRow/TruthTableRow";
import styles from "./TruthTableHead.module.css";

const TruthTableHead = props => (
  <thead>
      <TruthTableRow row={props.row} />
  </thead>
);

export default TruthTableHead;

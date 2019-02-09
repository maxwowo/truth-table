import React from "react";
import TruthTableRow from "../TruthTableRow/TruthTableRow";
import styles from "./TruthTableHead.module.css";

const TruthTableHead = props => (
  <thead>
    <tr>
      <TruthTableRow row={props.row} />
    </tr>
  </thead>
);

export default TruthTableHead;

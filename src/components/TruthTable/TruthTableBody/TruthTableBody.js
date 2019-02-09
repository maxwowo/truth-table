import React from "react";
import TruthTableRow from "../TruthTableRow/TruthTableRow";
import styles from "./TruthTableBody.module.css";

const TruthTableBody = props => (
  <tbody>
    {props.content.map((row, index) => {
      return <TruthTableRow row={row} key={index} />;
    })}
  </tbody>
);

export default TruthTableBody;

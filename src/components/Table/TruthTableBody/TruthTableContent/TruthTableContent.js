import React from "react";
import TruthTableRow from "../../TruthTableRow/TruthTableRow";
import styles from "./TruthTableContent.module.css";

const TruthTableContent = props =>
  props.content.map((row, index) => {
    return (
      <tr key={index}>
        <TruthTableRow row={row} />
      </tr>
    );
  });

export default TruthTableContent;

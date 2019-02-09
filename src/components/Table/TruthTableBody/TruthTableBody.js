import React from "react";
import TruthTableContent from "./TruthTableContent/TruthTableContent";
import styles from "./TruthTableBody.module.css";

const TruthTableBody = props => (
  <tbody>
    <TruthTableContent content={props.content} />
  </tbody>
);

export default TruthTableBody;

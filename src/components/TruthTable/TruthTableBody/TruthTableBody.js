import React from "react";
import TruthTableRow from "../TruthTableRow/TruthTableRow";

const TruthTableBody = props => (
  <tbody>
    {props.content.map((row, index) => {
      return <TruthTableRow row={row} key={index} />;
    })}
  </tbody>
);

export default TruthTableBody;

import React from "react";
import styles from "./Row.module.css";

const Row = props =>
  props.row.map((col, index) => {
    return <td key={index}>{col}</td>;
  });

export default Row;

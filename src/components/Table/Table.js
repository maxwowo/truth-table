import React from "react";
import Rows from "./Rows/Rows";
import Header from "./Header/Header";
import styles from "./Table.module.css";

const Table = props => (
  <table>
    <Header row={props.header} />
    <tbody>
      <Rows content={props.content} />
    </tbody>
  </table>
);

export default Table;

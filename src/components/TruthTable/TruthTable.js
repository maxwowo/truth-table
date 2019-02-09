import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Container } from "reactstrap";
import TruthTableBody from "./TruthTableBody/TruthTableBody";
import TruthTableHead from "./TruthTableHead/TruthTableHead";
import "./TruthTable.module.css";

const TruthTable = props => (
  <Container>
    <Table>
      <TruthTableHead row={props.head} />
      <TruthTableBody content={props.content} />
    </Table>
  </Container>
);

export default TruthTable;

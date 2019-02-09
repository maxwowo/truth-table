import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import TruthTable from "../components/TruthTable/TruthTable";
import * as Helper from "./Helpers";
import styles from "./App.module.css";

class App extends Component {
  state = {
    truthTableHead: null,
    truthTableContent: null,
    displayTruthTable: false
  };

  handleInputChanged = event => {
    const exp = Helper.getExpression(event);
    const variables = Helper.getVariables(exp);
    const ttHead = Helper.getTableHeader(variables, exp);
    const ttContent = Helper.getTableContent(
      variables.length,
      exp,
      variables
    );

    this.setState({
      displayTruthTable: !exp ? false : true,
      truthTableHead: ttHead,
      truthTableContent: ttContent
    });
  };

  render() {
    const table = this.state.displayTruthTable ? (
      <TruthTable
        content={this.state.truthTableContent}
        header={this.state.truthTableHead}
      />
    ) : null;

    return (
      <div>
        <Cockpit onInputChanged={this.handleInputChanged} />
        {table}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Table from "../components/Table/Table";
import * as Helper from "./Helpers";
import styles from "./App.module.css";

class App extends Component {
  state = {
    tableHeader: null,
    tableContent: null,
    showTable: false
  };

  handleInputChanged = event => {
    const exp = Helper.getExpression(event);
    const variables = Helper.getVariables(exp);
    const header = Helper.getTableHeader(variables, exp);
    const content = Helper.getTableContent(variables.length, exp, variables);

    this.setState({
      showTable: !exp ? false : true,
      tableHeader: header,
      tableContent: content
    });
  };

  render() {
    const table = this.state.showTable ? (
      <Table
        content={this.state.tableContent}
        header={this.state.tableHeader}
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

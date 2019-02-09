import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import TruthTable from "../components/TruthTable/TruthTable";
import * as Helper from "./Helper";
import styles from "./App.module.css";

class App extends Component {
  state = {
    ttHead: null,
    ttContent: null,
    showTable: false
  };

  handleInputChanged = event => {
    const exp = Helper.getExp(event);
    const vars = Helper.getVars(exp);
    const head = Helper.getTableHead(vars, exp);
    const content = Helper.getTableContent(vars.length, exp, vars);

    this.setState({
      showTable: !exp ? false : true,
      ttHead: head,
      ttContent: content
    });
  };

  handleKeyPress = event => {
    if (!Helper.validKey(event.key)) event.preventDefault();
    // const val = event.target.value;
    // event.target.value = val
    //   .replace(/&&/g, "∧")
    //   .replace(/||/g, "∨")
    //   .replace(/!/g, "~");
  };

  render() {
    const table = this.state.showTable ? (
      <TruthTable content={this.state.ttContent} head={this.state.ttHead} />
    ) : null;

    return (
      <div className={styles.appBody}>
        <Cockpit
          onInputChanged={this.handleInputChanged}
          onKeyPress={this.handleKeyPress}
        />
        {table}
      </div>
    );
  }
}

export default App;

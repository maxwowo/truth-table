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
    const formattedExp = Helper.formatExp(event.target.value)
       
    event.target.value = formattedExp;
    
    const exp = Helper.getExp(event);
    const vars = Helper.getVars(exp);
    const head = Helper.getTableHead(vars, formattedExp);
    const content = Helper.getTableContent(vars.length, exp, vars);

    this.setState({
      showTable: !exp ? false : true,
      ttHead: head,
      ttContent: content
    });
  };

  handleKeyPress = event => {
    if (!Helper.validKey(event.key)) event.preventDefault();
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

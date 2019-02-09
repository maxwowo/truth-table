import React, { Component } from "react";
import Page from "../components/Page/Page";
import "./App.module.css";
import * as Helper from "./Helper";

class App extends Component {
  state = {
    ttHead: null,
    ttContent: null,
    showTable: false
  };

  handleInputChanged = event => {
    const formattedExp = Helper.formatExp(event.target.value);

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
    return (
      <Page
        onInputChanged={this.handleInputChanged}
        onKeyPress={this.handleKeyPress}
        content={this.state.ttContent}
        head={this.state.ttHead}
        showTable={this.state.showTable}
      />
    );
  }
}

export default App;

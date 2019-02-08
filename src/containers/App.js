import React, { Component } from "react";
import Cockpit from '../components/Cockpit/Cockpit';
import TreatInput from './TreatInput';
import styles from "./App.module.css";

class App extends Component {
  handleInputChanged = event => {
    const exp = TreatInput(event.target.value);
    
    console.log(exp);
  }

  render() {
    return <Cockpit onInputChanged={this.handleInputChanged} />;
  }
}

export default App;

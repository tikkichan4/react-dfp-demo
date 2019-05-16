import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import InterstitialAd from "./InterstitialAd";
import "./styles.css";
import { DFPSlotsProvider } from "react-dfp";

export default class App extends PureComponent {
  state = {};
  render() {
    const { disableAd } = this.state;
    return (
      <div className="App">
        <DFPSlotsProvider dfpNetworkId="9999">
          <h1>If you see this</h1>
          <h2>AD is closed, error should be logged on console</h2>
          {!disableAd && (
            <InterstitialAd adUnitId="default/unit/1" hide={this.hide} />
          )}
        </DFPSlotsProvider>
      </div>
    );
  }
  hide = () => {
    console.log("ad close");
    this.setState({ disableAd: true });
  };
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

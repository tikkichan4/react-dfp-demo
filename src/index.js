import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import InterstitialAd from "./InterstitialAd";
import "./styles.css";

export default class App extends PureComponent {
  state = {};
  render() {
    const { disableAd } = this.state;
    return (
      <div className="App">
        <h1>If you see this</h1>
        <h2>AD is closed, error should be logged on console</h2>
        {!disableAd && <InterstitialAd hide={this.hide} />}
      </div>
    );
  }
  hide = () => {
    this.setState({ disableAd: true });
  };
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import ReactDFPDemo from "./ReactDFPDemo";
import "./styles.css";

function App() {
  return <ReactDFPDemo networkId="9999" adUnitId="default/unit/1" />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

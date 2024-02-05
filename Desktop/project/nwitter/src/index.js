import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "./firebase";
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const shadowRoot = document.getElementById("root").attachShadow({
  mode: "open",
});

ReactDOM.render(<App />, shadowRoot);

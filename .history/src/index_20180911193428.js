import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Sakura from "../node_modules/sakura.css/css/sakura-vader.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

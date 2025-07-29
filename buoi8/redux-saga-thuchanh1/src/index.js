import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux"; // <== THÊM DÒNG NÀY
import store from "./redux/store"; // <== THÊM DÒNG NÀY

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* <== BỌC App TRONG Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

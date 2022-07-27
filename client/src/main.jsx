import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
/* import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
 */
/* axios.defaults.baseURL = process.env.VITE_API_KEY || "http://localhost:3001";
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

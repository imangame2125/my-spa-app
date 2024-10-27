import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css"; 
import "./i18next"; 
import { Provider } from "react-redux";
import './fonts/font.css'; 
import reportWebVitals from "./reportWebVitals"; 
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();

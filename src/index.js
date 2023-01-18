import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ContextProvider } from "./Contexts/ContextProvider";

// import "https://buttons.github.io/buttons.js";
// import "https://demo.themesberg.com/windster/app.bundle.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

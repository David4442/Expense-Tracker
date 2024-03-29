import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobarProvider } from "./context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobarProvider>
      <App />
    </GlobarProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { UserContextProvider } from "./contexts/userContext/provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

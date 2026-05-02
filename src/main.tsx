import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { MessagesContextProvider } from "./contexts/MessageContext/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MessagesContextProvider>
      <App />
    </MessagesContextProvider>
  </StrictMode>,
);

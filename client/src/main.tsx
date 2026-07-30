import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { CustomerProvider } from "./features/customers/context/CustomerContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomerProvider>
  </StrictMode>
);
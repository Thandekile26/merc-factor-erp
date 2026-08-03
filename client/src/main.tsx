import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { CustomerProvider } from "./features/customers/context/CustomerContext";
import { VehicleProvider } from "./features/vehicles/context/VehicleContext";
import { JobCardProvider } from "./features/jobCards/context/JobCardContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomerProvider>
      <VehicleProvider>
        <JobCardProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </JobCardProvider>
      </VehicleProvider>
    </CustomerProvider>
  </StrictMode>
);
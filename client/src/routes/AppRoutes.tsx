import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../features/customers/pages/Customers";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />

      {/* Future modules */}
      <Route path="/vehicles" element={<h1>Vehicles</h1>} />
      <Route path="/job-cards" element={<h1>Job Cards</h1>} />
      <Route path="/quotes" element={<h1>Quotes</h1>} />
      <Route path="/invoices" element={<h1>Invoices</h1>} />
      <Route path="/payments" element={<h1>Payments</h1>} />
      <Route path="/inventory" element={<h1>Inventory</h1>} />
      <Route path="/employees" element={<h1>Employees</h1>} />
      <Route path="/reports" element={<h1>Reports</h1>} />
      <Route path="/settings" element={<h1>Settings</h1>} />
      <Route path="/inspections" element={<h1>Inspections</h1>} />
<Route path="/parts" element={<h1>Parts</h1>} />
<Route path="/suppliers" element={<h1>Suppliers</h1>} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
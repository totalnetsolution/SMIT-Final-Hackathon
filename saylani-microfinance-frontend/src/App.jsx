import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardUser from "./pages/DashboardUser";
import LoanRequestPage from "./pages/LoanRequestPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="user-dashboard" element={<DashboardUser />} />
        <Route path="admin-dashboard" element={<DashboardAdmin />} />
        <Route path="loan-request" element={<LoanRequestPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import ExpenseTracker from "./pages/ExpenseTracker";
import FinancialInsights from "./pages/FinancialInsights";
import Savings from "./pages/Savings";
import FraudAlerts from "./pages/FraudAlerts";
import Profile from "./pages/Profile";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Navbar from "./components/Navbar";

// PrivateRoute ensures user is logged in
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

// Layout for protected routes with Navbar
const ProtectedLayout = () => (
  <div className="bg-gray-900 min-h-screen text-white">
    <Navbar />
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/expenses" element={<ExpenseTracker />} />
        <Route path="/insights" element={<FinancialInsights />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/fraud" element={<FraudAlerts />} />
        <Route path="/profile" element={<Profile />} />
        {/* Redirect unknown routes to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <ProtectedLayout />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

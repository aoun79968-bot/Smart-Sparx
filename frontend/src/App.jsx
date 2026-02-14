import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./pages/Dashboard";
import ExpenseTracker from "./pages/ExpenseTracker";
import Wallet from "./pages/Wallet";
import FinancialInsights from "./pages/FinancialInsights";
import FraudAlerts from "./pages/FraudAlerts";
import Savings from "./pages/Savings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<ExpenseTracker />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/insights" element={<FinancialInsights />} />
        <Route path="/fraud" element={<FraudAlerts />} />
        <Route path="/savings" element={<Savings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

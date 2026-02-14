import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>FinTech</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/fraud">Fraud</Link>
        <Link to="/savings">Savings</Link>
      </div>
    </nav>
  );
};

export default Navbar;

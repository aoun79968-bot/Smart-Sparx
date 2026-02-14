import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">SS</div>
          <Link to="/" className="text-lg font-semibold">Smart Sparx</Link>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm opacity-95">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/expense" className="hover:underline">Expense</Link>
          <Link to="/savings" className="hover:underline">Savings</Link>
          <Link to="/wallet" className="hover:underline">Wallet</Link>
          <Link to="/insights" className="hover:underline">Insights</Link>
          <Link to="/alerts" className="hover:underline">Alerts</Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white/20 px-3 py-1 rounded text-sm">Profile</button>
        </div>
      </div>
    </nav>
  );
}

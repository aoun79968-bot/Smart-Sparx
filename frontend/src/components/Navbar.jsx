import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  const initials = user
    ? user.name
      ? user.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : user.email[0].toUpperCase()
    : "SS";

  const displayName = user ? user.name || user.email : "Smart Sparx";

  return (
    <nav className="bg-purple-600 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
          {initials}
        </div>
        <span className="font-bold text-white">{displayName}</span>
      </div>

      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/expenses">Expense</Link>
        <Link to="/savings">Savings</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/fraud">Alerts</Link>
        <Link
          to="/profile"
          className="bg-white text-purple-600 px-3 py-1 rounded"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}

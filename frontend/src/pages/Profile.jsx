import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login"); // redirect to login page
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>No user logged in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <p className="mb-2">
          <strong>Name:</strong> {user.name || "N/A"}
        </p>
        <p className="mb-4">
          <strong>Email:</strong> {user.email}
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("smartUser"));
    if (!storedUser) return alert("No user found. Please register.");

    if (email === storedUser.email && password === storedUser.password) {
      // Save login status AND current user info
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(storedUser));
      navigate("/profile"); // redirect to profile page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          className="w-full p-2 mb-4 rounded bg-gray-700"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-4 rounded bg-gray-700"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

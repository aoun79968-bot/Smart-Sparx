import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) return alert("Fill all fields");

    const user = { name, email, password };
    localStorage.setItem("smartUser", JSON.stringify(user));

    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          className="w-full p-2 mb-4 rounded bg-gray-700"
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleRegister}
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

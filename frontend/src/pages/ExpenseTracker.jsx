import { useState, useMemo } from "react";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [message, setMessage] = useState("");

  const addExpense = () => {
    const value = parseFloat(amount);

    if (!desc || !value || value <= 0) {
      setMessage("Please enter valid description and amount.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      desc,
      amount: value,
      category,
      date: new Date().toLocaleDateString(),
    };

    setExpenses((prev) => [newExpense, ...prev]);
    setDesc("");
    setAmount("");
    setMessage("Expense added successfully!");
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const totalExpense = useMemo(() => {
    return expenses.reduce((total, exp) => total + exp.amount, 0);
  }, [expenses]);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat("en-PK").format(num);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 flex justify-center">
      <div className="w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center text-green-400">
          SmartPocket Expense Tracker
        </h1>

        {/* Total Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6 border border-gray-700">
          <h2 className="text-lg text-gray-400">Total Expenses</h2>
          <p className="text-3xl font-bold mt-2 text-red-400">
            PKR {formatCurrency(totalExpense)}
          </p>
        </div>

        {/* Add Expense */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-6 border border-gray-700">
          <h2 className="mb-4 text-lg font-semibold">Add Expense</h2>

          <input
            className="w-full p-3 rounded bg-gray-700 mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <input
            type="number"
            min="1"
            className="w-full p-3 rounded bg-gray-700 mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            className="w-full p-3 rounded bg-gray-700 mb-3 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Bills</option>
            <option>Shopping</option>
            <option>Other</option>
          </select>

          <button
            onClick={addExpense}
            className="w-full bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-semibold"
          >
            Add Expense
          </button>

          {message && (
            <p className="mt-3 text-sm text-yellow-400 text-center">
              {message}
            </p>
          )}
        </div>

        {/* Expense List */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="mb-4 text-lg font-semibold">Recent Transactions</h2>

          {expenses.length === 0 && (
            <p className="text-gray-400 text-center">No expenses added yet.</p>
          )}

          {expenses.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between items-center border-b border-gray-700 py-3"
            >
              <div>
                <p className="font-semibold">{exp.desc}</p>
                <p className="text-sm text-gray-400">
                  {exp.category} • {exp.date}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-red-400 font-semibold">
                  - PKR {formatCurrency(exp.amount)}
                </span>
                <button
                  onClick={() => deleteExpense(exp.id)}
                  className="text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
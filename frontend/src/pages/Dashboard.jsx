import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28", "#AA336A"];

export default function Dashboard() {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const categorize = (text) => {
    text = text.toLowerCase();
    if (text.includes("kfc") || text.includes("food") || text.includes("burger"))
      return "Food";
    if (text.includes("uber") || text.includes("careem"))
      return "Transport";
    if (text.includes("mall") || text.includes("shopping"))
      return "Shopping";
    if (text.includes("fee") || text.includes("course"))
      return "Education";
    return "Other";
  };

  const addTransaction = () => {
    if (!desc || !amount) return;

    const category = categorize(desc);
    const parsedAmount = parseFloat(amount);

    if (parsedAmount > balance) {
      alert("Insufficient balance!");
      return;
    }

    const newTx = {
      id: Date.now(),
      desc,
      amount: parsedAmount,
      category,
    };

    setTransactions([...transactions, newTx]);
    setBalance(balance - parsedAmount);
    setDesc("");
    setAmount("");
  };

  const categoryData = Object.values(
    transactions.reduce((acc, tx) => {
      if (!acc[tx.category])
        acc[tx.category] = { name: tx.category, value: 0 };
      acc[tx.category].value += tx.amount;
      return acc;
    }, {})
  );

  const generateInsight = () => {
    if (!categoryData.length) return "Start adding transactions to get AI insights.";

    const maxCategory = categoryData.reduce((a, b) =>
      a.value > b.value ? a : b
    );

    return `You are spending most on ${maxCategory.name}. Try reducing it by 15% to increase savings.`;
  };

  const fraudAlert =
    transactions.length >= 3 &&
    transactions.slice(-3).every((tx) => tx.amount > 3000);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        SmartPocket – AI Student Wallet
      </h1>

      {/* Balance */}
      <div className="bg-gray-800 p-6 rounded-xl mb-6 shadow-lg">
        <h2 className="text-lg">Wallet Balance</h2>
        <p className="text-4xl font-bold mt-2">PKR {balance}</p>
      </div>

      {/* Add Transaction */}
      <div className="bg-gray-800 p-6 rounded-xl mb-6 shadow-lg">
        <h2 className="text-lg mb-4">Add Transaction</h2>
        <input
          className="p-2 mr-2 rounded bg-gray-700"
          placeholder="Description (e.g. KFC)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className="p-2 mr-2 rounded bg-gray-700"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={addTransaction}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>

      {/* Chart */}
      {categoryData.length > 0 && (
        <div className="bg-gray-800 p-6 rounded-xl mb-6 shadow-lg">
          <h2 className="text-lg mb-4">Spending Breakdown</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={categoryData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      )}

      {/* AI Insight */}
      <div className="bg-gray-800 p-6 rounded-xl mb-6 shadow-lg">
        <h2 className="text-lg mb-2">AI Financial Insight 🤖</h2>
        <p>{generateInsight()}</p>
      </div>

      {/* Fraud Alert */}
      {fraudAlert && (
        <div className="bg-red-600 p-4 rounded-xl shadow-lg">
          🚨 Suspicious Activity Detected! Multiple large transactions.
        </div>
      )}
    </div>
  );
}

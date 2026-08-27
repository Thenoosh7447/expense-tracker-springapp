import { useEffect, useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const API_URL = import.meta.env.VITE_API_URL + "/expenses";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setExpenses(data));
  }, []);

  const addExpense = async () => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        amount: Number(amount),
      }),
    });

    const newExpense = await response.json();

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <h2>Expenses</h2>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ₹{expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
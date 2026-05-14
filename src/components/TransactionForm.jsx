import { useState } from "react";

function TransactionForm({ addTransaction }) {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit() {

    if (text === "" || amount === "") {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
      category
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  }

  return (
    <div className="form">

      <input
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Salary</option>
      </select>

      <button
      className="add-btn"
      onClick={handleSubmit}
      >
       Add Transaction
      </button>

    </div>
  );
}

export default TransactionForm;
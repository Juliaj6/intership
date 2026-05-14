import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import FilterButtons from "./components/FilterButtons";
import BudgetTracker from "./components/BudgetTracker";
import SavingsGoal from "./components/SavingsGoal";
import Charts from "./components/Charts";
import DarkModeToggle from "./components/DarkModeToggle";
import MonthlySummary from "./components/MonthlySummary";

function App() {

  // LOGIN STATES
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);

  // FINANCE TRACKER STATES
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  const [filter, setFilter] = useState("All");

  const [darkMode, setDarkMode] = useState(false);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // ADD TRANSACTION
  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  // DELETE TRANSACTION
  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  }

  // FILTER
  const filteredTransactions = transactions.filter((item) => {
    return (
      filter === "All" ||
      item.category === filter
    );
  });

  // REGISTER
  const handleRegister = () => {

    if (username === "" || password === "") {
      alert("Enter all fields");
      return;
    }

    setUser({
      username: username,
      password: password,
    });

    alert("Registration Successful");

    setIsLogin(true);

    setUsername("");
    setPassword("");
  };

  // LOGIN
  const handleLogin = () => {

    if (
      user &&
      username === user.username &&
      password === user.password
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid Login");
    }
  };

  // LOGOUT
  const handleLogout = () => {
    setLoggedIn(false);
  };

  // LOGIN PAGE
  if (!loggedIn) {
    return (
      <div className="container">

        <div className="card">

          <h1>
            {isLogin ? "Login" : "Register"}
          </h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {
            isLogin ? (
              <button onClick={handleLogin}>
                Login
              </button>
            ) : (
              <button onClick={handleRegister}>
                Register
              </button>
            )
          }

          <p
            className="toggle"
            onClick={() =>
              setIsLogin(!isLogin)
            }
          >
            {
              isLogin
                ? "Create Account"
                : "Already have an account?"
            }
          </p>

        </div>
      </div>
    );
  }

  // FINANCE TRACKER PAGE
  return (
    <div className={darkMode ? "dark" : "light"}>

      <div className="container">

        <div className="header">
          <Navbar />

          <DarkModeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        <h1>Your Personal Budget Companion ✨</h1>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

        <Dashboard transactions={transactions} />

        <BudgetTracker transactions={transactions} />

        <SavingsGoal transactions={transactions} />

        <TransactionForm
          addTransaction={addTransaction}
        />

        <FilterButtons setFilter={setFilter} />

        <Charts transactions={transactions} />

        <MonthlySummary transactions={transactions} />

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />

      </div>
    </div>
  );
}

export default App;
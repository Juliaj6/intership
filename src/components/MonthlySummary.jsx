function MonthlySummary({ transactions }) {

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = Math.abs(
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => acc + item.amount, 0)
  );

  const savings = income - expense;


  return (

    <div className="summary">

      <h2>Monthly Summary</h2>

      <p>Income: ₹ {income}</p>

      <p>Expense: ₹ {expense}</p>

      <p>Savings: ₹ {savings}</p>

    </div>
  );
}

export default MonthlySummary;
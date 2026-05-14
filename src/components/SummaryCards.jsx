function SummaryCards({ transactions }) {

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  return (

    <div className="stats">

      <div className="card income">
        <h3>Income</h3>
        <p>₹ {income}</p>
      </div>

      <div className="card expense">
        <h3>Expense</h3>
        <p>₹ {Math.abs(expense)}</p>
      </div>

    </div>
  );
}

export default SummaryCards;
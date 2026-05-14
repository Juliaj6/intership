function BudgetTracker({ transactions }) {

  const budget = 10000;

  const spent = Math.abs(
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => acc + item.amount, 0)
  );

  const percentage = (spent / budget) * 100;


  return (

    <div className="section">

      <h3>Monthly Budget</h3>

      <p>₹ {spent} / ₹ {budget}</p>

      <div className="progress-bar">

        <div
          className="progress"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

    </div>
  );
}

export default BudgetTracker;
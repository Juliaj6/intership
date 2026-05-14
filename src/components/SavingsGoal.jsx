function SavingsGoal({ transactions }) {

  const goal = 50000;

  const savings = transactions.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const percentage = (savings / goal) * 100;


  return (

    <div className="section">

      <h3>🎯 Savings Goal</h3>

      <p>₹ {savings} / ₹ {goal}</p>

      <div className="progress-bar">

        <div
          className="progress"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

    </div>
  );
}

export default SavingsGoal;
function BalanceCard({ transactions }) {

  const balance = transactions.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (

    <div className="balance-card">

      <h2>Total Balance</h2>

      <h1>₹ {balance}</h1>

    </div>
  );
}

export default BalanceCard;
function TransactionItem({ item, deleteTransaction }) {

  return (

    <div
      className={
        item.amount > 0
          ? "transaction income-border"
          : "transaction expense-border"
      }
    >

      <div>
        <h4>{item.text}</h4>
        <small>{item.category}</small>
      </div>

      <div>
        <p>₹ {item.amount}</p>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTransaction(item.id)}
      >
        ❌
      </button>

    </div>
  );
}

export default TransactionItem;
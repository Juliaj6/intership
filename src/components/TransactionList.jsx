import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  deleteTransaction
}) {

  return (

    <div className="transactions">

      <h2>Transactions</h2>

      {
        transactions.map((item) => (

          <TransactionItem
            key={item.id}
            item={item}
            deleteTransaction={deleteTransaction}
          />

        ))
      }

    </div>
  );
}

export default TransactionList;
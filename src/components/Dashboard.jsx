import BalanceCard from "./BalanceCard";
import SummaryCards from "./SummaryCards";

function Dashboard({ transactions }) {

  return (
    <>
      <BalanceCard transactions={transactions} />
      <SummaryCards transactions={transactions} />
    </>
  );
}

export default Dashboard;
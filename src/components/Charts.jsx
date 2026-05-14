import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function Charts({ transactions }) {

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = Math.abs(
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => acc + item.amount, 0)
  );

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense }
  ];

  const COLORS = ["#22c55e", "#ef4444"];


  return (

    <div className="analytics">

      <h2>Analytics</h2>

      {
        income === 0 && expense === 0 ? (

          <p>No transactions yet</p>

        ) : (

          <PieChart width={350} height={300}>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >

              {
                data.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))
              }

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        )
      }

    </div>
  );
}

export default Charts;
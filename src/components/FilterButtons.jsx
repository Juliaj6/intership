function FilterButtons({ setFilter }) {

  return (

    <div className="filters">

      <button onClick={() => setFilter("All")}>All</button>

      <button onClick={() => setFilter("Food")}>Food</button>

      <button onClick={() => setFilter("Travel")}>Travel</button>

      <button onClick={() => setFilter("Shopping")}>Shopping</button>

      <button onClick={() => setFilter("Bills")}>Bills</button>

    </div>
  );
}

export default FilterButtons;
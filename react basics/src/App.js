import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Title", amount: "Price", date: new Date(2021, 1, 1) },
    { title: "Car", amount: 200, date: new Date(2021, 2, 28) },
    { title: "Boat", amount: 2000, date: new Date(2021, 2, 18) },
  ];
  return (
    <div>
      <h2>Let's get started, Guys!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

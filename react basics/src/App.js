import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Place", amount: 20000, date: new Date(2021, 1, 1) },
    { title: "Car", amount: 200, date: new Date(2021, 2, 28) },
    { title: "Boat", amount: 2000, date: new Date(2021, 2, 18) },
  ];
  return (
    <div>
      <h2>Let's get started, Guys!</h2>
      <Expense items={expenses} />
    </div>
  );
}

export default App;

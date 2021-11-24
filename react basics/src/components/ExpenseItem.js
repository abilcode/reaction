import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = "Date";
  const expenseTitle = "Title";
  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
      </div>
      <div className='expense-item__price'>
        <h2>Price</h2>
      </div>
    </div>
  );
}
export default ExpenseItem;

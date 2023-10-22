import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses!</h2>;
  }
  const propingData = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return <ul className="expenses-list">{propingData}</ul>;
}

import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const expenseDate = new Date(2023, 10, 5);
  const expenseTitle = "Bike Installment";
  const expenseAmount = "25000";
  return (
    <div className="expense-item">
      {/* {console.log(props)} */}
      {/* <div>{props.date}</div> */}
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense-item_description">
        <div className="expense-item_price">{props.amount}$</div>
      </div>
    </div>
  );
}

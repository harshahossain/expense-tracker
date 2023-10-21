import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 10, 5);
  // const expenseTitle = "Bike Installment";
  // const expenseAmount = "25000";

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   //console.log(title);
  // };
  return (
    <Card className="expense-item">
      {/* {console.log(props)} */}
      {/* <div>{props.date}</div> */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
}

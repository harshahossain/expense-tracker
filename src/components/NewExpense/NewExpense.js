import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseFormOneHandler from "./ExpenseFormOneHandler";
import { v4 as uuidv4 } from "uuid";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    //console.log(expenseData);

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* <h2>One Handler Form</h2>
      <ExpenseFormOneHandler /> */}
    </div>
  );
}

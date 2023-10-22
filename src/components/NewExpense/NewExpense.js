import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseFormOneHandler from "./ExpenseFormOneHandler";
import { v4 as uuidv4 } from "uuid";

export default function NewExpense(props) {
  //
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    //console.log(expenseData);

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const editingHandler = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={editingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditingHandler={editingHandler}
        />
      )}

      {/* <h2>One Handler Form</h2>
      <ExpenseFormOneHandler /> */}
    </div>
  );
}

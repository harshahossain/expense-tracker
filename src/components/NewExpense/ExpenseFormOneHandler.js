import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseFormOneHandler() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);
  };
  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
  };
  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value);
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  return (
    <form>
      {/* <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(evt) => inputChangeHandler("title", evt.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(evt) => {
              inputChangeHandler("amount", evt.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2030-12-32"
            onChange={(evt) => {
              inputChangeHandler("date"), evt.target.value;
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div> */}
    </form>
  );
}

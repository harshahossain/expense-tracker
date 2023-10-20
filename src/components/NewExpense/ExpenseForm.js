import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    //differnce is here i have to update all 3 states always the upper would let us update one state at a time. cause this usestate takes object
    entertedTitle: "",
    entertedAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (evt) => {
    // setEnteredTitle(evt.target.value);
    setUserInput({
      //have to make sure other value doesnt get lost so exprade than change the neccessary?
      ...userInput,
      entertedTitle: evt.target.value,
    });
  };
  const amountChangeHandler = (evt) => {
    setUserInput({
      ...userInput,
      entertedAmount: evt.target.value,
    });
    //setEnteredAmount(evt.target.value);
  };
  const dateChangeHandler = (evt) => {
    setUserInput({
      ...userInput,
      entertedDate: evt.target.value,
    });
    //setEnteredDate(evt.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2030-12-32"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

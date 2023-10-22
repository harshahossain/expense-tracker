import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   //differnce is here i have to update all 3 states always the upper would let us update one state at a time. cause this usestate takes object
  //   entertedTitle: "",
  //   entertedAmount: "",
  //   enteredDate: "",
  // });

  //very important whenver we change state that depends on previous state we should do it in a function. AS in fucntion inside the setUserInput/
  //Im not talking about that titlechangehandler fn is managing setuserinput but setUserInput will take prevState in its params and then the fucntion will execute where we change state's value
  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);

    // setUserInput({
    //   ...userInput,
    //   entertedTitle: evt.target.value,
    // });

    // setUserInput((prevState) => {
    //   //automatically takes old state regardless of name
    //   //now here we should return the new state snapshot
    //   return { ...prevState, entertedTitle: evt.target.value }; //why should I do it like this? cause react schedules state update so its necessary
    //   //this just guarentees the state are correctly snapshotted and not backdated
    // });
  };
  const amountChangeHandler = (evt) => {
    // setUserInput({
    //   ...userInput,
    //   entertedAmount: evt.target.value,
    // });

    setEnteredAmount(evt.target.value);
    // setUserInput((oldState) => {
    //   return { ...oldState, entertedAmount: evt.target.value };
    // });
  };
  const dateChangeHandler = (evt) => {
    // setUserInput({
    //   ...userInput,
    //   entertedDate: evt.target.value,
    // });

    setEnteredDate(evt.target.value);

    // setUserInput((oldState) => {
    //   return { ...oldState, enteredDate: evt.target.value };
    // });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseDate);

    props.onSaveExpenseData(expenseData);

    //reseting state so the form input goes back to normal
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2018-01-01"
            max="2030-12-32"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* setting the type to button so this doesnt submit the form */}
        <button type="button" onClick={props.stopEditingHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

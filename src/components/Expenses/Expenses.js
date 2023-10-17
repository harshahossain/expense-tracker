import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

export default function Expenses(props) {
  const propingData = props.expenses.map((expense) => {
    const month = expense.date.toLocaleString("en-US", { month: "long" });
    const day = expense.date.toDateString("en-US", { day: "2-digit" });
    // if (expense.date.getMonth() === 1) month = "January";
    // if (expense.date.getMonth() === 2) month = "February";
    // if (expense.date.getMonth() === 3) month = "March";
    // if (expense.date.getMonth() === 4) month = "April";
    // if (expense.date.getMonth() === 5) month = "May";
    // if (expense.date.getMonth() === 6) month = "June";
    // if (expense.date.getMonth() === 7) month = "July";
    // if (expense.date.getMonth() === 8) month = "August";
    // if (expense.date.getMonth() === 9) month = "September";
    // if (expense.date.getMonth() === 10) month = "October";
    // if (expense.date.getMonth() === 11) month = "November";
    // if (expense.date.getMonth() === 12) month = "December";
    //date={`${month} ${expense.date.getDate()}, ${day} ${expense.date.getFullYear()}`}   //its actually prop

    return (
      <Card className="expenses">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </Card>
    );
  });

  return propingData;
}

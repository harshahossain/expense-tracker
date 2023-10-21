import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  //
  const [filteredYear, setFilteredYear] = useState("2023");

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
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const filterChangleHandler = (selectedYear) => {
    //console.log(`from Expenses.js ${selectedYear}`);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangleHandler}
        />
        {propingData}
      </Card>
    </div>
  );
}

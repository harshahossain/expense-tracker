import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  //
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // const propingData = props.expenses.map((expense) => {
  const propingData = filteredExpenses.map((expense) => {
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
        {/* {propingFilterYearData} */}
      </Card>
    </div>
  );
}

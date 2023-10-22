import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  //
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // const propingData = props.expenses.map((expense) => {

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
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

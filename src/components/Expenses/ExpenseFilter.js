import React from "react";
import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  const yearOptions = () => {
    for (let year = 2010; year < 2041; year++) {
      return <option value={year}>{year}</option>;
    }
  };
  const dropdownChangeHandler = (evt) => {
    props.onChangeFilter(evt.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className=" expenses-filter__control">
        <label>Filter By Year</label>
        {/* <select>{yearOptions}</select> */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
}

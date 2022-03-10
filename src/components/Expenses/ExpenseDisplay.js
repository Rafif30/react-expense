import React, { useState } from "react";

import "./ExpenseDisplay.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpenseChart from "./ExpenseChart.js";

function ExpenseDisplay(props) {
  const [enteredYear, setInputYear] = useState("2020");

  const yearChange = (selectedYear) => {
    setInputYear(selectedYear);
  };

  const fillterYearChange = props.items.filter((items) => {
    return items.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={enteredYear} onChangeYear={yearChange} />
        <ExpenseChart expenses={fillterYearChange} />
        <ExpenseList items={fillterYearChange} />
      </Card>
    </div>
  );
}

export default ExpenseDisplay;

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [enteredEditing, userEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    userEditing(false);
  };

  const startEditingHandler = () => {
    userEditing(true);
  };

  const stopEditingHandler = () => {
    userEditing(false);
  };

  return (
    <div className="new-expense">
      {!enteredEditing && (
        <button onClick={startEditingHandler}>Add new Expenses</button>
      )}
      {enteredEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

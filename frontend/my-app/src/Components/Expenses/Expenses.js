import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/form";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
  const {  expenses, getExpenses,deleteExpense,totalExpense } = useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 class="total-income">Total Expense : <span>${totalExpense()} </span></h2>
        <div class="income-content">
          <div class="form-container">
            <ExpenseForm/>
          </div>
          <div class="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, category, description, date,type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  amount={amount}
                  category={category}
                  description={description}
                  date={date}
                  type={type}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  );
}
const ExpensesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2rem;
      font-weight: 800;
      color: red;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Expenses;

import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Chart from "../Chart/chart";
import { useGlobalContext } from "../../context/globalContext";
import { History } from "../History/history";

function Dashboard() {
  const { totalIncome, totalExpense,totalBalance,getIncomes,getExpenses,incomes,expenses } = useGlobalContext();
  const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
  const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;
  const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
  const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;
  useEffect(()=>{
    getIncomes()
    getExpenses()
  },[])

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All transactions </h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income </h2>
                <p>
                  {totalIncome()} ден
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {totalExpense()} ден
                </p>
              </div>
              <div className="balance">
                 <h2>Total Balance</h2>
                 <p>{totalBalance()} ден</p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History/>
            <h2 className="salary-title">
              Min <span>Salary</span> Max
            </h2>
            <div class="salary-item">
              <p>{minIncome}</p>
              <p>{maxIncome}</p>
          
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span> Max
            </h2>
            <div class="salary-item">
              <p>{minExpense}</p>
              <p>{maxExpense}</p>
          
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}
const DashboardStyled = styled.div`
.stats-con{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  .chart-con{
      grid-column: 1 / 4;
      height: 400px;
      .amount-con{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          .income, .expense{
              grid-column: span 2;
          }
          .income, .expense, .balance{
              background: #FCF6F9;
              border: 2px solid #FFFFFF;
              box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
              border-radius: 20px;
              padding: 1rem;
              p{
                  font-size: 3.5rem;
                  font-weight: 700;
              }
          }

          .balance{
              grid-column: 2 / 4;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              p{
                  color: var(--color-green);
                  opacity: 0.6;
                  font-size: 4.5rem;
              }
          }
      }
  }

  .history-con{
      grid-column: 4 / -1;
      h2{
          margin: 1rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .salary-title{
          font-size: 1.2rem;
          span{
              font-size: 1.8rem;
          }
      }
      .salary-item{
          background: #FCF6F9;
          border: 2px solid #FFFFFF;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          padding: 1rem;
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p{
              font-weight: 600;
              font-size: 1.6rem;
          }
      }
  }
}`;
export default Dashboard;
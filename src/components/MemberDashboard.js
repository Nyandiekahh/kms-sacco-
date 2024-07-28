import React from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial, sans-serif';
`;

const WelcomeMessage = styled.h2`
  color: #00796b;
  margin-bottom: 1.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Progress = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const ProgressBar = styled.div`
  background-color: #00796b;
  width: ${({ progress }) => progress}%;
  padding: 0.5rem;
  color: #fff;
  text-align: center;
`;

const QuickActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: #00796b;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`;

const MemberDashboard = ({ memberData = {} }) => {
  const location = useLocation();
  const username = location.state?.username || 'Member';

  const {
    savingsBalance = 0,
    totalLoans = 0,
    availableCredit = 0,
    recentTransactions = [],
    currentLoan = null,
    savingsGoals = []
  } = memberData;

  return (
    <DashboardContainer>
      <WelcomeMessage>Welcome back, {username}!</WelcomeMessage>

      <Section>
        <Title>Account Summary</Title>
        <Text>Current Savings Balance: Ksh {savingsBalance}</Text>
        <Text>Total Loans Outstanding: Ksh {totalLoans}</Text>
        <Text>Available Credit Limit: Ksh {availableCredit}</Text>
      </Section>

      <Section>
        <Title>Quick Actions</Title>
        <QuickActions>
          <Button to="/apply-loan">Apply for a New Loan</Button>
          <Button to="/deposit">Make a Deposit</Button>
          <Button to="/transfer">Transfer Funds</Button>
          <Button to="/finance-statements">View Finance Statement</Button>
        </QuickActions>
      </Section>

      <Section>
        <Title>Recent Transactions</Title>
        {recentTransactions.length > 0 ? (
          recentTransactions.map((transaction, index) => (
            <Text key={index}>{transaction.date}: {transaction.description} - Ksh {transaction.amount}</Text>
          ))
        ) : (
          <Text>No recent transactions</Text>
        )}
      </Section>

      <Section>
        <Title>Current Loan</Title>
        {currentLoan ? (
          <>
            <Text>Loan Amount: Ksh {currentLoan.amount}</Text>
            <Text>Due Date: {currentLoan.dueDate}</Text>
            <Progress>
              <ProgressBar progress={currentLoan.repaymentProgress}>
                {currentLoan.repaymentProgress}%
              </ProgressBar>
            </Progress>
          </>
        ) : (
          <Text>No current loans</Text>
        )}
      </Section>

      <Section>
        <Title>Savings Goals</Title>
        {savingsGoals.length > 0 ? (
          savingsGoals.map((goal, index) => (
            <div key={index}>
              <Text>{goal.name}</Text>
              <Progress>
                <ProgressBar progress={goal.progress}>
                  {goal.progress}%
                </ProgressBar>
              </Progress>
            </div>
          ))
        ) : (
          <Text>No savings goals</Text>
        )}
      </Section>
    </DashboardContainer>
  );
};

export default MemberDashboard;

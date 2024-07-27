import React from 'react';
import styled from 'styled-components';

const SavingsLoansContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const SavingsAndLoans = () => {
  return (
    <SavingsLoansContainer>
      <h1>Savings and Loans</h1>
      <section>
        <h2>Savings</h2>
        <p>Minimum savings requirement: Ksh 1,000 per month</p>
        <p>Deposit deadline: 5th day of each month</p>
        <p>Late fee: Ksh 200 for deposits after the deadline</p>
      </section>
      <section>
        <h2>Loans</h2>
        <p>Loan eligibility: Members in good standing</p>
        <p>Loan application process:</p>
        <ol>
          <li>Download loan application form</li>
          <li>Complete application form</li>
          <li>Submit supporting documents</li>
          <li>Attend loan interview (if required)</li>
        </ol>
        <p>Loan approval decisions communicated within 14 business days</p>
      </section>
    </SavingsLoansContainer>
  );
};

export default SavingsAndLoans;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoanApplicationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #00796b;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #555;
`;

const EmailLink = styled.a`
  color: #00796b;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #004d40;
  }
`;

const TermsLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: #00796b;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #004d40;
    text-decoration: underline;
  }
`;

const LoanApplication = () => {
  return (
    <LoanApplicationContainer>
      <Title>Apply for a Loan</Title>
      <InfoText>
        To apply for a loan, you must have a guarantor who has accepted and is among the Sacco members.
      </InfoText>
      <InfoText>
        Please send an email to{' '}
        <EmailLink href="mailto:kufanyanambayasacco@gmail.com">
          kufanyanambayasacco@gmail.com
        </EmailLink>{' '}
        requesting the loan with supporting documents if necessary.
      </InfoText>
      <InfoText>
        The Sacco will reply to your email and cc all Sacco members for approval after reviewing your application.
      </InfoText>
      <TermsLink to="/terms-and-conditions">
        View Terms and Conditions for more information
      </TermsLink>
    </LoanApplicationContainer>
  );
};

export default LoanApplication;

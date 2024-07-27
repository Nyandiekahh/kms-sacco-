import React from 'react';
import styled from 'styled-components';

const MembershipContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Membership = () => {
  return (
    <MembershipContainer>
      <h1>Become a Member</h1>
      <h2>Eligibility</h2>
      <ul>
        <li>Must be at least 18 years old</li>
        <li>Strong connection to the Kenyan community</li>
        <li>Exhibit ethical conduct and financial responsibility</li>
      </ul>
      <h2>Application Process</h2>
      <ol>
        <li>Send an application email to kufanyanambayasacco@gmail.com</li>
        <li>Pay a one-time, non-refundable joining fee of Ksh 200</li>
        <li>Make a minimum initial deposit of Ksh 1,000 into your savings account</li>
      </ol>
      <p>For more information on membership, please refer to our Terms and Conditions.</p>
    </MembershipContainer>
  );
};

export default Membership;

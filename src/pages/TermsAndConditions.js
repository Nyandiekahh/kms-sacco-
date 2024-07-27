import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial, sans-serif';
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  color: #00796b;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #00796b;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: inside disc;
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Note = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-top: 2rem;
`;

const Terms = () => {
  return (
    <TermsContainer>
      <Title>Kufanyana Mbaya Sacco Limited - Terms and Conditions</Title>
      <SectionTitle>Welcome</SectionTitle>
      <p>Welcome to Kufanyana Mbaya Sacco Limited (the "Sacco")! We are a member-owned financial cooperative committed to promoting financial inclusion, member participation, and social responsibility. These Terms and Conditions govern your membership of Sacco and your use of our services. By becoming a member or using our services, you agree to be bound by these Terms.</p>
      
      <SectionTitle>1. Membership</SectionTitle>
      <SectionTitle>1.1 Eligibility and Application</SectionTitle>
      <List>
        <ListItem>Age: You must be at least 18 years old to apply for membership.</ListItem>
        <ListItem>Residence: While residency in Kenya is not mandatory, you should be able to demonstrate a strong connection to the Kenyan community.</ListItem>
        <ListItem>Character: The Sacco promotes ethical conduct and financial responsibility. Applicants who exhibit a history of financial mismanagement or unethical behavior may be denied membership at the Board's discretion.</ListItem>
      </List>

      <SectionTitle>1.2 Application Process</SectionTitle>
      <List>
        <ListItem>Application Email: Send an email to <a href="mailto:kufanyanambayasacco@gmail.com">kufanyanambayasacco@gmail.com</a> expressing your interest in joining the Sacco. The email should include a brief introduction of yourself and your reasons for wanting to become a member.</ListItem>
        <ListItem>Joining Fee: Pay a one-time, non-refundable joining fee of Ksh 200. Payment instructions will be provided upon receipt of your application email.</ListItem>
        <ListItem>Initial Deposit: Make a minimum initial deposit of Ksh 1,000 into your savings account. Deposit instructions will be provided upon receipt of your application email.</ListItem>
      </List>

      <SectionTitle>1.3 Approval Process</SectionTitle>
      <p>Upon receipt of your application email, joining fee, and initial deposit, the Sacco Board of Directors will review your application. You will be notified by email of the Board's decision within 5 business days.</p>

      <SectionTitle>1.4 Membership Rights and Responsibilities</SectionTitle>
      <p>As a member of the Sacco, you are entitled to:</p>
      <List>
        <ListItem>Voting Rights: You have the right to vote on all matters brought before the membership, including the election of Board members and approval of loan applications from non-members.</ListItem>
        <ListItem>Access to Services: You have access to all Sacco services, including savings accounts and loans (subject to approval).</ListItem>
        <ListItem>Transparency: You have the right to receive clear and concise information about the Sacco's financial performance, governance structure, and operational policies.</ListItem>
      </List>
      <p>Members also have certain responsibilities, including:</p>
      <List>
        <ListItem>Upholding Sacco Values: Members are expected to conduct themselves in a manner that upholds the Sacco's core values of financial inclusion, member participation, and social responsibility.</ListItem>
        <ListItem>Meeting Financial Obligations: Members are obligated to make their monthly savings deposits on time and fulfill their loan repayment commitments.</ListItem>
        <ListItem>Abiding by Sacco Rules: Members must comply with all Sacco rules and regulations as outlined in these Terms and Conditions and any additional policies established by the Board of Directors.</ListItem>
      </List>

      <SectionTitle>1.5 Revocation of Membership</SectionTitle>
      <p>Membership in the Sacco may be revoked for:</p>
      <List>
        <ListItem>Non-payment of Savings: Failure to make your monthly savings deposits for three consecutive months without a valid justification may result in revocation of membership.</ListItem>
        <ListItem>Breach of Rules: Engaging in activities that violate the Sacco's rules or undermine its core values may lead to membership revocation.</ListItem>
        <ListItem>Fraudulent Activity: Any member found to be involved in fraudulent activity related to the Sacco's operations will have their membership revoked.</ListItem>
      </List>
      <p>The decision to revoke membership rests with the Board of Directors. Members facing potential revocation will be notified in writing and given an opportunity to respond to the allegations before a final decision is made.</p>

      <SectionTitle>2. Savings</SectionTitle>
      <SectionTitle>2.1 Importance of Savings</SectionTitle>
      <p>Regular savings are crucial for building financial security and achieving your financial goals. The Sacco encourages all members to develop a consistent savings habit.</p>

      <SectionTitle>2.2 Minimum Savings Requirement</SectionTitle>
      <p>All members are required to save a minimum of Ksh 1,000 per month. Savings can be deposited electronically or through designated collection points.</p>

      <SectionTitle>2.3 Deposit Deadlines and Late Fees</SectionTitle>
      <p>Savings deposits must be made by the 5th day of each month. A late fee of Ksh 200 will be applied to deposits received after the deadline. Habitual late payments may be subject to further disciplinary action by the Sacco.</p>

      <SectionTitle>2.4 Interest on Savings</SectionTitle>
      <p>The Sacco may offer interest on member savings at a rate determined by the Board of Directors. The interest rate will be reviewed periodically and communicated to members via email.</p>

      <SectionTitle>2.5 Withdrawal of Savings</SectionTitle>
      <p>Members are generally encouraged to save towards long-term goals. However, members can withdraw their savings at any time, subject to the following provisions:</p>
      <List>
        <ListItem>Notice Period: A minimum of 30 days written notice is required before a savings withdrawal can be processed.</ListItem>
        <ListItem>Early Withdrawal Fee: An early withdrawal fee may be applied to discourage frequent withdrawals and promote long-term savings habits. The fee amount will be determined by the Board of Directors and communicated to members.</ListItem>
        <ListItem>Minimum Balance Requirement: Members are required to maintain a minimum balance in their savings account. The minimum balance requirement will be determined by the Board of Directors and communicated to members.</ListItem>
      </List>

      <SectionTitle>2.6 Savings Account Inactivity</SectionTitle>
      <p>If a member's savings account remains inactive for a period of 24 months (with no deposits or withdrawals), the Sacco may impose a dormancy fee. Dormant accounts may also be subject to administrative closure after a further period of inactivity as determined by the Board of Directors. Members with dormant accounts will be contacted before any closure actions are taken.</p>

      <SectionTitle>3. Loans</SectionTitle>
      <SectionTitle>3.1 Purpose of Loans</SectionTitle>
      <p>The Sacco offers loan products to assist members in meeting their various financial needs. Loans can be used for expenses such as education, medical bills, home improvement, or starting a small business.</p>

      <SectionTitle>3.2 Loan Eligibility</SectionTitle>
      <p>Only members in good standing are eligible to apply for loans. Members in good standing are defined as those who have maintained their membership status, made regular savings deposits, and have no outstanding loan delinquencies.</p>

      <SectionTitle>3.3 Loan Application Process</SectionTitle>
      <p>To apply for a loan, members must complete the following steps:</p>
      <List>
        <ListItem>Download Loan Application Form: A loan application form can be downloaded from the Sacco's website or obtained from a Sacco representative.</ListItem>
        <ListItem>Complete Application Form: The loan application form requires basic information about the member, the loan amount requested, and the intended purpose of the loan.</ListItem>
        <ListItem>Submit Supporting Documents: Depending on the loan type and amount, applicants may be required to submit supporting documents such as pay stubs, business plans, or quotations for intended purchases.</ListItem>
        <ListItem>Loan Interview: In some cases, loan applicants may be invited for a brief interview with a Sacco loan officer to discuss their financial situation and the proposed loan use.</ListItem>
      </List>

      <SectionTitle>3.4 Loan Approval Process</SectionTitle>
      <p>Loan applications will be reviewed by the Sacco's loan committee. The committee will assess the application based on factors such as the member's savings history, the purpose of the loan, and repayment ability. Members will be notified of the loan decision within 10 business days of submission.</p>

      <SectionTitle>3.5 Loan Repayment Terms</SectionTitle>
      <p>Loan repayments must be made in accordance with the terms outlined in the loan agreement. The repayment schedule will include the principal amount and interest. The interest rate on loans will be determined by the Board of Directors and communicated to members.</p>

      <SectionTitle>3.6 Delinquent Loans</SectionTitle>
      <p>If a loan payment is missed, the following procedures will apply:</p>
      <List>
        <ListItem>Late Payment Fee: A late payment fee may be applied for missed payments. The fee amount will be determined by the Board of Directors and communicated to members.</ListItem>
        <ListItem>Notification: Members will receive a notification of missed payments and be given an opportunity to rectify the situation before further actions are taken.</ListItem>
        <ListItem>Collection Action: Continued non-payment may result in collection actions, including but not limited to legal proceedings and deduction from member savings or other assets.</ListItem>
      </List>

      <SectionTitle>3.7 Loan Defaults</SectionTitle>
      <p>In the event of a loan default, the Sacco reserves the right to take appropriate measures to recover the outstanding amount, including legal action if necessary. Members who default on their loans may also face penalties such as suspension of membership privileges or expulsion from the Sacco.</p>

      <SectionTitle>4. Board of Directors</SectionTitle>
      <SectionTitle>4.1 Role and Responsibilities</SectionTitle>
      <p>The Board of Directors is responsible for overseeing the Sacco's operations, setting policies, and ensuring the Sacco's compliance with applicable laws and regulations. The Board also makes decisions regarding membership applications, loan approvals, and other key matters.</p>

      <SectionTitle>4.2 Meetings and Elections</SectionTitle>
      <p>The Board of Directors meets regularly to review the Sacco's performance and make decisions on key issues. Board members are elected by the Sacco membership during the Annual General Meeting (AGM). Elections are held every two years, and members are encouraged to participate in the election process.</p>

      <SectionTitle>4.3 Board Members' Terms</SectionTitle>
      <p>Board members serve a term of two years and are eligible for re-election. The Board may appoint interim members if a position becomes vacant before the end of a term.</p>

      <SectionTitle>4.4 Conflict of Interest</SectionTitle>
      <p>Board members are required to disclose any conflicts of interest that may affect their ability to make impartial decisions. Board members must recuse themselves from discussions and decisions where a conflict of interest exists.</p>

      <SectionTitle>5. Contact Information</SectionTitle>
      <p>If you have any questions or need further clarification on any aspect of these Terms and Conditions, please contact us at:</p>
      <p>Email: <a href="mailto:kufanyanambayasacco@gmail.com">kufanyanambayasacco@gmail.com</a></p>
      <p>Phone: +254 796 611 599</p>
      <p>Address: P.O. Box 1234, Nairobi, Kenya</p>

      <Note>Thank you for being a part of Kufanyana Mbaya Sacco Limited. We look forward to a fruitful partnership with you!</Note>
    </TermsContainer>
  );
};

export default Terms;

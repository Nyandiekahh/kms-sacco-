import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial, sans-serif';
`;

const Title = styled.h2`
  color: #00796b;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const Th = styled.th`
  background-color: #00796b;
  color: white;
  padding: 0.5rem;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #00796b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 0.5rem;

  &:hover {
    background-color: #004d40;
  }
`;

const FinanceStatementList = () => {
  const location = useLocation();
  const username = location.state?.username || 'Member';
  const isAdmin = username === 'Einstein Mokua'; // Check if the user is an admin

  const [contributions, setContributions] = useState([
    { id: 1, member: 'David Gitonga', amount: 5000, date: '2024-07-01' },
    { id: 2, member: 'Oscar Kipkorir', amount: 7000, date: '2024-07-05' },
    { id: 3, member: 'Polycarp Kesa', amount: 6000, date: '2024-07-10' },
  ]);

  const [loans, setLoans] = useState([
    { 
      id: 1, 
      borrower: 'David Gitonga', 
      amount: 10000, 
      rate: 10, 
      dateBorrowed: '2024-07-15', 
      dueDate: '2024-10-15', 
      payments: [
        { amount: 3000, date: '2024-08-15' },
        { amount: 4000, date: '2024-09-15' },
      ],
      isPaid: false
    },
    { 
      id: 2, 
      borrower: 'Oscar Kipkorir', 
      amount: 15000, 
      rate: 12, 
      dateBorrowed: '2024-07-20', 
      dueDate: '2024-11-20', 
      payments: [
        { amount: 5000, date: '2024-08-20' },
      ],
      isPaid: false
    },
  ]);

  const [editingContribution, setEditingContribution] = useState(null);
  const [editingLoan, setEditingLoan] = useState(null);

  const handleEditContribution = (contribution) => {
    setEditingContribution({ ...contribution });
  };

  const handleSaveContribution = () => {
    setContributions(contributions.map(c => 
      c.id === editingContribution.id ? editingContribution : c
    ));
    setEditingContribution(null);
  };

  const handleEditLoan = (loan) => {
    setEditingLoan({ ...loan });
  };

  const handleSaveLoan = () => {
    setLoans(loans.map(l => 
      l.id === editingLoan.id ? editingLoan : l
    ));
    setEditingLoan(null);
  };

  const calculateTotalPaid = (payments) => {
    return payments.reduce((total, payment) => total + payment.amount, 0);
  };

  return (
    <Container>
      <Title>Finance Statement List</Title>
      
      <h3>Member Contributions</h3>
      <Table>
        <thead>
          <tr>
            <Th>Member</Th>
            <Th>Amount (Ksh)</Th>
            <Th>Date</Th>
            {isAdmin && <Th>Actions</Th>}
          </tr>
        </thead>
        <tbody>
          {contributions.map(contribution => (
            <tr key={contribution.id}>
              <Td>
                {editingContribution?.id === contribution.id ? 
                  <Input 
                    value={editingContribution.member} 
                    onChange={(e) => setEditingContribution({...editingContribution, member: e.target.value})}
                  /> : 
                  contribution.member
                }
              </Td>
              <Td>
                {editingContribution?.id === contribution.id ? 
                  <Input 
                    type="number"
                    value={editingContribution.amount} 
                    onChange={(e) => setEditingContribution({...editingContribution, amount: parseInt(e.target.value)})}
                  /> : 
                  contribution.amount
                }
              </Td>
              <Td>
                {editingContribution?.id === contribution.id ? 
                  <Input 
                    type="date"
                    value={editingContribution.date} 
                    onChange={(e) => setEditingContribution({...editingContribution, date: e.target.value})}
                  /> : 
                  contribution.date
                }
              </Td>
              {isAdmin && (
                <Td>
                  {editingContribution?.id === contribution.id ? 
                    <Button onClick={handleSaveContribution}>Save</Button> :
                    <Button onClick={() => handleEditContribution(contribution)}>Edit</Button>
                  }
                </Td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Loans</h3>
      <Table>
        <thead>
          <tr>
            <Th>Borrower</Th>
            <Th>Amount (Ksh)</Th>
            <Th>Rate (%)</Th>
            <Th>Date Borrowed</Th>
            <Th>Due Date</Th>
            <Th>Payments</Th>
            <Th>Status</Th>
            {isAdmin && <Th>Actions</Th>}
          </tr>
        </thead>
        <tbody>
          {loans.map(loan => (
            <tr key={loan.id}>
              <Td>{loan.borrower}</Td>
              <Td>{loan.amount}</Td>
              <Td>{loan.rate}%</Td>
              <Td>{loan.dateBorrowed}</Td>
              <Td>{loan.dueDate}</Td>
              <Td>
                {loan.payments.map((payment, index) => (
                  <div key={index}>
                    {payment.amount} on {payment.date}
                  </div>
                ))}
                <div>Total Paid: {calculateTotalPaid(loan.payments)}</div>
              </Td>
              <Td>{loan.isPaid ? 'Paid' : 'Not Paid'}</Td>
              {isAdmin && (
                <Td>
                  {editingLoan?.id === loan.id ? 
                    <Button onClick={handleSaveLoan}>Save</Button> :
                    <Button onClick={() => handleEditLoan(loan)}>Edit</Button>
                  }
                </Td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FinanceStatementList;

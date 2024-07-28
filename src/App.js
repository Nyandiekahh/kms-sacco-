import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import SavingsAndLoans from './pages/SavingsAndLoans';
import News from './pages/News';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import MemberDashboard from './components/MemberDashboard';
import OurStory from './pages/OurStory';
import Login from './pages/Login';
import LoanApplication from './components/LoanApplication';
import FinanceStatementList from './components/FinanceStatementList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/savings-and-loans" element={<SavingsAndLoans />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/dashboard" element={<MemberDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply-loan" element={<LoanApplication />} />
        <Route path="/finance-statements" element={<FinanceStatementList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

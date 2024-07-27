import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: #0056b3;
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>Email: kufanyanambayasacco@gmail.com</p>
      <p>Phone: +254796611599</p>
      <h2>Send us a message</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <TextArea placeholder="Your message" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;

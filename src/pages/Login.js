import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const PasswordInput = styled(Input)`
  padding-right: 2.5rem;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #00796b;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const userDetails = {
      'einsteinmokua100@gmail.com': {
        password: process.env.REACT_APP_PASSWORD_HASH_2,
        name: 'Einstein Mokua'
      },
      'davidgitonga083@gmail.com': {
        password: process.env.REACT_APP_PASSWORD_HASH_1,
        name: 'David Gitonga'
      },
      'oscarkipkorir23@gmail.com': {
        password: process.env.REACT_APP_PASSWORD_HASH_3,
        name: 'Oscar Kipkorir'
      },
      'polycarpkesar@gmail.com': {
        password: process.env.REACT_APP_PASSWORD_HASH_4,
        name: 'Polycarp Kesa'
      }
    };

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User Details:', userDetails[email]);

    const userInfo = userDetails[email];

    if (userInfo && userInfo.password === password) {
      navigate('/dashboard', { state: { username: userInfo.name } });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputContainer>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TogglePasswordButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePasswordButton>
          </InputContainer>
          <Button type="submit">Login</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
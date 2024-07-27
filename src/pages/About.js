import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Kufanyana Mbaya Sacco</h1>
      <p>Kufanyana Mbaya SACCO, nestled in Kenya's vibrant communities, is a beacon of hope dedicated to empowering individuals and uplifting communities.</p>
      <h2>Our Founding Principles</h2>
      <p>Driven by compassion and a deep sense of community responsibility, Kufanyana Mbaya SACCO was founded on principles of integrity, transparency, and inclusivity to provide financial opportunities for all.</p>
      <h2>Our Team</h2>
      <ul>
        <li>Einstein Mokua - Founder</li>
        <li>David Gitonga - Board Member</li>
        <li>Polycarp Kesa - Board Member</li>
        <li>Oscar Kipkorir - Board Member</li>
      </ul>
    </AboutContainer>
  );
};

export default About;

import React from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const NewsItem = styled.article`
  margin-bottom: 2rem;
`;

const News = () => {
  return (
    <NewsContainer>
      <h1>News and Updates</h1>
      <NewsItem>
        <h2>Annual General Meeting Announcement</h2>
        <p>Date: August 15, 2024</p>
        <p>Our Annual General Meeting will be held next month. All members are encouraged to attend and participate in important discussions about our SACCO's future.</p>
      </NewsItem>
      <NewsItem>
        <h2>New Loan Product Launch</h2>
        <p>Date: July 1, 2024</p>
        <p>We're excited to announce the launch of our new educational loan product. Members can now apply for loans specifically designed to support their educational pursuits.</p>
      </NewsItem>
    </NewsContainer>
  );
};

export default News;

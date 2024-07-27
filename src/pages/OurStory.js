import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the story
const StoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Playfair Display', serif;
  line-height: 1.6;
  color: #333;
`;

// Title styling
const Title = styled.h1`
  font-size: 2.5rem;
  color: #0056b3;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

// Paragraph styling
const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-indent: 1.5em;
  animation: ${fadeIn} 1s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay}ms;
`;

// Highlight styling
const Highlight = styled.span`
  color: #0056b3;
  font-weight: bold;
`;

// The OurStory component
const OurStory = () => {
  const paragraphs = [
    `Kufanyana Mbaya Sacco Limited, a testament to collaboration and shared vision, was founded on December 19, 2022, by <span class="highlight">Einstein Mokua</span>. The concept was born from a desire to create a financial support system among friends and quickly gained momentum. Einstein shared his vision with his former schoolmates, <span class="highlight">Polycarp Kesa</span> and <span class="highlight">David Gitonga</span>, who embraced the idea wholeheartedly. Together, they laid the foundation of the sacco, becoming its inaugural board members.`,
    "In its nascent stages, Kufanyana Mbaya Sacco operated on a simple yet effective model: a merry-go-round system. Each member contributed Ksh 1,000 per month, a sum that rotated among the participants, providing a small but vital financial boost each month. This model fostered a strong sense of community and mutual support, crucial for the sacco's early growth.",
    `As the sacco gained traction, it attracted more interest. Three months after its inception, <span class="highlight">Oscar Kipkorir</span> joined the group, completing the board's lineup. His inclusion marked a significant milestone, bringing new perspectives and ideas to the table. With Oscar's entry, the sacco began to re-evaluate and refine its policies to better serve its growing membership.`,
    "Towards the end of 2022, Kufanyana Mbaya Sacco underwent a pivotal transformation. The board decided to shift away from the merry-go-round model, recognizing the need for a more sustainable and scalable approach. The new policy required members to contribute at least Ksh 1,000 monthly without the cyclical distribution of funds. This change laid the groundwork for more structured financial activities and long-term planning.",
    "A significant development during this period was the introduction of loan facilities. The sacco began offering loans to its members, with an interest rate set at 20% per month. This initiative was designed to provide members with access to capital for various needs, from business ventures to personal expenses. The interest generated from these loans was distributed equally among the members, ensuring that everyone benefited from the sacco's financial activities.",
    "Kufanyana Mbaya Sacco's journey from a small group of friends to a structured financial institution reflects the power of unity and shared goals. The sacco continues to grow, guided by its founding principles of mutual support and financial empowerment. As it evolves, it remains committed to providing its members with opportunities for financial growth and stability.",
    "This brief history is just the beginning. Kufanyana Mbaya Sacco looks forward to expanding its services, welcoming new members, and exploring innovative ways to support its community. The sacco's story is a testament to the strength of collective effort and the impact of community-driven initiatives."
  ];

  return (
    <StoryContainer>
      <Title>The Story of Kufanyana Mbaya Sacco Limited</Title>
      {paragraphs.map((paragraph, index) => (
        <Paragraph 
          key={index} 
          delay={300 * (index + 1)} 
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </StoryContainer>
  );
};

export default OurStory;

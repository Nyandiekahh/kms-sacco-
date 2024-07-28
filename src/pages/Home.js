// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import einsteinPhoto from '../assets/images/person_2.jpg';
import oscarPhoto from '../assets/images/person_4.jpg';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial, sans-serif';
  color: #333;
  position: relative; // Needed for positioning the background letters
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px; // Adjust height as needed
  text-align: center;
  font-size: 100px; // Adjust size as needed
  font-weight: bold;
  color: rgba(0, 0, 0, 0.1); // Light gray, adjust opacity as needed
  z-index: -1; // Ensure it stays behind other content
`;

const Hero = styled.div`
  background-color: #e0f7fa;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 10px;
`;

const HeroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CallToAction = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 0.8rem 2rem;
  background-color: #00796b;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #00796b;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 2rem auto;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const MemberCard = styled.div`
  max-width: 200px;
  text-align: center;
`;

const MemberImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

const MemberName = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

const TestimonialCard = styled.div`
  max-width: 400px;
  margin: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const TestimonialAuthor = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 1rem;
  font-style: italic;
`;

const Contact = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundText>KMS</BackgroundText>
      <Hero>
        <HeroText>
          <h1>Welcome to Kufanyana Mbaya Sacco</h1>
          <p>Invest in Your Future, Invest in Your Community: Discover the Difference.</p>
          <CallToAction>
            <Button to="/join-us">Join Us Now</Button>
            <Button to="/apply-loan">Apply for a Loan</Button>
            <Button to="#milestones">Learn More</Button>
            <Button to="/login">Login</Button>
          </CallToAction>
        </HeroText>
      </Hero>

      <Section id="milestones">
        <Title>Key Milestones</Title>
        <Text>Explore our journey and significant milestones that have shaped Kufanyana Mbaya Sacco into what it is today.</Text>
        <Text>Founded in December 2022, Kufanyana Mbaya Sacco has introduced loan services, expanded membership, and continually adapted to meet the needs of our community.</Text>
      </Section>

      <Section>
        <Title>Meet Our Board Members</Title>
        <ImageGallery>
          <MemberCard>
            <MemberImage src={einsteinPhoto} alt="Einstein Mokua" />
            <MemberName>Einstein Mokua</MemberName>
            <Text>Founder & Chairman</Text>
          </MemberCard>
          <MemberCard>
            <MemberImage src={oscarPhoto} alt="Oscar Kipkorir" />
            <MemberName>Oscar Kipkorir</MemberName>
            <Text>Board Member</Text>
          </MemberCard>
        </ImageGallery>
      </Section>

      <Section>
        <Title>What People Say</Title>
        <ImageGallery>
          <TestimonialCard>
            <TestimonialText>
              “Every contribution at our SACCO plants the seeds for a flourishing future. We believe in nurturing these seeds with trust and collaboration, ensuring growth for our members and their families across generations.”
            </TestimonialText>
            <TestimonialAuthor>— David Gitonga, Board Member</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              “Together, we build not just wealth, but a legacy of prosperity for every member of our community. Here, every deposit is a step towards collective financial security and personal dreams realized.”
            </TestimonialText>
            <TestimonialAuthor>— Einstein Mokua, Founder KMS</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              “Empowerment through unity—our collective strength fuels individual success. At our SACCO, we transform individual contributions into powerful solutions that uplift the entire community, proving that together, we can achieve the extraordinary.”
            </TestimonialText>
            <TestimonialAuthor>— Polycarp Kesa, Board Member</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              “By investing in each other, we invest in a shared vision of prosperity. Our SACCO is more than a financial institution; it is a partnership where every member’s growth is a testament to the power of community-supported financial empowerment.”
            </TestimonialText>
            <TestimonialAuthor>— Oscar Kipkorir, Board Member</TestimonialAuthor>
          </TestimonialCard>
        </ImageGallery>
      </Section>

      <Section>
        <Title>Upcoming Events & Activities</Title>
        <Text>Don't miss our Annual General Meeting. Check the calendar for more events.</Text>
      </Section>

      <Contact>
        <Title>Contact Us</Title>
        <Text>Phone: +254 796 611 599</Text>
        <Text>Email: kufanyambayasacco@gmail.com</Text>
        <Text>Address: 123 Orion Suite, Juja, Kenya</Text>
      </Contact>
    </HomeContainer>
  );
};

export default Home;

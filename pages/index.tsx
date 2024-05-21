import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Logo from "../components/Logo";
import LinkCard from "../components/LinkCard";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #1e1e1e, #3a3a3a);
  color: #fff;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  animation: ${fadeIn} 2s ease-out;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  animation: ${fadeIn} 2.5s ease-out;
`;

const HeroButton = styled.a`
  padding: 10px 20px;
  background-color: #ff4081;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;
  animation: ${fadeIn} 3s ease-out;

  &:hover {
    background-color: #e91e63;
  }
`;

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 24px;
  background: #f0f0f0;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export default function Home() {
  return (
    <PageContainer>
      <HeroSection>
        <Logo />
        <HeroHeading>Welcome to Shark Head Studios</HeroHeading>
        <HeroDescription>Creating cutting-edge games with a graffiti twist.</HeroDescription>
        <HeroButton href="#games">Explore Our Games</HeroButton>
      </HeroSection>

      <Section id="games">
        <LinkCard
          title={"Test Subject (2013)"}
          description={"Help Beaker escape the Mad Scientist's experiments!"}
          images={[
            { src: "/images/beaker.webp", alt: "Image of Beaker", maxWidth: 500, maxHeight: 300 },
            { src: "/images/maze.webp", alt: "Image of a Maze", maxWidth: 500, maxHeight: 300 },
            { src: "/images/scientist.webp", alt: "Image of a Mad Scientist", maxWidth: 500, maxHeight: 300 }
          ]}
          redirectTo={"about"}
        />
      </Section>
    </PageContainer>
  );
}

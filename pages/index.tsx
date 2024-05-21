import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from "../components/Logo";
import AnimatedSection from "../components/AnimatedSection";
import LinkCard from "../components/LinkCard";

gsap.registerPlugin(ScrollTrigger);

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
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const HeroButton = styled.a`
  padding: 10px 20px;
  background-color: #ff4081;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;

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

const Box = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: #ff4081;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  flex: 1;
  display: flex;
`;

const Home: React.FC = () => {
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroDescriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.to('body', {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
    });

    gsap.fromTo(
      'main',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: 'main',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      heroHeadingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power1.out', delay: 0.5 }
    );

    gsap.fromTo(
      heroDescriptionRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power1.out', delay: 1 }
    );
  }, []);

  return (
    <PageContainer>
      <HeroSection>
        <Logo />
        <HeroHeading ref={heroHeadingRef}>Welcome to Shark Head Studios</HeroHeading>
        <HeroDescription ref={heroDescriptionRef}>
          Creating cutting-edge games with a graffiti twist.
        </HeroDescription>
        <HeroButton href="#games">Explore Our Games</HeroButton>
      </HeroSection>

      <AnimatedSection>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>
          <LinkCard
            title={"Test Subject (2013)"}
            description={"Help Beaker escape the Mad Scientist's experiments!"}
            additionalInfo={"Additional information about the game, including features, updates, and developer notes."}
            images={[
              { src: "/images/beaker.webp", alt: "Image of Beaker", maxWidth: 500, maxHeight: 300 },
              { src: "/images/maze.webp", alt: "Image of a Maze", maxWidth: 500, maxHeight: 300 },
              { src: "/images/scientist.webp", alt: "Image of a Mad Scientist", maxWidth: 500, maxHeight: 300 }
            ]}
            redirectTo={"about"}
          />
        </Box>
        <Box>Box 4</Box>
      </AnimatedSection>

      <AnimatedSection>
        <Box>Box A</Box>
        <Box>Box B</Box>
        <Box>Box C</Box>
        <Box>Box D</Box>
      </AnimatedSection>
    </PageContainer>
  );
};

export default Home;

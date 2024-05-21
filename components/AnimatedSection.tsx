// components/AnimatedSection.tsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: #ff4081;
`;

const AnimatedSection: React.FC = () => {
  const boxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxesRef.current?.children) {
      const boxes = Array.from(boxesRef.current.children);
      gsap.fromTo(
        boxes,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: boxesRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <Section>
      <div ref={boxesRef}>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </Section>
  );
};

export default AnimatedSection;

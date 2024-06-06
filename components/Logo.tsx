import React, { useRef, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import Image from "next/image";
import { gsap } from "gsap";

/**
 * Keyframe animation for fading in and moving up from below.
 */
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

/**
 * Styled component for the logo container.
 */
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: ${fadeIn} 2s ease-out;
  will-change: opacity, transform;
`;

const FloatingImage = styled(Image)``;

const Logo: React.FC = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(logoContainerRef.current, {
      opacity: 0,
      y: -20,
      duration: 2,
      ease: "power2.out",
    });

    tl.to(imageRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <LogoContainer ref={logoContainerRef}>
      <FloatingImage 
        src="/images/logo.png" 
        alt="Logo" 
        ref={imageRef}
        width={500} 
        height={300} 
        priority 
      />
    </LogoContainer>
  );
};

export default Logo;

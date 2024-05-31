import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

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
 * Keyframe animation for floating effect.
 */
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
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

/**
 * Styled component for the floating image.
 */
const FloatingImage = styled(Image)`
  width: 200px;
  height: auto;
  animation: ${float} 3s ease-in-out infinite;
  will-change: transform;
`;

/**
 * Logo component.
 * Displays the Shark Head Studios logo with floating and fade-in animations.
 * 
 * @component
 * @example
 * return (
 *   <Logo />
 * )
 */
const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <FloatingImage src="/images/logo.png" alt="Shark Head Studios Logo" width={500} height={300} priority />
    </LogoContainer>
  );
};

export default Logo;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

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

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: ${fadeIn} 2s ease-out;

  img {
    width: 200px;
    height: auto;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Image src="/logo.png" alt="Shark Head Studios Logo" width={200} height={200} priority />
    </LogoContainer>
  );
};

export default Logo;

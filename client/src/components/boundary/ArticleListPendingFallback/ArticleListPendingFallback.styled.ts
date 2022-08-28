import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  from {
    opacity: 0.95;
  }
  50%{
    opacity: 1;
  }
  to{
    opacity: 0.95;
  }
`;

export const ArticleSkeleton = styled.div`
  height: 7rem;

  margin: 1.5rem 1rem 0.5rem;

  animation: ${skeletonAnimation} 1s ease-in-out infinite;
  background-color: ${({ theme }) => theme.color.grey[200]};
`;

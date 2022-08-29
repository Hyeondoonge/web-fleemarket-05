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
  display: flex;
  height: 8rem;
  margin: 1.5rem 1rem 0.5rem;
  gap: 1rem;
`;

export const ImageSkeleton = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.grey[200]};
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
  background-color: ${({ theme }) => theme.color.grey[200]};
`;

export const TitleSkeleton = styled.div`
  width: 8rem;
  height: 7rem;

  border-radius: 5px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.grey[200]};
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
  background-color: ${({ theme }) => theme.color.grey[200]};
`;

export const ContentSkeleton = styled.div`
  height: 15rem;

  border-radius: 5px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.grey[200]};
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
  background-color: ${({ theme }) => theme.color.grey[200]};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

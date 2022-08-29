import React from 'react';
import styled from 'styled-components';
import { FADE_IN_OUT } from 'styles/keyframes';
import { getRandomValue } from 'utils/random.util';

export default function ArticleCategoryPendingFallback() {
  return (
    <ArticleCategoryPendingWrapper>
      {new Array(7).fill(undefined).map((_, i) => (
        <ArticleCategoryPendingItem key={i} style={{ width: `${getRandomValue(15, 25)}%` }} />
      ))}
    </ArticleCategoryPendingWrapper>
  );
}

const ArticleCategoryPendingWrapper = styled.ul`
  display: flex;
  column-gap: 0.5rem;
  margin: 0rem 0 1rem;
  padding: 0 1rem;
`;

const ArticleCategoryPendingItem = styled.li`
  flex-shrink: 0;
  height: 2.125rem;
  border-radius: 9999px;
  animation: ${FADE_IN_OUT} 1s infinite ease-in-out;
  background-color: ${({ theme }) => theme.color.grey[200]};
`;

import styled from 'styled-components';

export const ArticleListLayout = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 7.5rem);
`;

export const ArticleList = styled.ul`
  padding: 0 1rem;
`;

export const DisplayTextWrapper = styled.div`
  left: 0;
  right: 0;
  text-align: center;
  margin-top: 5rem;
  color: ${({ theme }) => theme.color.grey[700]};
`;

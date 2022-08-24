import styled from 'styled-components';

export const RegionSearchLayout = styled.div`
  padding: 1.125rem 1rem;
  background-color: ${({ theme }) => theme.color.bg.front};
`;

export const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  padding: 0.675rem 0.625rem;

  &:focus {
    outline: none;
  }
`;

export const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
`;

export const ResultItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey[300]};
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  flex: 1;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.color.grey[500]};
  }

  :focus-within {
    border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  }
  border-bottom: 1px solid ${({ theme }) => theme.color.grey[300]};
`;

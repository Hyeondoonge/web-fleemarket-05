import styled from 'styled-components';

export const RegionSelectLayout = styled.div`
  padding: 1.125rem 1.25rem;
  padding-top: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.bg.front};
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.375rem;
`;

export const DisplayTextWrapper = styled.div`
  margin: 0.5rem 0rem;
  text-align: center;
`;

export const DisplayText = styled.p`
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const SelectedRegionWrapper = styled.div`
  margin-top: 2.125rem;
  display: flex;
  gap: 1rem;
`;

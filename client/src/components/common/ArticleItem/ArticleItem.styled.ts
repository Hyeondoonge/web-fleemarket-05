import styled from 'styled-components';

export const ArticleItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey[200]};

  :last-child {
    border-bottom-width: 0;
  }

  & > a {
    position: relative;
    display: flex;
    gap: 1rem;
    height: 11rem;
    padding: 1.5rem 0;
    cursor: pointer;
  }
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.grey[200]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding-right: 1rem;
`;

export const MoreInfo = styled.div`
  font-size: 0.825rem;
  color: ${({ theme }) => theme.color.grey[400]};
`;
export const Price = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const Like = styled.div`
  position: absolute;
  right: 0;
  bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
  align-items: center;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.grey[500]};
`;

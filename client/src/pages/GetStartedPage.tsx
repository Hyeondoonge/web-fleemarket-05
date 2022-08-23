import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';
import GetStartedLayout from 'layouts/GetStartedLayout';
import { PAGE_URL } from 'constants/url.constant';

export default function GetStartedPage() {
  const navigate = useNavigate();

  return (
    <GetStartedLayout>
      <Button size="xl" fullWidth onClick={() => navigate(PAGE_URL.SING_UP)}>
        시작하기
      </Button>
      <SignInParagraph>
        이미 계정이 있나요?
        <Link to={PAGE_URL.SIGN_IN}>로그인</Link>
      </SignInParagraph>
    </GetStartedLayout>
  );
}

export const SignInParagraph = styled.p`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.color.grey[600]};

  & > a {
    margin-left: 0.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;

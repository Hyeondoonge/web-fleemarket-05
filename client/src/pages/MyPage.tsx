import React from 'react';
import styled from 'styled-components';
import { useRecoilRefresher_UNSTABLE } from 'recoil';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import useMutation from 'hooks/useMutation';
import BottomNavigation from 'components/BottomNavigation/BottomNavigation';
import { requestSignOut } from 'api/auth';
import { currentUserState } from 'recoil/atoms/user.atom';

export default function MyPage() {
  const refresh = useRecoilRefresher_UNSTABLE(currentUserState);
  const { mutate, isLoading } = useMutation(requestSignOut, {
    onSuccess: () => {
      refresh();
    },
  });

  const onLogout = async () => {
    await mutate();
  };

  return (
    <>
      <Header>
        <Header.Background />
        <Header.Title>마이페이지</Header.Title>
      </Header>
      <BottomNavigation />
      <Wrapper>
        <Button size="xl" onClick={onLogout} isLoading={isLoading}>
          로그아웃
        </Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

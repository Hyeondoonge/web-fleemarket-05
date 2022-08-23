import Icon from 'components/common/Icon';
import React from 'react';
import * as Styled from './GetStartedLayout.styled';

interface GetStartedLayoutProps {
  children?: React.ReactNode;
}

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <Styled.MainWrapper>
      <Styled.WelcomeWrapper>
        <Icon icon="LogoIcon" size={144} />
        <h1>당신 근처의 무우마켓</h1>
        <p>
          중고 거래부터 동네 정보까지,
          <br />
          지금 내 동네를 선택하고 시작해보세요!
        </p>
      </Styled.WelcomeWrapper>
      {children}
    </Styled.MainWrapper>
  );
}

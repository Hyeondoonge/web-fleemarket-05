import React from 'react';
import Header from 'components/common/Header';
import Icon from 'components/common/Icon';
import * as Styled from './RegionSearchLayout.styled';
import { useModalContext } from 'hooks/useModalContext';

export default function RegionSearchLayout() {
  const { modalState, setModalState } = useModalContext();

  return (
    <>
      <Header>
        <Header.IconButton
          icon="ChevronLeftIcon"
          onClick={() => setModalState({ ...modalState, regionSearch: false })}
        />
        <Styled.InputWrapper>
          <Icon icon="SearchIcon" size={24} />
          <Styled.SearchInput placeholder="동명(읍, 면, 동)으로 검색(ex. 서초동)" />
        </Styled.InputWrapper>
      </Header>
      <Styled.RegionSearchLayout>
        <Styled.ResultList>
          <Styled.ResultItem>대구광역시 달서구 용산동</Styled.ResultItem>
          <Styled.ResultItem>대구광역시 달서구 감삼동</Styled.ResultItem>
          <Styled.ResultItem>대구광역시 달서구 죽전동</Styled.ResultItem>
        </Styled.ResultList>
      </Styled.RegionSearchLayout>
    </>
  );
}

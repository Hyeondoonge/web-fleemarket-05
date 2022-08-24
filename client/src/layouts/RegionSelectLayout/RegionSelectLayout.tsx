import React from 'react';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import SideModal from 'components/common/SideModal';
import RegionSearchPage from 'pages/RegionSearchPage';
import * as Styled from './RegionSelectLayout.styled';
import { useModalContext } from 'hooks/useModalContext';

export default function RegionSelectLayout() {
  const { modalState, setModalState } = useModalContext();

  return (
    <>
      <Header>
        <Header.Title>내 동네 선택하기</Header.Title>
        <Header.IconButton
          icon="ChevronLeftIcon"
          onClick={() => setModalState({ ...modalState, regionSelect: false })}
        />
      </Header>
      <Styled.RegionSelectLayout>
        <Styled.Title>동네 선택</Styled.Title>
        <Styled.DisplayTextWrapper>
          <Styled.DisplayText>지역은 최소 1개이상 최대 2개까지 설정 가능해요.</Styled.DisplayText>
        </Styled.DisplayTextWrapper>
        <Styled.SelectedRegionWrapper>
          <Button fullWidth rounded>
            잠실동
          </Button>
          <Button
            fullWidth
            onClick={() => {
              setModalState({ ...modalState, regionSearch: true });
            }}
          >
            +
          </Button>
          {modalState.regionSearch && (
            <SideModal>
              <RegionSearchPage />
            </SideModal>
          )}
        </Styled.SelectedRegionWrapper>
      </Styled.RegionSelectLayout>
    </>
  );
}

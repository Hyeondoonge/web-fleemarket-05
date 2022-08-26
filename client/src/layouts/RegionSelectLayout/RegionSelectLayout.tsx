import React from 'react';
import Header from 'components/common/Header';
import SideModal from 'components/common/SideModal';
import RegionSearchPage from 'pages/RegionSearchPage';
import * as Styled from './RegionSelectLayout.styled';
import { useModalContext } from 'hooks/useModalContext';
import { Region } from 'types/Region';
import Icon from 'components/common/Icon';

interface RegionSelectLayoutProps {
  selectedRegions: Region[];
  addUserRegion: (region: Region) => void;
  deleteUserRegion: (id: number) => void;
}

export default function RegionSelectLayout({
  selectedRegions,
  addUserRegion,
  deleteUserRegion,
}: RegionSelectLayoutProps) {
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
        <Styled.RegionWrapper>
          {selectedRegions.map(({ id, name }) => (
            <Styled.Region key={id}>
              {name.split(' ')[2]}
              <button onClick={() => deleteUserRegion(id)}>
                <Icon icon="CloseCircleOutlineIcon" size={20} />
              </button>
            </Styled.Region>
          ))}
          {selectedRegions.length < 2 && (
            <Styled.AddButton
              onClick={() => {
                setModalState({ ...modalState, regionSearch: true });
              }}
            >
              <button>
                <Icon icon="AddCircleIcon" size={20} />
              </button>
            </Styled.AddButton>
          )}
        </Styled.RegionWrapper>

        {modalState.regionSearch && (
          <SideModal>
            <RegionSearchPage addUserRegion={addUserRegion} />
          </SideModal>
        )}
      </Styled.RegionSelectLayout>
    </>
  );
}

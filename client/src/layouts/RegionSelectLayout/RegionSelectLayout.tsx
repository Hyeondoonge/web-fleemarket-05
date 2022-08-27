import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Header from 'components/common/Header';
import SideModal from 'components/common/SideModal';
import RegionSearchPage from 'pages/RegionSearchPage';
import * as Styled from './RegionSelectLayout.styled';
import { useModalContext } from 'hooks/useModalContext';
import Icon from 'components/common/Icon';
import { userRegion } from 'recoil/atoms/region.atom';
import { currentUserState } from 'recoil/atoms/user.atom';
import { setSelectedRegionLocalStorage } from 'utils/storage.util';
import { useRegionValue } from 'hooks/uesRegionValue';

export default function RegionSelectLayout() {
  const { deleteUserRegion } = useRegionValue();
  const [userState, setUserState] = useRecoilState(currentUserState);
  const { regions: userRegions, selectedRegion } = useRecoilValue(userRegion);
  const { modalState, setModalState } = useModalContext();

  const onClickRegion = (id: number) => {
    setSelectedRegionLocalStorage(id);
    setUserState({ ...userState });
  };

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
          {userRegions.map(({ id, name }) => (
            <Styled.Region
              key={id}
              onClick={() => onClickRegion(id)}
              selected={id === selectedRegion}
            >
              {name.split(' ')[2]}
              <button onClick={() => deleteUserRegion(id)}>
                <Icon icon="CloseCircleOutlineIcon" size={20} />
              </button>
            </Styled.Region>
          ))}
          {userRegions.length < 2 && (
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
            <RegionSearchPage backward />
          </SideModal>
        )}
      </Styled.RegionSelectLayout>
    </>
  );
}

import React from 'react';
import ArticleList from 'components/ArticleList';
import Dropdown from 'components/common/Dropdown';
import Header from 'components/common/Header';
import Icon from 'components/common/Icon';
import SideModal from 'components/common/SideModal';
import * as Styled from './HomePageLayout.styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userRegion } from 'recoil/atoms/region.atom';
import { shortRegion } from 'utils/region.util';
import { useModalContext } from 'hooks/useModalContext';
import { setSelectedRegionLocalStorage } from 'utils/storage.util';
import { currentUserState } from 'recoil/atoms/user.atom';
import CategorySelectPage from 'pages/CategorySelectPage';
import RegionSelectpage from 'pages/RegionSelectPage';

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  const { modalState, setModalState } = useModalContext();
  const [currentUser, setCurrentUesr] = useRecoilState(currentUserState);
  const { regions, selectedRegion } = useRecoilValue(userRegion);

  const region = shortRegion(regions.find(({ id }) => id === selectedRegion)?.name ?? '');
  const secondaryRegion = selectedRegion
    ? regions.filter(({ id }) => selectedRegion !== id)[0]
    : null;

  const changeSelectedRegion = (id: number) => {
    setSelectedRegionLocalStorage(id);
    setCurrentUesr({ ...currentUser });
  };

  return (
    <>
      <Header>
        <Header.Inner>
          <Dropdown>
            <Styled.DropdownButton>
              <Styled.SelectedRegion>{region}</Styled.SelectedRegion>
              <Icon icon="ChevronDownIcon" size={24} />
            </Styled.DropdownButton>
            <Styled.DropdownMenus>
              {secondaryRegion && (
                <Styled.DropdownMenu onClick={() => changeSelectedRegion(secondaryRegion.id)}>
                  {shortRegion(secondaryRegion?.name)}
                </Styled.DropdownMenu>
              )}
              <Styled.DropdownMenu
                onClick={() => {
                  setModalState({ ...modalState, regionSelect: true });
                }}
              >
                내 동네 설정하기
              </Styled.DropdownMenu>
            </Styled.DropdownMenus>
          </Dropdown>
        </Header.Inner>
        <Header.Inner>
          <button
            onClick={() => {
              setModalState({ ...modalState, categorySelect: true });
            }}
          >
            <Icon icon="MenuIcon" size={24} />
          </button>
        </Header.Inner>
      </Header>
      <ArticleList />
      {children}
      {modalState.regionSelect && (
        <SideModal>
          <RegionSelectpage />
        </SideModal>
      )}
      {modalState.categorySelect && (
        <SideModal>
          <CategorySelectPage />
        </SideModal>
      )}
    </>
  );
}

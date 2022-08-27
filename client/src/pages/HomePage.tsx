import React from 'react';
import BottomNavigation from 'components/BottomNavigation/BottomNavigation';
import SideModal from 'components/common/SideModal';
import RegionSelectpage from './RegionSelectPage';
import CategorySelectPage from './CategorySelectPage';
import { useModalContext } from 'hooks/useModalContext';

export default function HomePage() {
  const { modalState, setModalState } = useModalContext();

  return (
    <div>
      <BottomNavigation />
      <button onClick={() => setModalState({ ...modalState, categorySelect: true })}>
        카테고리 선택창 오픈
      </button>
      {modalState.categorySelect && (
        <SideModal>
          <CategorySelectPage />
        </SideModal>
      )}
      |
      <button onClick={() => setModalState({ ...modalState, regionSelect: true })}>
        동네 선택창 오픈
      </button>
      {modalState.regionSelect && (
        <SideModal>
          <RegionSelectpage />
        </SideModal>
      )}
    </div>
  );
}

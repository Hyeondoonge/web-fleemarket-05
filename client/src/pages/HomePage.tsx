import React, { createContext, useState } from 'react';
import BottomNavigation from 'components/BottomNavigation/BottomNavigation';
import SideModal from 'components/common/SideModal';
import RegionSelectpage from './RegionSelectPage';
import CategorySelectPage from './CategorySelectPage';

interface ModalStateType {
  regionSelect: boolean;
  regionSearch: boolean;
  categorySelect: boolean;
}

const modalInitialState: ModalStateType = {
  regionSelect: false,
  regionSearch: false,
  categorySelect: false,
};

interface ModalContextType {
  modalState: ModalStateType | null;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>> | null;
}

export const ModalContext = createContext<ModalContextType>({
  modalState: null,
  setModalState: null,
});

export default function HomePage() {
  const [modalState, setModalState] = useState(modalInitialState);

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
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
    </ModalContext.Provider>
  );
}

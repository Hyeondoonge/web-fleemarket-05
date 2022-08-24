import React from 'react';
import Header from 'components/common/Header';
import * as Styled from './CategorySelectLayout.styled';
import { useModalContext } from 'hooks/useModalContext';

export default function CategorySelectLayout() {
  const { modalState, setModalState } = useModalContext();

  return (
    <>
      <Header>
        <Header.Title>카테고리</Header.Title>
        <Header.IconButton
          icon="ChevronLeftIcon"
          onClick={() => setModalState({ ...modalState, categorySelect: false })}
        />
      </Header>
      <Styled.CategorySelectLayout>
        <Styled.CategoryList>
          <Styled.CategoryItem>
            <img src="https://via.placeholder.com/200" />
            디지털기기
          </Styled.CategoryItem>
          <Styled.CategoryItem>
            <img src="https://via.placeholder.com/200" />
            디지털기기
          </Styled.CategoryItem>
          <Styled.CategoryItem>
            <img src="https://via.placeholder.com/200" />
            디지털기기
          </Styled.CategoryItem>
          <Styled.CategoryItem>
            <img src="https://via.placeholder.com/200" />
            디지털기기
          </Styled.CategoryItem>
          <Styled.CategoryItem>
            <img src="https://via.placeholder.com/200" />
            디지털기기
          </Styled.CategoryItem>
        </Styled.CategoryList>
      </Styled.CategorySelectLayout>
    </>
  );
}

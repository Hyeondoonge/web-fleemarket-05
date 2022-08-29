import React from 'react';
import Header from 'components/common/Header';
import ErrorPage from 'pages/ErrorPage';
import LoadingIndicator from 'components/common/LoadingIndiactor/LoadingIndicator';
import * as Styled from './CategorySelectLayout.styled';
import CategoryList from 'components/CategoryList';
import { useModalContext } from 'hooks/useModalContext';
import { useCategoryValue } from 'hooks/useCategoryValue';

export default function CategorySelectLayout() {
  const { modalState, setModalState } = useModalContext();
  const { isLoading, isError, contents } = useCategoryValue();

  if (isError) return <ErrorPage />;

  const categories = contents;

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
        {isLoading ? <LoadingIndicator /> : <CategoryList categories={categories} />}
      </Styled.CategorySelectLayout>
    </>
  );
}

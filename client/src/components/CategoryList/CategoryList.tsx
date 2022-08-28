import React from 'react';
import { useModalContext } from 'hooks/useModalContext';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from 'recoil/atoms/categories.atom';
import { Category } from 'types/Category';
import * as Styled from './CategoryList.styled';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  const { modalState, setModalState } = useModalContext();
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);

  return (
    <Styled.CategoryList>
      <Styled.CategoryItem
        $selected={selectedCategory === null}
        onClick={() => {
          setSelectedCategory(null);
          setModalState({ ...modalState, categorySelect: false });
        }}
      >
        <img src="https://web-fleemarket-05.s3.ap-northeast-2.amazonaws.com/images/category/star.png" />
        전체
      </Styled.CategoryItem>
      {categories.map(({ id, name, imgUrl }) => (
        <Styled.CategoryItem
          key={id}
          $selected={id === selectedCategory?.id}
          onClick={() => {
            setSelectedCategory({ id, name, imgUrl });
            setModalState({ ...modalState, categorySelect: false });
          }}
        >
          <img src={imgUrl} />
          {name}
        </Styled.CategoryItem>
      ))}
    </Styled.CategoryList>
  );
}

import React from 'react';
import { Category } from 'types/Category';
import * as Styled from './CategoryList.styled';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <Styled.CategoryList>
      {categories.map(({ id, name }) => (
        <Styled.CategoryItem key={id}>
          <img src="https://via.placeholder.com/200" />
          {name}
        </Styled.CategoryItem>
      ))}
    </Styled.CategoryList>
  );
}

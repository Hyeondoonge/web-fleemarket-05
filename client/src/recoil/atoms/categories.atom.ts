import { atom } from 'recoil';
import { Category } from 'types/Category';

export const categoriesState = atom<Category[]>({
  key: 'categoriesState',
  default: [],
});

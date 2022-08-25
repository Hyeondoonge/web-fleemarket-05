import { useRecoilValueLoadable } from 'recoil';
import { categoriesValue } from 'recoil/selectors/categories.selector';
import { Category } from 'types/Category';

export function useCategoryValue() {
  const { state, contents } = useRecoilValueLoadable<Category[]>(categoriesValue);

  return {
    isLoading: state === 'loading' ? true : false,
    isError: state === 'hasValue' && 'errorCode' in contents ? true : false,
    contents: state === 'hasValue' ? contents : [],
  };
}

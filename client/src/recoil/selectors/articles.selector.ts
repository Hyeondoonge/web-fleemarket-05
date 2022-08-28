import { GetArticlesParam } from 'types/param';
import { selectedCategoryState } from 'recoil/atoms/categories.atom';
import { requestGetArticles } from 'apis/articles';
import { selector, atom } from 'recoil';
import { Article } from 'types/article';
import { userRegion } from 'recoil/atoms/region.atom';

export const articlesState = atom<{ articles: Article[]; totalCount: number }>({
  key: 'articlesState',
  default: selector<{ articles: Article[]; totalCount: number }>({
    key: 'newArticlesValue',
    get: async ({ get }) => {
      const page = get(articlesPageState);
      const category = get(selectedCategoryState);
      const regionId = get(userRegion).selectedRegion;

      if (!regionId) return;

      const param: GetArticlesParam = { regionId, page, per: 5 };
      if (category !== null) param.categoryId = category.id;
      const data = await requestGetArticles(param);

      return data;
    },
  }),
});

export const articlesPageState = atom<number>({
  key: 'articlesPageState',
  default: 1,
});

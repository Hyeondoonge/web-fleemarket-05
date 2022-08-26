import { getRegionsByKeword } from 'apis/region';
import { atom, selector } from 'recoil';
import { Region } from 'types/Region';

export const regionResultsState = atom<Region[]>({
  key: 'regionResultsState',
  default: selector({
    key: 'regionDetaultState',
    get: async ({ get }) => {
      const data = await getRegionsByKeword({
        page: get(regionResultsPageState),
        keyword: get(searchKeywordState),
        per: 20,
      });
      return data;
    },
  }),
});

export const regionResultsPageState = atom<number>({
  key: 'regionResultsPageState',
  default: 1,
});

export const searchKeywordState = atom<string>({
  key: 'searchKeywordState',
  default: '',
});

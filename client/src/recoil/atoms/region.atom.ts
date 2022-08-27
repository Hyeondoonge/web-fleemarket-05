import { getRegionsByKeword } from 'apis/region';
import { atom, selector } from 'recoil';
import { Region } from 'types/Region';
import { getSelectedRegionLocalStorage } from 'utils/storage.util';
import { currentUserState } from './user.atom';

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

export const userRegion = selector({
  key: 'userRegionValue',
  get: ({ get }) => {
    const { user } = get(currentUserState);
    if (!user || user.regions.length === 0) {
      return { regions: [], selectedRegion: null };
    }

    const { regions } = user;

    const selectedRegion = getSelectedRegionLocalStorage();
    const isValidRegion = regions.some(({ id }) => id === Number(selectedRegion));
    if (!isValidRegion) {
      return { regions: regions, selectedRegion: regions[0].id };
    }
    return { regions: regions, selectedRegion: Number(selectedRegion) };
  },
});

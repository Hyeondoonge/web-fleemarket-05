import React from 'react';
import RegionSearchLayout from 'layouts/RegionSearchLayout';
import { Region } from 'types/Region';
import { getRegionsByKeword } from 'apis/region';
import { useModalContext } from 'hooks/useModalContext';
import { useRecoilState, useRecoilStateLoadable } from 'recoil';
import {
  regionResultsPageState,
  regionResultsState,
  searchKeywordState,
} from 'recoil/atoms/regionsResults.atom';

interface RegionSearchPageProps {
  addUserRegion: (region: Region) => void;
}

export default function RegionSearchPage({ addUserRegion }: RegionSearchPageProps) {
  const { modalState, setModalState } = useModalContext();
  const [keyword, setKeyword] = useRecoilState(searchKeywordState);
  const [page, setPage] = useRecoilState(regionResultsPageState);

  const [{ state, contents: searchResult }, setState] = useRecoilStateLoadable(regionResultsState);

  const onChangeKeyword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPage(1);
    setKeyword(value);
    const data = await getRegionsByKeword({ page: 1, keyword: value, per: 20 });
    setState(data);
  };

  const onClickResult = async (e: React.MouseEvent<HTMLLIElement>) => {
    const { id: clickedId } = (e.target as HTMLElement).dataset;
    if (!clickedId) return;
    const region = searchResult.find(({ id }: { id: number }) => id === +clickedId);
    if (!region) return;
    await addUserRegion(region);
    setModalState({ ...modalState, regionSearch: false });
  };

  const onIntersect = async () => {
    const data = await getRegionsByKeword({ page: page + 1, keyword, per: 20 });
    setState([...searchResult, ...data]);
    setPage(page + 1);
  };

  if (state === 'loading') return <div>Loding</div>;
  if (state === 'hasError') {
    return <div>Something went wrong</div>;
  }
  return (
    <RegionSearchLayout
      regions={searchResult}
      onChangeKeyword={onChangeKeyword}
      onClickResult={onClickResult}
      onIntersect={onIntersect}
    />
  );
}

import React, { useEffect, useRef } from 'react';
import Header from 'components/common/Header';
import * as Styled from './RegionSearchLayout.styled';
import SearchInput from 'components/region/SearchInput';
import { useModalContext } from 'hooks/useModalContext';
import { Region } from 'types/Region';
import { useInfinityScroll } from 'hooks/useInfinityScroll';

interface RegionSearchLayout {
  regions: Region[];
  backward: boolean;
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickResult: (e: React.MouseEvent<HTMLLIElement>) => void;
  onIntersect: () => void;
}

export default function RegionSearchLayout({
  regions,
  backward,
  onChangeKeyword,
  onClickResult,
  onIntersect,
}: RegionSearchLayout) {
  const ref = useRef<HTMLDivElement>(null);

  const target = useRef<HTMLDivElement>(null);
  const { modalState, setModalState } = useModalContext();

  const { observe } = useInfinityScroll(onIntersect);

  useEffect(() => {
    if (!target.current) return;
    observe(target.current);
  }, [observe]);

  return (
    <>
      <Header>
        {backward && (
          <Header.IconButton
            icon="ChevronLeftIcon"
            onClick={() => setModalState({ ...modalState, regionSearch: false })}
          />
        )}
        <SearchInput
          onChangeKeyword={(e) => {
            onChangeKeyword(e);
            ref.current?.scrollTo({ top: 0 });
          }}
        />
      </Header>
      <Styled.RegionSearchLayout ref={ref}>
        {regions.length === 0 ? (
          <Styled.DisplayTextWrapper>
            <p>검색 결과가 없어요.</p>
            <p>동네 이름을 다시 확인해주세요!</p>
          </Styled.DisplayTextWrapper>
        ) : (
          <Styled.ResultList>
            {regions.map(({ id, name }) => (
              <Styled.ResultItem key={id} onClick={onClickResult} data-id={id}>
                {name}
              </Styled.ResultItem>
            ))}
          </Styled.ResultList>
        )}
        <div id="observer-target" style={{ height: '5rem' }} ref={target}></div>
      </Styled.RegionSearchLayout>
    </>
  );
}

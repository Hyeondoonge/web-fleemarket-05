import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { articlesPageState, articlesState } from 'recoil/selectors/articles.selector';
import * as Styled from './ArticleList.styled';
import ArticleItem from 'components/common/ArticleItem/ArticleItem';
import { useInfinityScroll } from 'hooks/useInfinityScroll';
import { requestGetArticles } from 'apis/articles';
import { selectedCategoryState } from 'recoil/atoms/categories.atom';
import { userRegion } from 'recoil/atoms/region.atom';
import { GetArticlesParam } from 'types/param';

export default function ArticleList() {
  const [{ articles, totalCount }, setArticles] = useRecoilState(articlesState);
  const [page, setPage] = useRecoilState(articlesPageState);
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const { selectedRegion } = useRecoilValue(userRegion);

  const { observe, unobserve } = useInfinityScroll(() => onIntersect());
  const target = useRef<HTMLDivElement>(null);

  const onIntersect = async () => {
    const regionId = selectedRegion;

    if (!regionId) return;

    const param: GetArticlesParam = { regionId, page: page + 1, per: 5 };

    if (selectedCategory !== null) param.categoryId = selectedCategory.id;

    const data = await requestGetArticles(param);
    setArticles({
      articles: [...articles, ...data.articles],
      totalCount: data.totalCount,
    });
    setPage(page + 1);
  };

  useEffect(() => {
    if (!target.current) return;
    observe(target.current);
  }, [observe]);

  useEffect(() => {
    if (totalCount === articles.length) {
      if (!target.current) return;
      unobserve(target.current);
    }
  }, [unobserve, articles, totalCount]);

  return (
    <Styled.ArticleListLayout>
      <Styled.ArticleList>
        {articles.map((article) => {
          return <ArticleItem key={article.id} article={article} />;
        })}
      </Styled.ArticleList>
      <div ref={target} style={{ height: '1rem' }}></div>
      {articles.length === 0 && (
        <Styled.DisplayTextWrapper>게시된 물건이 없어요 !</Styled.DisplayTextWrapper>
      )}
    </Styled.ArticleListLayout>
  );
}

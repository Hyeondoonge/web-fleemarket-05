import React, { useEffect } from 'react';
import Scrollable from 'components/common/Scrollable';
import * as Styled from './MyArticleListLayout.styled';
import Header from 'components/common/Header';
import ArticleItem from 'components/common/ArticleItem';
import { myArticleListQuery } from 'recoil/selectors/user.selector';
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from 'recoil';

interface MyArticlesLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function MyArticleListLayout({ title, children }: MyArticlesLayoutProps) {
  const myArticleList = useRecoilValue(myArticleListQuery);
  const refresh = useRecoilRefresher_UNSTABLE(myArticleListQuery);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <>
      <Header>
        <Header.Inner>
          <Styled.Title>{title}</Styled.Title>
        </Header.Inner>
      </Header>
      <Scrollable headerHeight="7rem">
        <Styled.MyArticlesLayout>
          <ul>
            {myArticleList.map((article) => {
              return <ArticleItem key={article.id} article={article} />;
            })}
            {myArticleList.length === 0 && (
              <Styled.DisplayTextWrapper>판매한 물건이 없어요 !</Styled.DisplayTextWrapper>
            )}
          </ul>
        </Styled.MyArticlesLayout>
      </Scrollable>
      {children}
    </>
  );
}

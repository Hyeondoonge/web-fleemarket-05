import React from 'react';
import * as Styled from './ArticleListPendingFallback.styled';

export default function ArticlePendingFallback() {
  return (
    <Styled.ArticleSkeleton>
      <Styled.ImageSkeleton />
      <Styled.Wrapper>
        <Styled.TitleSkeleton />
        <Styled.ContentSkeleton />
      </Styled.Wrapper>
    </Styled.ArticleSkeleton>
  );
}

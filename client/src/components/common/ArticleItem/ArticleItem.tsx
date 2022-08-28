import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from 'types/article';
import { elapsedTime } from 'utils/date.util';
import { shortRegion } from 'utils/region.util';
import Icon from '../Icon';
import * as Styled from './ArticleItem.styled';

export default function ArticleItem({
  article: { id, title, region, price, thumbnail, createdAt, likeCount },
}: {
  article: Article;
}) {
  return (
    <Styled.ArticleItem>
      <Link key={id} to={`/articles/${id}`}>
        <Styled.Thumbnail src={thumbnail} />
        <Styled.Content>
          <Styled.Title>{title}</Styled.Title>
          <Styled.MoreInfo>
            {shortRegion(region.name)} ∙ {elapsedTime(createdAt)}
          </Styled.MoreInfo>
          <Styled.Price>{price.toLocaleString()}원</Styled.Price>
          <Styled.Like>
            <Icon icon="HeartOutlineIcon" />
            {likeCount}
          </Styled.Like>
        </Styled.Content>
      </Link>
    </Styled.ArticleItem>
  );
}

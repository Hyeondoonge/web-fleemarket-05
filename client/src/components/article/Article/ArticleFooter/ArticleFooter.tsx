import React from 'react';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';
import useMutation from 'hooks/useMutation';
import useArticleQuery from 'hooks/useArticleQuery';
import { requestLikeorDislikeArticle } from 'api/article';
import * as Styled from './ArticleFooter.styled';

export default function ArticleFooter() {
  const { article, toggleLikeOrDislikeArticle } = useArticleQuery();
  const { isLoading, mutate } = useMutation(requestLikeorDislikeArticle, {
    onFailure: () => {
      alert('요청에 실패하였습니다.');
    },
    onSuccess: () => {
      toggleLikeOrDislikeArticle();
    },
  });

  const onToggleLikeButton = () => {
    mutate({ articleId: article.id, isLike: !article.isLike });
  };

  return (
    <Styled.BottomWrapper>
      <Styled.HeartButton disabled={isLoading} onClick={onToggleLikeButton}>
        {article.isLike ? (
          <Icon icon="HeartFilledIcon" size={24} color="#ED4956" />
        ) : (
          <Icon icon="HeartOutlineIcon" size={24} />
        )}
      </Styled.HeartButton>
      <Styled.PriceWrapper>
        <strong>{article.price.toLocaleString()}원</strong>
        <span>가격 제안 {article.isDiscountable ? '가능' : '불가'}</span>
      </Styled.PriceWrapper>
      <Button size="lg">문의하기</Button>
    </Styled.BottomWrapper>
  );
}

import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState } from 'recoil/atoms/user.atom';
import { currentArticleState } from 'recoil/atoms/article.atom';
import { ArticleStatus } from 'types/article';

export default function useArticleQuery() {
  const { id } = useParams();
  const [article, setArticle] = useRecoilState(currentArticleState(id ?? 0));
  const { user } = useRecoilValue(currentUserState);
  const isMyArticle = useMemo(() => user?.id === article.seller.id, [article, user]);

  const toggleLikeOrDislikeArticle = () => {
    setArticle({ ...article, isLike: !article.isLike });
  };

  const changeArticleStatus = (status: ArticleStatus) => {
    setArticle({ ...article, status });
  };

  return { article, isMyArticle, toggleLikeOrDislikeArticle, changeArticleStatus };
}

import { mutation, query } from 'utils/api.util';
import { API_URL } from 'constants/url.constant';
import { Article, ArticleStatus } from 'types/article';

export async function requestGetArticle(articleId: number | string) {
  const data = await query<Article>(API_URL.GET_ARTICLE_BY_ID(articleId));
  return data;
}

export async function requestLikeorDislikeArticle({
  articleId,
  isLike,
}: {
  articleId: string | number;
  isLike: boolean;
}) {
  const url = isLike ? API_URL.LIKE_ARTICLE(articleId) : API_URL.DISLIKE_ARTICLE(articleId);
  await mutation({
    url,
    method: 'POST',
  });
}

export const requestChangeArticleStatus =
  (articleId: string | number) => async (status: ArticleStatus) => {
    const url = API_URL.CHANGE_ARITLCE_STATUS(articleId);
    await mutation({
      url,
      method: 'PATCH',
      data: {
        status,
      },
    });
  };

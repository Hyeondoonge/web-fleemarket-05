import { GetArticlesParam } from 'types/param';
import { getURLParams } from 'utils/api.util';

export const PAGE_URL = {
  HOME: '/',
  GET_STARTED: '/get-started',
  SIGN_IN: '/auth/sign-in',
  EMAIL_SIGN_IN: '/auth/sign-in/email',
  EMAIL_SIGN_UP: '/auth/sign-up',
  MY_PAGE: '/mypage',
  MY_LIKES: '/mypage/liked',
  MY_ARTICLES: '/mypage/articles',
  MY_CHATS: '/chats',
  ARTICLE: '/articles/:id',
  ARTICLE_BY_ID: (id: string) => `/articles/${id}`,
} as const;

export const GITHUB_SIGN_IN_URL = '/api/auth/github';

export const API_URL = {
  MY_PROFILE: '/users/my',
  EMAIL_SIGN_IN: '/auth/sign-in',
  EMAIL_SIGN_UP: '/users',
  ARTICLES: (getArticlesParam: GetArticlesParam) => `/articles?${getURLParams(getArticlesParam)}`,
  IS_EMAIL_AVAILABLE: (email: string) => `/users/available/email?email=${email}`,
  GET_ARTICLE_BY_ID: (id: string | number) => `/articles/${id}`,
  LIKE_ARTICLE: (id: string | number) => `/articles/${id}/like`,
  DISLIKE_ARTICLE: (id: string | number) => `/articles/${id}/dislike`,
  CHANGE_ARITLCE_STATUS: (id: string | number) => `/articles/${id}/status`,
};

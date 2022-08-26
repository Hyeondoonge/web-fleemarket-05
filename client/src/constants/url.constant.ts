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
} as const;

export const GITHUB_SIGN_IN_URL = '/api/auth/github';

export const API_URL = {
  MY_PROFILE: '/users/my',
  EMAIL_SIGN_IN: '/auth/sign-in',
  EMAIL_SIGN_UP: '/users',
  IS_EMAIL_AVAILABLE: (email: string) => `/users/available/email?email=${email}`,
};

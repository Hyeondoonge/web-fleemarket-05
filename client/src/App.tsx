import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import ArticleListPage from 'pages/ArticleListPage';
import MyPage from 'pages/MyPage';
import ChatPage from 'pages/ChatPage';
import LikeListPage from 'pages/LikeListPage';
import HomePage from 'pages/HomePage';
import SignInPage from 'pages/SignInPage';
import GetStartedPage from 'pages/GetStartedPage';
import { PAGE_URL } from 'constants/url.constant';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path={PAGE_URL.HOME} element={<HomePage />} />
        <Route path={PAGE_URL.GET_STARTED} element={<GetStartedPage />} />
        <Route path={PAGE_URL.SIGN_IN} element={<SignInPage />} />
        <Route path={PAGE_URL.MY_PAGE} element={<MyPage />} />
        <Route path={PAGE_URL.MY_ARTICLES} element={<ArticleListPage />} />
        <Route path={PAGE_URL.MY_CHATS} element={<ChatPage />} />
        <Route path={PAGE_URL.MY_LIKES} element={<LikeListPage />} />
      </Routes>
    </ThemeProvider>
  );
}

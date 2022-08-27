import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MyPage from 'pages/MyPage';
import ChatPage from 'pages/ChatPage';
import HomePage from 'pages/HomePage';
import LikeListPage from 'pages/LikeListPage';
import ArticlePage from 'pages/ArticlePage';
import ArticleListPage from 'pages/ArticleListPage';
import { PAGE_URL } from 'constants/url.constant';

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path={PAGE_URL.HOME} element={<HomePage />} />
      <Route path={PAGE_URL.MY_PAGE} element={<MyPage />} />
      <Route path={PAGE_URL.MY_ARTICLES} element={<ArticleListPage />} />
      <Route path={PAGE_URL.MY_CHATS} element={<ChatPage />} />
      <Route path={PAGE_URL.MY_LIKES} element={<LikeListPage />} />
      <Route path={PAGE_URL.ARTICLE} element={<ArticlePage />} />
      <Route path="*" element={<Navigate to={PAGE_URL.HOME} replace />} />
    </Routes>
  );
}

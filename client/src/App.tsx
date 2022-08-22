import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import HomePage from 'pages/HomePage';
import SignInPage from 'pages/SignInPage';
import { PAGE_URL } from 'constants/url.contant';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path={PAGE_URL.HOME} element={<HomePage />} />
        <Route path={PAGE_URL.SIGN_IN} element={<SignInPage />} />
      </Routes>
    </ThemeProvider>
  );
}

import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import { themeValue } from './recoil/selectors/theme.selector';
import Router from './router/Router';
import AsyncBoundary from 'components/boundary/AsyncBoundary';
import PendingFallback from 'components/boundary/PendingFallback';
import RejectedFallback from 'components/boundary/RejectedFallback';
import ToggleThemeButton from './components/common/ToggleThemeButton';

export default function App() {
  const { theme } = useRecoilValue(themeValue);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleThemeButton />
      <AsyncBoundary rejectedFallback={<RejectedFallback />} pendingFallback={<PendingFallback />}>
        <Router />
      </AsyncBoundary>
    </ThemeProvider>
  );
}

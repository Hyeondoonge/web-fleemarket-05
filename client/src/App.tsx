import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <h1>우아마켓</h1>
      </div>
      <button
        onClick={async () => {
          const res = await fetch('http://localhost:4000/api/auth/github');
          const { url } = await res.json();

          console.log(url);
          if (typeof url === 'string') {
            window.location.href = url;
            // window.history.pushState(null, '', url);
          }
        }}
      >
        {' '}
        Github 로그인
      </button>
    </ThemeProvider>
  );
}

import * as styled from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  html {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.grey[200]};
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 28rem;
    margin: 0 auto;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    overflow: hidden;
  }

  #root {
    height: 100%;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    overflow-x: hidden;
    overflow-y: scroll;

    /* Hide scrollbar */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

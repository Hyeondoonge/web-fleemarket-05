import { keyframes } from 'styled-components';

export const FADE_IN_OUT = keyframes`
  from {
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

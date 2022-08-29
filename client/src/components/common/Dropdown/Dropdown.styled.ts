import styled, { keyframes } from 'styled-components';
import { Z_INDEX } from 'styles/z-index';

const FADE_IN = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FADE_OUT = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SCALE_UP = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
`;

const SCALE_DOWN = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }
  to {
    transform: scale(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Backdrop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  max-width: 28rem;
  background-color: rgba(0, 0, 0, 0.25);
  transform: translateX(-50%);
  animation-timing-function: ease-in-out;
  z-index: ${Z_INDEX.POP_OVER};

  &.visible {
    animation-name: ${FADE_IN};
    animation-duration: 50ms;

    opacity: 1;
  }
  &.hidden {
    animation-name: ${FADE_OUT};
    animation-duration: 150ms;

    opacity: 0;
  }
`;

export const Menu = styled.div`
  background-color: ${({ theme }) => theme.color.bg.front};

  animation-duration: 150ms;
  animation-timing-function: ease-in-out;
  transform-origin: top left;
  z-index: ${Z_INDEX.POP_OVER};

  &.visible {
    animation-name: ${SCALE_UP};
    opacity: 1;
  }

  &.hidden {
    animation-name: ${SCALE_DOWN};
    opacity: 0;
  }
`;

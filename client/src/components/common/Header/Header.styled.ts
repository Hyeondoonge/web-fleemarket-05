import styled from 'styled-components';
import { Z_INDEX } from 'styles/z-index';

export const HeaderWrapper = styled.header<{ absolute?: boolean }>`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'sticky')};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.STICKY};
`;

export const HeaderBackground = styled.div<{ transparent?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.bg.front};
`;

export const HeaderContent = styled.div`
  position: relative;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: transparent;
`;

export const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: calc(${Z_INDEX.STICKY} + 1);
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.125rem;
  font-weight: 700;
  z-index: calc(${Z_INDEX.STICKY} + 1);
`;

export const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem;
  border-radius: 9999px;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.grey[200]};
  }
`;

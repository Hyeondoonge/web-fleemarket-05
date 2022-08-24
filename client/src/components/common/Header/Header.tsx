import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon, { IconType } from '../Icon';
import useScrollPosition from 'hooks/useScrollPosition';
import {
  HeaderBackground,
  HeaderButton,
  HeaderContent,
  HeaderInner,
  HeaderTitle,
  HeaderWrapper,
} from './Header.styled';

interface HeaderMainProps {
  absolute?: boolean;
  children?: React.ReactNode;
}

function HeaderMain({ absolute, children }: HeaderMainProps) {
  return (
    <HeaderWrapper absolute={absolute}>
      <HeaderContent>{children}</HeaderContent>
    </HeaderWrapper>
  );
}

function HeaderAnimatedBackground() {
  const scrollPosition = useScrollPosition();

  const headerOpacity = useMemo(() => {
    const width = Math.min(488, window.screen.width);
    return Math.min(scrollPosition / width, 1);
  }, [scrollPosition]);

  return <HeaderBackground style={{ opacity: headerOpacity }} />;
}

interface HeaderIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

function HeaderIconButton({ icon, ...buttonProps }: HeaderIconButtonProps) {
  return (
    <HeaderButton {...buttonProps}>
      <Icon icon={icon} size={28} />
    </HeaderButton>
  );
}

function HeaderBackwardButton() {
  const navigate = useNavigate();

  const onClickBackwardButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <HeaderIconButton aria-label="Go back" icon="ChevronLeftIcon" onClick={onClickBackwardButton} />
  );
}

export default Object.assign(HeaderMain, {
  Inner: HeaderInner,
  Background: HeaderBackground,
  AnimatedBackground: HeaderAnimatedBackground,
  Title: HeaderTitle,
  IconButton: HeaderIconButton,
  BackwardButton: HeaderBackwardButton,
});

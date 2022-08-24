import React from 'react';
import { CSSProp } from 'styled-components';
import { StyledButton, ButtonSize, ButtonVariant } from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  rounded?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  withIcon?: boolean;
  css?: CSSProp;
}

export default function Button({
  children,
  size = 'lg',
  variant = 'primary',
  ...buttonProps
}: ButtonProps) {
  return (
    <StyledButton size={size} variant={variant} {...buttonProps}>
      {children}
    </StyledButton>
  );
}

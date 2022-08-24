import React from 'react';
import * as Styled from './SideModal.styled';

export default function SideModal({ children }: { children: React.ReactNode }) {
  return <Styled.SideModal>{children}</Styled.SideModal>;
}

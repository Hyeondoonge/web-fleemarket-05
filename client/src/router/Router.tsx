import React from 'react';
import { useRecoilValue } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import LoggedInRoutes from './LoggedInRoutes';
import NotLoggedInRoutes from './NotLoggedInRoutes';
import { currentUserState } from 'recoil/atoms/user.atom';

export default function Router() {
  const { isLoggedIn } = useRecoilValue(currentUserState);

  return <BrowserRouter>{isLoggedIn ? <LoggedInRoutes /> : <NotLoggedInRoutes />}</BrowserRouter>;
}

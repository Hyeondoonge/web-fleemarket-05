import React from 'react';
import { useRecoilValue } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import LoggedInRoutes from './LoggedInRoutes';
import { currentUserState } from 'recoil/atoms/user.atom';
import { userRegion } from 'recoil/atoms/region.atom';
import NotSetRegionRoutes from './NotSetRegionRoutes';
import NotLoggedInRoutes from './NotLoggedInRoutes';

export default function Router() {
  const { isLoggedIn } = useRecoilValue(currentUserState);
  const { regions } = useRecoilValue(userRegion);

  const routes = () => {
    if (!isLoggedIn) return <NotLoggedInRoutes />;
    if (regions.length === 0) return <NotSetRegionRoutes />;
    return <LoggedInRoutes />;
  };

  return <BrowserRouter>{routes()}</BrowserRouter>;
}

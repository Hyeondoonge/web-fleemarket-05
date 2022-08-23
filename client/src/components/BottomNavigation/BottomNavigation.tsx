import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from 'components/common/Icon';
import * as Styled from './BottomNavigation.styled';
import { menuList } from './nav-list.constant';

export default function BottomNavigation() {
  const location = useLocation();

  return (
    <Styled.BottomNavigationWrapper>
      <Styled.BottomNavigationList>
        {menuList.map(({ title, icon, to }, index) => (
          <li key={index}>
            <Link to={to}>
              <Icon icon={to === location.pathname ? icon.clicked : icon.unClicked} size={24} />
              {title}
            </Link>
          </li>
        ))}
      </Styled.BottomNavigationList>
    </Styled.BottomNavigationWrapper>
  );
}

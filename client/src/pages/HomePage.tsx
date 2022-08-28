import React from 'react';
import BottomNavigation from 'components/BottomNavigation/BottomNavigation';
import HomePageLayout from 'layouts/HomePageLayout';
import CreateArticleButton from 'components/common/CreateArticleButton';

export default function HomePage() {
  return (
    <HomePageLayout>
      <BottomNavigation />
      <CreateArticleButton />
    </HomePageLayout>
  );
}

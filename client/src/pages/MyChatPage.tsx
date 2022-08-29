import React from 'react';
import MyChatList from 'components/chat/MyChatList';
import MyChatPageLayout from 'layouts/MyChatPageLayout';
import AsyncBoundary from 'components/boundary/AsyncBoundary';
import LoadingFallback from 'components/boundary/LoadingFallback';

export default function ChatPage() {
  return (
    <MyChatPageLayout>
      <AsyncBoundary pendingFallback={<LoadingFallback />}>
        <MyChatList />
      </AsyncBoundary>
    </MyChatPageLayout>
  );
}

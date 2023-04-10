import React from 'react';
import { Hydrate } from '@tanstack/react-query';
import { useQueryPrefetch } from 'app.hooks/useQueryPrefetch';
import ScreenPrefetchExample from 'app.feature/prefetch/ScreenPrefetchExample';
import { requestPosts } from 'app.modules/api/requestPosts';

/**
 * 서버 컴포넌트
 */
const page = async () => {
  const { prefetchQuery } = useQueryPrefetch();
  const dehydratedState = await prefetchQuery(['posts'], () => requestPosts());

  return (
    <div>
      <h1>서버 컴포넌트 Prefetch 방식</h1>
      <Hydrate state={dehydratedState}>
        <ScreenPrefetchExample />
      </Hydrate>
    </div>
  );
};

export default page;

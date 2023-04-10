import React from 'react';
import ScreenPropsExample from 'app.feature/props/ScreenPropsExample';
import { requestUsers } from 'app.modules/api/requestUsers';

/**
 * 서버 컴포넌트
 */
const page = async () => {
  const users = await requestUsers();

  return (
    <div>
      <h1>서버 컴포넌트 Props 방식</h1>
      <ScreenPropsExample users={users} />
    </div>
  );
};

export default page;

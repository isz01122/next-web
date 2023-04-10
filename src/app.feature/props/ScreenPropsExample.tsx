'use client';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { requestUsers } from 'app.modules/api/requestUsers';
import CardComponent from './CardComponent';

/**
 * 클라이언트 컴포넌트 props 방식
 */
const ScreenPropsExample = ({ users }) => {
  // props로 전달받은 초기값을 넣어줍니다.
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => requestUsers(),
    initialData: users,
  });

  return (
    <StyledWrapper>
      <div className="header">
        <h1>클라이언트 컴포넌트</h1>
        <button onClick={() => console.log(data)}>consoleLog</button>
      </div>
      {data.map((item) => {
        return <CardComponent key={item.id} {...item} />;
      })}
    </StyledWrapper>
  );
};

export default ScreenPropsExample;

const StyledWrapper = styled.div`
  background: var(--color-pink);
  margin: 10px 0px;
  padding: 10px 20px;
  border-radius: 10px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

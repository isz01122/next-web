'use client';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { requestPosts } from 'app.modules/api/requestPosts';
import CardComponent from './CardComponent';

/**
 * 클라이언트 컴포넌트 prefetch 방식
 */
const ScreenPrefetchExample = () => {
  const { data } = useQuery(['posts'], () => requestPosts());

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

export default ScreenPrefetchExample;

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

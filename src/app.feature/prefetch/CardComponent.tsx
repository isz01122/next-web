'use client';
import React from 'react';
import styled from 'styled-components';

/**
 * 클라이언트 컴포넌트
 */
const CardComponent = ({ id, userId, title, body }) => {
  return (
    <StyledWrapper>
      <div>ID: {id}</div>
      <div>유저ID: {userId}</div>
      <div>제목: {title}</div>
      <div>내용: {body}</div>
    </StyledWrapper>
  );
};

export default CardComponent;

const StyledWrapper = styled.div`
  margin: 10px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--color-green);
  color: #000;

  > div {
    margin: 5px 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

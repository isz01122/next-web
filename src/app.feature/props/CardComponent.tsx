'use client';
import React from 'react';
import styled from 'styled-components';

/**
 * 클라이언트 컴포넌트
 */
const CardComponent = ({ username, email, phone, website }) => {
  return (
    <StyledWrapper>
      <div>이름: {username}</div>
      <div>이메일: {email}</div>
      <div>전화번호: {phone}</div>
      <div>사이트: {website}</div>
    </StyledWrapper>
  );
};

export default CardComponent;

const StyledWrapper = styled.div`
  margin: 10px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--color-main);
  color: #000;

  > div {
    margin: 5px 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

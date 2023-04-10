'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledWrapper>
      <h1>여기는 헤더 영역!</h1>

      <div className="git-link">
        <span>깃허브 저장소: </span>
        <a target="_blank" href="https://github.com/isz01122/next-web">
          https://github.com/isz01122/next-web
        </a>
      </div>

      <div className="nav-container">
        <Link href="/">Home</Link>
        <Link href="/props">props 방식</Link>
        <Link href="/prefetch">prefetch 방식</Link>
      </div>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.nav`
  background: #eee;
  padding: 10px 0px;

  h1 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .git-link {
    margin-bottom: 10px;
  }

  .nav-container {
    display: flex;
    column-gap: 10px;
    align-items: center;

    > a {
      background: var(--color-brown);
      color: #fff;
      padding: 10px 20px;
      border-radius: 10px;
    }
  }
`;

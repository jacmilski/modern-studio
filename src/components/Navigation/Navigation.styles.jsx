/* eslint-disable linebreak-style */
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/icons/logo.svg';
import StyledIcon from '../StyledIcon/StyledIcon';

export const OuterWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  top: 0;
  z-index: 1000;
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const Wrapper = styled(({ isOpen, ...props }) => <div {...props} />)`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    padding: 50px;

    ${({ theme }) => theme.mq.desktop} {
      position: static;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: unset;
      background-color: transparent;
      padding: 25px 45px;
    };
`;

export const StyledLogo = styled(({ isSmall, isMobile, ...props }) => <Logo {...props} />)`
    width: ${({ isSmall }) => (isSmall ? '60px' : '100px')};

    ${({ theme }) => theme.mq.desktop} {
      display: ${({ isMobile }) => (isMobile ? 'none' : 'initial')};
    }
`;

export const StyledSocialIcon = styled(StyledIcon)``;

export const StyledNavigation = styled.nav`

  ul {
    list-style: none;
    padding: 0;
    text-align: center;

    li {
      margin: 50px 0;
      
      a {
        text-decoration: none;
        color: black;
        font-family: ${({ theme }) => theme.font.family.cormorant};
        font-size: ${({ theme }) => theme.font.size.mobileMenu};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {

    margin-left: auto;

    ul {
      display: flex;

      li {
        margin: 0 20px;

        a {
          font-size: ${({ theme }) => theme.font.size.thumbnailSmall}; /* main */
        }
      }
    }
  }
`;

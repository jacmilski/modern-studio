// @ts-nocheck
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../../assets/icons/logo.svg';
import FacebookIcon from '../../assets/icons-components/facebook.svg';
import InstagramIcon from '../../assets/icons-components/instagram.svg';
import StyledIcon from '../StyledIcon/StyledIcon';

const OuterWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const StyledBurger = styled.button`
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

  &:focus {
    outline: none;
  }

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

const Wrapper = styled(({ isOpen, ...props }) => <div {...props} />)`
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

const StyledLogo = styled(({ isSmall, isMobile, ...props }) => <Logo {...props} />)`
    width: ${({ isSmall }) => (isSmall ? '60px' : '100px')};

    ${({ theme }) => theme.mq.desktop} {
      display: ${({ isMobile }) => (isMobile ? 'none' : 'initial')};
    }
`;

const StyledSocialIcon = styled(StyledIcon)``;

const StyledNavigation = styled.nav`

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

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper>
      <Link to="/">
        <StyledLogo isSmall isMobile />
      </Link>
      <StyledBurger onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <Link to="/">
          <StyledLogo />
        </Link>
        <StyledNavigation>
          <ul>
            <li><Link to="/">Ofery</Link></li>
            <li><Link to="/">Realizacje</Link></li>
            <li><Link to="/">Zespół</Link></li>
            <li><Link to="/">Usługi</Link></li>
            <li><Link to="/">Kontakt</Link></li>
          </ul>
        </StyledNavigation>
        <div>
          <StyledSocialIcon isDark>
            <FacebookIcon />
          </StyledSocialIcon>
          <StyledSocialIcon isDark>
            <InstagramIcon />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

// @ts-nocheck
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ArrowIcon from '../arrow.svg';

export const Hero = styled(({ image, ...props }) => <div {...props} />)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  padding: 35px;
`;

export const HeroHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.headingMobile};
  margin: 0;
  text-shadow: ${({ theme }) => theme.font.shadow};
`;

export const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-shadow: ${({ theme }) => theme.font.shadow};
`;

export const ContentWrapper = styled.div`
  padding: 0 20px;
`;

const StyledSection = styled.section`
    margin: 100px 0;
`;

export const WelcomeSection = styled(StyledSection)`
  padding: 0 20px;
`;

export const WelcomeSectionContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  padding: 30px 20px;

  h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
  }

  p {
    font-size: 1.2rem; /* ${({ theme }) => theme.font.size.paragraph}; */
    color: white;
  }

  ${({ theme }) => theme.effect.corner({
    position: 'rightTop',
    size: '70px',
    color: theme.color.black,
  })};

`;

export const WelcomeSectionImage = styled(({ image, ...props }) => <div {...props} />)`
  position: relative;
  margin-top: 10px;
  width: 90%;
  height: 170px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;

  ${({ theme }) => theme.effect.corner({
    position: 'leftBottom',
    size: '70px',
    color: theme.color.beige,
  })};
`;

export const AdvantagesSection = styled(StyledSection)``;

export const StyledList = styled.ul`
  padding: 0;
  list-style: none; 

  li {
    margin: 30px 0;
  }

  h3 {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 700;
    margin: 0;
  }
  `;

export const ShowcaseSection = styled(StyledSection)`
    h2 {
      font-size: ${({ theme }) => theme.font.size.headingMobile};
      text-align: center;
      margin: 30px 0;
    }
  `;

export const TeamSection = styled(StyledSection)``;

export const StyledLinkButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
`;

export const TeamImage = styled(({ image, ...props }) => <div {...props} />)`
  position: relative;
  margin-top: 30px;
  width: 90%;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;

    &::after {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 70px;
    height: 70px;
    content: '';
    clip-path: polygon(0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%, 0 16%);
    background-color: ${({ theme }) => theme.color.black};
  }
`;

export const StyledButton = styled(({ isCentered, ...props }) => <button {...props} />)`
  border: 2px solid ${({ theme }) => theme.color.black};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.buttton};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
  padding: 10px 15px;
  text-transform: uppercase;
  display: block;
  margin: ${({ isCentered }) => (isCentered ? '15px auto' : '15px 0')};
`;

export const ShowcaseButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledLinkButton = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.black};
  text-decoration: underline;
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  width: 30px;
  height: 30px;
  margin-left: 15px;

  path {
    fill: ${({ theme }) => theme.color.black};
  }
`;

export const ReviewSection = styled(StyledSection)``;

export const ShowcaseGallery = styled.div`
  margin: 30px 0;
`;

export const ShowcaseImage = styled(({ isBig, ...props }) => <img alt="" {...props} />)`
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '125px')};
  object-fit: cover;
  margin: 10px 0;
`;

export const ServicesSection = styled(StyledSection)``;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  label {
    font-family: font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    margin: 15px 0 0;
  }

  input, textarea {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    margin: 5px 0;
    resize: none;
    padding: 5px;
  }

  textarea {
    min-height: 200px;
  }
`;

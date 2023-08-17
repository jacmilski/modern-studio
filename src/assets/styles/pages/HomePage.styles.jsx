// @ts-nocheck
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ArrowIcon from '../arrow.svg';
import HighLightedHeading from '../../../components/HighLightedHeading/HighLightedHeading';

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

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.heading};
    max-width: 500px;
    text-align: center;
  }
`;

export const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-shadow: ${({ theme }) => theme.font.shadow};
`;

export const ContentWrapper = styled.div`
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 100px;
  }
`;

const StyledSection = styled.section`
    margin: 100px 0;

    ${({ theme }) => theme.mq.desktop} {
      margin: 100px 0;
    }
`;

export const WelcomeSection = styled(StyledSection)`
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    margin: 180px 0 100px;
    padding: 20px 20px 0;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
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
    font-size: ${({ theme }) => theme.font.size.paragraph};
    color: white;
  }

  ${({ theme }) => theme.effect.corner({
    position: 'rightTop',
    size: '70px',
    color: theme.color.black,
  })};

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 55%;
    height: auto;
    top: 10vh;
    right: 20px;
    padding: 50px;

    h2 {
      font-size: ${({ theme }) => theme.font.size.headingSmall};
    }

    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
      color: white;
    }
  }
`;

export const WelcomeSectionImage = styled(({ image, ...props }) => <div {...props} />)`
  position: relative;
  margin-top: 10px;
  width: 90%;
  height: 170px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 80%;

  ${({ theme }) => theme.effect.corner({
    position: 'leftBottom',
    size: '70px',
    color: theme.color.beige,
  })};

  ${({ theme }) => theme.mq.desktop} {
    z-index: -1;
    width: 80%;
    height: 500px;
    top: -100px;
  }
`;

export const AdvantagesSection = styled(StyledSection)`
  margin-bottom: 0;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

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

  p {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }
`;

export const StyledLinkButton = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.black};
  text-decoration: underline;
  display: inline-block;
  margin: 5px 0 10px;
`;

export const ServicesSection = styled(StyledSection)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 50px;

    & > p {
      max-width: 450px;
      font-size: ${({ theme }) => theme.font.size.paragraph};
      align-self: center;
    }

    ${StyledList} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row: 2 / 2;
      grid-column: 1 / 3;
    }
  }
`;

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
  `;

export const TeamSection = styled(StyledSection)`

  ${TeamImage}:last-child {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 50px;

    div:nth-child(1) {
      grid-column: 1 / 1;
    }

    ${TeamImage} {
      margin: 0;
    }

    ${TeamImage}:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      width: 50%;
      justify-self: end;

      ${({ theme }) => theme.effect.corner({
    position: 'leftBottom',
    size: '100px',
    distance: '-30px',
    color: theme.color.black,
  })};
    }

    ${TeamImage}:last-child {
      height: 100%;
      grid-row: 1 / 3;
      grid-column: 2 / 3;
      display: block;

      ${({ theme }) => theme.effect.corner({
    position: 'rightTop',
    size: '100px',
    distance: '-30px',
    color: theme.color.beige,
  })};
    }
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
  margin: 8px 15px;
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  width: 30px;
  height: 30px;
  margin-left: 15px;

  path {
    fill: ${({ theme }) => theme.color.black};
  }
`;

export const ReviewSection = styled(StyledSection)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 120px;

    div:first-child {
      grid-row: 1 / 1;
      grid-column: 2 / 3;
      align-self: center;

      h2 {
        max-width: 300px;
        margin: 0;
      }
    }

    div:last-child {
      grid-row: 1 / 1;
      grid-column: 1 / 2;
    }
  }
`;

export const StyledReview = styled.div`
  border: 1px solid ${({ theme }) => theme.color.steel};
  padding: 40px 40px 30px;
  margin: 30px;

  p:first-child {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  p:last-child {
    margin-top: 30px;
    font-weight: 700;
  }
`;

export const ShowcaseButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ShowcaseSection = styled(StyledSection)`
    h2 {
      font-size: ${({ theme }) => theme.font.size.headingMobile};
      text-align: center;
      margin: 30px 0 10px;
    }

    ${ShowcaseButtonsContainer} {
      display: flex;
      flex-direction: column;
    }

    ${({ theme }) => theme.mq.desktop} {
      margin-top: -5px;
      h2 {
        margin: 0;
      }

      ${ShowcaseButtonsContainer} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 30px;
      }
    }
`;

export const ShowcaseGallery = styled.div`
  margin: 25px 0 50px;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
    margin: 50px 0;

    ${({ theme }) => theme.effect.corner({
    position: 'rightTop',
    size: '90px',
    distance: '-30px',
    color: theme.color.black,
    pseudoelement: 'after',
  })};
  
    ${({ theme }) => theme.effect.corner({
    position: 'leftBottom',
    size: '90px',
    distance: '-30px',
    color: theme.color.beige,
    pseudoelement: 'before',
  })};
  }


  img:nth-child(1) {
    grid-row: 1 / 2;
  }
  img:nth-child(2) {
    grid-row: 1 / 3;
  }
  img:nth-child(3) {
    grid-row: 2 / 4;
  }
  img:nth-child(4) {
    grid-row: 3 / 4;
  }

`;

export const ShowcaseImage = styled(({ isBig, ...props }) => <img alt="" {...props} />)`
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '125px')};
  object-fit: cover;
  margin: 10px 0;

  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
    margin: 0;
  }
`;

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

  ${({ theme }) => theme.mq.desktop} {
    max-width: 400px;
    margin: 0 auto;

    h3 {
      max-width: 300px;
      margin: 30px auto;
    }
  }
`;

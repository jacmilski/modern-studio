// @ts-nocheck
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { styled } from 'styled-components';
import { graphql } from 'gatsby';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import HighLightedHeading from '../components/HighLightedHeading/HighLightedHeading';
import PhoneIcon from '../assets/icons-components/phone.svg';
import { ContactForm, StyledButton } from '../assets/styles/pages/HomePage.styles';
import {
  ContactInfoWrapper,
  ContactPhoto,
  ContactContentWrapper,
} from '../assets/styles/pages/Kontakt.styles';

const Kontakt = ({ data }) => {
  return (
    <ContactContentWrapper isSubpage>
      <ContactInfoWrapper>
        <HighLightedHeading>kontakt</HighLightedHeading>
        <p>
          Szukasz nieruchomości dla siebie? A może potrzebujesz fachowej pomocy przy sprzedaży własnej nieruchomości? Chętnie odpowiemy na Twoje pytania. Napisz lub zadzwoń.
        </p>
        <a href="phone:730026439">
          <PhoneIcon />
          730 026 439
        </a>
      </ContactInfoWrapper>
      <ContactForm action="#">
        <HighLightedHeading level="3">Napisz do nas</HighLightedHeading>
        <label htmlFor="email">Adres e-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Adres e-mail</label>
        <textarea name="message" id="message" />
        <StyledButton>Wyślij</StyledButton>
      </ContactForm>
      <ContactPhoto imageSource={data.hero.publicURL} />
    </ContactContentWrapper>
  );
};

export const pageQuery = graphql`
    query {
            hero: file(relativePath: {regex: "/kontakt\/0_hero.jpg/"}) {
                publicURL
        }
    }
`;

export default Kontakt;

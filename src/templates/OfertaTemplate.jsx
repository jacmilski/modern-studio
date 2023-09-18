/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
// @ts-nocheck
import React from 'react';
import AreaIcon from 'assets/icons-components/area.svg';
import AvailabilityIcon from 'assets/icons-components/availability.svg';
import OfferTypeIcon from 'assets/icons-components/offer-type.svg';
import RoomsIcon from 'assets/icons-components/rooms.svg';
import BuildingTypeIcon from 'assets/icons-components/building-type.svg';
import {
  Address, ContactDetails,
  Gallery, OfferDescription, OfferDetailsList,
  OfferTitle,
  StyledContentWrapper,
} from 'assets/styles/pages/oferta.styles';
import { graphql } from 'gatsby';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';

const OfertaTemplate = ({ data: { oferta }, pageContext }) => {
  console.log('OfertaTemplate', pageContext?.id);

  return (
    <StyledContentWrapper isSubpage>
      <OfferTitle>
        <Address>{oferta.adres}</Address>
        <HighlightedHeading>
          {oferta.tytul}
        </HighlightedHeading>
      </OfferTitle>
      <Gallery><img src={oferta.galeria[0].file.url} alt="" /></Gallery>
      <OfferDescription>
        {oferta.opis.opis}
      </OfferDescription>
      <OfferDetailsList>
        <li>
          <BuildingTypeIcon />
          <div>
            <p>
              Typ budynku:
            </p>
            <p>{ oferta.typBudynku }</p>
          </div>
        </li>
        <li>
          <RoomsIcon />
          <div>
            <p>Pomieszczenia:</p>
            <p>{ oferta.pomieszczenia[0] }</p>
          </div>
        </li>
        <li>
          <AvailabilityIcon />
          <div>
            <p>Dostępność:</p>
            <p>{ oferta.dostepnosc }</p>
          </div>
        </li>
        <li>
          <AreaIcon />
          <div>
            <p>Powierzchnia:</p>
            <p>{ oferta.powierzchnia }</p>
          </div>
        </li>
        <li>
          <OfferTypeIcon />
          <div>
            <p>Rodzaj oferty:</p>
            <p>{ oferta.rodzajOferty }</p>
          </div>
        </li>
      </OfferDetailsList>
      <ContactDetails>
        <img src={oferta.avatar.file.url} alt="" />
        <div>
          <p>Kontakt:</p>
          <p>{ oferta.imieINazwisko }</p>
          <p>{ oferta.email }</p>
          <p>{ oferta.telefon }</p>
        </div>
      </ContactDetails>
    </StyledContentWrapper>
  );
};

/* "87cdebe5-972e-506d-a7c4-3a1cca2a7a6a" */

export const query = graphql`
  query($id: String!) {
      oferta: contentfulOferta(id: {eq: $id}) {
      adres
      dostepnosc
      email
      id
      imieINazwisko
      opis {
        opis
      }
      pomieszczenia
      powierzchnia
      rodzajOferty
      telefon
      typBudynku
      tytul
      galeria {
        file {
          url
        }
      }
      avatar {
        file {
          url
        }
      }
    }
  }
`;

export default OfertaTemplate;

/*  */

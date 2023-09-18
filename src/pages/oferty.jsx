/* eslint-disable arrow-body-style */
// @ts-nocheck
import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { FiltersList, Gallery, IntroSection } from 'assets/styles/pages/oferty.styles';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

const Oferty = ({ data: { allContentfulOferta: { nodes: oferty } } }) => {
  console.log('Oferty', oferty);
  return (
    <ContentWrapper isSubpage>
      <IntroSection>
        <HighlightedHeading>Nasza oferta</HighlightedHeading>
        <p>
          Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ nieruchomości, który Cię
          interesuje.
        </p>
      </IntroSection>
      <FiltersList>
        <li>Mieszkanie</li>
        <li>Dom</li>
        <li>Działka</li>
      </FiltersList>
      <Gallery>
        {oferty.map((oferta) => {
          console.log('Oferta', oferta.galeria);

          return (
            <Thumbnail
              key={oferta.id}
              imageSource={oferta.galeria[0].file.url}
              address={oferta.adres}
              title={oferta.tytul}
            />
          );
        })}
      </Gallery>
    </ContentWrapper>
  );
};

export const query = graphql`
    query {
      allContentfulOferta {
    nodes {
      id
      tytul
      dostepnosc
      adres
      pomieszczenia
      powierzchnia
      rodzajOferty
      typBudynku
      galeria {
        file {
          url
        }
      }
      email
      imieINazwisko
      telefon
      avatar {
        url
        title
        description
        id
      }
    }
  }
}`;

export default Oferty;

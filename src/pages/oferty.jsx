import React from 'react';
import { graphql } from 'gatsby';
import HighLightedHeading from '../components/HighLightedHeading/HighLightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import {
  ThumbnailWrapper,
  ThumbnailImage,
  ThumbnailInfo,
  Welcome,
  FiltersList,
  Gallery,
} from '../assets/styles/pages/Oferty.styles';

export const Thumbnail = ({ image }) => {
  return (
    <ThumbnailWrapper>
      <ThumbnailImage src={image} alt={image} />
      <ThumbnailInfo>
        <p>Rolna 20</p>
        <p>Nowoczesny apartament z klasą</p>
      </ThumbnailInfo>
    </ThumbnailWrapper>
  );
};

const Oferty = ({ data }) => {
  return (
    <ContentWrapper isSubpage>
      <Welcome>
        <HighLightedHeading>Nasza oferta</HighLightedHeading>
        <p>Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ nieruchomości, który Cię interesuje.</p>
      </Welcome>
      <FiltersList>
        <li>Mieszkanie</li>
        <li>Dom</li>
        <li>Działka</li>
      </FiltersList>
      <Gallery>
        <Thumbnail image={data.thumbnail.publicURL} />
        <Thumbnail image={data.thumbnail.publicURL} />
        <Thumbnail image={data.thumbnail.publicURL} />
        <Thumbnail image={data.thumbnail.publicURL} />
        <Thumbnail image={data.thumbnail.publicURL} />
      </Gallery>
    </ContentWrapper>
  );
};

export const query = graphql`
  query {
    thumbnail: file(relativePath: {regex: "/oferty\/temporary-thumbnail.jpg/"}) {
      publicURL
    }
  }
`;

export default Oferty;

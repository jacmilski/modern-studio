import React from 'react';
import { styled } from 'styled-components';
import { graphql } from 'gatsby';
import HighLightedHeading from '../components/HighLightedHeading/HighLightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 30vw;
  min-height: 450px;
  max-height: 700px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const ThumbnailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left bottom;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const ThumbnailInfo = styled.div`
  width: 100%;
  padding: 20px;

  p:first-child {
    font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
    font-weight: 700;
    color: white;
    position: relative;
    text-transform: uppercase;
  }

  p:first-child::after {
    content: '';
    position: absolute;
    width: 35%;
    height: 1px;
    background-color: white;
    left: 0;
    bottom: -5px;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.font.size.thumbnail};
    font-weight: 700;
    color: white;
  }
`;

// TODO: Find perfect name
const Welcome = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
  }
`;

const FiltersList = styled.ul`
  margin: 0 0 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  align-items: flex-start;

  li {
    padding: 10px 0;
    font-weight: 700;
  }

  // TODO: Remove after implementing state
  li:first-child {
    text-decoration: underline;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    li {
      padding: 20px 35px;
    }
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.mq.huge} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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

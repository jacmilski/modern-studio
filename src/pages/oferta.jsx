// @ts-nocheck
import React from 'react';
import { styled } from 'styled-components';
import { graphql } from 'gatsby';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import HighLightedHeading from '../components/HighLightedHeading/HighLightedHeading';
import AreaIcon from '../assets/icons-components/area.svg';
import AvailabilityIcon from '../assets/icons-components/availability.svg';
import BuildingTypeIcon from '../assets/icons-components/building-type.svg';
import RoomsIcon from '../assets/icons-components/rooms.svg';
import OfferType from '../assets/icons-components/offer-type.svg';

const Address = styled.p`
    font-weight: 700;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 60%;
        height: 1px;
        background-color: black;
        bottom: -5px;
        left: 0;
    }
`;

const OfferDetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 50px 0;
  
  li {
    display: flex;
    margin: 20px 0;
    
    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
      margin: 3px 15px;
    }

    p:first-child {
      font-weight: 700;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 30px 0;

    li {
      padding: 10px 0; 
    }

    li div p {
      display: inline-block;
    }
  }
`;

const ContactDetails = styled.div`
  display: flex;
  margin-bottom: 50px;

  
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    margin: 0;
  }

  p:first-child {
    font-weight: 700;
  }
`;

const Gallery = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-height: 400px;
  }
`;

const OfferDescription = styled.p`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.paragraph};

  ${({ theme }) => theme.mq.desktop} {
    top: -90px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    top: -100px;
  }

  ${({ theme }) => theme.mq.huge} {
    top: -120px;
  }
`;

const OfferTitle = styled.p``;

const StyledContentWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: 1fr;
  
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    ${Gallery} {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
  
    ${OfferTitle} {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  
    ${OfferDescription} {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  
    ${OfferDetailsList} {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }
  
    ${ContactDetails} {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
  }

`;

const Oferta = ({ data }) => {
  return (
    <StyledContentWrapper isSubpage>
      <OfferTitle>
        <Address>Marynarska 21</Address>
        <HighLightedHeading>
          Magiczna przestrzeń
          dla dużej rodziny
        </HighLightedHeading>
      </OfferTitle>
      {/* // TODO: Implement Slick Library */}
      <Gallery>
        <img src={data.oferta.publicURL} alt="" />
      </Gallery>
      <OfferDescription>
        Pomimo braku dostępu do morza w Poznaniu, jak widać za oknem, dla nas nie ma rzeczy niemożliwych. Wyjątkowe mieszkanie z widokiem, którego nie da się zapomnieć.
      </OfferDescription>
      <OfferDetailsList>
        <li>
          <BuildingTypeIcon />
          <div>
            <p>Typ budynku:</p>
            <p>blok</p>
          </div>
        </li>
        <li>
          <RoomsIcon />
          <div>
            <p>Pomieszczenia:</p>
            <p>4 pokoje / 2 łazienki</p>
          </div>
        </li>
        <li>
          <AvailabilityIcon />
          <div>
            <p>Dostępność:</p>
            <p>Styczeń 2022</p>
          </div>
        </li>
        <li>
          <AreaIcon />
          <div>
            <p>Powieżchnia:</p>
            <p>95m2</p>
          </div>
        </li>
        <li>
          <OfferType />
          <div>
            <p>Rodzaj oferty:</p>
            <p>wynajem</p>
          </div>
        </li>
      </OfferDetailsList>
      <ContactDetails>
        <img src={data.avatar.publicURL} alt="" />
        <div>
          <p>Kontakt:</p>
          <p>Anna Żarczyńska</p>
          <p>ania@msnieruchomości.pl</p>
          <p>730 026 439</p>
        </div>
      </ContactDetails>
    </StyledContentWrapper>
  );
};

export const query = graphql`
  query {
    oferta: file(relativePath: {regex: "/oferta\/temporary-oferta.jpg/"}) {
      publicURL
    },
    avatar: file(relativePath: {regex: "/oferta\/temporary-avatar.jpg/"}) {
      publicURL
    },
  }
`;

export default Oferta;

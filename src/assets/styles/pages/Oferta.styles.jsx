/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper.styles';

export const Address = styled.p`
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

export const OfferDetailsList = styled.ul`
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

export const ContactDetails = styled.div`
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

export const Gallery = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-height: 400px;
  }
`;

export const OfferDescription = styled.p`
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

export const OfferTitle = styled.p``;

export const StyledContentWrapper = styled(ContentWrapper)`
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

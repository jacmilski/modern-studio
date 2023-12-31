import styled from 'styled-components';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper.styles';

export const Address = styled.p`
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: black;
    bottom: -10px;
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
      margin: 4px 10px;
    }
    
    p:first-child {
      font-weight: 700;
    }
  }
  
  ${({ theme }) => theme.mq.desktop} {
    margin: 0;
    
    li {
      margin: 30px 0;
    }
    
    div {
      display: flex;
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
    margin: 0;
  }
  
  p:first-child {
    font-weight: bold;
  }
`;

export const Gallery = styled.div`
  width: 100%;
  margin: 0 auto;
  
  img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
  }
`;

export const OfferDescription = styled.p`
  position: relative;
  
  ${({ theme }) => theme.mq.desktop} {
    top: -60px;
  }
  
  ${({ theme }) => theme.mq.bigDesktop} {
    top: -70px;
  }
  
  ${({ theme }) => theme.mq.huge} {
    top: -90px;
  }
`;

export const OfferTitle = styled.div`
`;

export const StyledContentWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: 1fr;
  
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    
    ${Gallery} {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
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

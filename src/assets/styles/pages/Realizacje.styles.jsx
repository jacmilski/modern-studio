import styled from 'styled-components';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper.styles';

export const StyledContentWrapper = styled(ContentWrapper)`
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 250px;
  }
`;

export const IntroSection = styled.section`
  img {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    position: relative;

    div {
      width: 50%;
      padding-right: 80px;
    }

    img {
      width: 50%;
    }

    ${({ theme }) => theme.effect.corner({ position: 'rightBottom', size: '100px', distance: '-30px' })};
  }
`;

export const PortfolioItem = styled.article`
  margin: 100px 0;
  position: relative;

  img {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    margin: 170px 0;

    div {
      width: 50%;
      padding-right: 80px;
    }

    img {
      width: 50%;
    }

    &:nth-child(odd) {
      ${({ theme }) => theme.effect.corner({
    position: 'rightBottom', size: '100px', distance: '-30px', color: theme.color.black,
  })};
      div {
        padding-right: 80px;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      ${({ theme }) => theme.effect.corner({
    position: 'leftTop', size: '100px', distance: '-30px', color: theme.color.beige, pseudoelement: 'before',
  })};

      div {
        padding-left: 80px;
      }
    }

    &:last-child {
      flex-direction: column;
      width: 100%;
      &::after, &::before {
        display: none;
      }

      img {
        width: 100%;
      }

      div:last-child {
        width: 100%;
        position: relative;

        ${({ theme }) => theme.effect.corner({
    position: 'rightTop', pseudoelement: 'after', size: '100px', distance: '-30px', color: theme.color.black,
  })};

        ${({ theme }) => theme.effect.corner({
    position: 'leftBottom', pseudoelement: 'before', size: '100px', distance: '-30px', color: theme.color.beige,
  })};
      }

      div {
        text-align: center;
        margin: 30px auto;
        padding: 0;
      }
    }
  }
`;

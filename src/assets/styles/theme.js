// @ts-nocheck
/* eslint-disable linebreak-style */
import { css, keyframes } from 'styled-components';

const showLeftTopCorner = keyframes`
  0% {
    clip-path: polygon(16% 100%, 16% 100%, 16% 100%, 0 100%, 0 100%, 16% 100%);
  }
  50% {
    clip-path: polygon(16% 16%, 16% 16%, 16% 100%, 0 100%, 0 0, 16% 0);
  }
  100% {
    clip-path: polygon(100% 16%, 16% 16%, 16% 100%, 0 100%, 0 0, 100% 0);
  }
`;

const theme = {
  color: {
    beige: 'hsl(33, 23%, 83%)',
    darkBeige: 'hsl(33, 23%, 33%)',
    steel: 'hsl(225, 23%, 83%)',
    orange: 'hsl(14, 64%, 54%)',
    dark: 'hsl(210, 35%, 35%)',
    black: 'hsl(210, 11%, 30%)',
    brown: 'hsl(355, 13%, 20%)',
  },
  size: {
    desktopHeroHeight: '800px',
  },
  font: {
    shadow: '5px 5px 10px hsla(0, 0%, 0%,0.15)',
    size: {
      heading: '1.1rem', // its main, was 3.5rem
      headingMobile: '3rem', /* its main, was 5.3rem */
      headingSmall: '2.4rem', /* its main, was 4.2 */
      paragraph: '1.15rem',
      caption: '1.35rem',
      mobileMenu: '1.6rem', /* its main - was 2.1 */
      button: '1.2rem',
      thumbnail: '1.6rem',
      thumbnailSmall: '1.3rem',
    },
    family: {
      montserrat: '"Montserrat", sans-serif',
      cormorant: '"Cormorant Garamond", serif',
    },
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media (min-width: 1440px)',
  },
  effect: {
    /**
     * @param {('leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom')} position
     * @param size
     * @param color
     * @param {('before' | 'after')} pseudoelement
     * @param distance
      */
    corner: ({
      position = 'leftBottom', size = '70px', distance = '-20px', color = theme.color.black, pseudoelement = 'after',
    }) => css`
      &::${pseudoelement} {
        position: absolute;
        width: ${size};
        height: ${size};
        content: '';
        background-color: ${() => color};
        ${() => {
    switch (position) {
      case 'leftTop': // 0 0, 100% 0, 100% 16%, 16% 16%, 16% 100%, 0 100%
        return css`
          animation: ${showLeftTopCorner} 1.2s ease forwards;
          clip-path: polygon(100% 16%, 16% 16%, 16% 100%, 0 100%, 0 0, 100% 0);
          left: ${distance};
          top: ${distance};
          `;
      case 'rightTop': // 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%, 0 16%
        return css`
          clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
          right: ${distance};
          top: ${distance};
          `;
      case 'leftBottom': // 0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%
        return css`
          clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
          left: ${distance};
          bottom: ${distance};
          `;
      case 'rightBottom': // 84% 0, 100% 0, 100% 100%, 0 100%, 0 84%, 84% 84%
        return css`
          clip-path: polygon(84% 0, 100% 0, 100% 100%, 0 100%, 0 84%, 84% 84%);
          right: ${distance};
          bottom: ${distance};
          `;
      default:
        return {};
    }
  }}
      }
    `,
  },
};

export default theme;

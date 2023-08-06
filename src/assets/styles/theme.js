/* eslint-disable linebreak-style */
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
      heading: '5rem',
      headingMobile: '3rem', /* its main, was 5.3rem */
      headingSmall: '2.8rem', /* its main, was 4.2 */
      paragraph: '1.5rem',
      caption: '1.35rem',
      mobileMenu: '1.6rem', /* its main - was 2.1 */
      button: '1.2rem',
      thumbnail: '1.8rem',
      thumbnailSmall: '1.4rem',
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
};

export default theme;

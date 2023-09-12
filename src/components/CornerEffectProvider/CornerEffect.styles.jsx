/* eslint-disable linebreak-style */
// @ts-nocheck
import styled, { keyframes, css } from 'styled-components';

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

const showRightTopCorner = keyframes`
  0% {
    clip-path: polygon(84% 100%, 84% 100%, 100% 100%, 100% 100%, 84% 100%, 84% 100%);
  }
  50% {
    clip-path: polygon(84% 16%, 84% 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
  }
  100% {
    clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
  }
`;
const showLeftBottomCorner = keyframes`
  0% {
    clip-path: polygon(100% 84%, 100% 84%, 100% 83%, 100% 84%, 100% 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(0 84%, 16% 84%, 16% 84%, 100% 84%, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
  }
`;
const showRightBottomCorner = keyframes`
  0% {
    clip-path: polygon(84% 0, 84% 0, 84% 0, 84% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(84% 0, 84% 84%, 84% 84%, 84% 100%, 100% 100%, 100% 0);
  }
  100% {
    clip-path: polygon(84% 0, 84% 84%, 0 84%, 0 100%, 100% 100%, 100% 0%);
  }
`;

export const CornerEffectWrapper = styled.div`
  position: relative;
  
  &::after, &::before {
    animation-play-state: ${({ playState }) => (playState ? 'running !important' : 'paused !important')};
  }
  
  ${({
    theme, pseudoelement, color, size, distance, position,
  }) => css`
    &::${pseudoelement} {
        background-color: ${theme.color[color]};
        position: absolute;
        width: ${size};
        height: ${size};
        content: '';
        ${() => {
    switch (position) {
      case 'leftTop':
        return css`
          animation: ${showLeftTopCorner} 1.2s ease forwards;
          clip-path: polygon(100% 16%, 16% 16%, 16% 100%, 0 100%, 0 0, 100% 0);
          top: -${distance};
          left: -${distance};
        `;
      case 'leftBottom':
        return css`
          animation: ${showLeftBottomCorner} 1.2s ease forwards;
          clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
          bottom: -${distance};
          left: -${distance};
        `;
      case 'rightTop':
        return css`
          animation: ${showRightTopCorner} 1.2s ease forwards;
          clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
          top: -${distance};
          right: -${distance};
        `;
      case 'rightBottom':
        return css`
          animation: ${showRightBottomCorner} 1.2s ease forwards;
          clip-path: polygon(84% 0, 84% 84%, 0 84%, 0 100%, 100% 100%, 100% 0%);
          bottom: -${distance};
          right: -${distance};
        `;
      default:
        return '';
    }
  }};
  `}
`;

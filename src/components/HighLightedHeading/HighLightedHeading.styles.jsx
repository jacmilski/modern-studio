import React from 'react';
import styled, { keyframes } from 'styled-components';

const appearAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const StyledHeading = styled(({ playState, isRight, ...props }) => <div {...props} />)`
    position: relative;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    display: inline-block;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: calc(${({ theme }) => theme.font.size.headingSmall} * 1.5);
      top: calc(-${({ theme }) => theme.font.size.headingSmall} / 6);
      left: -50%;
      background-color: ${({ theme }) => theme.color.beige};
      z-index: -1;
    }

    ${({ theme }) => theme.mq.desktop} {
      &::before {
      content: '';
      width: ${({ width }) => (width ? `${width}%` : '50%')};
      height: calc(${({ theme }) => theme.font.size.headingSmall} * 1.5);
      transform-origin: ${({ isRight }) => (isRight ? '100% 50%' : '0 50%')};
      transform: scaleX(0);
      animation: ${appearAnimation} 0.8s 0.3s cubic-bezier(.47,.46,.28,.97) forwards;
      animation-play-state: ${({ playState }) => (playState ? 'running' : 'paused')};
      top: calc(-${({ theme }) => theme.font.size.headingSmall} / 6);
      left: ${({ isRight }) => (isRight ? 'unset' : '-5%')};
      right: ${({ isRight }) => (isRight ? '-5%' : 'unset')};
      background-color: ${({ theme }) => theme.color.beige};
      z-index: -1;
    }
    }
`;

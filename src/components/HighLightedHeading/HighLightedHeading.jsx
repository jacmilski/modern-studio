import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledHeading = styled.div`
    position: relative;
    font-size: ${({ theme }) => theme.font.size.headingSmall};

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
      width: 50%;
      height: calc(${({ theme }) => theme.font.size.headingSmall} * 1.5);
      top: calc(-${({ theme }) => theme.font.size.headingSmall} / 6);
      left: -5%;
      background-color: ${({ theme }) => theme.color.beige};
      z-index: -1;
    }
    }
`;

const HighLightedHeading = ({ level, children }) => (
  <StyledHeading as={`h${level}`}>{children}</StyledHeading>
);

HighLightedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
};

HighLightedHeading.defaultProps = {
  level: '2',
};

export default HighLightedHeading;

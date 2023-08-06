import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconWrapper = styled.span`
    display: inline-block;
    margin: 0 20px;

    /* ${({ theme }) => theme.mq.desktop} {
      margin: 0 15px;

      svg path {

        fill: white;
      }
    } */

    svg {
        width: 100%;
        height: auto;
    }

    svg path {
        fill: &{({ isDark }) => (isDark ? '#000' : '#fff')};
    }
`;

const StyledIcon = ({ children }) => (
  <StyledIconWrapper>
    {children}
  </StyledIconWrapper>
);

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledIcon;

import React from 'react';
import PropTypes from 'prop-types';
import { StyledIconWrapper } from './StyledIcon.styles';

const StyledIcon = ({ children }) => (
  <StyledIconWrapper>
    {children}
  </StyledIconWrapper>
);

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledIcon;

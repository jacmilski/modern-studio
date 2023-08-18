import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './HighLightedHeading.styles';

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

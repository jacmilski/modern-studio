/* eslint-disable no-undef */
// @ts-nocheck
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import { StyledHeading } from './HighLightedHeading.styles';

const HighLightedHeading = ({
  level, children, isRight, width,
}) => {
  const headingRef = useRef(null);
  const [playState, setPlayState] = useState(false);

  const handlePlayStateChange = throttle(() => {
    const { top } = headingRef.current.getBoundingClientRect();
    if (top < 800) {
      setPlayState(true);
    }
  }, 150);

  useEffect(() => {
    document.addEventListener('scroll', handlePlayStateChange);

    return () => {
      document.removeEventListener('scroll', handlePlayStateChange);
    };
  }, []);

  return (
    <StyledHeading
      playState={playState}
      ref={headingRef}
      width={width}
      isRight={isRight}
      as={`h${level}`}
    >
      {children}
    </StyledHeading>
  );
};

HighLightedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
  isRight: PropTypes.bool,
  width: PropTypes.string,
};

HighLightedHeading.defaultProps = {
  level: '2',
  isRight: false,
  width: '50%',
};

export default HighLightedHeading;

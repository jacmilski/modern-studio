/* eslint-disable linebreak-style */
// @ts-nocheck
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../assets/styles/GlobatStyles';
import theme from '../assets/styles/theme';
import { Navigation } from './Navigation/Navigation';
import '../assets/styles/normalize.css';

export const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

/* eslint-disable linebreak-style */
// @ts-nocheck
const React = require('react');
const { MainTemplate } = require('./src/components/MainTemplate');

exports.wrapPageElement = ({ element, props }) => (
  <MainTemplate {...props}>{element}</MainTemplate>
);

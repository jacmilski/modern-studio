/* eslint-disable linebreak-style */
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

export const ContentWrapper = styled(({ isSubpage, ...props }) => <div {...props} />)`
  padding: 0 20px;
  margin: ${({ isSubpage }) => (isSubpage ? '130px' : '0')} auto 50px auto;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1920px;
    margin: ${({ isSubpage }) => (isSubpage ? '180px' : '0')} auto 100px auto;
    padding: 0 100px;
  }
`;

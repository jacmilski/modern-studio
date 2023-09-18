/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { getPageSlug } from '../../helpers/getPageSlug';
import {
  ThumbnailImage,
  ThumbnailInfo,
  ThumbnailWrapper,
} from './Thumbnail.styles';

export const Thumbnail = ({ imageSource, address, title }) => {
  console.log('Thumbnail', imageSource, address, title);
  return (
    <ThumbnailWrapper to={getPageSlug(address).toLowerCase()}>
      <ThumbnailImage src={imageSource} alt="" />
      <ThumbnailInfo>
        <p>{address}</p>
        <p>{title}</p>
      </ThumbnailInfo>
    </ThumbnailWrapper>
  );
};

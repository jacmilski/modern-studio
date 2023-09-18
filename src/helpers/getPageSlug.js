/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import slugify from 'slugify';

export const getPageSlug = (address) => `/oferta/${slugify(address).toLowerCase()}`;

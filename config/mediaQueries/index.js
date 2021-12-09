/* eslint-disable prefer-const */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

const BREAKPOINTS = {
  smallestMobile: 350,
  smallMobile: 400,
  mobile: 600,
  bigMobile: 700,
  smallTablet: 800,
  tablet: 900,
  bigTablet: 1000,
  medium: 1150,
  smallLaptop: 1250,
  laptop: 1400,
  bigLaptop: 1500,
  large: 1680,
  xlarge: 1920,
  retina: 2560,
};

const MEDIA_QUERIES = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  let prefix = typeof BREAKPOINTS[label] === 'string' ? '' : 'min-width:';
  let suffix = typeof BREAKPOINTS[label] === 'string' ? '' : 'px';
  accumulator[label] = (cls) =>
    css`
      @media screen and (${prefix + BREAKPOINTS[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});

export { BREAKPOINTS, MEDIA_QUERIES };

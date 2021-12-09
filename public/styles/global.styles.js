import { css } from '@emotion/react';
import { FONT_FAMILY, COLOR, COMMON_STYLES, MEDIA_QUERIES } from '@config';

const global = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: ${FONT_FAMILY};
    font-weight: 400;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    overflow-anchor: none;
  }

  #page-root {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background-color: ${COLOR.lightBlack};
    background-image: linear-gradient(
      175deg,
      rgba(10, 12, 15, 0.04) 0%,
      28.448274731636047%,
      rgba(42, 25, 57, 0.04) 56.896549463272095%,
      65.51724076271057%,
      rgba(100, 37, 97, 0.04) 74.13793206214905%,
      81.03448450565338%,
      rgba(160, 57, 128, 0.04) 87.93103694915771%,
      93.96551847457886%,
      rgba(207, 82, 148, 0.04) 100%
    );

    ${MEDIA_QUERIES.tablet(css`
      &::before {
        content: '';
        position: absolute;
        right: calc(-6.1537rem / 3);
        top: calc(6.5rem + 3.875rem);
        display: block;
        width: 6.1537rem;
        height: 7.6256rem;
        background-color: #03cb34;
        border-radius: 60%;
        transform: rotate(90deg);
        filter: blur(61.3863px);
        opacity: 0.6;
      }

      &::after {
        content: '';
        position: absolute;
        left: 3rem;
        top: 26.625rem;
        display: block;
        width: 6.25rem;
        height: 7.745rem;
        background-color: ${COLOR.lightBlue};
        border-radius: 60%;
        transform: rotate(90deg);
        filter: blur(35.0779px);
        opacity: 0.2;
      }
    `)}
  }

  main {
    ${COMMON_STYLES.pageContentWrapper}
    z-index: 1;
    display: flex;
    width: 100%;
    margin-bottom: 8.5rem;

    ${MEDIA_QUERIES.tablet(css`
      &::before {
        content: '';
        position: absolute;
        right: calc(-45.5344rem / 1.5);
        top: 38.75rem;
        display: block;
        width: 45.5344rem;
        height: 56.4269rem;
        background-color: #ff6060;
        border-radius: 60%;
        transform: rotate(90deg);
        filter: blur(175.389px);
        opacity: 0.3;
      }
    `)}
  }
`;

export default global;

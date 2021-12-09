/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Global, jsx, css } from '@emotion/react';
// Global styles
import normalize from '../public/styles/normalize.styles';
import fonts from '../public/styles/fonts.styles';
import global from '../public/styles/global.styles';

function MyApp({ Component, pageProps }) {
  return (
    <div id="page-root">
      {/* Глобальные стили */}
      <Global styles={normalize} />
      <Global styles={fonts} />
      <Global styles={global} />
      {/* Содержимое страницы */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

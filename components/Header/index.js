import { css } from '@emotion/react';
// Config
import { COMMON_STYLES, MEDIA_QUERIES, COLOR } from '@config';
// components
import HeaderLogo from './HeaderLogo';

const headerStyles = css`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.625rem 0 1rem;
  background-color: ${COLOR.lightBlack};

  ${MEDIA_QUERIES.tablet(css`
    padding: 1.375rem 0;
  `)}
`;

const containerStyles = css`
  ${COMMON_STYLES.pageContentWrapper}
  display: flex;
  align-items: center;
  width: 100%;
`;

/**
 * Компонент `Header` отображает главную шапку сайта.
 *
 */
function Header() {
  return (
    <header css={headerStyles}>
      <div css={containerStyles}>
        <HeaderLogo />
      </div>
    </header>
  );
}

export default Header;

import { css } from '@emotion/react';
// Config
import { COMMON_STYLES, MEDIA_QUERIES } from '@config';
// components
import MobileAppLinksContainer from './MobileAppLinksContainer';
import OtherLinksContainer from './OtherLinksContainer';
import SocialsLinksContainer from './SocialsLinksContainer';

const footerStyles = css`
  ${COMMON_STYLES.pageContentWrapper}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 8.125rem;

  ${MEDIA_QUERIES.mobile(css`
    padding-bottom: 5rem;
  `)}
`;

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;

  & .right-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.125rem;
  }

  ${MEDIA_QUERIES.mobile(css`
    & .right-container {
      flex-direction: row;
      flex-wrap: wrap;
    }
  `)}

  ${MEDIA_QUERIES.tablet(css`
    flex-direction: row;
    flex-wrap: wrap;

    & .right-container {
      margin-left: auto;
      margin-top: 0;
    }
  `)}
`;

/**
 * Компонент `Footer` отображает подвал страницы.
 *
 */
function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={containerStyles}>
        <MobileAppLinksContainer />
        <div className="right-container">
          <OtherLinksContainer />
          <SocialsLinksContainer />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

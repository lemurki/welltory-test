import { css } from '@emotion/react';
// Config
import { MEDIA_QUERIES, COLOR, TRANSITION } from '@config';
// Icons
import { AppStoreIcon, GooglePlayIcon } from 'public/svg';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  ${MEDIA_QUERIES.smallMobile(css`
    flex-direction: row;
    flex-wrap: wrap;
  `)}

  ${MEDIA_QUERIES.mobile(css`
    margin-right: 1.5rem;
  `)}
`;

const descriptionStyles = css`
  white-space: nowrap;
  text-align: center;
  font-size: 1rem;
  line-height: 1.4;
  color: ${COLOR.white};
  width: fit-content;
  margin: 0;
  margin-bottom: 1.125rem;
  opacity: 0.7;

  ${MEDIA_QUERIES.smallMobile(css`
    margin-bottom: 0;
    margin-right: 0.8rem;
  `)}
`;

const linksContainerStyles = css`
  display: flex;
  align-items: center;

  & a:first-of-type {
    margin-right: 1.5rem;
    height: 2.1875rem;
    width: 1.9356rem;
  }

  & a:last-of-type {
    height: 2.0137rem;
    width: 1.78rem;
  }

  & a {
    display: inline-block;
    transition: opacity ${TRANSITION.slow} ease-in-out;

    &:hover,
    &:focus {
      opacity: 0.6;
    }

    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;

/**
 * Компонент `MobileAppLinksContainer` отображает контейнер с сылками на приложение.
 *
 */
function MobileAppLinksContainer() {
  return (
    <div css={containerStyles}>
      <p css={descriptionStyles}>Get the mobile app</p>
      <div css={linksContainerStyles}>
        <a
          href="https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8"
          aria-label="Open app in AppStore"
        >
          <AppStoreIcon aria-hidden />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.welltory.client.android"
          aria-label="Open app in Google Play"
        >
          <GooglePlayIcon aria-hidden />
        </a>
      </div>
    </div>
  );
}

export default MobileAppLinksContainer;

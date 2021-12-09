import { css } from '@emotion/react';
// Config
import { MEDIA_QUERIES, TRANSITION } from '@config';
// Icons
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'public/svg';

const containerStyles = css`
  display: flex;
  align-items: center;
  width: fit-content;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1.875rem;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-of-type) {
      margin-right: 1.25rem;
    }
  }

  ${MEDIA_QUERIES.mobile(css`
    margin-top: 0;
    margin-left: clamp(1.5rem, 4vw, 3.875rem);
  `)}
`;

const linkStyles = css`
  display: inline-block;
  width: 1.5625rem;
  height: 1.5625rem;
  opacity: 0.5;
  transition: opacity ${TRANSITION.slow} ease-in-out;

  &:hover,
  &:focus {
    opacity: 1;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;

/**
 * Компонент `SocialsLinksContainer` отображает контейнер с сылками на соц сети.
 *
 */
function SocialsLinksContainer() {
  return (
    <ul css={containerStyles} aria-label="List of socials links">
      <li>
        <a
          css={linkStyles}
          href="https://twitter.com/welltory"
          aria-label="twitter"
        >
          <TwitterIcon aria-hidden />
        </a>
      </li>
      <li>
        <a
          css={linkStyles}
          href="https://www.facebook.com/welltory"
          aria-label="facebook"
        >
          <FacebookIcon aria-hidden />
        </a>
      </li>
      <li>
        <a
          css={linkStyles}
          href="https://www.instagram.com/welltory/"
          aria-label="instagram"
        >
          <InstagramIcon aria-hidden />
        </a>
      </li>
      <li>
        <a
          css={linkStyles}
          href="https://www.linkedin.com/company/welltory"
          aria-label="linkedin"
        >
          <LinkedinIcon aria-hidden />
        </a>
      </li>
    </ul>
  );
}

export default SocialsLinksContainer;

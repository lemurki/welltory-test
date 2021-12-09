import Link from 'next/link';
import { css } from '@emotion/react';
// Config
import { MEDIA_QUERIES, TRANSITION } from '@config';
// Icons
import { LogoText } from 'public/svg';

const logoStyles = css`
  display: flex;
  align-items: center;
  transition: opacity ${TRANSITION.slow} ease-in-out;

  & img {
    width: 2.3319rem;
    height: 2.3319rem;
    margin-right: clamp(0.4063rem, 2vw, 0.8125rem);
  }

  & svg {
    width: 5.0225rem;
    height: 1.1825rem;
  }

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  ${MEDIA_QUERIES.tablet(css`
    & img {
      width: 2.5463rem;
      height: 2.4312rem;
    }
    & svg {
      width: 7.145rem;
      height: 1.6062rem;
    }
  `)}
`;

/**
 * Компонент `HeaderLogo` отображает логотип в шапке сайта.
 *
 */
function HeaderLogo() {
  return (
    <Link href="/">
      <a href="/" css={logoStyles}>
        <img
          src="/images/logo-png.png"
          srcSet="/images/logo-png2x.png 2x"
          alt="logo"
        />
        <LogoText aria-hidden />
      </a>
    </Link>
  );
}

export default HeaderLogo;

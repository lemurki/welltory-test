import { css } from '@emotion/react';
// Config
import { MEDIA_QUERIES, COLOR, TRANSITION } from '@config';

const containerStyles = css`
  display: flex;
  width: fit-content;

  & span {
    display: inline-block;
    width: 0.125rem;
    background-color: ${COLOR.white};
    opacity: 0.5;
    margin: 0 1.5rem;
  }

  ${MEDIA_QUERIES.mobile(css`
    margin-right: clamp(1.5rem, 4vw, 3.875rem);
  `)}
`;

const linkStyles = css`
  white-space: nowrap;
  text-align: center;
  font-size: 1rem;
  line-height: 1.4;
  color: ${COLOR.white};
  text-decoration: none;
  width: fit-content;
  opacity: 0.5;
  transition: opacity ${TRANSITION.slow} ease-in-out;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

/**
 * Компонент `OtherLinksContainer` отображает контейнер с прочими ссылками.
 *
 */
function OtherLinksContainer() {
  return (
    <div css={containerStyles}>
      <a css={linkStyles} href="https://welltory.com/terms/">
        Terms of use
      </a>
      <span aria-hidden />
      <a css={linkStyles} href="https://welltory.com/privacy/">
        Privacy policy
      </a>
    </div>
  );
}

export default OtherLinksContainer;

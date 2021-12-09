import { css } from '@emotion/react';
// Config
import { COLOR, TRANSITION } from '@config';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 21.0625rem;
  width: 100%;
  margin-top: clamp(1.5rem, 3vw, 1.875rem);
`;

const anchorStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: lowercase;
  text-align: center;
  text-decoration: none;
  color: ${COLOR.black};
  white-space: nowrap;
  width: 100%;
  height: 3rem;
  background: linear-gradient(
    91.33deg,
    #89a3ff 0%,
    #ff6060 54.17%,
    #ffbf00 100%
  );
  box-shadow: 0px 13.2985px 26.5969px rgba(255, 0, 63, 0.2);
  border-radius: 0.3125rem;
  transition: transform ${TRANSITION.slow} ease-in-out;

  &:hover,
  &:focus {
    transform: scale(105%);
  }
`;

const descriptionStyles = css`
  font-size: 0.75rem;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: ${COLOR.white};
  opacity: 0.5;
  width: fit-content;
  margin-top: 0.8125rem;
`;

/**
 * Компонент `ContinueLinkContainer` основной контент кнопки.
 *
 */
function ContinueLinkContainer() {
  return (
    <div css={containerStyles}>
      <a css={anchorStyles} href="#submit-buttons">
        Continue
      </a>
      <p css={descriptionStyles}>No commitments. Cancel anytime</p>
    </div>
  );
}

export default ContinueLinkContainer;

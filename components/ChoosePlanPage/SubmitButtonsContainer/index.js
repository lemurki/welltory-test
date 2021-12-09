import { useState, useContext, useEffect } from 'react';
import { css } from '@emotion/react';
// Config
import { COLOR, MEDIA_QUERIES, TRANSITION } from '@config';
// Context
import ChoosePlanPageContext from '../context';

const containerStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: 1.6875rem 1.3125rem;
  gap: 1.6875rem 1.3125rem;
  width: 100%;
  margin: 0;

  ${MEDIA_QUERIES.smallMobile(css`
    grid-template-columns: repeat(auto-fill, 20.9375rem);
  `)}
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: lowercase;
  text-align: center;
  cursor: pointer;
  border-radius: 0.3125rem;
  max-width: 20.9375rem;
  width: 100%;
  min-height: 3rem;
  padding: 0.5rem 0.5rem;
  transition: transform ${TRANSITION.slow} ease-in-out;

  &:hover,
  &:focus {
    transform: scale(105%);
  }

  &.--transparent {
    color: ${COLOR.white};
    background-color: transparent;
    border: 0.0625rem solid rgba(255, 255, 255, 0.3);
  }

  &.--gradient {
    grid-row: 1;
    border: none;
    background: linear-gradient(
      91.33deg,
      #89a3ff 0%,
      #ff6060 54.17%,
      #ffbf00 100%
    );
    box-shadow: 0px 13.2985px 26.5969px rgba(255, 0, 63, 0.2);

    ${MEDIA_QUERIES.mobile(css`
      grid-row: initial;
    `)}
  }
`;

/**
 * Компонент `SubmitButtonsContainer` отображает кнопки выбора версии плана и отправки формы.
 *
 */
function SubmitButtonsContainer() {
  const { setChooseVersion } = useContext(ChoosePlanPageContext);

  const [curentVersion, setCurentVersion] = useState('free');

  const onButtonClick = (version) => {
    setCurentVersion((state) => version);
  };

  useEffect(() => {
    setChooseVersion((state) => curentVersion);
  }, [curentVersion, setChooseVersion]);

  return (
    <div css={containerStyles} id="submit-buttons">
      <button
        className="--transparent"
        css={buttonStyles}
        type="submit"
        data-version="free"
        onClick={() => onButtonClick('free')}
      >
        go with the free version
      </button>
      <button
        className="--gradient"
        css={buttonStyles}
        type="submit"
        onClick={() => onButtonClick('pro')}
      >
        upgrade now
      </button>
    </div>
  );
}

export default SubmitButtonsContainer;

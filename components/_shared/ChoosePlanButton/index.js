import PropTypes from 'prop-types';
import { css } from '@emotion/react';
// Config
import { MEDIA_QUERIES, TRANSITION } from '@config';
// components
import DiscountLabel from './DiscountLabel';
import ButtonContent from './ButtonContent';

const buttonStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 21.0625rem;
  width: 100%;
  padding: 3.5rem 1.875rem 1.625rem;
  background-color: #1b212a;
  border: none;
  cursor: pointer;
  border-radius: 0.25rem;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: -0.0625rem;
    left: -0.0625rem;
    width: calc(100% + 0.0625rem * 2);
    height: calc(100% + 0.0625rem * 2);
    border-radius: 0.25rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity ${TRANSITION.slow} ease-in-out;
    clip-path: polygon(
      0% 0%,
      0% 100%,
      5% 100%,
      5% 5%,
      95% 5%,
      95% 95%,
      0 95%,
      0 100%,
      100% 100%,
      100% 0%
    );
    background-image: linear-gradient(
      91.33deg,
      #89a3ff 0%,
      #ff6060 54.17%,
      #ffbf00 100%
    );
  }

  &:hover,
  &:focus,
  &.--active {
    &::before {
      opacity: 1;
    }

    & .button-description {
      opacity: 1 !important;
    }
  }

  ${MEDIA_QUERIES.tablet(css`
    padding: 3.5rem 1.875rem 1.8125rem;
  `)}
`;

/**
 * Компонент `ChoosePlanButton` отображает кнопку выбора плана.
 *
 * @property {string} mainColor - Цвет ярлыка и цены карточки.
 * @property {string} buttonName - Название кнопки.
 * @property {string} price - Стоимость тарифа.
 * @property {string} curentPlan - Текущий тарифа.
 * @property {func} setCurentPlan - Функция изменения выбранного тарифа.
 * @property {string} [discount] - Скидка.
 * @property {string} [description] - Описание тарифа.
 */
function ChoosePlanButton({
  mainColor,
  buttonName,
  discount,
  description,
  price,
  curentPlan,
  setCurentPlan,
}) {
  return (
    <button
      css={buttonStyles}
      type="button"
      aria-label={`Choose ${buttonName}`}
      onClick={() => setCurentPlan((state) => buttonName)}
      className={curentPlan === buttonName ? '--active' : null}
    >
      {discount ? (
        <DiscountLabel discount={discount} color={mainColor} />
      ) : null}
      <ButtonContent
        priceColor={mainColor}
        buttonName={buttonName}
        discount={discount}
        description={description}
        price={price}
      />
    </button>
  );
}

ChoosePlanButton.defaultProps = {
  discount: null,
  description: null,
};

ChoosePlanButton.propTypes = {
  mainColor: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  discount: PropTypes.number,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  curentPlan: PropTypes.string.isRequired,
  setCurentPlan: PropTypes.func.isRequired,
};

export default ChoosePlanButton;

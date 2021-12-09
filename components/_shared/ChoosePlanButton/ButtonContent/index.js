import PropTypes from 'prop-types';
import { css } from '@emotion/react';
// Config
import { COLOR, MEDIA_QUERIES, TRANSITION } from '@config';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  & .button-name-container,
  & .button-description-container {
    display: flex;
    justify-content: space-between;
  }

  & .button-description-container {
    margin-top: 0.5rem;

    & .button-description {
      font-size: 0.75rem;
      line-height: 1.5;
      letter-spacing: 0.01em;
      color: ${COLOR.white};
      opacity: 0.5;
      margin: 0;
      transition: opacity ${TRANSITION.slow} ease-in-out;
    }

    & span {
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.02em;
      white-space: nowrap;
      color: #c0c3cd;
      text-decoration: line-through;
      margin-left: 1rem;
      opacity: 0.5;
    }
  }

  ${MEDIA_QUERIES.tablet(css`
    & .button-description-container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: initial;

      & .button-description {
        align-self: flex-start;
      }

      & span {
        align-self: flex-end;
        margin-bottom: 2.1875rem;
        opacity: 0.5;
      }
    }
  `)}
`;

const buttonNameStyles = css`
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: ${COLOR.white};
  margin: 0;
  width: fit-content;
`;

const basePriceStyles = css`
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.02em;
  white-space: nowrap;
  margin-left: 1rem;
  width: fit-content;
`;

/**
 * Компонент `ButtonContent` основной контент кнопки.
 *
 * @property {string} priceColor - Цвет цены.
 * @property {string} buttonName - Название кнопки.
 * @property {string} price - Стоимость тарифа.
 * @property {string} [discount] - Скидка.
 * @property {string} [description] - Описание тарифа.
 */
function ButtonContent({
  priceColor,
  buttonName,
  discount,
  description,
  price,
}) {
  const priceStyles = css`
    ${basePriceStyles}
    color: ${priceColor};
  `;
  // Высчитываем текущую цену.
  const currentPrice = discount ? price - price * (discount / 100) : price;

  return (
    <div css={containerStyles}>
      <div className="button-name-container">
        <h3 css={buttonNameStyles}>{buttonName}</h3>
        <span css={priceStyles} aria-label="Current price">
          $ {currentPrice.toFixed(2)}
        </span>
      </div>
      {discount || description ? (
        <div className="button-description-container">
          {description ? (
            <p className="button-description">{description}</p>
          ) : null}
          {discount ? <span>$ {price}</span> : null}
        </div>
      ) : null}
    </div>
  );
}

ButtonContent.defaultProps = {
  discount: null,
  description: null,
};

ButtonContent.propTypes = {
  priceColor: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  description: PropTypes.string,
};

export default ButtonContent;

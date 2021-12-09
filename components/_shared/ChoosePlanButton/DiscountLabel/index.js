import PropTypes from 'prop-types';
import { css } from '@emotion/react';
// Config
import { COLOR } from '@config';

const baseDiscountLabelStyles = css`
  position: absolute;
  top: -0.375rem;
  left: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1875rem;
  line-height: 1.6;
  letter-spacing: 0.02em;
  color: ${COLOR.lightBlack};
  max-width: 6.125rem;
  width: 100%;
  height: 2.375rem;
  border-radius: 0 0.25rem 0.25rem 0.25rem;
  padding: 0.25rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.375rem;
    width: 0.375rem;
    height: 0.375rem;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    opacity: 0.4;
  }
`;

/**
 * Компонент `DiscountLabel` отображает ярлык скидки.
 *
 * @property {string} color - Цвет ярлыка.
 * @property {string} discount - Скидка.
 */
function DiscountLabel({ color, discount }) {
  const discountLabelStyles = css`
    ${baseDiscountLabelStyles}
    background-color: ${color};

    &::before {
      background-color: ${color};
    }
  `;
  return <span css={discountLabelStyles}>- {discount}%</span>;
}

DiscountLabel.propTypes = {
  color: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
};

export default DiscountLabel;

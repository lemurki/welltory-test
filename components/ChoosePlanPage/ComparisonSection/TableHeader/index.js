import { css } from '@emotion/react';
// Config
import { MEDIA_QUERIES } from '@config';

const tableHeaderStyles = css`
  background-color: transparent !important;
  background-image: none !important;

  & tr {
    display: grid;
    grid-template-columns: 1fr 3.5rem 3.5rem;
    grid-gap: clamp(1rem, 2vw, 1.25rem);
    gap: clamp(1rem, 2vw, 1.25rem);

    ${MEDIA_QUERIES.bigMobile(css`
      grid-template-columns: 1fr 7.625rem 7.625rem;
    `)}

    & th {
      font-size: 1.375rem;
      line-height: 1.2;
      letter-spacing: 0.02em;
      font-weight: 400;
      text-align: center;
      padding-bottom: 0.9375rem;
      border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.7);
      text-transform: capitalize;

      &:first-of-type {
        text-align: start;
      }

      & span {
        display: none;
      }

      &.--gradient {
        background-image: linear-gradient(
          91.33deg,
          #89a3ff 0%,
          #ff6060 54.17%,
          #ffbf00 100%
        );
        background-clip: text;
        text-fill-color: transparent;
        border-image: linear-gradient(
          91.33deg,
          #89a3ff 0%,
          #ff6060 54.17%,
          #ffbf00 100%
        );
        border-image-slice: 1;
      }

      ${MEDIA_QUERIES.bigMobile(css`
        text-transform: initial;

        & span {
          display: inline-block !important;
        }
      `)}
    }
  }
`;

/**
 * Компонент `TableHeader` отображает шапку таблицы.
 *
 */
function TableHeader() {
  return (
    <thead css={tableHeaderStyles}>
      <tr>
        <th className="--cell-with-text">What you get</th>
        <th className="--cell-with-text">
          <span>for</span> free
        </th>
        <th className="--cell-with-text --gradient">
          <span>in</span> Pro
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;

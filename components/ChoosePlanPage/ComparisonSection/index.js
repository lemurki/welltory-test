import { css } from '@emotion/react';
// Config
import { COLOR, MEDIA_QUERIES } from '@config';
// components
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 43.25rem;
  width: 100%;
  margin: 0 auto 5.375rem;

  ${MEDIA_QUERIES.tablet(css`
    margin-bottom: 3.6875rem;
  `)}
`;

const sectionTitleStyles = css`
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${COLOR.white};
  width: fit-content;
  margin: 0;
  margin-bottom: 3.125rem;
`;

const tableStyles = css`
  color: ${COLOR.white};
  width: 100%;
`;

/**
 * Компонент `ComparisonSection` отображает секцию сравнения тарифов.
 *
 */
function ComparisonSection() {
  return (
    <section css={sectionStyles}>
      <h2 css={sectionTitleStyles}>Choose the best plan for you</h2>
      <table css={tableStyles}>
        <TableHeader />
        <TableBody />
      </table>
    </section>
  );
}

export default ComparisonSection;

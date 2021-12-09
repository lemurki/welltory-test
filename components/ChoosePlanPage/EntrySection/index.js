import { css } from '@emotion/react';
// Config
import { COLOR, MEDIA_QUERIES } from '@config';
// components
import EntryImage from './EntryImage';
import ButtonsContainer from './ButtonsContainer';
import ContinueLinkContainer from './ContinueLinkContainer';

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: clamp(3rem, 4vw, 4.375rem);
`;

const sectionTitleStyles = css`
  font-size: clamp(1.6875rem, 4vw, 2.3125rem);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${COLOR.white};
  width: 100%;
  margin: 0;
  margin-bottom: clamp(2.125rem, 4vw, 2.8125rem);

  ${MEDIA_QUERIES.tablet(css`
    letter-spacing: initial;
  `)}
`;

/**
 * Компонент `EntrySection` отображает вступтильную цекцию с кнопками выбора плана.
 *
 */
function EntrySection() {
  return (
    <section css={sectionStyles}>
      <EntryImage />
      <h2 css={sectionTitleStyles}>Take better care of yourself every day</h2>
      <ButtonsContainer />
      <ContinueLinkContainer />
    </section>
  );
}

export default EntrySection;

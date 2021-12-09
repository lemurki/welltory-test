import { css } from '@emotion/react';
// Config
import { MEDIA_QUERIES } from '@config';

const EntryImageStyles = css`
  display: none;

  ${MEDIA_QUERIES.tablet(css`
    display: inline-block;
    object-fit: cover;
    width: 14.375rem;
    height: 5.5625rem;
    margin-bottom: 1.25rem;
  `)}
`;

/**
 * Компонент `EntryImage` отображает приветственную картинку.
 *
 */
function EntryImage() {
  return (
    <img
      css={EntryImageStyles}
      src="/images/fp-entry-image.png"
      srcSet="/images/fp-entry-image2x.png 2x, /images/fp-entry-image3x.png 3x"
      alt="welltory"
    />
  );
}

export default EntryImage;

/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';
// Config
import { WIDTH, PADDING } from '../sizes';

const TRANSITION = {
  fast: '0.08s',
  slow: '0.2s',
};

const COMMON_STYLES = {
  visuallyHidden: css`
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  `,
  visuallyHiddenReset: css`
    position: static;
    height: initial;
    width: initial;
    overflow: visible;
    clip: initial;
    white-space: initial;
  `,
  pageContentWrapper: css`
    max-width: ${WIDTH.pageWrapper};
    margin: 0 auto;
    padding-left: clamp(${PADDING.page.small}, 4vw, ${PADDING.page.big});
    padding-right: clamp(${PADDING.page.small}, 4vw, ${PADDING.page.big});
  `,
};

export { TRANSITION, COMMON_STYLES };

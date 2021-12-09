import { css } from '@emotion/react';
// Config
import { COLOR, MEDIA_QUERIES } from '@config';
// Icons
import { CheckIcon } from 'public/svg';

const tableBodyStyles = css`
  & tr {
    display: grid;
    grid-template-columns: 1fr 3.5rem 3.5rem;
    grid-gap: clamp(1rem, 2vw, 1.25rem);
    gap: clamp(1rem, 2vw, 1.25rem);

    &.--usual {
      &:not(:last-of-type) {
        margin-bottom: 2.3125rem;
        border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.4);

        ${MEDIA_QUERIES.bigMobile(css`
          margin-bottom: 1.5rem;
        `)}
      }
    }

    &.--title {
      grid-template-columns: 1fr;
      font-size: 1.375rem;
      line-height: 1.2;
      letter-spacing: 0.02em;
      width: 100%;
      margin-top: clamp(2.25rem, 4vw, 2.8125rem);
      margin-bottom: 2.25rem;
      border: none;

      & td {
        text-align: center;

        &.--gradient {
          background-image: linear-gradient(
            91.33deg,
            #89a3ff 0%,
            #ff6060 54.17%,
            #ffbf00 100%
          );
          background-clip: text;
          text-fill-color: transparent;
        }
      }
    }

    & td:not(.--title) {
      font-size: 0.9375rem;
      line-height: 1.3;
      letter-spacing: 0.01em;
      padding-bottom: 1rem;

      &.--false,
      &.--true {
        position: relative;
      }

      &.--false {
        & span {
          position: absolute;
          top: calc((100% - 0.0625rem - 1rem) / 2);
          left: calc((100% - 0.9281rem) / 2);
          width: 0.9281rem;
          height: 0.0625rem;
          background-color: ${COLOR.white};
        }
      }

      &.--true {
        & svg {
          position: absolute;
          top: calc((100% - 1.1931rem - 1rem) / 2);
          left: calc((100% - 1.1931rem) / 2);
          width: 1.1931rem;
          height: 1.1931rem;
        }
      }
    }

    ${MEDIA_QUERIES.bigMobile(css`
      grid-template-columns: 1fr 7.625rem 7.625rem;
    `)}
  }
`;

const mockData = [
  {
    id: 1,
    title: 'Feel better fast',
    tableRows: [
      {
        id: 1,
        text: 'Personalized research papers: see how your lifestyle affects your health and what you can do about it',
        cellFree: false,
        cellPro: true,
      },
      {
        id: 2,
        text: 'Recommendations: get science-backed tips to beat insomnia, cure a hangover, support a panic attack, clear a headache, or get blood pressure under control',
        cellFree: false,
        cellPro: true,
      },
      {
        id: 3,
        text: 'Personalized move goals: your heartbeat and daily steps data will steer you toward better health — effortlessly',
        cellFree: false,
        cellPro: true,
      },
      {
        id: 4,
        text: 'Breathing practices: focus or unwind with scientifically-proven guided practices',
        cellFree: true,
        cellPro: true,
      },
      {
        id: 5,
        text: `Yesterday's move report: see if you’re doing enough to support your health`,
        cellFree: true,
        cellPro: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Gain rich health insights',
    tableRows: [
      {
        id: 1,
        text: 'Detailed heartbeat analytics: access stress, energy, and focus scores, metrics and charts — check in on how your body is doing and spot any changes',
        cellFree: false,
        cellPro: true,
      },
      {
        id: 2,
        text: 'In-depth blood pressure analysis: enter your numbers, and we’ll provide five extra indexes, give detailed interpretations, and alert you if something doesn’t look right',
        cellFree: false,
        cellPro: true,
      },
      {
        id: 3,
        text: 'Blood pressure reports: send your data to your doctor or print out neat reports with all of your readings',
        cellFree: false,
        cellPro: true,
      },
      {
        id: 4,
        text: 'Basic heartbeat analytics: just your stress, energy, and focus scores — no extra metrics',
        cellFree: true,
        cellPro: true,
      },
      {
        id: 5,
        text: `Basic blood pressure analysis: we’ll interpret your top and bottom numbers — without extra indexes `,
        cellFree: true,
        cellPro: true,
      },
      {
        id: 6,
        text: `Yesterday’s heart report sent to your feed daily: note the relationship between your activities and any changes to your heart rate `,
        cellFree: true,
        cellPro: true,
      },
    ],
  },
];

/**
 * Компонент `TableBody` отображает основную часть таблицы.
 *
 */
function TableBody() {
  return mockData.map((item) => (
    <tbody key={item.id} css={tableBodyStyles}>
      <tr className="--title" key={item.id}>
        <td className="--cell-with-text --title --gradient">{item.title}</td>
      </tr>
      {item.tableRows.map((row) => (
        <tr key={row.id} className="--usual">
          <td className="--cell-with-text">{row.text}</td>
          <td
            className={`--cell-with-icon ${
              row.cellFree === true ? '--true' : '--false'
            }`}
            aria-label={row.cellFree === true ? 'true' : 'false'}
          >
            {row.cellFree === true ? (
              <CheckIcon aria-hidden />
            ) : (
              <span aria-hidden />
            )}
          </td>
          <td
            className={`--cell-with-icon ${
              row.cellPro === true ? '--true' : '--false'
            }`}
            aria-label={row.cellPro === true ? 'true' : 'false'}
          >
            {row.cellPro === true ? (
              <CheckIcon aria-hidden />
            ) : (
              <span aria-hidden />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  ));
}

export default TableBody;

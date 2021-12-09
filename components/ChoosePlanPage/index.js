// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { css } from '@emotion/react';
// Config
import { COMMON_STYLES } from '@config';
// Context
import ChoosePlanPageContext from './context';
// components
import EntrySection from './EntrySection';
import SubmitButtonsContainer from './SubmitButtonsContainer';
import ComparisonSection from './ComparisonSection';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 43.25rem;
  width: 100%;
  margin: 0 auto;
`;

/**
 * Компонент `ChoosePlanPage` отображает содержимое страницы выбора плана.
 *
 */
function ChoosePlanPage() {
  const [choosePlan, setChoosePlan] = useState('');
  const [chooseVersion, setChooseVersion] = useState('');

  const data = {
    plan: choosePlan,
    version: chooseVersion,
  };

  async function onSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <>
      <h1 css={COMMON_STYLES.visuallyHidden}>Choose plan page</h1>
      <form css={containerStyles} method="post" onSubmit={onSubmit}>
        <ChoosePlanPageContext.Provider
          value={{ choosePlan, setChoosePlan, chooseVersion, setChooseVersion }}
        >
          <EntrySection />
          <ComparisonSection />
          <SubmitButtonsContainer />
        </ChoosePlanPageContext.Provider>
      </form>
    </>
  );
}

export default ChoosePlanPage;

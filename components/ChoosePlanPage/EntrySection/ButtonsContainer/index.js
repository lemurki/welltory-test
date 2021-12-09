import { useState, useContext, useEffect } from 'react';
import { css } from '@emotion/react';
// Config
import { COLOR, MEDIA_QUERIES } from '@config';
// components
import ChoosePlanButton from '@sharedComp/ChoosePlanButton';
// Context
import ChoosePlanPageContext from '../../context';

const containerStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: 1rem;
  gap: 1rem;
  width: 100%;
  margin: 0;

  ${MEDIA_QUERIES.smallMobile(css`
    grid-template-columns: repeat(auto-fill, 21.0625rem);
  `)}
`;

const mockData = [
  {
    id: 1,
    name: 'Monthly',
    price: 7.99,
    discount: 15,
    description: 'Billed every month',
    color: COLOR.lightBlue,
  },
  {
    id: 2,
    name: 'Annualy',
    price: 7.99,
    discount: 25,
    description: '$79 billed once a year',
    color: COLOR.yellow,
  },
];

function ButtonsContainer() {
  const { setChoosePlan } = useContext(ChoosePlanPageContext);

  const [curentPlan, setCurentPlan] = useState('Annualy');

  useEffect(() => {
    setChoosePlan((state) => curentPlan);
  }, [curentPlan, setChoosePlan]);

  return (
    <div css={containerStyles}>
      {mockData.map((item) => (
        <ChoosePlanButton
          key={item.id}
          mainColor={item.color}
          discount={item.discount}
          buttonName={item.name}
          description={item.description}
          price={item.price}
          curentPlan={curentPlan}
          setCurentPlan={setCurentPlan}
        />
      ))}
    </div>
  );
}

export default ButtonsContainer;

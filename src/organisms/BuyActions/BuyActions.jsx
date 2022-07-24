import React from 'react';
import BuyActions from '../../molecules/BuyActions/BuyActions';
import DepositDraftButton from '../../molecules/DepositDraftButton';
import BuyButtons from '../../atoms/BuyActions/BuyButtons';
import BuyInput from '../../atoms/BuyActions/BuyInput';

function BuyAction() {

  return (
    <>
    <BuyActions />
    <BuyInput />
    <BuyButtons />
    <DepositDraftButton />
    </>
  );
}

export default BuyAction;
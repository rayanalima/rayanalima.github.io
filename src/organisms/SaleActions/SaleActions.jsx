import React from 'react';
import SaleAction from '../../molecules/SaleActions/SaleActions';
import ButtonsSale from '../../molecules/SaleActions/ButtonsSale';
import DepositDraftButton from '../../molecules/DepositDraftButton';

function SaleActions() {

  return (
    <>
    <SaleAction />
    <ButtonsSale />
    <DepositDraftButton />
    </>
  );
}

export default SaleActions;
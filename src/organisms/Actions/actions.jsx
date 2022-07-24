import React from 'react';
import MyActions from '../../molecules/Actions/MyActions';
import ActionsFree from '../../molecules/Actions/ActionsFree';
import DepositButton from '../../atoms/Actions/DepositButton';
import DraftButton from '../../atoms/Actions/DraftButton';
import DepositDraftButton from '../../molecules/DepositDraftButton';

function UserActions() {
  return (
    <>
    <MyActions />
    <ActionsFree />
    <DepositDraftButton />
    </>
  );
}

export default UserActions;

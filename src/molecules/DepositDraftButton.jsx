import React from 'react';
import {
  Flex
} from '@chakra-ui/react';
import DepositButton from '../atoms/Actions/DepositButton';
import DraftButton from '../atoms/Actions/DraftButton';


function DepositDraftButton() {
  return (
    <>
    <Flex bg="#edf3f8" justify={'center'} >
    <DepositButton />
    <DraftButton />
    </Flex>
    </>
  );
};

export default DepositDraftButton;
import React, { useState } from 'react';
import {
  Stack,
  Button,
  Input,
  InputGroup,
  Flex
} from '@chakra-ui/react';
import NumberFormat from 'react-number-format';
import { MdAttachMoney } from 'react-icons/md';

function BuyInput() {
  const [value, setValue] = useState(0);

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <Flex bg="#edf3f8" justify={'center'}>
    <Stack bg="#edf3f8" spacing={4}>
      <InputGroup p={[0, 50]} w={['170', '2xl']} alignSelf={'center'}>
        <MdAttachMoney size={40} />
        <Input
          type={'number'}
          onChange={handleChange}
          placeholder="Informe um valor"
        />
      </InputGroup>
    </Stack>
    </Flex>
  );
}

export default BuyInput;

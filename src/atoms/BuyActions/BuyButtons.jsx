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

function BuyButtons() {
  const [value, setValue] = useState(0);

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <Flex bg="#edf3f8" justify={'center'}>
    <Stack bg="#edf3f8" spacing={4}>
      <Flex bg="#edf3f8" justify={'center'} >
      <Button
                data-testid='deposit'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w='20%'
                h='45'
                ml={28}
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "#E161A5",
                }}
                _active={{
                  bg: "#E161A5",
                }}
                >
                Voltar
              </Button>
              <Button
                data-testid='deposit'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w='20%'
                h='45'
                ml={10}
                mr={20}
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "#E161A5",
                }}
                _active={{
                  bg: "#E161A5",
                }}
                >
                Confirmar
              </Button>
      </Flex>
    </Stack>
    </Flex>
  );
}

export default BuyButtons;

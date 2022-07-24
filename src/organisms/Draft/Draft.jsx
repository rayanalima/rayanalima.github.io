import {
    Flex,
    Box,
    Text,
    Stack,
    Input,
    InputGroup,
    Heading
  } from '@chakra-ui/react';
  import { useState, useEffect } from 'react';
  import api from '../../services/api';
  import { FaMoneyBill } from 'react-icons/fa';
  import NumberFormat from 'react-number-format';
  import { MdAttachMoney } from 'react-icons/md';
import BuyButtons from '../../atoms/BuyActions/BuyButtons';
    
  function NewDraft() {
    const [user, setUser] = useState([]);
    const [value, setValue] = useState(0);
  
    const userId = 1;
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  
    useEffect(() => {
      api
        .get(`${userId}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(err => {
          console.error('ops! ocorreu um erro : ' + err);
        });
    }, []);
    return (
      <>
                  <Heading 
        bg="#edf3f8"
        textAlign={'center'}
        fontFamily='Monospace'
        fontSize='30px'
        type='submit'
        w='100%'
        h='45'
        color='black'
        p={5}
>
      Saque
    </Heading>
        <Flex
          bg="#edf3f8"
          _dark={{
            bg: '#3e3e3e',
          }}
          p={50}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mx="auto"
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg="white"
            _dark={{
              bg: 'gray.800',
            }}
            maxW="2xl"
          >
            <Flex mt={2}>
              <FaMoneyBill size={22} />
              <Text ml={3} textAlign="center">
                Saldo Atual
              </Text>
            </Flex>
            <NumberFormat
              value={user.saldo}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              fixedDecimalScale={true}
              decimalScale={2}
              prefix={'R$ '}
            />
          </Box>
        </Flex>
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
            <Flex bg="#edf3f8" justify={'center'}></Flex>
          </Stack>
        </Flex>
        <BuyButtons />
      </>
    );
  }
  
  export default NewDraft;
  
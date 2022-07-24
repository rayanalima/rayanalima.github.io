import React, { useContext, useEffect, useState } from 'react';
import {
  Flex,
  useColorModeValue,
  Heading,
  TableCaption,
  Stack,
  SimpleGrid,
  chakra,
} from '@chakra-ui/react';
import Context from '../../contexts/MyContext';
import api from '../../services/apiMyActions';

function BuyActions() {
  const [idAction, setIdAction] = useContext(Context);

  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get(`?id=${idAction}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        console.error('ops! ocorreu um erro : ' + err);
      });
  }, []);

  const bg = useColorModeValue('white', 'gray.800');
  const bg2 = useColorModeValue('white', 'gray.800');
  const bg3 = useColorModeValue('gray.100', 'gray.700');
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
      Comprar ações
    </Heading>
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{
            base: 'column',
          }}
          w="full"
          bg={{
            md: bg,
          }}
          shadow="lg"
        >
          {user.map((token, tid) => {
            return (
              <Flex
                direction={{
                  base: 'row',
                  md: 'column',
                }}
                bg={bg2}
                key={tid}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 4,
                  }}
                  w={{
                    base: 120,
                    md: 'full',
                  }}
                  textTransform="uppercase"
                  bg={bg3}
                  color={'gray.500'}
                  py={{
                    base: 1,
                    md: 4,
                  }}
                  px={{
                    base: 2,
                    md: 10,
                  }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>Empresa</span>
                  <span>Quantidade</span>
                  <span>Valor</span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 4,
                  }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                >
                  <span>{token.empresa}</span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {token.quantidade}
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {token.valor}
                  </chakra.span>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
      </>
  );
}

export default BuyActions;

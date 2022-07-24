import React, { useState, useEffect, useContext } from 'react';
import {
  Flex,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  ButtonGroup,
  IconButton,
  Th,
  useColorModeValue,
  Heading,
  TableCaption,
  Stack,
  SimpleGrid,
  chakra,
  Button,
  Icon
} from '@chakra-ui/react';
import Context from '../../contexts/MyContext'
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { FcSalesPerformance } from 'react-icons/fc'
import {MdAddShoppingCart} from 'react-icons/md'
import api from '../../services/apiMyActions';
import { Link } from 'react-router-dom';
import DepositButton from '../../atoms/Actions/DepositButton';
import DraftButton from '../../atoms/Actions/DraftButton';
import DepositDraftButton from '../DepositDraftButton';


function ActionsFree() {
  const [idAction, setIdAction] = useContext(Context);

  const [user, setUser] = useState([]);
  const userId = 1;

  useEffect(() => {
    api
      .get(`?usuario_id=${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        console.error('ops! ocorreu um erro : ' + err);
      });
  }, []);

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("#edf3f8", "gray.700");
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
      Ações disponiveis
    </Heading>
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{
          base: "column",
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
                base: "row",
                md: "column",
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
                  md: "full",
                }}
                textTransform="uppercase"
                bg={bg3}
                color={"gray.500"}
                py={{
                  base: 1,
                  md: 4,
                }}
                px={{
                  base: 2,
                  md: 10,
                }}
                fontSize="x-small"
                fontWeight="hairline"
              >
                <span>Empresa</span>
                <span>Quantidade</span>
                <span>Valor</span>
                <chakra.span
                  textAlign={{
                    md: "right",
                  }}
                >
                  Negociar
                </chakra.span>
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
                fontSize="small"
                mt={2}
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
                <Flex
                  justify={{
                    md: "end",
                  }}
                >
                  <Link to={'/buy'}>
                    <IconButton
                      colorScheme="blue"
                      icon={<MdAddShoppingCart />}
                      aria-label="Up"
                      onClick={() => setIdAction(token.id)}

                    />
                    </Link>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
    </>
  );
};

export default ActionsFree;
import React from 'react';
import {
  Box,
  VStack,
  chakra,
  Flex,
  HStack,
  useColorModeValue,
  useDisclosure,
  Button,
  IconButton,
  CloseButton,
  Image
} from '@chakra-ui/react';
import {AiOutlineMenu} from 'react-icons/ai'
import XPLogo from '../images/img2.png'
import { Link } from "react-router-dom";


function Navbar() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <Image w={ ['50%', '10%']} src={XPLogo}/>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Link to={'/actions/disponible'}>
                <Button variant="ghost">Ações disponiveis</Button>
                </Link>
                <Link to={'/actions/myactions'}>
                <Button variant="ghost">Minhas ações</Button>
                </Link>
                <Link to={'/deposit'}>
                <Button variant="ghost">Depósito</Button>
                </Link>
                <Link to={'/draft'}>
                <Button variant="ghost">Saque</Button>
                </Link>
              </HStack>
              <Button colorScheme="brand" size="sm">
                Get Started
              </Button>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
  
                  <Button w="full" variant="ghost">
                  Ações disponiveis
                  </Button>
                  <Button w="full" variant="ghost">
                  Minhas ações
                  </Button>
                  <Button w="full" variant="ghost">
                  Depósito
                  </Button>
                  <Button w="full" variant="ghost">
                  Saque
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  };
  
export default Navbar;
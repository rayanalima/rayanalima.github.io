import React from "react";
// Chakra imports
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import img from '../../images/img2.png'
import TextInsertYourAccount from "../../atoms/Login/TextInsertYourAccount";
import HeadingLogin from "../../atoms/Login/HeadingLogin";
import InputsWithButtons from "../../molecules/Login/InputsWithButtons";

function LoginForm() {

  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='center'
        mb={'30px'}
        pt={{ sm: "100px", md: "0px" }}>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX={'hidden'}
          h={[100, 0, 0, '100%']}
          w={'40vw'}
          position={'absolute'}
          left={20}>
          <Box
          bgImage={img}
            w={'100%'}
            h={'100%'}
            bgSize={'cover'}
            bgPosition={'50%'}
            position={'absolute'}
            borderBottomLeftRadius={'20px'}></Box>
        </Box>
        <Flex
          alignItems='center'
          justifyContent='end'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "120%" }}>
          <Flex
            direction='column'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <HeadingLogin />
            <TextInsertYourAccount />
            <InputsWithButtons />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LoginForm;

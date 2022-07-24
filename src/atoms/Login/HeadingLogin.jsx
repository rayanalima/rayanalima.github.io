import React from 'react';
// Chakra imports
import { Heading, useColorModeValue } from '@chakra-ui/react';

function HeadingLogin() {
  const titleColor = useColorModeValue('#E161A5', '#ced5ed');

  return (
    <Heading color={titleColor} fontSize="32px" mb="10px">
      Bem vindo!
    </Heading>
  );
}

export default HeadingLogin;

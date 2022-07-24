import React from "react";
// Chakra imports
import {
  Text,
  useColorModeValue
} from "@chakra-ui/react";

function TextInsertYourAccount() {

    const textColor = useColorModeValue("#ced5ed", "#ced5ed");

  return (
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Insira seu e-mail e sua senha para acessar sua conta
            </Text>
  );
}

export default TextInsertYourAccount;

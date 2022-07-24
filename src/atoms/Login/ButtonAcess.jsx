import React from "react";
import {
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ButtonAcess() {

  return (
              <Link to={'/actions'}>
              <Button
                data-testid='xp-logo'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w='100%'
                h='45'
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
                ACESSAR SUA CONTA
              </Button>
</Link>
  );
}

export default ButtonAcess;

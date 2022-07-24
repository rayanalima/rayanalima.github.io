import React from "react";
import {
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function DepositButton() {

  return (
              <Link to={'/deposit'}>
              <Button
              justifyContent={'center'}
                data-testid='deposit'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w={['80%', '100%']}
                h='45'
                ml={[2, 15]}
                mr={[20]}
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
                Depósito
              </Button>
</Link>
  );
}

export default DepositButton;

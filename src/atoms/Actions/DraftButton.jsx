import React from "react";
import {
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function DraftButton() {

  return (
              <Link to={'/draft'}>
              <Button
                data-testid='deposit'
                fontSize='10px'
                type='submit'
                bg='#E161A5'
                w={['130%', '100%']}
                h='45'
                ml={[1, 10]}
                mr={[5, 20]}
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
                Retirada
              </Button>
</Link>
  );
}

export default DraftButton;

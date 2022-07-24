import React from "react";
// Chakra imports
import {
  FormControl,
} from "@chakra-ui/react";
import ButtonAcess from "../../atoms/Login/ButtonAcess";
import InputPassword from "../../atoms/Login/InputPassword";
import InputEmail from "../../atoms/Login/inputEmail";
import { UserContext } from "../Actions/ActionsFree";

function InputsWithButtons() {

  return (
            <FormControl>
              <InputEmail />
              <InputPassword />
              <ButtonAcess />
            </FormControl>
  );
}

export default InputsWithButtons;

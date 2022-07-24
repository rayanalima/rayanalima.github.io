import React, { useState } from 'react';
import {
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react';
import validator from 'validator';
import Context from '../../contexts/MyContext';

function InputPassword() {

  const [passwordError, setPasswordError] = useState()

  const validatePassword = (e) => {
    var password = e.target.value
  
    if (validator.isStrongPassword(password)) {
      setPasswordError(false)
    } else {
      setPasswordError('Senha errada ou não é forte o bastante')
    }
  }

  return (
    <>
      <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
        Senha
      </FormLabel>
      <Input
        borderRadius='15px'
        fontSize='sm'
        type='password'
        placeholder='Sua senha'
        size='lg'
        mb={2}
        onChange={(e) => validatePassword(e)}
      />
      <Text color={'red.400'} mb={2}>
      {passwordError}
      </Text>
    </>
  );
}

export default InputPassword;
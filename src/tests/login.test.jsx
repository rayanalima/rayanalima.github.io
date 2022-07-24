import React from 'react';
import { screen, getByLabelText } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import { render } from './test-utils';
import App from '../App';

test('Verifica renderização dos componentes', () => {
  render(<App />);
  expect(screen.getByText(/Bem vindo!/i)).toBeInTheDocument();
  expect(screen.getByTestId("xp-logo")).toBeInTheDocument();

  const searchBtn = screen.getByRole("button", { name: "ACESSAR SUA CONTA" });
  expect(searchBtn).not.toBeDisabled();
  userEvent.click(searchBtn);

  

});

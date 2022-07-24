import React, { useState} from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Login from './pages/Login';
import Context  from './contexts/MyContext'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Actions from './pages/Actions';
import Buy from './pages/BuyActions';
import Deposit from './pages/Deposit';
import DisponibleActions from './pages/DisponibleActions';
import Sale from './pages/SaleActions';
import Draft from './pages/Draft';
import MyAction from './pages/MyActions';

function App() {
  const [idAction, setIdAction] = useState(0);

  return (
    <Context.Provider value={[idAction, setIdAction]}>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/actions" element={<Actions />}/>
        <Route path="/buy" element={<Buy />}/>
        <Route path="/sale" element={<Sale />}/>
        <Route path="/deposit" element={<Deposit />}/>
        <Route path="/draft" element={<Draft />}/>
        <Route path="/actions/myactions" element={<MyAction />}/>
        <Route path="/actions/disponible" element={<DisponibleActions />}/>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </Context.Provider>
  );
}

export default App;




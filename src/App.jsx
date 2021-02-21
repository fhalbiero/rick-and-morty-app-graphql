import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ContextProvider from './context';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  return (
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={Favorites} />
        </ContextProvider>
      </BrowserRouter>
  );
}

export default App;

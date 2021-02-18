import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { FavoritesProvider } from './context/favorites';
import { CharactersProvider } from './context/characters';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  return (
      <BrowserRouter>
        <FavoritesProvider>
          <CharactersProvider>  
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/favorites' component={Favorites} />
          </CharactersProvider>  
        </FavoritesProvider>
      </BrowserRouter>
  );
}

export default App;

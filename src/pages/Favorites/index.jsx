import React from 'react';

import { useFavorites } from '../../context/favorites';
import Character from '../../components/Character';

import { Container } from './styles';


function Favorites() {

  const { favorites } = useFavorites();
  
  return ( 
      <Container>        
        <main>
          { favorites.map( character => <Character character={character} /> ) }
        </main> 
      </Container>
  );
}

export default Favorites;

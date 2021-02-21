import React, { useEffect } from 'react';

import { useFavorites } from '../../context/favorites';
import Character from '../../components/Character';
import { useRouterContext } from '../../context/route' ;

import { Container } from './styles';


function Favorites() {

  const { favorites } = useFavorites();
  const { setCurrentRoute } = useRouterContext();

  useEffect( () => {
    setCurrentRoute('favorite');
  }, []);
  
  return ( 
      <Container>        
        <main>
          { Object.values(favorites).map( character => <Character character={character} /> ) }
        </main> 
      </Container>
  );
}

export default Favorites;

import React, { useEffect } from 'react';

import Character from '../../components/Character';
import { useCharacters } from '../../context/characters';
import { useRouterContext } from '../../context/route' ;

import { Container, SpinnerContainer } from './styles';


function Home() {

  const { error, loading, data } = useCharacters();
  const { setCurrentRoute } = useRouterContext();

  useEffect( () => {
    setCurrentRoute('home');
  }, []);


  if (error) {
    return <spa>{ error.message}</spa>
  }

  if (loading || !data) {
    return (
      <SpinnerContainer>
        
      </SpinnerContainer>
    )
  }

  const { characters } = data;
  
  
  return ( 
      <Container>
        <main>
            { characters.results.map( character => <Character character={character} /> )}  
        </main> 
      </Container>
  );
}

export default Home;
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import Character from '../../components/Character';

import { Container } from './styles';

const mainQuery = gql`
query {
      characters(page: 0, filter: { name: "" }) {
          info { count, pages, next, prev }
          results {
              id, name, image, species, type, status, gender,
              location{ id, name }
              episode { id, name }
          }
      }
    }  

`;

function Home() {


  const { data, error, loading, fetchMore } = useQuery(mainQuery);

  if (error) return <div><span>{ error.message }</span></div>

  if (loading || !data) return <div>Loading...</div>
  

  const { characters } = data;
  
  
  return ( 
      <Container>
        <main>
            { characters.results.map( character => <Character character={character} /> ) }   
        </main> 
      </Container>
  );
}

export default Home;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import logo from '../../img/logo.png';

import useContentful from '../../hooks/useContentful';
import Character from '../Character';

import { Container } from './styles';

const defaultQuery = `
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

function Navbar() {

  const [ pageNum, setPageNum ] = useState(0);
  const [ name, setName ] = useState('');
  const [ query, setQuery ] = useState(defaultQuery);

  useEffect(() => {
    setQuery(`
        query {
            characters(page: ${pageNum}, filter: { name: "${name}" }) {
                info { count, pages, next, prev }
                results {
                    id, name, image, species, type, status, gender,
                    location{ id, name }
                    episode { id, name }
                }
            }
        } `);

      console.log(query);
  }, [pageNum, name]);


  const { data, errors } = useContentful(query);


  if (errors) {
    return <span>{ errors.map( error => error.message ).join(', ') }</span>
  }

  if (!data) {
    return <span>Loading...</span>
  }

  const handleNext = () => {
    
  }


  return ( 
      <Container>
          <h1>Rick and Morty</h1>
          
          <div className="div-buttons">
              <Link to="/favorites">
                <FiHeart />
              </Link>
            
              <button onClick={handleNext}>
                <FiArrowLeftCircle />
              </button>
            
              <button onClick={() => {}}>
                <FiArrowRightCircle />
              </button>
          </div>
      </Container>
  );
}

export default Navbar;
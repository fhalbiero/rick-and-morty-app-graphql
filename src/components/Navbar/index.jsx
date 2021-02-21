import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiArrowLeftCircle, FiArrowRightCircle, FiHome } from 'react-icons/fi';

import { useRouterContext } from '../../context/route';
import { useCharacters } from '../../context/characters';

import { Container } from './styles';



function Navbar() {

  const { currentRoute } = useRouterContext();
  const { handleNextPage, handlePreviewPage } = useCharacters();


  return ( 
      <Container>
          <h1>Rick and Morty</h1>
          
          <div className="div-buttons">
              {(currentRoute === 'home' ?
                  (
                    <>
                      <Link to="/favorites">
                        <FiHeart />
                      </Link>

                      <button onClick={handlePreviewPage}>
                        <FiArrowLeftCircle />
                      </button>
                    
                      <button onClick={handleNextPage}>
                        <FiArrowRightCircle />
                      </button>
                    </>
                ) :
                (
                  <Link to="/">
                   <FiHome />
                  </Link>
                )
              )}
          </div>
      </Container>
  );
}

export default Navbar;
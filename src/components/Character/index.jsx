import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useFavorites } from '../../context/favorites';

import { FaHeart, FaInfo, FaArrowLeft } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { Container } from './styles';
import { useRouterContext } from '../../context/route';

function Character({ character }) {

    const [ showCardBack, setShowCardBack ] = useState(false);
    const [ isFavorite, setIsFavorite ] = useState(false);

    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const { currentRoute } = useRouterContext();

    useEffect(() => {
        if (favorites[character.id]) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }    
    }, [character.id]);


    const handleFavorite = () => {
        
        if (isFavorite) {
            removeFromFavorites(character.id);
            setIsFavorite(false);
            return;
        } 

        addToFavorites(character);
        setIsFavorite(true);
    }


    return (
        <Container showCardBack={showCardBack} isFavorite={isFavorite}>
            <div className="card-container">
                <div className="card-front">
                    <button 
                        className="favorite-btn"
                        onClick={handleFavorite}
                    >
                        { currentRoute === 'home' ? <FaHeart /> : <FiTrash2 /> }
                    </button>
                    
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <button 
                        className="more-info-btn"
                        onClick={() => setShowCardBack(true)}
                    >
                        <FaInfo />
                        More informations
                    </button>
                </div>
                <div className="card-back">
                    <button 
                        className="return-btn"
                        onClick={() => setShowCardBack(false)}
                    >
                        <FaArrowLeft />
                    </button>

                    <h4>{character.name}</h4>
                    <span>Species: {character.species}</span>
                    { character.type && <span>Type: {character.type}</span> }
                    <span>Gender: {character.gender}</span>
                    <span>Location: {character.location.name}</span>
                    <span>Status: {character.status}</span>

                    <span className="span-episodes">Episodes: </span>
                    <div className="episodes">
                        <ul>
                            {character.episode.map( ep => <li>{ep.name}</li>)}
                        </ul> 
                    </div>
                </div>
            </div>
        </Container>
    )
}

Character.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
}

export default Character;
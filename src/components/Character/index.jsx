import PropTypes from 'prop-types';

import { useFavorites } from '../../context/favorites';

import { FaHeart } from 'react-icons/fa';
import { Container } from './styles';

function Character({ character }) {

    const { addToFavorites, removeFromFavorites } = useFavorites();

    return (
        <Container>
            <div className="card-container">
                <div className="card-front">
                    <FaHeart className="heart"/>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <span>{character.species}</span>
                </div>
                <div className="card-back">
                    <button 
                        className="favorite-btn"
                        onClick={() => addToFavorites(character)}
                    >
                        <FaHeart />
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
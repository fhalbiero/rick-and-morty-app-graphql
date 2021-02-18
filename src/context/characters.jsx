import { useState, createContext, useContext } from 'react';

const CharactersContext = createContext({});


const CharactersProvider = ({ children }) => {

    const [ characters, setCharacters ] = useState([]);

    const addToCharacters = (character) => {
         setCharacters([...characters, character]);
    }

    const removeFromCharacters = (id) => {
        const newCharacters = characters.filter( favorite => favorite.id !== id);
        setCharacters([...newCharacters]);
    }

    return (
        <CharactersContext.Provider value={{ characters, addToCharacters, removeFromCharacters }} >
            { children }
        </CharactersContext.Provider>
    )
}

const useCharacters = () => {
    const context = useContext(CharactersContext);

    if (!context) {
        throw new Error('Characters context must be called within a Characters provider');
    }

    return context;
}

export { CharactersProvider, useCharacters };
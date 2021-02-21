import { useState, useEffect, createContext, useContext } from 'react';

const FavoritesContext = createContext({});

const storageKey = '@RickMortyApp';

const FavoritesProvider = ({ children }) => {

    const [ favorites, setFavorites ] = useState({});

    useEffect(() => {
        const characters = JSON.parse(localStorage.getItem(storageKey));
        setFavorites(characters || {});
    }, [])


    const addToFavorites = (character) => {
        if (!favorites[character.id]) {
            favorites[character.id] = character;
        }

        localStorage.setItem(storageKey, JSON.stringify({...favorites}));
        setFavorites({...favorites});
    }

    
    const removeFromFavorites = (id) => {
        if (favorites[id]) {
            delete favorites[id];
        }
        localStorage.setItem(storageKey, JSON.stringify({...favorites}));
        setFavorites({...favorites});
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }} >
            { children }
        </FavoritesContext.Provider>
    )
}

const useFavorites = () => {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('Favorites context must be called within a favorites provider');
    }

    return context;
}

export { FavoritesProvider, useFavorites };
import { useState, useEffect, createContext, useContext } from 'react';

const FavoritesContext = createContext({});

const storageKey = '@RickMortyApp';

const FavoritesProvider = ({ children }) => {

    const [ favorites, setFavorites ] = useState([]);

    useEffect(() => {
        const characters = JSON.parse(localStorage.getItem(storageKey));
        setFavorites(characters || []);
    }, [])

    const addToFavorites = (character) => {
        localStorage.setItem(storageKey, JSON.stringify([...favorites, character]));
        setFavorites([...favorites, character]);
    }

    const removeFromFavorites = (id) => {
        const newFavorites = favorites.filter( favorite => favorite.id !== id);
        localStorage.setItem(storageKey, [...newFavorites]);
        setFavorites([...newFavorites]);
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
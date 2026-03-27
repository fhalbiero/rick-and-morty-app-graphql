import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { type Character } from '../types';

const storageKey = '@RickMortyApp';

interface FavoritesContextData {
  favorites: Record<string, Character>;
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextData | undefined>(undefined);

function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Record<string, Character>>({});

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    const characters = raw ? (JSON.parse(raw) as Record<string, Character>) : {};
    setFavorites(characters);
  }, []);

  const addToFavorites = (character: Character) => {
    if (favorites[character.id]) {
      return;
    }

    const nextFavorites = {
      ...favorites,
      [character.id]: character,
    };

    localStorage.setItem(storageKey, JSON.stringify(nextFavorites));
    setFavorites(nextFavorites);
  };

  const removeFromFavorites = (id: string) => {
    if (!favorites[id]) {
      return;
    }

    const { [id]: _, ...nextFavorites } = favorites;
    localStorage.setItem(storageKey, JSON.stringify(nextFavorites));
    setFavorites(nextFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('Favorites context must be called within a favorites provider');
  }

  return context;
}

export { FavoritesProvider, useFavorites };

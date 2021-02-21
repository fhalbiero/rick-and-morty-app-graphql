import React from 'react';

import { CharactersProvider } from './characters';
import { FavoritesProvider } from './favorites';
import { RouterContextProvider } from './route';

const ContextProvider = ({children}) => {
    return (
        <RouterContextProvider>
            <CharactersProvider>
                <FavoritesProvider>
                    {children}
                </FavoritesProvider>
            </CharactersProvider>
        </RouterContextProvider>
    )
}

export default ContextProvider;
import { type ReactNode } from 'react';

import { CharactersProvider } from './characters';
import { FavoritesProvider } from './favorites';
import { RouterContextProvider } from './route';

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <RouterContextProvider>
      <CharactersProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </CharactersProvider>
    </RouterContextProvider>
  );
}

export default ContextProvider;

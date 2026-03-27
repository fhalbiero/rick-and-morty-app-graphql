import { createContext, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';

import { type CharactersData } from '../types';

const CHARACTERS = gql`
  query get($page: Int) {
    characters(page: $page, filter: { name: "" }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        type
        status
        gender
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;

interface CharactersContextData {
  data?: CharactersData;
  error?: Error;
  loading: boolean;
  handleNextPage: () => Promise<void>;
  handlePreviewPage: () => Promise<void>;
}

const CharactersContext = createContext<CharactersContextData | undefined>(undefined);

function CharactersProvider({ children }: { children: React.ReactNode }) {
  const { data, error, loading, fetchMore } = useQuery<CharactersData>(CHARACTERS, {
    variables: { page: 1 },
  });

  async function handleNextPage() {
    if (!data) {
      return;
    }

    const nextPage = data.characters.info.next;

    if (!nextPage) {
      return;
    }

    await fetchMore({
      variables: { page: nextPage },
      updateQuery: (_, { fetchMoreResult }) => fetchMoreResult ?? _,
    });
  }

  async function handlePreviewPage() {
    if (!data) {
      return;
    }

    const prevPage = data.characters.info.prev;

    if (!prevPage) {
      return;
    }

    await fetchMore({
      variables: { page: prevPage },
      updateQuery: (_, { fetchMoreResult }) => fetchMoreResult ?? _,
    });
  }

  return (
    <CharactersContext.Provider
      value={{
        data,
        error: error as Error | undefined,
        loading,
        handleNextPage,
        handlePreviewPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

function useCharacters() {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error('Characters context must be called within a Characters provider');
  }

  return context;
}

export { CharactersProvider, useCharacters };

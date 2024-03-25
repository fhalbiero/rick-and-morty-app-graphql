import React, { createContext, useContext } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const CharactersContext = createContext({});

const CHARACTERS = gql`
        query get($page: Int) {
            characters(page: $page, filter: { name: "" }) {
                info { count, pages, next, prev }
                results {
                    id, name, image, species, type, status, gender,
                    location{ id, name }
                    episode { id, name }
                }
            }
        }  

    `;

const CharactersProvider = ({ children }) => {

    const { data, error, loading, fetchMore } = useQuery(CHARACTERS, { 
        variables: { page: 1 }
    });


    async function handleNextPage() {
        if (data) {
            const nextPage = data.characters.info.next;

            if (!nextPage) return;

            return fetchMore({ 
                variables: { page: nextPage },
                updateQuery: ( prev, { fetchMoreResult } ) => {
                    return fetchMoreResult;
                }             
            });
        }
    }

    async function handlePreviewPage() {
        if (data) {
            const prevPage = data.characters.info.prev;

            if (!prevPage) return;

            return fetchMore({ 
                variables: { page: prevPage },
                updateQuery: ( prev, { fetchMoreResult } ) => {
                    return fetchMoreResult;
                }             
            });
        }
    }


    return (
        <CharactersContext.Provider value={{ data, error, loading, handleNextPage, handlePreviewPage }} >
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
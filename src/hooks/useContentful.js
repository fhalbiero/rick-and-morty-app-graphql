import { useState, useEffect } from 'react';


function useContentful(query) {

    const [ data, setData ] = useState(null);
    const [ errors, setErrors ] = useState(null);
  
    useEffect( () => {
        window.fetch('https://rickandmortyapi.com/graphql', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ query })
        })
        .then( response => response.json() )
        .then( (dt) => {
            console.log(dt);

            const { errors, data} = dt;
            if (errors) setErrors(errors);
            if (data) setData(data); 
        })
        .catch( error => setErrors([error]))
    }, [query]);

    return { data, errors };
}

export default useContentful;
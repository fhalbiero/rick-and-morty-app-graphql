import React, { createContext, useContext, useState } from 'react';

const RouteContext = createContext({});


const RouterContextProvider = ({children}) => {

    const [ currentRoute, setCurrentRoute ] = useState('home');
    
    return (
        <RouteContext.Provider value={{currentRoute, setCurrentRoute}} >
            {children}
        </RouteContext.Provider>
    )
} 


const useRouterContext = () => {
    const context = useContext(RouteContext);

    if (!context) {
        throw new Error("Router context must be called inside router provider");
    }

    return context;
}


export { RouterContextProvider, useRouterContext }
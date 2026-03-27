import { createContext, useContext, useState, type ReactNode } from 'react';

type CurrentRoute = 'home' | 'favorite';

interface RouteContextData {
  currentRoute: CurrentRoute;
  setCurrentRoute: (route: CurrentRoute) => void;
}

const RouteContext = createContext<RouteContextData | undefined>(undefined);

function RouterContextProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<CurrentRoute>('home');

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

function useRouterContext() {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error('Router context must be called inside router provider');
  }

  return context;
}

export { RouterContextProvider, useRouterContext };

import React from 'react';

const AppData = React.createContext(undefined);

export function AppProvider({children}) {
  const [user, setUser] = React.useState(undefined);
  return (
    <AppData.Provider value={{user, setUser}}>{children}</AppData.Provider>
  );
}

export const useAppData = () => React.useContext(AppData);

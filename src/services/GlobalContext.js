import React from 'react';

const initialState = { option : "" , userType:"Student", userId:""};

export const GlobalContext = React.createContext({});

const Store = ({children}) => {

  const [state, setState] = React.useState(initialState);

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Store;

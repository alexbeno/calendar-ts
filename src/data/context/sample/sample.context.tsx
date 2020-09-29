import React, { useState, createContext, ComponentType } from 'react';

interface User {
  id: number;
  token: string;
  lastname: string;
  firstname: string;
}

interface ContextProps {
  user: User;
  setUser: (user: User) => void;
}

const initialState = {
  id: -1,
  token: '',
  lastname: '',
  firstname: '',
};

export const AppContext = createContext<ContextProps>({
  user: initialState,
  setUser: (user) => {},
});

interface OwnProps {
  children: ChildNode
}

const AppProvider: React.FC<OwnProps> = (props) => {
  const [userValue, setUserValue] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        user: userValue,
        setUser: (user: User) => setUserValue(user),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

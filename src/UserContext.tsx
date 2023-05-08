import React, { createContext, useState, ReactNode } from 'react';

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {}
});

interface User {
  username: string;
  password: string;
  name: string;
  email: string;
  todos: Todo[];
  loggedIn: boolean;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
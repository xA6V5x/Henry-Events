import React, { useState, createContext, useEffect, useContext } from 'react';

type UserBody = {
     id: string;
     nick: string;
};

type props = {
     user: UserBody;
     setUser: React.Dispatch<React.SetStateAction<{}>>;
};

const Context = createContext<props>({} as props);

export const UserProvider = ({ children }: any) => {
     const [user, setUser] = useState('{}');
     //  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));

     //  useEffect(() => {
     //       localStorage.setItem('user', JSON.stringify(user));
     //  }, [user]);

     return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
};

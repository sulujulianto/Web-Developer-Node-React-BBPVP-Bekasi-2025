import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/client.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('mpn_admin_token'));
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('mpn_admin_user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('mpn_admin_token', token);
    } else {
      localStorage.removeItem('mpn_admin_token');
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('mpn_admin_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('mpn_admin_user');
    }
  }, [user]);

  const login = async (username, password) => {
    const { data } = await api.post('/api/auth/login', { username, password });
    if (data?.token) {
      setToken(data.token);
      setUser(data.user);
    }
    return data.user;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return <AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

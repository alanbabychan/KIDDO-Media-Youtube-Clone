import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const updateUser = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setUser(currentUser);
  };

  useEffect(() => {
    updateUser();
    
    const handleStorageChange = () => updateUser();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userChange', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userChange', handleStorageChange);
    };
  }, []);

  return { user, updateUser };
};
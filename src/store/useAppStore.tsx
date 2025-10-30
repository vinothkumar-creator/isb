// App Store - global state management using React Context
// Note: For production, consider using Redux, Zustand, or Recoil
import React, { createContext, useContext, useState, useCallback } from 'react';

interface AppState {
  user: {
    name: string | null;
    email: string | null;
  } | null;
  isLoading: boolean;
}

interface AppContextType extends AppState {
  setUser: (user: AppState['user']) => void;
  setIsLoading: (isLoading: boolean) => void;
  clearUser: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AppState['user']>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clearUser = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        isLoading,
        setUser,
        setIsLoading,
        clearUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppStore must be used within AppProvider');
  }
  return context;
};


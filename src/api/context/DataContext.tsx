import { setItem } from 'localforage';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define a type for your context
interface ContextType {
  mode: string;
  updateMode: (newData: string) => void;
}

// Create a context with an initial value
const DataContext = createContext<ContextType>({
    mode: '',
    updateMode: () => {},
});

// Create a provider component
export const DataContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<string>(() => {
    return localStorage.getItem("citypharmacymode") || 'light';
  });

  // Function to update the context data
  const updateMode = (newData: string) => {
    setMode(newData);  
    localStorage.setItem("citypharmacymode", newData);
  };

  return (
    <DataContext.Provider value={{ mode, updateMode }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useDataContext = () => {
  return useContext(DataContext);
};

'use client';
import { createContext, useContext } from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';

type TStore = {
  timestamp: number;
  updateTimestamp: () => void;
};

const initStore = {
  timestamp: Date.now(),
};

const zustandContext = createContext(null);
export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: TStore) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error('Store is missing the provider');

  return useZustandStore(store, selector);
};

export const initializeStore = (preloadedState: Partial<TStore> = {}) => {
  return createStore<TStore>((set, get) => ({
    ...initStore,
    ...preloadedState,
    updateTimestamp: () => {
      set({ timestamp: Date.now() });
    },
  }));
};

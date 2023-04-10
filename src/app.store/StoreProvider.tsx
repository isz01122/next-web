'use client';
import { useRef } from 'react';
import { initializeStore, Provider } from './store';

type TProps = {
  children: React.ReactNode;
  preloadedState?: object | any;
};

const StoreProvider: React.FC<TProps> = ({ children, preloadedState = {} }) => {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = initializeStore(preloadedState);
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;

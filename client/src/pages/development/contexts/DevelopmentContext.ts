import { createContext, Dispatch, SetStateAction } from 'react';

type DevelopmentContext = {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
};

export const DevelopmentContext = createContext<DevelopmentContext | null>(null);

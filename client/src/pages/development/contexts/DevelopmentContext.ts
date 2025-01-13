import { createContext, Dispatch, SetStateAction } from 'react';

export type IDevelopmentContext = {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
};

export const DevelopmentContext = createContext<IDevelopmentContext | null>(null);

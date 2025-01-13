import { createContext, Dispatch, SetStateAction } from 'react';

export type IAIContext = {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
};

export const AIContext = createContext<IAIContext | null>(null);

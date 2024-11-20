import { createContext, Dispatch, SetStateAction } from 'react';

type AIContext = {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
};

export const AIContext = createContext<AIContext | null>(null);

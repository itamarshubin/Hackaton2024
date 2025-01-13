import { createContext, Dispatch, SetStateAction } from 'react';

type SoftwareContext = {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
};

export const SoftwareContext = createContext<SoftwareContext | null>(null);

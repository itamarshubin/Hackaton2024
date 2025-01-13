import { FC } from 'react';
import { DevQuestion } from './DevQuestion';
import { developmentQuestions } from './utils/types';

export const DevQuestions: FC = () => {
  const renderedShit = developmentQuestions.map(question => <DevQuestion devQuestion={question} />);

  return renderedShit;
};

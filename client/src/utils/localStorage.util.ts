import { Category } from './checkAnswer';

export const saveAnswer = (category: Category, questionId: number, answer: string): void => {
  localStorage.setItem(category, JSON.stringify({ ...getAnswers(category), [questionId]: answer }));
};

export const getAnswers = (category: Category): Record<string, string> => {
  const answers = localStorage.getItem(category);
  if (answers) {
    return JSON.parse(answers);
  } else return {};
};

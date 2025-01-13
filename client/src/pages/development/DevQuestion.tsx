import { FC } from 'react';
import { DevelopmentQuestion } from './utils/types';
import { Box, Typography } from '@mui/material';
import QuestionTypography from '../ai/components/QuestionTypography';
import SubmitField from '../ai/components/SubmitField';

export const DevQuestion: FC<{ devQuestion: DevelopmentQuestion }> = ({ devQuestion }) => {
  return (
    <Box
      display="flex"
      height="100%"
      width="100%"
      alignItems="center"
      mt="2rem"
      flexDirection="column"
      p="5rem"
      justifyContent="space-between"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">{devQuestion.title}</Typography>
        <QuestionTypography mt="2rem">{devQuestion.generalIntroduction}</QuestionTypography>
      </Box>
      <SubmitField questionId={1} category="DEVELOPMENT" />
    </Box>
  );
};

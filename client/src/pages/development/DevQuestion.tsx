import { FC } from 'react';
import { DevelopmentQuestion } from './utils/types';
import { Box, Typography } from '@mui/material';
import QuestionTypography from '../ai/components/QuestionTypography';
import SubmitField from '../ai/components/SubmitField';
import { NiggaCodeBlock } from './components/CodeCopyBlock';

export const DevQuestion: FC<{ devQuestion: DevelopmentQuestion; index: number }> = ({ devQuestion, index }) => {
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
        <Typography variant="h2" dir="rtl">
          {index + ' - ' + devQuestion.title}
        </Typography>
        <QuestionTypography mt="2rem">{devQuestion.generalIntroduction}</QuestionTypography>
        <QuestionTypography mt="2rem">{devQuestion.puzzleSampleDescription}</QuestionTypography>
        <NiggaCodeBlock codeContent={devQuestion.puzzleSample}></NiggaCodeBlock>
        <QuestionTypography mt="2rem">{devQuestion.puzzleBreakdown}</QuestionTypography>
        <NiggaCodeBlock codeContent={devQuestion.codeBlockBreakdown}></NiggaCodeBlock>
        <QuestionTypography mt="2rem">{devQuestion.puzzleDownloadLinkText}</QuestionTypography>
        <QuestionTypography mt="2rem">{devQuestion.finalQuestion}</QuestionTypography>
      </Box>
      <SubmitField questionId={index} category="DEVELOPMENT" />
    </Box>
  );
};

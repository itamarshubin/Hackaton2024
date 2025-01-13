import { Box, Typography } from '@mui/material';
// import phoneNumber from '../../../assets/q1/phoneNumberpng.png';
import { FC } from 'react';
import QuestionTypography from '../../ai/components/QuestionTypography';
import SubmitField from '../../ai/components/SubmitField';

export const Question1: FC = () => {
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
        <Typography variant="h2">Question 1</Typography>
        <QuestionTypography mt="2rem">
          נכנסתם כשאתם עדיין בסחרחורת לתוך חדר חשוך עם מנורה מהבהבת וקירות צהובים, כל האווירה לא תורמת לתחושה בבטן שגם
          ככה במצב קשה בגלל הצ'ולנט.
        </QuestionTypography>
      </Box>
      <SubmitField questionId={1} category="DEVELOPMENT" />
    </Box>
  );
};

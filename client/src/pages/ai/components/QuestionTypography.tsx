import { Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

const QuestionTypography: FC<{ children: string } & TypographyProps> = params => {
  return (
    <Typography variant="h5" align="center" dir="rtl" {...params}>
      {params.children}
    </Typography>
  );
};

export default QuestionTypography;

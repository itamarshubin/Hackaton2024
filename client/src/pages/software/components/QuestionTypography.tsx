import { Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

const QuestionTypography: FC<{ children: string } & TypographyProps> = params => {
  return (
    <Typography dir="rtl" width='100%' {...params}>
      {params.children}
    </Typography>
  );
};

export default QuestionTypography;

import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import { Box } from '@mui/material';
import SubmitField from '../components/SubmitField';

export const Question6: FC = () => {
  return (
    <Box
      display="flex"
      height="100%"
      width="100%"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
        הקוד שנמצא במשימה הראשונה מוביל אתכם אל מבוך של קבצים – ספרייה ענקית הכוללת כמאה אלף קבצים. בתוכה, מסתתר בתוכן אחד הקבצים פלינדרום (מחרוזת הנקראת זהה משני הכיוונים) באורך של מעל 100 תווים סך הכל. עליכם למצוא את הפלינדרום הזה ולקרוא את המסר החבוי כרמז למשימה הבאה, שם הקובץ שבו נמצא הפלינדרום הוא הקוד לפתיחת השלב הבא.
        </QuestionTypography>
        <br/>
        <a href="https://www.dropbox.com/scl/fi/uj5e7qaqr49wgjqubt5h5/hard_drive.zip?rlkey=t6v4hphqw8xoyu435q4k9kttt&st=qmv5hgqr&dl=0" style={{ color: '#feb3ff'}}>
          Download Library
        </a>
      </Box>
      <SubmitField questionId={6} category="SOFTWARE" spice="DontLetMeDown"/>
    </Box>
  );
};

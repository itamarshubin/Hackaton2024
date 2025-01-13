import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import { Box } from '@mui/material';
import SubmitField from '../components/SubmitField';

export const Question2: FC = () => {
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
        הקוד שנמצא במשימה הראשונה מוביל אתכם אל מבוך של קבצים – ספרייה ענקית הכוללת כמאה אלף קבצים. בתוכה, מסתתר בתוכן אחד הקבצים פלאינדרום (מחרוזת הנקראת זהה משני הכיוונים) באורך שמוגדר בשלוש הספרות האחרונות של התוצאה מהמשימה הקודמת. עליכם למצוא את הפלאינדרום הזה ולקרוא את המסר החבוי כרמז למשימה הבאה, שם הקובץ שבו נמצא הפלאינדרום הוא הקוד לפתיחת השלב הבא.
        </QuestionTypography>
        <br/>
        <a href="#" style={{ color: '#feb3ff'}}>
          Download Library
        </a>
      </Box>
      <SubmitField questionId={2} category="SOFTWARE" spice="DontLetMeDown"/>
    </Box>
  );
};

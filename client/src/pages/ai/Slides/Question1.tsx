import { Box, Typography } from '@mui/material';
import phoneNumber from '../../../assets/q1/phoneNumberpng.png';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question1 = () => {
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
        <QuestionTypography>
          בחדר ישנו טלפון ולידו מסך ("לצורכי עבודה" כמובן), נראה שמישהו ביצע פה כבר מספר שיחות בשם האדמו"ר.
        </QuestionTypography>
        <QuestionTypography>על המסך מופיעים הדברים הבאים:</QuestionTypography>
        <QuestionTypography>הקישור: https://en.wikipedia.org/wiki/MNIST_database</QuestionTypography>
        <QuestionTypography>קובץ בשם: decoder.pth.</QuestionTypography>
        <QuestionTypography>
          לפתע אתם שמים לב כי על צידו של המסך נראה תלוי פתק קטן, אתם מתקרבים ורואים אותו בבירור:
        </QuestionTypography>
        <img src={phoneNumber} style={{ width: '50%' }} />
        <QuestionTypography>נראה כמו מספר טלפון...</QuestionTypography>
        <QuestionTypography>
          אתם מתקשרים ומסתבר שהמספר אינו פעיל, כנראה הרבנית המתוחכמת עשתה צופן נסתר לספרות ושמרה אותו במחשב, האם תוכלו
          להשתמש במידע שעל המסך ולמצוא את מספר הטלפון הנכון?
        </QuestionTypography>
      </Box>
      <SubmitField questionId={1} category="AI" />
    </Box>
  );
};

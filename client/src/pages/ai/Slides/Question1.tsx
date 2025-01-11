import { Box, Typography } from '@mui/material';
import phoneNumber from '../../../assets/q1/phoneNumberpng.png';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question1 = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
          נכנסתם כשאתם עדיין בסחרחורת לתוך חדר חשוך עם מנורה מהבהבת וקירות צהובים, כל האווירה לא תורמת לתחושה בבטן שגם
          ככה במצב קשה בגלל הצ'ולנט.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
          בחדר ישנו טלפון ולידו מסך ("לצורכי עבודה" כמובן), נראה שמישהו ביצע פה כבר מספר שיחות בשם האדמו"ר.
        </QuestionTypography>
        <br/>
        
        <QuestionTypography>על המסך מופיעים הדברים הבאים:</QuestionTypography>
        <br/>
        <QuestionTypography style={{ paddingRight: '2rem', color: '#da80ff' }}>הקישור: https://en.wikipedia.org/wiki/MNIST_database</QuestionTypography>
        <QuestionTypography style={{ paddingRight: '2rem', color: '#da80ff' }}>קובץ בשם: decoder.pth.</QuestionTypography>
        <br/>
        <QuestionTypography>
          לפתע אתם שמים לב כי על צידו של המסך נראה תלוי פתק קטן, אתם מתקרבים ורואים אותו בבירור:
        </QuestionTypography>
        <br/>
        <img src={phoneNumber} style={{ width: '50%' }} />
        <br/>
        <QuestionTypography>נראה כמו מספר טלפון...</QuestionTypography>
        <br/>
        <QuestionTypography>
          אתם מתקשרים ומסתבר שהמספר אינו פעיל, כנראה הרבנית המתוחכמת עשתה צופן נסתר לספרות ושמרה אותו במחשב, האם תוכלו
          להשתמש במידע שעל המסך ולמצוא את מספר הטלפון הנכון?
        </QuestionTypography>
      </Box>
      <SubmitField questionId={1} category="AI" />
    </Box>
  );
};

import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';
import Link from '@mui/material/Link';

export const Question3: FC = () => {
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
        כעת אתם ניצבים מול השומר של הכספת – תוכנה שמאתגרת את כוח הרצון שלכם. השומר מבקש מכם לנחש מספר מפתח בין 1 ל-1,000,000. רק מספר אחד נכון, וכל ניסיון שגוי נחשב ככישלון. אין קיצורי דרך – אתם לא מוגבלים בכמות הניסיונות, תצטרכו לנחש את מספר המפתח. הצלחה במשימה זו תוביל אתכם להודעה סודית, רמז שיכין אתכם לאתגר האחרון.       
        </QuestionTypography>
      </Box>
      <SubmitField questionId={3} category="SOFTWARE"  />
    </Box>
  );
};

import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question7: FC = () => {
  const LinuxHref = new URL('../../../assets/software/q7/linux-program', import.meta.url).href;
  const WindowsHref = new URL('../../../assets/software/q7/windows-program.exe', import.meta.url).href;

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
        <br/>
        <br/>
        <Box display="flex" justifyContent="center" gap="30px">
          <a href={LinuxHref} style={{ color: '#feb3ff'}} download="linux-program">
            Download Linux
          </a>
          <a href={WindowsHref} style={{ color: '#feb3ff'}} download="windows-program.exe">
            Download Windows
          </a>
        </Box>
        <br/>
      </Box>
      <SubmitField questionId={7} category="SOFTWARE"  />
    </Box>
  );
};

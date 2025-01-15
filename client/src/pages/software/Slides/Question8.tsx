import { Box } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question8: FC = () => {
  const LinuxHref = new URL('../../../assets/software/q8/linux-program', import.meta.url).href;
  const WindowsHref = new URL('../../../assets/software/q8/windows-program.exe', import.meta.url).href;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
        בלב הכספת שוכנת הבינה המלאכותית עצמה, והיא מגנה על הסוד הגדול. הבינה דורשת מכם לגלות את הסיסמה האחרונה: המורכבת מרשימה מוגדרת של תווים.  לא ניתן לפרוץ את הסיסמה בכוח כמו במשימה הקודמת, אך הבינה מגיבה בצורה ייחודית – היא בודקת תו אחרי תו את הסיסמה שהבאתם. בעזרת סבלנות, פענוח הרמז, ויכולת להתמודד עם אתגרי הזמן, תוכלו לחשוף את הסיסמה ולהגיע לסודה של הכספת.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        עליכם להריץ את התוכנה הבאה, עליה יש שרת מסוג TCP, בפורט 8080, עליכם להתחבר אליו ולשלוח לו את הסיסמה הנכונה, ולקבל את הרמז הבא בלוגים של השרת.
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
      <SubmitField questionId={8} category="SOFTWARE" />
    </Box>
  );
};

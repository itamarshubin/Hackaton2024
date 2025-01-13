import { Box } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question4: FC = () => {

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
        עליכם להריץ את התוכנה הבאה, עליה יש שרת מסוג TCP, בפורט 8080, עליכם להתחבר אליו ולשלוח לו את הסיסמה הנכונה, כשתגלו את הסיסמה הנכונה הכניסו אותה פה למטה.
        </QuestionTypography>
      </Box>
      <SubmitField questionId={4} category="SOFTWARE" />
    </Box>
  );
};

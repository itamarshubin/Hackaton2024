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
          הקשתם את הקוד הסודי, פתאום הקיר מתחיל לרעוד עד שהוא זז, יש פה המשך סודי! כשהכול חשוך ולא נעים אתם פתאום מגיעים
          לחדר הכי מפואר שראיתם בחיים ועל הקיר ישנו מסך ענק ועליו מפה ענקית ומנוע חיפוש, בקיר השני ישנו חלון גדול עם נוף
          לכל מאה שערים (או מחנה פליטים שועפאט, מי מבדיל?), אתם מציצים מהחלון שפתאום אתם קולטים בקצה הרחוב שרכב מפואר
          ביותר ובתוכו האדמו"ר נוסע מכאן! האדמו"ר נמלט! אתם מציצים בטלפון הלא כדר שלכם ורואים הודעת sms עם הטקסט הבא:
        </QuestionTypography>

        <Box width="80%" border={2} mt="2rem" mb="2rem" padding='1rem'>
            :Download the app.exe&nbsp;
          <Link href="https://www.dropbox.com/scl/fi/uzorhxw5w95b7nwh7poub/app.exe?rlkey=en39vqudgkosobok97spwkkoo&st=yqna2lrb&dl=0">
            here
          </Link>
          <br/>
          then open the cmd and type app.exe
        </Box>
        <QuestionTypography>
          אולי פה מסתתר מידע על המקום שאליו ברח האדמו"ר? אם תדעו להקליד את המיקום הנכון על המסך תוכלו למנוע הרבה נזק
          שהאדמו"ר רוצה לעולל.
        </QuestionTypography>
      </Box>
      <SubmitField questionId={3} category="AI" />
    </Box>
  );
};

import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question3: FC = () => {
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
      <Box display="flex" flexDirection="column" alignItems="center" height="80%" width="100%">
        <Typography variant="h2">Question 3</Typography>
        <QuestionTypography mt="2rem">
          הקשתם את הקוד הסודי, פתאום הקיר מתחיל לרעוד עד שהוא זז, יש פה המשך סודי! כשהכול חשוך ולא נעים אתם פתאום מגיעים
          לחדר הכי מפואר שראיתם בחיים ועל הקיר ישנו מסך ענק ועליו מפה ענקית ומנוע חיפוש, בקיר השני ישנו חלון גדול עם נוף
          לכל מאה שערים (או מחנה פליטים שועפאט, מי מבדיל?), אתם מציצים מהחלון שפתאום אתם קולטים בקצה הרחוב שרכב מפואר
          ביותר ובתוכו האדמו"ר נוסע מכאן! האדמו"ר נמלט! אתם מציצים בטלפון הלא כדר שלכם ורואים הודעת sms עם הטקסט הבא:
        </QuestionTypography>

        <Box width="70%" display="flex" alignItems="center" flexDirection="column" border={2} mt="1rem" mb="1rem">
          <QuestionTypography mt="1rem" fontSize="1rem">
            :Download the app.exe here
          </QuestionTypography>
          <QuestionTypography fontSize="1rem">
            https://drive.google.com/file/d/1r6RKH6Zc8Hz1FNlCn9zMmoMACwIfay_q/view?usp=sharing
          </QuestionTypography>
          <QuestionTypography mb="1rem" fontSize="1rem">
            than open the cmd and type app.exe
          </QuestionTypography>
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

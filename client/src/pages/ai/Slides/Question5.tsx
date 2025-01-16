import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';
export const Question5: FC = () => {
  const dataCsvHref = new URL('../../../assets/q5/data.csv', import.meta.url).href;

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
          אתם מקישים את הקוד על הדלת אך עדיין לא פותחים, הנהמות ביידיש לא מפסיקות והן נשמעות מפחידות וקרובות מתמיד,
          פתאום הדלת נפרצת ושם עומד המשב"ק! החסיד הכי גדול ושמן שיש בכל מאה שערים כולה, אתם מתחילים לרוץ על חייכם בלי
          להסתכל לאיפה אפילו, פתאום אתם מגיעים למבוי סתום! כשאתם עומדים מול הקיר אתם שומעים את המשב"ק מתקרב, הוא נראה
          רעב מאוד מאוד, הוא ממשיך לנהום ביידיש ומצביע ביד אחת על הפה שלו וביד שנייה על מכונה משוכללת שנמצאת ליד הקיר,
          אתם מזהים את המכונה! המילה האחרונה בתחום הtech-kosher! מכונה שיכולה בהתבסס על מאפיינים מסוימים של כל מאכל
          לזהות את כשרות המאכל, אתם לא מספיקים להתלהב כי נראה שהמשב"ק ממש רוצה לאכול, לפני שיאכל אתכם אתם פונים למכונה,
          המאפיינים שלפיהם מסווגים כל כשרות של מאכל היא התשובה שלכם! מצאו אילו 3 מאפיינים קריטיים לסיווג כשרות המאכל,
          משם אתם כבר תדעו מה לעשות.
        </QuestionTypography>
        <br/>
        <br/>
        <QuestionTypography color="#da80ff">
          קובץ להורדה
        </QuestionTypography>
        <a href={dataCsvHref} style={{ color: '#feb3ff'}} download="qestion5-data.csv">
          data.csv
        </a>
      </Box>

      <SubmitField questionId={5} category="AI" spice="varusTopLol" />
    </Box>
  );
};

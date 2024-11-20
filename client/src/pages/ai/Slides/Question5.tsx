import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';
export const Question5: FC = () => {
  const dataCsvHref = new URL('../../../assets/q5/data.csv', import.meta.url).href;

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
    >
      <Box display="flex" flexDirection="column" alignItems="center" height="70%" width="100%">
        <Typography variant="h2">Question 5</Typography>
        <QuestionTypography mt="2rem">
          אתם מקישים את הקוד על הדלת אך עדיין לא פותחים, הנהמות ביידיש לא מפסיקות והן נשמעות מפחידות וקרובות מתמיד,
          פתאום הדלת נפרצת ושם עומד המשב"ק! החסיד הכי גדול ושמן שיש בכל מאה שערים כולה, אתם מתחילים לרוץ על חייכם בלי
          להסתכל לאיפה אפילו, פתאום אתם מגיעים למבוי סתום! כשאתם עומדים מול הקיר אתם שומעים את המשב"ק מתקרב, הוא נראה
          רעב מאוד מאוד, הוא ממשיך לנהום ביידיש ומצביע ביד אחת על הפה שלו וביד שנייה על מכונה משוכללת שנמצאת ליד הקיר,
          אתם מזהים את המכונה! המילה האחרונה בתחום הtech-kosher! מכונה שיכולה בהתבסס על מאפיינים מסוימים של כל מאכל
          לזהות את כשרות המאכל, אתם לא מספיקים להתלהב כי נראה שהמשב"ק ממש רוצה לאכול, לפני שיאכל אתכם אתם פונים למכונה,
          המאפיינים שלפיהם מסווגים כל כשרות של מאכל היא התשובה שלכם! מצאו אילו 3 מאפיינים קריטיים לסיווג כשרות המאכל,
          משם אתם כבר תדעו מה לעשות.
        </QuestionTypography>

        <QuestionTypography mt="1rem">
          מעבר לתחושה הקריפית שמעביר בכם החדר פתאום הדלת נסגרת! זאת מלכודת! על הדלת מופיע מנעול ועליו קוד, בלית ברירה
          אתם חוזרים לבהות בחדר ובמיוחד ב2 התמונות של הרב גרוס, אולי המשם תבוא הישועה...
        </QuestionTypography>
        <QuestionTypography mt="2rem" color="info">
          קובץ להורדה
        </QuestionTypography>
        <a href={dataCsvHref} download="qestion5-data.csv">
          data.csv
        </a>
      </Box>

      <SubmitField questionId={5} category="AI" spice="varusTopLol" />
    </Box>
  );
};

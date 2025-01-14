import { Box } from '@mui/material';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question1 = () => {
  const LibraryHref = new URL('../../../assets/software/q1/library.txt', import.meta.url).href;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
        בשנת 2077, אדם מבריק ומסתורי המכונה האדריכל נעל עמוק בתוך כספת דיגיטלית קוד מקור של בינה מלאכותית פורצת דרך. הבינה הזו יכולה לשנות את פני האנושות – לטוב או לרע. כדי להגן על היצירה, האדריכל בנה סדרת משימות חכמות שמיועדות לאתגר את המוחות החדים ביותר. כל משימה קשורה לקודמתה, ומובילה אל הרמז למשימה הבאה. רק מי שיפענח את הרמזים ויתמודד עם כל המבחנים יצליח להגיע אל ליבה של הכספת ולגלות את סודה.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        האדריכל היה אובססיבי למתמטיקה וללוגיקה, והאתגר הראשון משקף את עולמו המחשבתי. בכניסה לכספת הדיגיטלית מחכה ספרייה ענקית של 1,000 ביטויים מתמטיים מקודדים. הביטויים כתובים בצורה של פונקציות (ADD, MULT, SUB) ויוצרים רצף חישובי מורכב. עליכם לנתח כל ביטוי, לחשב את ערכו, ולסכום את כל התוצאות.
        </QuestionTypography>
        <br/>
        <a href={LibraryHref} style={{ color: '#feb3ff'}} download="library.txt">
          Download Math Library
        </a>
      </Box>
      <SubmitField questionId={1} category="SOFTWARE" spice='DontEvenTry'/>
    </Box>
  );
};

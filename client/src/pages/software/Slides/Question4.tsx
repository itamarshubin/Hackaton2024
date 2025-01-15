
import { Box } from '@mui/material';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question4 = () => {
  const LibraryHref = new URL('../../../assets/software/q4/weights.txt', import.meta.url).href;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
        אחר הרבה ניסיונות לא מוצלחות לסדר את הבית מדרש, הוחלט לשמור את המשקל של כל הספרים משום מה.
        </QuestionTypography>
        <QuestionTypography>
        מצאו מדף שיכול להחזיק בדיוק 2020 גרם, תמצא את השתי ספרים שביחד ישקלו בדיוק 2020 גרם.
        שימו בתשובה את המכפלה שלהם.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        לדוגמא, מהרשימה הבאה:
        </QuestionTypography>
        <Box width="80%" border={2} mt="2rem" mb="2rem" padding='1rem' dir="rtl" fontSize="0.8em">       
1721 <br/>
979 <br/>
366 <br/>
299 <br/>
675 <br/>
1456

        </Box>
        <QuestionTypography>
        שתי הספרים הם ה-1721 וה-299, שביחד יוצאים 2020.
        </QuestionTypography>
        <QuestionTypography>
אז התשובה תהיה 1721*299=514579
        </QuestionTypography>
        <br/>
        <a href={LibraryHref} style={{ color: '#feb3ff'}} download="weights.txt">
         להורדת קובץ המשקלים
        </a>
      </Box>
      <SubmitField questionId={4} category="SOFTWARE"/>
    </Box>
  );
};

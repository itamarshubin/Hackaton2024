
import { Box } from '@mui/material';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question1 = () => {
  const LibraryHref = new URL('../../../assets/software/q1/grades.txt', import.meta.url).href;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
        לאחר חודש אלול מלא בתרדמת קולקטיבית בשיעור אחרי מנחה, הישיבה החליטה לשנות כל מיני דברים כדי להעלות את רמת הערנות. 
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        לא רלוונטי איך בוחרים, אבל הוחלט לתת לכל יום ״ציון  ערנות״
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        לדוגמא, להלן רשימה של ציונים:
        </QuestionTypography>
        <Box width="80%" border={2} mt="2rem" mb="2rem" padding='1rem' dir="rtl" fontSize="0.8em">       
199 <br/>
200 <br/>
208 <br/>
210 <br/>
200 <br/>
207 <br/>
240 <br/>
269 <br/>
260 <br/>
263
        </Box>
        <QuestionTypography>
        הישיבה תמיד מנסה לשפר מהציון של היום לשעבר.
        אז לדוגמא בציונים לעיל, היו 7 פעמים בהם היה עלייה בציון מהיום שלפני:
        </QuestionTypography>
        <Box width="80%" border={2} mt="2rem" mb="2rem" padding='1rem' dir="rtl" fontSize="0.8em">       
199 - ציון ראשון <br/>
200 - עלייה <br/>
208 - עלייה <br/>
210 - עלייה <br/>
200 - ירידה <br/>
207 - עלייה <br/>
240 - עלייה <br/>
269 - עלייה <br/>
260 - ירידה <br/>
263 - עלייה
        </Box>
        <QuestionTypography>
        להלן כל הציונים שהישיבה רשמה, לאחר הרבה זמן של הניסוי. 
        </QuestionTypography>
        <br/>
        <a href={LibraryHref} style={{ color: '#feb3ff'}} download="grades.txt">
          להורדת רשימת הציונים
        </a>
        <br/>
        <QuestionTypography>
        כמה פעמים היה לישיבה עלייה מהיום הקודם???
        </QuestionTypography>
      </Box>
      <SubmitField questionId={1} category="SOFTWARE"/>
    </Box>
  );
};

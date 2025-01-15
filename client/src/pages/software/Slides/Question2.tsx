
import { Box } from '@mui/material';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question2 = () => {
  const LibraryHref = new URL('../../../assets/software/q2/input.txt', import.meta.url).href;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
        כל בוקר בתפילה, יש רישום (כמו שאתם יודעים).
        הכל עובר ונשמר במחשב.
        </QuestionTypography>
        <QuestionTypography>
        איך זה נשמר? לכל בחור נשמר קובץ, ובתוכו ) עבור כל יום שהגיע, ו-( עבור כל יום שלא הגיע.
        הוחלט שעבור כל ) שאין לו ( תואם, הבחור יקבל שקל בסוף שנה. 
        </QuestionTypography>
        <QuestionTypography>
        לא חייב להיות לפי סדר.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        תכתבו תוכנה שתחשב עבור הקובץ הבא כמה אמורים לקבל:
        </QuestionTypography>
        <br/>
        <a href={LibraryHref} style={{ color: '#feb3ff'}} download="input.txt">
          להורדת קובץ הנוכחויות
        </a>
      </Box>
      <SubmitField questionId={2} category="SOFTWARE"/>
    </Box>
  );
};


import { Box } from '@mui/material';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question3 = () => {
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
        הלילה הוא שלישי בלילה.
        </QuestionTypography>
        <QuestionTypography>
        התחיל גשם חזק, ונפתח חור ענק בגג וטונות של מים התחיל להיכנס פנימה.
        אז כמובן היה לבחור לקחת את הקופסאות פיצות שנשארו, כדי לסתום את החור.
        </QuestionTypography>
        <QuestionTypography>
        השאלה אם יש מספיק??
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        בקובץ המצורף יש את המידות של כל החבילות פיצות. 
        </QuestionTypography>
        <QuestionTypography>
        לדוגמא, 3x5x6 מייצג קופסא שהגבוה 3, רוחב 5, ואורך 6.
        </QuestionTypography>
        <QuestionTypography>
        אז השטח קרטון שמקבלים הוא:
        </QuestionTypography>
        <QuestionTypography>
        2*5*6 + 2*3*5 + 2*6*3 ע״פ הנוסחה לשטח של קופסה.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        אבל יש פה עוד קאץ׳.
        </QuestionTypography>
        <QuestionTypography>
בגלל שזה קופסאות פיצה, נשאר עוד קצת קרטון, שתמיד יהיה בכמות של שטח הצד הקטן ביותר.
כלומר מה שנקבל מחבילת 3x5x6 יהיה:
2*5*6 + 2*3*5 + 2*6*3 + 3*5.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
        כמה שטח קרטון יש, אם אלו המידות של כל הקופסאות פיצה שיש בישיבה?
        </QuestionTypography>
        <br/>
        <a href={LibraryHref} style={{ color: '#feb3ff'}} download="cardboard_sizes.txt">
         להורדת קובץ המידות
        </a>
      </Box>
      <SubmitField questionId={3} category="SOFTWARE" />
    </Box>
  );
};

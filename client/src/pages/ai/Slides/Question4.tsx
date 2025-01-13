import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import SubmitField from '../components/SubmitField';

export const Question4: FC = () => {
  const codePyHref = new URL('../../../assets/q4/code.py', import.meta.url).href;
  const codeIpynbHref = new URL('../../../assets/q4/code.ipynb', import.meta.url).href;
  const dataCsvHref = new URL('../../../assets/q4/data.csv', import.meta.url).href;

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
          האדמו"ר ברח לבני ברק, להסתתר כנראה כדי שלא תתפסו אותו, אבל זה לא מה שחשוב עכשיו, עליכם למנוע נזק בטווח הקרוב
          כרגע.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
          לאחר שהקשתם את המיקום על המסך התוכן שלו משתנה, פתאום קופצות על המסך כל מיני טבלאות, נראה כמו מידע על הקהילה
          הקרובה של האדמו"ר, בטבלה המרכזית מופיע על כל חסיד את מיקומו בבית הכנסת, מידת היידישקייט שלו ומידת העושר שלו עם
          הכיתוב "מצא את החריג", כנראה קבלת השונה בחסידות לא משהו בכלל...
        </QuestionTypography>
        <br/>
        <QuestionTypography>
          פתאום הדלת נסגרת! ושוב מופיע קוד על הדלת, מבעד לדלת נשמעות נהמות ביידיש, הלב שלכם בתחתונים אבל כדאי להישאר
          מרוכזים! יש לכם חריגים למצוא, מה שזה לא אומר...
        </QuestionTypography>
        <br/>
        <QuestionTypography color="#da80ff">
          בחידה זו תוכלו להיעזר בקובץ הקוד המצורף או בגרסת המחברת שלו – לנוחיותכם.
        </QuestionTypography>
        <br/>
        <a href={codePyHref} style={{ color: '#feb3ff'}} download="code.py">
          code.py
        </a>
        <a href={codeIpynbHref} style={{ color: '#feb3ff'}} download="code.ipynb">
          code.ipynb
        </a>
        <a href={dataCsvHref} style={{ color: '#feb3ff'}} download="question4-data.csv">
          data.csv
        </a>
      </Box>
      <SubmitField questionId={4} category="AI" spice="surpriseMotherFucker" />
    </Box>
  );
};

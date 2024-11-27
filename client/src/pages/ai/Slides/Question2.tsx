import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import { Box, Stack, Typography } from '@mui/material';
import SubmitField from '../components/SubmitField';

import rg1Image from '../../../assets/q2/rg1.png';

export const Question2: FC = () => {
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
      <Box display="flex" flexDirection="column" alignItems="center" height="70%" width="100%">
        <Typography variant="h2">Question 2</Typography>
        <QuestionTypography mt="2rem">
          התקשרתם למספר ועונה קול חשוד "לכו ימינה בהמשך המסדרון לחדר הבקרה", מאחר ואין ברשותכם מידע נוסף אתם מחליטים
          להקשיב לקול, אתם עוברים דרך המסדרון לחדר קטן אך מפואר, על הקיר והשולחן ישנו מודיעין רב על הישיבה, מפות של גן
          יבנה, תפריט החדר אוכל ועוד הרבה מידע שחשבתם שלא מעניין אף אחד אך מסתבר שכן, בקיר הראשי של החדר ישנן 2 תמונות
          של הרב גרוס שנראות זהות אבל יש איזשהו הבדל שמציק לכם בעין, אתם רק לא יודעים מהו.
        </QuestionTypography>

        <QuestionTypography mt="1rem">
          מעבר לתחושה הקריפית שמעביר בכם החדר פתאום הדלת נסגרת! זאת מלכודת! על הדלת מופיע מנעול ועליו קוד, בלית ברירה
          אתם חוזרים לבהות בחדר ובמיוחד ב2 התמונות של הרב גרוס, אולי המשם תבוא הישועה...
        </QuestionTypography>
        <Stack spacing={2} direction="row" height="40%" mt="1rem" justifyContent="center">
          <img src={rg1Image} />
          <img src={rg1Image} />
        </Stack>
      </Box>
      <SubmitField questionId={2} category="AI" spice="suckmydick" />
    </Box>
  );
};

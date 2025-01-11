import { FC } from 'react';
import QuestionTypography from '../components/QuestionTypography';
import { Box, Stack, Typography } from '@mui/material';
import SubmitField from '../components/SubmitField';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import rg1Image from '../../../assets/q2/rg1.png';
import rg2Image from '../../../assets/q2/rg2.png';

export const Question2: FC = () => {
  return (
    <Box
      display="flex"
      height="100%"
      width="100%"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      overflow="auto"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <QuestionTypography>
          התקשרתם למספר ועונה קול חשוד "לכו ימינה בהמשך המסדרון לחדר הבקרה", מאחר ואין ברשותכם מידע נוסף אתם מחליטים
          להקשיב לקול, אתם עוברים דרך המסדרון לחדר קטן אך מפואר, על הקיר והשולחן ישנו מודיעין רב על הישיבה, מפות של גן
          יבנה, תפריט החדר אוכל ועוד הרבה מידע שחשבתם שלא מעניין אף אחד אך מסתבר שכן, בקיר הראשי של החדר ישנן 2 תמונות
          של הרב גרוס שנראות זהות אבל יש איזשהו הבדל שמציק לכם בעין, אתם רק לא יודעים מהו.
        </QuestionTypography>
        <br/>
        <QuestionTypography>
          מעבר לתחושה הקריפית שמעביר בכם החדר פתאום הדלת נסגרת! זאת מלכודת! על הדלת מופיע מנעול ועליו קוד, בלית ברירה
          אתם חוזרים לבהות בחדר ובמיוחד ב2 התמונות של הרב גרוס, אולי המשם תבוא הישועה...
        </QuestionTypography>
        <br/>
        <ImageList sx={{ height: '30vh' }} cols={2}>
          <ImageListItem>
            <img
              src={rg2Image}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={rg1Image}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Box>
      <SubmitField questionId={2} category="AI" spice="suckmydick" />
    </Box>
  );
};

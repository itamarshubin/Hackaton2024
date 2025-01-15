
import { Box } from '@mui/material';
import { useState } from 'react';
import { getAnswers } from '../../utils/localStorage.util';
import { SoftwareContext } from './contexts/SoftwareContext';
import { Question1 } from './Slides/Question1';
import { Question5 } from './Slides/Question5';
import { Question6 } from './Slides/Question6';
import { Question7 } from './Slides/Question7';
import { Question8 } from './Slides/Question8';

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Question2 } from './Slides/Question2';
import { Question3 } from './Slides/Question3';
import { Question4 } from './Slides/Question4';

export const SoftwareQuestions = () => {
  const [progress, setProgress] = useState<number>(Object.keys(getAnswers('SOFTWARE')).length + 1);
  const [activeQuestion, setActiveQuestion] = useState<number>(0)

  const handleNext = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
  };

  const handleBack = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
  };

  const questionComponent = [
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    Question7,
    Question8,
  ]

  const CurrentQuestion = questionComponent[activeQuestion];

  return (
    <SoftwareContext.Provider value={{ progress, setProgress }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box maxWidth="820px" width="94vw" sx={{ flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 3,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h4" sx={{ margin: 'auto' }}>משימה {activeQuestion + 1} - Dev</Typography>
        </Paper>
        <Paper
          elevation={1}>
          <Box sx={{ width: '100%', p: 4 }}>
            {activeQuestion <= questionComponent.length - 1 ? 
            <CurrentQuestion key={activeQuestion}/> : 
            <Box p={'40px'} width={"100%"} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant='h1' sx={{ color: '#da80ff' }}>THE END.</Typography>
            </Box>
          }
          </Box>
        </Paper>
        <MobileStepper
          variant="text"
          steps={Math.min(progress + 1, questionComponent.length)}
          position="static"
          activeStep={activeQuestion}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeQuestion >= progress}
            >
              Next
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeQuestion === 0}>
              Back
            </Button>
          }
        />
        </Box>
      </Box>
    </SoftwareContext.Provider>
  );
};

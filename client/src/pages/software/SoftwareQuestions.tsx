
import { Box } from '@mui/material';
import { useState } from 'react';
import { getAnswers } from '../../utils/localStorage.util';
import { SoftwareContext } from './contexts/SoftwareContext';
import { Question1 } from './Slides/Question1';
import { Question2 } from './Slides/Question2';
import { Question3 } from './Slides/Question3';
import { Question4 } from './Slides/Question4';

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
  ]

  const CurrentQuestion = questionComponent[activeQuestion];

  return (
    <SoftwareContext.Provider value={{ progress, setProgress }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box maxWidth="820px" sx={{ flexGrow: 1 }}>
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
          <Typography variant="h4" sx={{ margin: 'auto' }}>משימה {activeQuestion + 1} - Software</Typography>
        </Paper>
        <Paper
          elevation={1}>
          <Box sx={{ width: '100%', p: 2 }}>
            {activeQuestion <= 4 ? 
            <CurrentQuestion key={activeQuestion}/> : 
            <h1>FINISHED</h1>
          }
          </Box>
        </Paper>
        <MobileStepper
          variant="text"
          steps={progress}
          position="static"
          activeStep={activeQuestion}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeQuestion + 1 >= progress}
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

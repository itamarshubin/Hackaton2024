import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box, Button, TextField } from '@mui/material';
import { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';
import checkAnswer, { Category } from '../../../utils/checkAnswer';
import { getAnswers, saveAnswer } from '../../../utils/localStorage.util';
import { AIContext } from '../contexts/AIContext';
import CheckIcon from '@mui/icons-material/Check';

const SubmitField: FC<{ questionId: number; category: Category; spice?: string }> = ({
  questionId,
  category,
  spice = '',
}) => {
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getAnswers(category)[questionId]);
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowWrong] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const aiContext = useContext(AIContext);
  const [errorLottie, setErrorLottie] = useState<DotLottie | null>(null);
  const [successLottie, setSuccessLottie] = useState<DotLottie | null>(null);

  useEffect(() => {
    (async () => {
      const isCorrect = await checkAnswer(category, questionId, answer + spice);
      if (await checkAnswer(category, questionId, value.toLocaleUpperCase() + spice)) setShowSuccess(true);
      if (isCorrect) {
        setIsChecked(true);
        saveAnswer(category, questionId, answer);

        if ((aiContext?.progress || 0) < questionId + 1) {
          aiContext?.setProgress(questionId + 1);
        }
      }
      if (answer && !isCorrect) {
        setShowWrong(true);
      }
    })();
  }, [answer]);

  useEffect(() => {
    const onComplete = () => setShowWrong(false);
    const onComplete2 = () => setShowSuccess(false);
    errorLottie?.addEventListener('complete', onComplete);
    successLottie?.addEventListener('complete', onComplete2);
  }, [errorLottie]);

  if (isChecked) {
    if (showSuccess) return <SuccessAnimation setDotLottie={setSuccessLottie} />;
    return <Checked />;
  } else {
    return showError ? (
      <Wrong setDotLottie={setErrorLottie} />
    ) : (
      <Box display="flex" flexDirection="column" mt="2rem" mb="1.5rem" gap="1rem">
        <TextField
          value={value}
          slotProps={{ htmlInput: { style: { textAlign: 'center' } } }}
          onChange={value => {
            setValue(value.target.value);
          }}
        />
        <Button
          variant="text"
          size="large"
          onClick={() => {
            setAnswer(value.toLocaleUpperCase());
          }}
        >
          check answer
        </Button>
      </Box>
    );
  }
};

const Checked: FC = () => {
  return <CheckIcon color="success" sx={{ height: '150px', width: 'auto', paddingTop: '2rem' }} />;
};

const errorAnimationUrl = new URL('../../../assets/ErrorAnimation.json', import.meta.url).href;
const Wrong: FC<{
  setDotLottie: Dispatch<SetStateAction<DotLottie | null>>;
}> = ({ setDotLottie }) => (
  <Box width={'150px'} height={'150px'} >
    <DotLottieReact
      src={errorAnimationUrl}
      autoplay
      dotLottieRefCallback={dotLottie => {
        setDotLottie(dotLottie);
      }}
    />
  </Box>
);
const successAnimationUrl = new URL('../../../assets/SuccessAnimation.json', import.meta.url).href;

const SuccessAnimation: FC<{
  setDotLottie: Dispatch<SetStateAction<DotLottie | null>>;
}> = ({ setDotLottie }) => (
  <DotLottieReact
    style={{ height: '150px' }}
    src={successAnimationUrl}
    autoplay
    dotLottieRefCallback={dotLottie => {
      setDotLottie(dotLottie);
    }}
  />
);

export default SubmitField;

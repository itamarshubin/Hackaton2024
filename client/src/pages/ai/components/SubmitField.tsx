import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box, Button, TextField } from '@mui/material';
import { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';
import checkAnswer, { Category } from '../../../utils/checkAnswer';
import { getAnswers, saveAnswer } from '../../../utils/localStorage.util';
import { AIContext, IAIContext } from '../contexts/AIContext';
import CheckIcon from '@mui/icons-material/Check';
import { DevelopmentContext, IDevelopmentContext } from '../../development/contexts/DevelopmentContext';

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
  const contexts: Record<Category, React.Context<IDevelopmentContext | IAIContext | null>> = {
    AI: AIContext,
    DEVELOPMENT: DevelopmentContext,
  };
  const aiContext = useContext(contexts[category]);
  const [errorLottie, setErrorLottie] = useState<DotLottie | null>(null);
  const [successLottie, setSuccessLottie] = useState<DotLottie | null>(null);

  useEffect(() => {
    (async () => {
      const isCorrect = await checkAnswer(category, questionId, answer + spice);
      if (await checkAnswer(category, questionId, value.toLocaleUpperCase() + spice)) setShowSuccess(true);
      if (isCorrect) {
        setIsChecked(true);
        saveAnswer(category, questionId, answer);
        aiContext?.setProgress(questionId + 1);
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
      <Box display="flex" flexDirection="column" mt="2rem" mb="1.5rem">
        <TextField
          value={value}
          slotProps={{ htmlInput: { style: { textAlign: 'center' } } }}
          onChange={value => {
            setValue(value.target.value);
          }}
        />
        <Button
          variant="text"
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
  return <CheckIcon color="success" sx={{ height: '13vh', width: 'auto', paddingTop: '2rem' }} />;
};

const errorAnimationUrl = new URL('../../../assets/ErrorAnimation.json', import.meta.url).href;
const Wrong: FC<{
  setDotLottie: Dispatch<SetStateAction<DotLottie | null>>;
}> = ({ setDotLottie }) => (
  <Box width={'20%'} height={'20%'} mb="1rem">
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
    style={{ height: '20%', marginBottom: '1rem' }}
    src={successAnimationUrl}
    autoplay
    dotLottieRefCallback={dotLottie => {
      setDotLottie(dotLottie);
    }}
  />
);

export default SubmitField;

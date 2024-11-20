import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

import './styles.css';

import { Box } from '@mui/material';
import { useState } from 'react';
import { EffectCreative, Navigation } from 'swiper/modules';
import { getAnswers } from '../utils/localStorage.util';
import { AIContext } from './contexts/AIContext';
import { DisabledQuestion } from './components/DisabledQuestion';
import { Question1 } from './Slides/Question1';
import { Question2 } from './Slides/Question2';
import { Question3 } from './Slides/Question3';
import { Question4 } from './Slides/Question4';
import { Question5 } from './Slides/Question5';

export const AiQuestions = () => {
  const [progress, setProgress] = useState<number>(Object.keys(getAnswers('AI')).length + 1);
  return (
    <AIContext.Provider value={{ progress, setProgress }}>
      <Box paddingTop="5vh">
        <Swiper
          navigation={true}
          simulateTouch={false}
          effect={'creative'}
          initialSlide={progress - 1}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative, Navigation]}
        >
          <>
            <SwiperSlide>
              <>{progress >= 1 ? <Question1 /> : <DisabledQuestion />}</>
            </SwiperSlide>
            <SwiperSlide>{progress >= 2 ? <Question2 /> : <DisabledQuestion />}</SwiperSlide>
            <SwiperSlide>{progress >= 3 ? <Question3 /> : <DisabledQuestion />}</SwiperSlide>
            <SwiperSlide>{progress >= 4 ? <Question4 /> : <DisabledQuestion />}</SwiperSlide>
            <SwiperSlide>{progress >= 5 ? <Question5 /> : <DisabledQuestion />}</SwiperSlide>
          </>
        </Swiper>
      </Box>
    </AIContext.Provider>
  );
};

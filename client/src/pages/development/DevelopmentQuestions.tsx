import { FC, useState } from 'react';
import { DevQuestion } from './DevQuestion';
import { developmentQuestions } from './utils/types';
import { getAnswers } from '../../utils/localStorage.util';
import { DevelopmentContext } from './contexts/DevelopmentContext';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import { DisabledQuestion } from '../ai/components/DisabledQuestion';

export const DevQuestions: FC = () => {
  const [progress, setProgress] = useState<number>(Object.keys(getAnswers('DEVELOPMENT')).length + 1);
  return (
    <DevelopmentContext.Provider value={{ progress, setProgress }}>
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
          {developmentQuestions.map((question, index) => (
            <SwiperSlide>
              {/* {progress >= index + 1 ? <DevQuestion devQuestion={question} /> : <DisabledQuestion />} */}
              {<DevQuestion devQuestion={question} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </DevelopmentContext.Provider>
  );
};

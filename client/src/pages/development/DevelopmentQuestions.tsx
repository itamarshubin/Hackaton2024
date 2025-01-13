// import { Box } from '@mui/material';

// export const DevelopmentQuestions: React.FC = () => {
//   return (
//     // <DevelopmentContext.Provider value={{ progress, setProgress }}>
//     // <Box display="flex" justifyContent="center">
//     //     <DevelopmentList questions={userData?.questions || []} />
//     // </Box>
//     // </DevelopmentContext.Provider>
//     <Box>
//       <h1>Development Questions</h1>
//     </Box>
//   );
// };
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

import './styles.css';

import { Box } from '@mui/material';
import { useState } from 'react';
import { EffectCreative, Navigation } from 'swiper/modules';
import { getAnswers } from '../../utils/localStorage.util';
import { DevelopmentContext } from './contexts/DevelopmentContext';
import { DisabledQuestion } from '../ai/components/DisabledQuestion';
import { Question1 } from './slides/Question1';

export const DevelopmentQuestions: React.FC = () => {
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
          <>
            <SwiperSlide>{progress >= 1 ? <Question1 /> : <DisabledQuestion />}</SwiperSlide>
            {/* <SwiperSlide>{progress >= 2 ? <Question2 /> : <DisabledQuestion />}</SwiperSlide>
            <SwiperSlide>{progress >= 3 ? <Question3 /> : <DisabledQuestion />}</SwiperSlide>
            <SwiperSlide>{progress >= 4 ? <Question4 /> : <DisabledQuestion />}</SwiperSlide>
            <SwiperSlide>{progress >= 5 ? <Question5 /> : <DisabledQuestion />}</SwiperSlide> */}
          </>
        </Swiper>
      </Box>
    </DevelopmentContext.Provider>
  );
};

import { Box, Typography } from '@mui/material';
import SubmitField from '../ai/components/SubmitField';
const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" margin="0 20px">
      <Typography fontWeight="bold" fontSize="4rem">
        Title
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis dolore saepe quis quae labore nulla ab
        pariatur totam. Blanditiis architecto ratione dolor at atque unde facilis porro eaque molestias.
      </Typography>
      <Box width={'20%'}>
        <SubmitField questionId={5} category="AI" />
      </Box>
    </Box>
  );
};
export default Home;

import { FC } from 'react';
import MailList from './List';
import { Box } from '@mui/material';

const Mail: FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <MailList />
    </Box>
  );
};

export default Mail;

import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useAuth } from '../../contexts/authContext';
import MailList from './List';

const Mail: FC = () => {
  console.log('mmm');
  // const userData = useContext(AuthContext)?.userData;
  // console.log('🚀 ~ userData:', userData);
  const {
    userDataState: [userData],
  } = useAuth();
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="820px" width="100%" padding="8px">
        <Typography variant='h3'>Hello,</Typography>
        <Typography variant='h4' color="#ffc75e" mb="20px" >Here is your inbox</Typography>
        <MailList mails={userData?.mails || []} />
      </Box>
    </Box>
  );
};

export default Mail;

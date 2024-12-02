import { Box } from '@mui/material';
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
      <MailList mails={userData?.mails || []} />
    </Box>
  );
};

export default Mail;

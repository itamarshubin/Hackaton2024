import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import useLogin from '../../hooks/login.hook';
import { useNavigate } from 'react-router-dom';

type Inputs = { username: string; password: string };

const Login = () => {
  const { trigger, loginError } = useLogin();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<Inputs>();
  const { errors } = formState;

  const onsubmit: SubmitHandler<Inputs> = data => {
    trigger({ username: data.username, password: data.password });
    navigate('/cyber');
  };

  // (() => {
  //   trigger({ username: 'aaa', password: 'bbbb' });
  //   navigate('/cyber');
  // })()

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ 
        width: '90%',
        maxWidth: '820px',
        marginTop: '15vh',
        paddingTop: '5vh',
        paddingBottom: '5vh',
      }}>
        <form onSubmit={handleSubmit(onsubmit)}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" >Sign in</Typography>
            <Typography variant="h6" color="#ffc75e" mb="2rem">into your email inbox</Typography>
            <TextField
              autoComplete="off"
              label="Username"
              {...register('username', { required: 'Username is required' })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              autoComplete="off"
              label="Password"
              type="password"
              sx={{ marginTop: '1rem' }}
              {...register('password', { required: 'Password is requried' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button variant="contained" sx={{ marginTop: '2%' }} onClick={handleSubmit(onsubmit)}>
              sign in
            </Button>
            {loginError && <Typography variant="h5" color="error" marginTop="2rem">Wrong password</Typography>}
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default Login;

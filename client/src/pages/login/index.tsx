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

  return (
    <Box display="flex" justifyContent="center" height="30vh">
      <Card sx={{ width: '20%', minWidth: '350px', minHeight: '300px', marginTop: '5%' }}>
        <form onSubmit={handleSubmit(onsubmit)}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">Sign in to view mails</Typography>
            <TextField
              autoComplete="off"
              label="Username"
              sx={{ marginTop: '2%' }}
              {...register('username', { required: 'Username is required' })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              autoComplete="off"
              label="Password"
              type="password"
              sx={{ marginTop: '2%' }}
              {...register('password', { required: 'Password is requried' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button variant="contained" sx={{ marginTop: '2%' }} onClick={handleSubmit(onsubmit)}>
              sign in
            </Button>
            {loginError && <Typography color="error">Wrong password</Typography>}
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default Login;

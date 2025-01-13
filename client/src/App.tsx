import { ThemeProvider } from '@emotion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box, Card, createTheme } from '@mui/material';
import { FC, useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header';
import { AuthProvider, useAuth } from './contexts/authContext';
import { AiQuestions } from './pages/ai/AiQuestions';
import Home from './pages/home';
import Login from './pages/login';
import Mail from './pages/mail';
import NotFound from './pages/notFound';
import { DevelopmentQuestions } from './pages/development/DevelopmentQuestions';
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ai" element={<AiQuestions />} />
            <Route path="/Development" element={<DevelopmentQuestions />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cyber" element={<Mail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

const successAnimationUrl = new URL('assets/LoadingAnimation.lottie', import.meta.url).href;

const LoadingAnimation: FC = () => <DotLottieReact src={successAnimationUrl} autoplay loop speed={0.6} />;

const Loading: FC = () => (
  <Box display="flex" justifyContent="center" height="30vh">
    <Card sx={{ width: '20%', minWidth: '350px', minHeight: '300px', marginTop: '5%' }}>
      <LoadingAnimation />
    </Card>
  </Box>
);

const ProtectedRoute = () => {
  const {
    loadingState: [isLoading],
    userDataState: [userData],
  } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData && !isLoading) {
      navigate('/login');
    }
  }, [isLoading]);

  return <>{isLoading || !userData ? <Loading /> : <Outlet />}</>;
};

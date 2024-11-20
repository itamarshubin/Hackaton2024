import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AiQuestions } from './pages/ai/AiQuestions';
import Header from './pages/components/header';
import Home from './pages/home';
import Login from './pages/login';
import Mail from './pages/mail';
import NotFound from './pages/notFound';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cyber" element={<>cyber</>} />
          <Route path="/ai" element={<AiQuestions />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/mail" element={<Mail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const ProtectedRoute = () => {
  // const [isLoading,authData ] = useAuth();

  // if (isLoading) return <>Loading</>;

  // if (!authData) return <Navigate to="/login" />;

  return <Outlet />;
};

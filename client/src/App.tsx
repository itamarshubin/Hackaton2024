import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./pages/components/header";
import Home from "./pages/home";
import Mail from "./pages/mail";
import NotFound from "./pages/notFound";
import Login from "./pages/login";

const useNiggaAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData("nigger");
    }, 2000);
  }, []);

  return [isLoading, data];
};

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cyber" element={<>cyber</>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/mail" element={<Mail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedRoute = () => {
  const [isLoading, authData] = useNiggaAuth();

  if (isLoading) return <>Loading</>;

  if (!authData) return <Navigate to="/login" />;

  return <Outlet />;
};

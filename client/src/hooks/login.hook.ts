import axios from 'axios';
import { useAuth } from '../contexts/authContext';

export type Mail = { from: string; content: string; subject: string };

export type UserData = { mails: Mail[] } | null;

type LoginCredentials = { username: string; password: string };

const useLogin = (): { trigger: ({ username, password }: LoginCredentials) => void; loginError: boolean } => {
  const {
    loadingState: [, setIsLoading],
    userDataState: [, setUserData],
    loginError: [loginError, setLoginError],
  } = useAuth();
  if (!setIsLoading || !setUserData || !setLoginError) return { trigger: () => {}, loginError: false };
  const trigger = ({ username, password }: LoginCredentials) => {
    setIsLoading(true);
    setTimeout(() => {
      loginFn({ username, password })
        .then(res => {
          setUserData(res.data);
          setLoginError(false);
          setIsLoading(false);
        })
        .catch(() => {
          setLoginError(true);
          setIsLoading(false);
        });
    }, 1500);
  };
  return { trigger, loginError: !!loginError };
};

export default useLogin;

const loginFn = ({ username, password }: LoginCredentials) =>
  axios.post<{ mails: Mail[] }>(
    import.meta.env.VITE_SERVER_URL + '/login',
    { username, password },
    { withCredentials: true },
  );

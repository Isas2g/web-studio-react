import React, {
  createContext,
  FC,
  memo,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  authed: boolean;
  setAuthed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authed, setAuthed] = useState<boolean>(false);

  const navigate = useNavigate();

  const checkIsLogged = () => {
    if (!localStorage.getItem('csrfToken')) {
      navigate('/auth');
      setAuthed(false);
    } else {
      setAuthed(true);
    }
  };

  useEffect(() => {
    checkIsLogged();
  }, []);

  return (
    <AuthContext.Provider value={{ authed, setAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};

export default memo(AuthProvider);

import { useContext } from 'react';
import { AuthContext } from 'shared/components/AuthProvider';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Use AuthProvider');
  }
  return context;
};

export default useAuth;

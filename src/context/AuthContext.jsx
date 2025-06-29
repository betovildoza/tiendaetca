import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuth] = useState(false)
  const [role, setRole] = useState('')

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuth') === 'true'
    const userRole = localStorage.getItem('role') || '';

    if (isAuthenticated && userRole === 'admin') {
      setIsAuth(true)
      setRole(userRole)
      navigate('/admin')
    }
    else if (isAuthenticated && userRole === 'cliente') {
      setIsAuth(true)
      setRole(userRole)
      navigate('/')
    }
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email) validationErrors.email = 'Email es requerido';
    if (!password) validationErrors.password = 'Password es requerido';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('data/users.json');
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setErrors({ email: 'credenciales invalidas' });
      } else {
        console.log('User role:', foundUser.role);
        setRole(foundUser.role);
        setIsAuth(true)
        localStorage.setItem('isAuth', true);
        localStorage.setItem('role', foundUser.role);

        if (foundUser.role === 'admin') {


          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setErrors({ email: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.' });
    }
  };


  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, errors, setErrors, setIsAuth, isAuthenticated, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

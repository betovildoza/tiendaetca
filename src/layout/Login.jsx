import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const { errors, email, setEmail, password, setPassword, handleSubmit } = useAuth();

  return (
    <div className="container my-5" style={{ maxWidth: '400px' }}>
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        <div className="mb-3">
          <label htmlFor="formBasicEmail" className="form-label">
            Email
          </label>
          <input
            id="formBasicEmail"
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="formBasicPassword" className="form-label">
            Contraseña
          </label>
          <input
            id="formBasicPassword"
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>

        <p className="text-center mt-3">
          <Link to="/" className="text-primary text-decoration-none fw-medium">← Volver al inicio</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

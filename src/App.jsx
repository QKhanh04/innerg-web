import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider} from './context/AuthContext';
import { setupInterceptors } from './api/axios';
import AppRoutes from './routes/AppRoutes';
import { useAuth } from './hooks/useAuth';
import './App.css';

// Component to setup axios interceptors with auth context
function AxiosInterceptorSetup() {
  const { getAccessToken, refreshAccessToken } = useAuth();

  useEffect(() => {
    // Setup interceptors with access to auth context
    setupInterceptors(getAccessToken, refreshAccessToken);
  }, [getAccessToken, refreshAccessToken]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AxiosInterceptorSetup />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import DashboardView from '../components/Dashboard';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="pt-16 md:pt-20">
      <div className="container-px flex items-center justify-between py-4">
        <p className="text-sm text-slatey-600">
          Signed in as{' '}
          <span className="font-semibold text-slatey-900">{user?.name}</span>
        </p>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 rounded-full border border-slatey-200 bg-white px-4 py-2 text-sm font-semibold text-slatey-700 transition-all hover:border-brand-300 hover:text-brand-700"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
      <DashboardView />
    </div>
  );
}

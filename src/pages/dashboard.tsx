// src/pages/dashboard.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const user = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase 인증에서 로그아웃
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName || user.email}!</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <p>로그인하지 않았습니다. 로그인 후 다시 시도하세요.</p>
      )}
    </div>
  );
};

export default Dashboard;

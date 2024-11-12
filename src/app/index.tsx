// src/pages/index.tsx
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const user = useAuth(); // useAuth 훅을 사용하여 로그인 상태 확인

  useEffect(() => {
    if (user) {
      console.log('로그인 상태:', user);
    } else {
      console.log('로그인 안됨');
    }
  }, [user]);

  return (
    <div>
      <h1>Welcome to the Cup of Coffee Korean!</h1>
      {user ? (
        <div>
          <p>안녕하세요, {user.displayName || user.email}님!</p>
          {/* 로그인된 사용자에게 보여줄 내용 */}
        </div>
      ) : (
        <div>
          <p>로그인하세요!</p>
          {/* 로그인되지 않은 사용자에게 보여줄 내용 */}
        </div>
      )}
    </div>
  );
};

export default HomePage;

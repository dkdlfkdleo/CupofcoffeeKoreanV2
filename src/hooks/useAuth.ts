// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // user 객체가 null이 아니면 로그인한 상태
    });
    return unsubscribe; // 컴포넌트 언마운트 시 구독 해제
  }, []);

  return user; // 현재 로그인한 user 객체 반환
};

export default useAuth;

// src/app/dashboard/page.tsx
import useAuth from "../../hooks/useAuth";

export default function Dashboard() {
  const user = useAuth();

  if (!user) {
    return <div>Please log in to access the dashboard</div>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>You're logged in as {user.displayName || user.email}</p>
      {/* 여기에 추가적인 대시보드 기능을 넣을 수 있습니다 */}
    </div>
  );
}

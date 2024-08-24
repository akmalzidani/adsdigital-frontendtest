import { useSession } from "next-auth/react";

export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>You are logged in as {session?.user?.email}</p>
    </div>
  );
}

"use client";

import { useSelector } from "react-redux";

export default function AdminPage() {
  const user = useSelector(state => state.auth.user);

  if (!user) return <h3>Access Denied</h3>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Add / Edit / Delete Products</p>
    </div>
  );
}

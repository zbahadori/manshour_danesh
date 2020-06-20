import React from "react";

import AdminHeader from "../AdminHeader";
import AdminMenue from "../AdminMenu";
import AdminFooter from "../AdminFooter";

export default function AdminDashboard() {
  return (
    <div>
      <AdminHeader />
      <AdminMenue />
      <main>Hello there</main>
      <AdminFooter />
    </div>
  );
}

import AdminTable from "../components/Table/AdminTable";

export const metadata = {
  title: "Admin Agent",
  description: "Admin Agent",
};

export default function AdminPage() {
  return (
    <div className="admin-page">
      <AdminTable />
    </div>
  );
}

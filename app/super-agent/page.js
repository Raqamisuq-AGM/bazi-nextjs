import SuperAgentTable from "../components/Table/SuperAgentTable";

export const metadata = {
  title: "Super Agents",
  description: "Super Agents",
};

export default function SuperAgentPage() {
  return (
    <div className="admin-page">
      <SuperAgentTable />
    </div>
  );
}

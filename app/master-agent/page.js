import MasterAgentTable from "../components/Table/MasterAgentTable";

export const metadata = {
  title: "Master Agents",
  description: "Master Agents",
};

export default function MasterAgentPage() {
  return (
    <div className="admin-page">
      <MasterAgentTable />
    </div>
  );
}

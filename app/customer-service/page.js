// "use client"

import CustomerServiceTable from "../components/Table/CustomerServiceTable";

export const metadata = {
  title: "Customer Service Agents",
  description: "Customer Service Agents",
};

export default function CustomerServiceAgentPage() {
  return (
    <div className="admin-page">
      <CustomerServiceTable />
    </div>
  );
}

import AgentHeading from "../components/AgentHeadingCom/AgentHeading";

export const metadata = {
  title: "Static Title",
  description: "Static Description",
};

export default function MasterAgentPage() {
  return(
    <div>
      <AgentHeading title={'MASTER AGENT LIST'} />
    </div>
  );
}

import AgentHeading from "../components/AgentHeadingCom/AgentHeading";


export const metadata = {
  title: "Super_agent",
  description: "Static Description",
};

console.log("hello world.")
export default function SuperAgentPage() {
  return (
    <div className="super-agent-page">
        <span>
            <AgentHeading title={"SUPER AGENT LIST"} />
        </span>
    </div>
  );
}

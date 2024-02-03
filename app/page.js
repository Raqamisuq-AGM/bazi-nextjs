import CommonSection from "./components/HomePage/CommonSection";
import SingleMasterAgent from "./components/HomePage/SingleMasterAgent";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* <section>
        <Complain />
      </section> */}
      {/* <section className="agent-list">
        <AgentList></AgentList>
      </section> */}
      <SingleMasterAgent/>
      <CommonSection />
    </div>
  );
}

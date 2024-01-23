import AgentList from "./components/HomePage/AgentList";
import CommonSection from "./components/HomePage/CommonSection";
import Complain from "./components/HomePage/Complain";

export default function HomePage() {
  return (
    <div className="home-page">
      <section>
        <Complain />
      </section>
      <section className="agent-list">
        <AgentList></AgentList>
      </section>
      <CommonSection />
    </div>
  );
}

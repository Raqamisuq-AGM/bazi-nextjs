import CommonSection from "./components/HomePage/CommonSection";
import SingleMasterAgent from "./components/HomePage/SingleMasterAgent";

export default function HomePage() {
  return (
    <div className="home-page">
      <SingleMasterAgent/>
      <CommonSection />
    </div>
  );
}

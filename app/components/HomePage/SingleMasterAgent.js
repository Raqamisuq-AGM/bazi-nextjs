"use client";
import SingleMasterAgentTable from "../Table/SingleMasterAgentTable";

export default function SingleMasterAgent() {
  return (
    <>
      <div className="body">
        <div id="licenseinfo">
          <div className="header">
            <div className="title" style={{ textAlign: "center" }}>
              QUICK MASTER AGENT NUMBER
            </div>
          </div>
          <div className="body">
            <div className="code">
              <SingleMasterAgentTable />
            </div>
          </div>
        </div>        
      </div>
    </>
  );
}

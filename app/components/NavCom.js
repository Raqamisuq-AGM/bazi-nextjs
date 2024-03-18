"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavCom() {
  const [openNav, showNav] = useState(false);

  return (
    <>
      <Link href={"/"} class="logo-box">
        <img src="images/logo.png" alt="AGENT LIST" width="520" height="auto" />
      </Link>
      <div id="navigation">
        <ul class="menubar">
          <li>
            <Link href={"/"}>
              <img src="images/rooms.png" alt="HOME" width="25" height="20" />
            </Link>
          </li>
          <li>
            <Link href={"/customer-service"}>
              <img
                src="images/help.png"
                alt="কাস্টমার সার্ভিস"
                width="25"
                height="20"
              />
              কাস্টমার সার্ভিস
            </Link>
          </li>
          <li>
            <Link href={"/admin"}>
              <img
                src="images/sub_admin.png"
                alt="এডমিন"
                width="25"
                height="20"
              />
              এডমিন
            </Link>
          </li>
          <li>
            <Link href={"/super-agent"}>
              <img
                src="images/super_agent.png"
                alt="সুপার এজেন্ট"
                width="25"
                height="20"
              />
              সুপার এজেন্ট
            </Link>
          </li>
          <li>
            <Link href={"/master-agent"}>
              <img
                src="images/agent.png"
                alt="মাষ্টার এজেন্ট"
                width="25"
                height="20"
              />
              মাষ্টার এজেন্ট
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

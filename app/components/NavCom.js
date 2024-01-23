"use client";

import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function NavCom() {
  const [openNav, showNav] = useState(false);

  return (
    <div className="Header-section">
      <div className="logo-area">
        <Link href={"/"}>
          <Image src={logo} alt="logo"></Image>
        </Link>
      </div>

      <div className="navigation-items justify-content-between">
        <div className="smallLogo ">
          {" "}
          <Link href={"/"}>
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>
        <ul className="nav justify-content-between">
          <li>
            <Link href={"/"}>
              {" "}
              <IoHomeSharp />
            </Link>
          </li>
          <li>
            <Link href={"/customer-service"}>
              {" "}
              <FaQuestionCircle /> কাস্টমার সর্ভিস
            </Link>
          </li>
          <li>
            <Link href={"/admin"}>
              <FaUser /> এডমিন
            </Link>
          </li>
          <li>
            <Link href={"/super-agent"}>
              <FaUserTag /> সুপার এজেন্ট
            </Link>
          </li>
          <li>
            <Link href={"/master-agent"}>
              <FaUsers /> অনলাইন মাষ্টার এজেন্ট
            </Link>
          </li>
        </ul>
        {openNav ? (
          <ul
            className="nav justify-content-between"
            style={{ display: openNav ? "block" : "none" }}
          >
            <li>
              <Link href={"/"}>
                {" "}
                <IoHomeSharp />
              </Link>
            </li>
            <li>
              <Link href={"/customer-service"}>
                {" "}
                <FaQuestionCircle /> কাস্টমার সর্ভিস
              </Link>
            </li>
            <li>
              <Link href={"/admin"}>
                <FaUser /> এডমিন
              </Link>
            </li>
            <li>
              <Link href={"/super-agent"}>
                <FaUserTag /> সুপার এজেন্ট
              </Link>
            </li>
            <li>
              <Link href={"/master-agent"}>
                <FaUsers /> অনলাইন মাষ্টার এজেন্ট
              </Link>
            </li>
          </ul>
        ) : null}
        <div></div>
        <div className="barsIcon" onClick={() => showNav(!openNav)}>
          {!openNav ? (
            <span>
              <FaBars />{" "}
            </span>
          ) : (
            <span>
              <RxCross2 />{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

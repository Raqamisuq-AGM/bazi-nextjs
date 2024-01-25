"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
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

      <div className="navigation-items">        
        <ul className="nav ">
          <li>
            <Link href={"/"}>
              {" "}
              <IoHomeSharp />
            </Link>
          </li>
          <li>
            <Link href={"/customer-service"}>
              {" "}
              <FaQuestionCircle /> Customer Service
            </Link>
          </li>
          <li>
            <Link href={"/admin"}>
              <FaUser /> Admin
            </Link>
          </li>
          <li>
            <Link href={"/super-agent"}>
              <FaUserTag /> Super Agent
            </Link>
          </li>
          <li>
            <Link href={"/master-agent"}>
              <FaUsers /> Master Agent
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

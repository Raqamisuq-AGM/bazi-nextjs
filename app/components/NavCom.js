"use client";
import Image from "next/image";
import logo from '@/public/images/logo.png'
import Link from "next/link";

export default function NavCom() {
  return (
    <div className="Header-section">
        <div className="logo-area">
           <Link href={"/"}>
             <Image src={logo} alt="logo"></Image>
           </Link>
        </div>
          <div className="navigation-items">
            <ul className="nav justify-content-between">
              <li><Link  href={'/'}>কাস্টমার সর্ভিস</Link></li>
              <li><Link  href={'/admin'}>এডমিন</Link></li>
              <li><Link  href={'/super-agent'}>সুপার এজেন্ট</Link></li>
              <li><Link href={'/master-agent'}>অনলাইন মাষ্টার এজেন্ট</Link></li>
          </ul>
        </div>
    </div>
  );
}

"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <hr />
        <span size={2}>
          {" "}
          All right resorved by - <Link href={"/"}>Bazibet</Link>
        </span>
        <hr />
      </footer>
    </>
  );
}

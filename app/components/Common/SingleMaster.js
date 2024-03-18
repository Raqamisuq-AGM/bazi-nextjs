"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function SingleMaster({ header, trData }) {
  return (
    <>
      <table className="data">
        <thead>
          <tr style={{ border: "1px solid gray", padding: "8px" }}>
            <th align="center" style={{ border: "1px solid gray", padding: "8px" }}>Type</th>
            <th align="center" style={{ border: "1px solid gray", padding: "8px" }}>NAME</th>
            <th align="center" style={{ border: "1px solid gray", padding: "8px" }}>Agent ID No</th>
            <th align="center" style={{ border: "1px solid gray", padding: "8px" }}>Phone App Link</th>
            <th align="center" style={{ border: "1px solid gray", padding: "8px" }}>Phone Number</th>
            <th align="center" style={{ border: "1px solid gray", padding: "8px" }}>Complain</th>
          </tr>
        </thead>
        <tbody>
          {trData &&
            trData.length > 0 &&
            trData.slice(0, 1).map((item, index) => {
              return (
                <tr key={index} style={{ border: "1px solid gray", padding: "8px" }}>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>{item.type}</td>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>{item.name}</td>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>{item.agentID}</td>
                  <td className="whatsapp" style={{ border: "1px solid gray", padding: "8px" }}>
                    <Link href={`https://wa.me/${item.phoneAppLink}`}>
                      <FaWhatsapp />
                    </Link>
                  </td>
                  <td>{item.phoneNumber}</td>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>
                    <Link
                      href={`https://wa.me/${item.complainLink}`}
                      type={"button"}
                    >
                      Complain
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

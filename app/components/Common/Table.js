"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Table({ header, trData }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {header.map((items, i) => {
              return <th key={i}>{items}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {trData &&
            trData.length > 0 &&
            trData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.agentID}</td>
                  <td className="whatsapp">
                    <Link href={`https://wa.me/${item.phoneAppLink}`}>
                      <FaWhatsapp />
                    </Link>
                  </td>
                  <td>{item.phoneNumber}</td>
                  <td>
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
    </div>
  );
}

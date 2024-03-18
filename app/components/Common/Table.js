"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Table({ header, trData }) {



  const [inputValue, setInputValue] = useState();

  const filteredData = inputValue
    ? trData.filter((item) => {
        const searchTerm = inputValue.toLowerCase();
        return (
          item.type.toLowerCase().includes(searchTerm) ||
          item.name.toLowerCase().includes(searchTerm) ||
          item.phoneNumber.includes(searchTerm)
        );
      })
    : trData;

  return (
    <>
      <div className="mt-3 mb-3 d-flex justify-content-center search-box">
        <input
        style={{width:"20%"}}
        className="form-control"
          placeholder="search agent"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div style={{ minHeight: 50 }}>
        <table className="data" style={{ width: "100%" }}>
          <tbody>
            <tr>
              {header.map((items, i) => {
                return <th key={i}>{items}</th>;
              })}
            </tr>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} style={{ border: "1px solid gray", padding: "8px" }}>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>{item.type}</td>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>{item.name}</td>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>{item.agentID}</td>
                  <td className="whatsapp" style={{ border: "1px solid gray", padding: "8px" }}>
                    <Link href={`https://wa.me/${item.phoneAppLink}`}>
                      <FaWhatsapp />
                    </Link>
                  </td>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>{item.phoneNumber}</td>
                  <td style={{ border: "1px solid gray", padding: "8px" }}>
                    <Link
                      href={`https://wa.me/${item.complainLink}`}
                      type={"button"}
                    >
                      Complain
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={header.length} className="text-center">
                  No matching data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

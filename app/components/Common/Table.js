"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
          placeholder="search agent"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
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
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((item, index) => (
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

"use client";
import React from "react"

export default function Code({ children, color }) {
  return (
    <span className={color === "Dark" ? "w-full text-lg font-mono text-[#fff] bg-[#000] rounded-md p-2" : "w-full text-lg font-mono text-[#000] bg-[#bebebe] rounded-md p-2"}>
      {children}
    </span>
  )
}

"use client";
import React from "react";

export default function Code({ children }) {
  return (
    <span className="text-lg font-mono text-regular_text bg-[#bebebe] rounded-md p-0.5">
      {children}
    </span>
  );
}

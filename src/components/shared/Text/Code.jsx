"use client"
import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const customStyle = {
  ...materialDark,
  'pre[class*="language-"]': {
    ...materialDark['pre[class*="language-"]'],
    backgroundColor: '#272822',
    color: '#FFFFFF',
    padding: '0.5em',
    margin: 0,
    overflow: 'auto',
    borderRadius: '0.3em'
  },
  'span[class*="token string"]': {
    color: '#6EDD6C'
  },
  'span[class*="token function"]': {
    color: '#D262EE'
  },
  'span[class*="token keyword"]': {
    color: '#E6A149'
  },
  'span[class*="token operator"]': {
    color: '#E84747'
  }
}


export default function Code({ children, color, language }) {
  if (language === "javascript"){
        return (
      <SyntaxHighlighter language="javascript" style={customStyle}>
        {children}
      </SyntaxHighlighter>
    )
  }
  return (
    <span className={color === "Dark" ? "w-full text-lg font-mono text-[#fff] bg-[#000] rounded-md p-2" : "w-full text-lg font-mono text-[#000] bg-[#bebebe] rounded-md p-2"}>
      {children}
    </span>
  )
}

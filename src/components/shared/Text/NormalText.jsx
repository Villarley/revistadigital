import React from 'react'

export default function NormalText({ children, color }) {
  return (
    <p className={`text-lg text-${color}`}>{ children }</p>
  )
}

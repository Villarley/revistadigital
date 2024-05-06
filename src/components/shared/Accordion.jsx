import React from 'react'
import { ChevronDown } from "lucide-react"

export default function Accordion({ RootDirection, Clicked, handleSelectedTopic, Name }) {
  // Estilos en línea para la transición y rotación
  const chevronStyle = {
    transition: 'transform 0.5s ease',
    transform: Clicked ? 'rotate(180deg)' : 'rotate(0deg)', // Usa rotate(0deg) en lugar de 'none'
  }

  return (
    <button onClick={() => Clicked ? handleSelectedTopic("") : handleSelectedTopic(RootDirection)} className="w-full flex justify-between items-center text-xl text-white">
      <p>{Name}</p>
      <span style={chevronStyle}>
        <ChevronDown /> {/* Siempre usa el mismo ícono */}
      </span>
    </button>
  )
}

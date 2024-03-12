import React from 'react'
import { ChevronDown, ChevronUp } from "lucide";

export default function Accordion({ Clicked, handleSelectedTopic, Name}) {
  return (
    <button onClick={()=>handleSelectedTopic("")} className="flex justify-between text-lg">
        {Name}
        {Clicked ? ChevronUp : ChevronDown}
    </button>
  )
}

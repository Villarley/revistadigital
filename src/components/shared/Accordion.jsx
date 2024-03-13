import React from 'react'
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordion({ Clicked, handleSelectedTopic, Name}) {
  return (
    <button onClick={()=>handleSelectedTopic()} className="flex justify-between text-md text-white text-justify">
        {Name}
        {Clicked ? <ChevronUp/> : <ChevronDown/>}
    </button>
  )
}

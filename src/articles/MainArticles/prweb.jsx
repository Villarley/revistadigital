import React from 'react'
import { Typewriter } from "@/components/shared/";

export default function Prweb() {
  return (
    <div className="w-full h-full overflow-y-auto">
        <Typewriter text="Programación para web" typingSpeed={150} type="superheading"/>
    </div>
  )
}

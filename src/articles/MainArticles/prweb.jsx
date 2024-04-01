import React from "react"
import { Typewriter, SearchComp } from "@/components/shared/"

export default function Prweb() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row items-center">
        <Typewriter
          text="Programación para web"
          typingSpeed={150}
          type="heading"
        />
        <SearchComp/>
      </div>
      <Typewriter
        text="Este es uno de los ejes principales de la tecnicatura, donde se enseñan la mayoría de herramientas para programar para web."
        typingSpeed={25}
        type="code"
      />
    </div>
  );
}

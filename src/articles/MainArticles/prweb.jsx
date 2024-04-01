import React from "react"
import { Typewriter, SearchComp } from "@/components/shared/"
import { prwebArticles } from "@/articles/prweb/prwebarticles";
import { grid } from "@chakra-ui/react";

export default function Prweb() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row items-center">
        <Typewriter
          text="Programación para web"
          typingSpeed={150}
          type="heading"
        />
        <SearchComp />
      </div>
      <Typewriter
        text="Este es uno de los ejes principales de la tecnicatura, donde se enseñan la mayoría de herramientas para programar para web."
        typingSpeed={25}
        type="code"
      />
      <div style={{display:"grid"}} className="h-full w-full grid bg-black">
        {
          Object.entries(prwebArticles).map(([name, info], index) => (
            <div className="">
              hola
              <img className="" src={info.img} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

import React from "react"
import { H1 } from "@/components/shared/Text"
import { Typewriter, SearchComp, Card } from "@/components/shared/"
import { prwebArticles } from "@/articles/prweb/prwebarticles"

export default function Prweb() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row items-center">
        <H1>Programación para Web</H1>
        <SearchComp />
      </div>
      <Typewriter
        text="Este es uno de los ejes principales de la tecnicatura, donde se enseñan la mayoría de herramientas para programar para web."
        typingSpeed={25}
        type="code"
      />
      <div className="h-full grid gap-10 grid-cols-3 ">
        {Object.entries(prwebArticles).map(([name, info], index) => (
          <Card root="/prweb" title={info.name} img={info.img} dir={"/datos"} key={index} />
        ))}
      </div>
    </div>
  );
}

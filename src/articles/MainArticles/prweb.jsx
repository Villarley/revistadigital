"use client"
import React, { useState } from "react"
import { MagicMotion } from "react-magic-motion"
import "animate.css"
import { Grid } from "@chakra-ui/react"
import { H1 } from "@/components/shared/Text"
import { Typewriter, SearchComp, Card } from "@/components/shared/"
import { prwebArticles } from "@/articles/prweb"

export default function Prweb() {
  const [searchedValue, setSearchedValue] = useState("")
  const handleSearchChange = (value) => {
    setSearchedValue(value)
  }
  console.log(searchedValue)
  return (
    <div className="animate__animated animate__fadeIn w-full h-full overflow-y-auto flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row items-center">
        <H1>Programación para Web</H1>
        <SearchComp
          handleSearchChange={handleSearchChange}
          searchedValue={searchedValue}
        />
      </div>
      <Typewriter
        text="Este es uno de los ejes principales de la tecnicatura, donde se enseñan la mayoría de herramientas para programar para web."
        typingSpeed={25}
        type="code"
      />
      <MagicMotion >
        <Grid gap={4} templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} padding={10}>
          {Object.entries(prwebArticles)
            .filter(([name, topic]) =>
              topic.name.toLowerCase().includes(searchedValue.toLowerCase())
            )
            .map(([name, info], index) => (
              <Card
                root="/prweb"
                title={info.name}
                img={info.img}
                dir={name}
                key={index}
                linkInsideMagazine={true}
              />
            ))}
        </Grid>
      </MagicMotion>
    </div>
  )
}

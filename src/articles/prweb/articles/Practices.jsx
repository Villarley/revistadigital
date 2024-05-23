import React from 'react'
import { Typewriter, Card } from "@/components/shared"
import { Grid } from "@chakra-ui/react"

export default function Practices() {
    const practices = [
        {dir:"https://ambiguous-shelf-bcb.notion.site/Pr-ctica-91c391a8f274452698158e9c396c5d18?pvs=4", img:"https://www.uaeh.edu.mx/scige/boletin/prepa2/n7/multimedia/m2/m2.jpg" , name:"Práctica 1 operadores"},
        {dir:"https://ambiguous-shelf-bcb.notion.site/Practica-2-c5b1654918204cd8861d87ede9eaefa0?pvs=4",img:"https://images.ctfassets.net/w6r2i5d8q73s/2n2DPUtFMSCmiP5s5Jdzii/ca83a6fa0cddeed0b4b10784058f627c/simbolos_diagrama_flujo.jpg", name:"Práctica 2"},
        {dir:"https://ambiguous-shelf-bcb.notion.site/Pr-ctica-4-0105d321a2a44716a2acdbcd54b4d18e?pvs=4", img:"https://miro.medium.com/v2/resize:fit:1358/1*Ut55XNszCQPxCG9qaEQfAw.png", name:"Práctica 3"},
        {dir:"https://ambiguous-shelf-bcb.notion.site/Pr-ctica-4-e15290a48fa14d749af424564b19f163?pvs=4", img:"https://www.nextu.com/blog/wp-content/uploads/sites/4/2019/09/bases-de-datos-nosql.png", name:"Práctica 4"},
    ]
  return (
    <>
    <Typewriter text="Prácticas Peritazgo" type="heading" typingSpeed={50}/>
    <Grid mt={5} gap={4} templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]}>
        {
            practices?.map((practices) =>(
                <Card img={practices.img} key={practices.name} title={practices.name} dir={practices.dir} linkInsideMagazine={false}/>
            ))
        }
    </Grid>
    </>
  )
}

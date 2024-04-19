"use client"
import React, { useState } from "react"
import Image from "next/image"
import "animate.css"
import { Flex, Box, Text } from "@chakra-ui/react"
import { Typewriter, ArticleCard } from "@/components/shared/"
import { H1, H2, NormalText, Code } from "@/components/shared/Text"
import { ConditionalConsole } from "@/assets/images"

export default function Programming() {
  const [activeTab, setActiveTab] = useState(MainTab)
  return <div className="h-full flex flex-col gap-4">{activeTab}</div>
}
const MainTab = () => {
  const sections = [
    {
      title: "Expresión matemática",
      description:
        "Conjunto de operadores en formato decimal que devuelve un número",
      imageUrl:
        "https://apolonio.es/wp-content/uploads/2023/06/que-es-una-expresion-algebraica-y-10-ejemplos.jpg",
      imageAlt: "Expresión Algebraica",
      example: "2 + 2 = 4 o 1 + 1 = 2",
    },
    {
      title: "Expresión Lógica",
      description: "Devuelve falso o verdadero",
      imageUrl:
        "https://image.slidesharecdn.com/expresioneslogicas-140914181616-phpapp02/85/expresiones-logicas-20-320.jpg?cb=1665715001",
      imageAlt: "Expresión Lógica",
      example: "1 < 9 = True",
    },
    {
      title: "Condición lógica",
      description: "Aquellas condiciones que dependen de una expresión lógica.",
      imageUrl: "https://ney.one/wp-content/uploads/2021/05/implicacion-2.png",
      imageAlt: "Condición Lógica",
      example: <Image className="p-2" width={300} height={300} alt="" src={ConditionalConsole}/>,
    },
  ]
  return (
    <>
      <Typewriter
        text="Programación conceptos básicos"
        type="heading"
        typingSpeed={50}
      />
      <Flex mt={10} gap={5} flexDirection="column">
        {sections.map((item, id) => (
          <ArticleCard key={id} title={item.title} description={item.description} example={item.example} image={item.imageUrl} color="Dark"/>
        ))}
      </Flex>
      <OperatorGuide />
    </>
  )
}
const OperatorGuide = () => {
  const data = [
    {
      title: "Operadores de asignación",
      content: [
        {
          description:
            "Los operadores de asignación son los que se usan para asignar un valor específico a una estructura de datos",
        },
        { description: "x = 5 o x → 5" },
      ],
    },
    {
      title: "Operadores aritméticos",
      content: [
        {
          description:
            "Se utiliza para realizar todo tipo de operaciones matemáticas.",
        },
        { description: "^ o √" },
        { description: "* / %" },
        { description: "+ o -" },
      ],
    },
    {
      title: "Operadores relacionales - comparativos",
      intro: "se resuelven de izquierda a derecha",
      content: [
        { description: "< > ≤ ≥" },
        { description: "Diferente: <> ≠ ! =" },
        { description: "Igual a: ==" },
      ],
    },
    {
      title: "Operadores lógicos",
      intro: "NAO",
      content: [
        { description: "Negación" },
        { description: "And" },
        { description: "Or" },
        { description: "Y : & ^ siempre es verdadero" },
        { description: "O: || p" },
        { description: "No: !" },
      ],
    },
  ]

  return (
    <div className="p-4 bg-white text-black">
      <H1>Guía de operadores</H1>
      <Flex
        gap={8}
        flexDirection="column"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
        }}
      >
        {data.map((section, index) => (
          <ArticleCard key={index} title={section.title} description={section.intro} example={section.content[0].description}  />
        ))}
      </Flex>
    </div>
  )
}

"use client"
import React, { useState } from "react"
import Image from "next/image"
import "animate.css"
import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"
import { Typewriter, ArticleCard } from "@/components/shared/"
import { H1, H2, NormalText, BoldText, Code } from "@/components/shared/Text"
import { ConditionalConsole, ReferenceParameter } from "@/assets/images"

export default function Programming() {
  const [activeTab, setActiveTab] = useState(MainTab)
  return <div className="h-full flex flex-col gap-4">{activeTab}</div>
}
const MainTab = () => {
  return (
    <>
      <Typewriter
        text="Programación conceptos básicos"
        type="heading"
        typingSpeed={50}
      />
      <Tabs variant="enclosed" mt={4}>
        <TabList>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Expresiones</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Operadores</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Subprocesos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              <Expressions />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              <OperatorGuide />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeIn">
              <SubProcess />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
const Expressions = () => {
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
      example: (
        <Image
          className="p-2"
          width={300}
          height={300}
          alt=""
          src={ConditionalConsole}
        />
      ),
    },
  ]
  return (
    <Flex mt={10} gap={5} flexDirection="column">
      {sections.map((item, id) => (
        <ArticleCard
          key={id}
          title={item.title}
          description={item.description}
          example={item.example}
          image={item.imageUrl}
          color="Dark"
        />
      ))}
    </Flex>
  )
}
const OperatorGuide = () => {
  const data = [
    {
      title: "Operadores de asignación",
      intro:
        "Los operadores de asignación se utilizan para establecer o actualizar el valor de una variable.",
      content: "x = 5 o x → 5",
    },
    {
      title: "Operadores aritméticos",
      intro:
        "Estos operadores ejecutan operaciones matemáticas como sumar, restar, multiplicar y dividir.",
      content: "^ o √ * / % + o -",
    },
    {
      title: "Operadores relacionales - comparativos",
      intro:
        "Comparan dos valores, determinando relaciones como mayor que, menor que o igual. Se resuelven de izquierda a derecha.",
      content: "< > ≤ ≥Diferente: <> ≠ ! = Igual a: ==",
    },
    {
      title: "Operadores lógicos",
      intro:
        "Permiten combinar condiciones booleanas, esencial para estructuras de control y decisiones lógicas. Se resuelven en el siguiente orden -> Not And Or",
      content:
        "Negación And Or Y <br/> : & ^ siempre es verdadero O: || p No: !",
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
          <ArticleCard
            key={index}
            title={section.title}
            description={section.intro}
            example={section.content}
          />
        ))}
      </Flex>
    </div>
  )
}
const SubProcess = () => {
  return (
    <>
      <Flex flexDirection="column" gap={5}>
        <H1>Subprocesos</H1>
        <NormalText>
          División del código en trozos más pequeños que está fuera del
          algoritmo principal.{" "}
        </NormalText>
        <Flex justifyContent="space-between">
          <NormalText>Definir ⇒ Crear</NormalText>
          <NormalText>Invocar ⇒ Llamar</NormalText>
        </Flex>
        <H2>Tipos de subproceso</H2>
        <Flex flexDirection="column" justifyContent="space-between" gap={3}>
          <NormalText>
            <BoldText>Método o procedimiento. </BoldText>
            Un método es una función incorporada en un objeto que actúa sobre los datos de ese objeto, generalmente sin devolver un resultado.
          </NormalText>
          <Code language="javascript">{`let persona = {
    nombre: "Carlos",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre)
    }
}

persona.saludar() // Muestra "Hola, mi nombre es Carlos" y no devuelve nada
`}</Code>
          <NormalText>
            <BoldText>Función. </BoldText>
            Una función es una unidad de código diseñada para realizar una tarea específica y devolver un resultado.
          </NormalText>
          <Code language="javascript">{`function sumar(a, b) {
    return a + b
}
console.log(sumar(5, 3)) // Muestra 8
`}</Code>
        </Flex>
        <H2>
          <BoldText>Parámetros</BoldText>
        </H2>
        <NormalText>
          Un parámetro es un valor que una función recibe.
        </NormalText>
        <Flex gap={3} justifyContent="space-between">
          <div className="">
            <NormalText>Parámetro por valor</NormalText>
            <Code></Code>
          </div>
          <div className="">
            <NormalText>Parámetro por referencia</NormalText>
            <Code></Code>
          </div>
        </Flex>
      </Flex>
    </>
  )
}

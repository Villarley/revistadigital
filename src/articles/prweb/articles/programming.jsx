"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Flex } from "@chakra-ui/react"
import { Typewriter } from "@/components/shared/"
import { H2 } from "@/components/shared/Text"

export default function Programming() {
  const [activeTab, setActiveTab] = useState(MainTab);
  return <div className="h-full flex flex-col gap-4">{activeTab}</div>;
}
const MainTab = () => {
  return (
    <>
      <Typewriter
        text="Programación conceptos básicos"
        type="heading"
        typingSpeed={50}
      />
      <Flex mt={10} direction={"column"} gap={5}>
        <div className="flex flex-row sm:flex-col justify-between gap-10">
          <div className="flex flex-col justify-between">
            <H2>Expresión matemática</H2>
            <p>
              Conjunto de operadores en formato decimal que devuelve un número
            </p>
          </div>
          <Image width={100} height={100} src="https://apolonio.es/wp-content/uploads/2023/06/que-es-una-expresion-algebraica-y-10-ejemplos.jpg" alt=""></Image>
        </div>
        <div className="flex flex-row sm:flex-col justify-between gap-10">
          <div className="flex flex-col justify-between">
            <H2>Expresión Lógica</H2>
            <p>Devuelve falso o verdadero</p>
          </div>
          <Image width={100} height={100} alt="" src="https://image.slidesharecdn.com/expresioneslogicas-140914181616-phpapp02/85/expresiones-logicas-20-320.jpg?cb=1665715001"/>
        </div>
        <div className="flex flex-row sm:flex-col justify-between gap-10">
          <div className="flex flex-col justify-between">
            <H2>Condición lógica</H2>
            <p>Aquellas condiciones que dependen de una expresión lógica.</p>
          </div>
          <Image alt="" src="https://ney.one/wp-content/uploads/2021/05/implicacion-2.png" width={100} height={100}></Image>
        </div>
        <H2>Operadores lógicos</H2>
      </Flex>
    </>
  );
};
const OperatorGuide = () => {
  const data = [
    {
      title: "Operadores de asignación",
      content: [{ description: "x = 5 o x → 5" }],
    },
    {
      title: "Operadores aritméticos",
      content: [
        { description: "^ o √" },
        { description: "-" },
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
  ];

  return (
    <div className="overflow-auto h-screen p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-5">Guía de Operadores</h1>
      {data.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{section.title}</h2>
          {section.intro && <p className="mb-4 italic">{section.intro}</p>}
          {section.content.map((item, idx) => (
            <p key={idx} className="mb-1 pl-4">
              {item.description}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

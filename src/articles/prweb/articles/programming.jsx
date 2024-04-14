"use client"
import React, { useState } from "react"
import Image from "next/image"
import "animate.css"
import { Flex, Box, Text } from '@chakra-ui/react'
import { Typewriter } from "@/components/shared/"
import { H2 } from "@/components/shared/Text"

export default function Programming() {
  const [activeTab, setActiveTab] = useState(MainTab);
  return <div className="h-full flex flex-col gap-4">{activeTab}</div>;
}
const MainTab = () => {
  const sections = [
    {
      title: 'Expresión matemática',
      description: 'Conjunto de operadores en formato decimal que devuelve un número',
      imageUrl: 'https://apolonio.es/wp-content/uploads/2023/06/que-es-una-expresion-algebraica-y-10-ejemplos.jpg',
      imageAlt: 'Expresión Algebraica'
    },
    {
      title: 'Expresión Lógica',
      description: 'Devuelve falso o verdadero',
      imageUrl: 'https://image.slidesharecdn.com/expresioneslogicas-140914181616-phpapp02/85/expresiones-logicas-20-320.jpg?cb=1665715001',
      imageAlt: 'Expresión Lógica'
    },
    {
      title: 'Condición lógica',
      description: 'Aquellas condiciones que dependen de una expresión lógica.',
      imageUrl: 'https://ney.one/wp-content/uploads/2021/05/implicacion-2.png',
      imageAlt: 'Condición Lógica'
    }
  ];
  return (
    <>
      <Typewriter
        text="Programación conceptos básicos"
        type="heading"
        typingSpeed={50}
      />
      <Flex mt={10} gap={5} width="100%">
      {sections.map((section, index) => (
        <div key={index} className="w-full flex flex-col items-center">
            <H2 >{section.title}</H2>
            <Image width={300} height={200} src={section.imageUrl} alt={section.imageAlt} />
            <Text mt={10} textAlign="center">{section.description}</Text>
        </div>
      ))}
      </Flex>
      <OperatorGuide/>
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
    <div className="p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-5 text-center">Guía de Operadores</h1>
      <Flex gap={8} wrap="wrap" justifyContent="space-between">
      {data.map((section, index) => (
        <div key={index} className="mb-6">
          <H2>{section.title}</H2>
          {section.intro && <p className="mb-4 italic">{section.intro}</p>}
          {section.content.map((item, idx) => (
            <p key={idx} className="mb-1 pl-4">
              {item.description}
            </p>
          ))}
        </div>
      ))}
      </Flex>
    </div>
  );
};

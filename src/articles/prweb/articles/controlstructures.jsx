import React from "react"
import Image from "next/image"
import { H2 } from "@/components/shared/Text";
import { Typewriter } from "@/components/shared"
import { Text, Flex } from "@chakra-ui/react"

export default function ControlStructures() {
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
    <div className="w-full">
      <Typewriter
        text="Estructuras de control"
        type="heading"
        typingSpeed={50}
      />
      <Flex mt={10} gap={5} width="100%">
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-between"
          >
            <H2>{section.title}</H2>
            <Image
              width={300}
              height={200}
              src={section.imageUrl}
              alt={section.imageAlt}
            />
            <Text mt={10} textAlign="center">
              {section.description}
            </Text>
          </div>
        ))}
      </Flex>
    </div>
  );
}

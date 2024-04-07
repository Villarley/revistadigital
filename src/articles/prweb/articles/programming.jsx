import React from "react";
import { Flex } from "@chakra-ui/react";
import { Typewriter } from "@/components/shared/";
import { H2 } from "@/components/shared/Text";

export default function Programming() {
  return (
    <div className="h-full flex flex-col gap-4">
      <Typewriter
        text="Programación conceptos básicos"
        type="heading"
        typingSpeed={150}
      />
      <Flex mt={10} direction={"column"} gap={5}>
        <H2>Expresión matemática</H2>
        <p>Conjunto de operadores en formato decimal que devuelve un número</p>
        <H2>Expresión Lógica</H2>
        <p>Devuelve falso o verdadero</p>
        <H2>Condición lógica</H2>
        <p>Aquellas condiciones que dependen de una expresión lógica.</p>
      </Flex>
    </div>
  );
}

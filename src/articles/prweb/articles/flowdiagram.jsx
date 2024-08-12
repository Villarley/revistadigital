import React from "react"
import Image from "next/image"
import { Flex } from "@chakra-ui/react"
import { Typewriter, BackIcon } from "@/components/shared"
import { NormalText, BoldText } from "@/components/shared/Text"
import { FlowDiagram } from "@/assets/images"


export default function FlowDiagrams() {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <BackIcon/>
        <Typewriter text="Diagramas de flujo" type="heading" typingSpeed={50} />
      </div>
      <Flex mt={4} flexDirection="column" gap={5}>
        <NormalText>
          Los diagramas de flujo son una herramienta gráfica utilizada para
          representar procesos o algoritmos de manera secuencial y clara.
          Permiten visualizar el flujo de información y las decisiones que se
          deben tomar en diferentes etapas del proceso. Cada forma geométrica en
          un diagrama de flujo tiene un significado específico que ayuda a
          identificar el tipo de acción o proceso que se está llevando a cabo.
          En la imagen proporcionada, se observan las siguientes formas y sus
          significados:
        </NormalText>
        <NormalText>
          <BoldText>Inicio/Fin.</BoldText> Representado por un óvalo, indica el
          punto de inicio o fin de un proceso.
        </NormalText>
        <NormalText>
          <BoldText>Declaración.</BoldText> Representado por un rectángulo, se
          utiliza para describir una acción o conjunto de acciones que se
          realizan.
        </NormalText>
        <NormalText>
          <BoldText>Entrada.</BoldText> Representado por un paralelogramo,
          señala un punto donde se introducen datos al proceso.
        </NormalText>
        <NormalText>
          <BoldText>Base de datos.</BoldText> Representado por un cilindro,
          denota el almacenamiento de datos en una base de datos.
        </NormalText>
        <NormalText>
          <BoldText>Condicional.</BoldText> Representado por un rombo, se
          utiliza para mostrar una decisión que debe tomarse, donde el flujo se
          bifurca según la condición.
        </NormalText>
        <NormalText>
          <BoldText>Salida. </BoldText> Representado por una figura de forma
          pentagonal, indica el punto donde se generan los resultados del
          proceso.
        </NormalText>
        <NormalText>
          <BoldText>Ciclos.</BoldText> Representado por un hexágono, muestra la
          repetición de un conjunto de acciones hasta que se cumple una
          condición.
        </NormalText>
      </Flex>
      <Flex justifyContent="center">
        <Image src={FlowDiagram} height={400} alt=""></Image>
      </Flex>
    </div>
  )
}

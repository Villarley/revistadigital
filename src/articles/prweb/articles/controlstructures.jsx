import React from "react";
import Image from "next/image";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Typewriter, BackIcon } from "@/components/shared";
import { NormalText, H1, Code, BoldText, H2 } from "@/components/shared/Text";
import { Paradigm } from "@/assets/images";

export default function ControlStructures() {
  return (
    <div className="w-full">
      <div className="flex">
        <BackIcon/>
        <Typewriter
          text="Estructuras de control"
          type="heading"
          typingSpeed={50}
        />
      </div>

      <NormalText>Hay varios tipos de estructuras de control</NormalText>
      <Tabs variant="enclosed" mt={4}>
        <TabList>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Secuenciales</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Selectivas</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Repetitivas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              <SecuentialStructures />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              <SelectiveStructures />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeIn">
              <RepetitiveStructures />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
const SecuentialStructures = () => {
  return (
    <>
      <Flex flexDirection="column" gap={4}>
        <NormalText>
          Son la forma más básica de control de flujo. En estas estructuras, las
          instrucciones se ejecutan una tras otra en el orden en que aparecen en
          el código. No hay desviación del flujo basada en condiciones o ciclos.
        </NormalText>
        <H1>Algoritmo</H1>
        <NormalText>
          Conjunto de instrucciones para la resolución de un problema.
        </NormalText>
        <UnorderedList>
          <ListItem>
            <NormalText>
              <BoldText>Finitos.</BoldText> Inicio y fin
            </NormalText>
          </ListItem>
          <ListItem>
            <NormalText>
              <BoldText>Precisos.</BoldText>Pasos no ambigüos.
            </NormalText>
          </ListItem>
          <ListItem>
            <NormalText>
              <BoldText>Definidos.</BoldText>Si se sigue dos veces mismo
              resultado
            </NormalText>{" "}
          </ListItem>
        </UnorderedList>
        <H1>Paradigma</H1>
        <NormalText>
          Un paradigma es un conjunto de ideas, conceptos y prácticas
          establecidas que forman un modo de entender, percibir y abordar
          problemas dentro de un campo específico. Este término se utiliza
          ampliamente en ciencia, arte, educación y otros ámbitos para describir
          los enfoques dominantes o tradicionales en un período de tiempo
          determinado.
        </NormalText>
        <div className="flex justify-center">
          <Image height={300} width={300} alt="" src={Paradigm} />
        </div>
      </Flex>
    </>
  );
};
const SelectiveStructures = () => {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <H1>Hay tres tipos de estrucuras selectivas.</H1>
        <Flex width="auto" justify="space-between" flexDirection="column">
          <div className="">
            <H2>Condicional Simple</H2>
            <Code language="javascript">{`//para hacer comparaciones simples.
let edad = 18

if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}
`}</Code>
          </div>
          <div className="">
            <H2>Condicional Anidado</H2>
            <Code language="javascript">{`//Comparaciones con un grado de complejudad mayor pero aún manejable con if.
let hora = 14

if (hora < 12) {
    console.log("Buenos días")
} else {
    if (hora < 18) {
        console.log("Buenas tardes")
    } else {
        console.log("Buenas noches")
    }
}
`}</Code>
          </div>
          <div className="">
            <H2>Switch</H2>
            <Code language="javascript">{`// Comparaciones grandes donde se facilita el uso del switch.
let diaSemana = 3
let nombreDia

switch (diaSemana) {
    case 1:
        nombreDia = "Lunes"
        break
    case 2:
        nombreDia = "Martes"
        break
    case 3:
        nombreDia = "Miércoles"
        break
    case 4:
        nombreDia = "Jueves"
        break
    case 5:
        nombreDia = "Viernes"
        break
    case 6:
        nombreDia = "Sábado"
        break
    case 7:
        nombreDia = "Domingo"
        break
    default:
        nombreDia = "Día inválido"
}

console.log("Hoy es " + nombreDia)
`}</Code>
          </div>
        </Flex>
      </Flex>
    </>
  );
};
const RepetitiveStructures = () => {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <NormalText>
          Estructuras que como su nombre dice se encargan de repetir una acción.
        </NormalText>
        <NormalText>
          <BoldText>Consta de 3 partes.</BoldText>
        </NormalText>
        <Flex
          justifyContent="space-between"
          flexDirection={[
            "column",
            "column",
            "column",
            "column",
            "column",
            "row",
          ]}
        >
          <div className="">
            <H2>Valor inicial</H2>
            <Code language="javascript">{`//Es donde se declara I = 0
For (I=0; I<10; I++){}`}</Code>
          </div>
          <div className="">
            <H2>Condición lógica</H2>
            <Code language="javascript">{`//Es donde se declara I < 10
For (I=0; I<10; I++){}`}</Code>
          </div>
          <div className="">
            <H2>Incremento o decremento</H2>
            <Code language="javascript">{`//Es donde se coloca el I++ para que aumente uno en cada iteración
For (I=0; I<10; I++){}`}</Code>
          </div>
        </Flex>
        <H2>Hay 3 tipos</H2>
        <Flex flexDirection="column" gap={3}>
          <div className="">
            <H2>For</H2>
            <NormalText>Se declara desde la primera parte y desde ahí evalúa si se cumple la condición e incrementa el valor.</NormalText>
            <Code language="javascript">{`//Se utiliza cuando se conoce la cantidad de iteraciones
for (let j = 0; j < 5; j++) {
    console.log(j);
}
// Salida: 0 1 2 3 4
            `}</Code>
          </div>
          <div className="">
            <H2>While</H2>
            <NormalText>Para que funcione debe cumplirse la condición.</NormalText>
            <Code language="javascript">{`//
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Salida: 0 1 2 3 4
            `}</Code>
          </div>
          <div className="">
            <H2>Do While</H2>
            <NormalText>Se ejecuta al menos una vez sin evaluar la condición lógica.</NormalText>
            <Code language="javascript">{`//Se utiliza cuando no se conoce la cantidad de iteraciones
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// Salida: 0 1 2 3 4

            `}</Code>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

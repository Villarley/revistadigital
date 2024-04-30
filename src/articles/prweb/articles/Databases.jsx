import React from "react"
import Image from "next/image"
import {
  Flex,
  Table,
  Thead,
  Tbody,
  UnorderedList,
  List,
  ListItem,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react"
import { Typewriter } from "@/components/shared/"
import { H1, H2, NormalText, BoldText } from "@/components/shared/Text"
import { Pyramid } from "@/assets/images/"

export default function Databases() {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <Typewriter text="Bases de datos" type="heading" typingSpeed={50} />
        <Tabs variant="enclosed" mt={4}>
          <TabList>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Jerarquía de los datos</Tab>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Llaves</Tab>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Modelado de datos</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="animate__animated animate__fadeInRightBig">
                <Concepts />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeInRightBig">
                <Keys/>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeIn">
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  )
}
const Concepts = () => {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <NormalText>
          Sirven para guardar datos y posteriormente interpretar información.
        </NormalText>
        <Flex wrap="wrap" gap={3}>
        <NormalText><BoldText>Bit.</BoldText> Unidad de información más pequeña</NormalText>
        <NormalText><BoldText>Byte.</BoldText> Conjunto de bits.</NormalText>
        <NormalText><BoldText>Campo.</BoldText> Conjunto de bytes.</NormalText>
        <NormalText><BoldText>Registro.</BoldText> Conjunto de campos.</NormalText>
        <NormalText><BoldText>Tabla.</BoldText> Conjunto de registros.</NormalText>
        <NormalText><BoldText>Archivo.</BoldText> Conjunto de tablas.</NormalText>
        <NormalText><BoldText>BD.</BoldText> Conjunto de archivos.</NormalText>
        </Flex>
        <Flex justifyContent="center">
          <Image height={400} width={400} alt="" src={Pyramid}></Image>
        </Flex>
        <NormalText><BoldText>Filas.</BoldText>Están ubicados horizontalmente son los registros en la tabla.</NormalText>
        <NormalText><BoldText>Columnas.</BoldText>Están ubicados verticalmente.</NormalText>
        <TableContainer>
          <Table variant='striped' colorScheme="black">
            <TableCaption>Los registros están señalados en rojo.</TableCaption>
            <Thead>
              <Tr>
                <Th color="#0083ff">Cédula</Th>
                <Th>Nombre</Th>
                <Th>Apellido</Th>
                <Th>Fecha de nacimiento</Th>
                <Th>Salario</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td color="#ff0000">1-1111-1112</Td>
                <Td color="#ff0000">John</Td>
                <Td color="#ff0000">Doe</Td>
                <Td color="#ff0000">01/01/1990</Td>
                <Td color="#ff0000">1000</Td>
              </Tr>
              <Tr>
                <Td color="#0083ff">1-1111-1113</Td>
                <Td>John</Td>
                <Td>Doe</Td>
                <Td>01/01/1990</Td>
                <Td>1000</Td>
              </Tr>
              <Tr>
                <Td color="#0083ff">1-1111-1114</Td>
                <Td>John</Td>
                <Td>Doe</Td>
                <Td>01/01/1990</Td>
                <Td>1000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>

    </>
  )
}
const Keys = () =>{
  return (
    <>
    <Flex flexDirection="column" gap={3}>
      <H1>Llaves</H1>
      <NormalText>Es un campo que identifica al registro entero.</NormalText>
      <H2>Llaves primarias(pk)</H2>
      <UnorderedList>
        <ListItem>
          Es único
        </ListItem>
      </UnorderedList>
    </Flex>
    </>
  )
}
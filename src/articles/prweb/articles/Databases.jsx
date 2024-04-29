import React from "react"
import Image from "next/image"
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import { Typewriter } from "@/components/shared/"
import { NormalText } from "@/components/shared/Text"
import { Pyramid } from "@/assets/images/"

export default function Databases() {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <Typewriter text="Bases de datos" type="heading" typingSpeed={50} />
        <NormalText>
          Sirven para guardar datos y posteriormente interpretar información.
        </NormalText>
        <Flex justifyContent="center">
          <Image height={400} width={400} alt="" src={Pyramid}></Image>
        </Flex>
        <TableContainer>
  <Table variant='striped' colorScheme="yellow">
      <TableCaption>Los registros están señalados en celeste.</TableCaption>
    <Thead>
      <Tr>
        <Th>Cédula</Th>
        <Th>Nombre</Th>
        <Th>Apellido</Th>
        <Th>Fecha de nacimiento</Th>
        <Th>Salario</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1-1111-1111</Td>
        <Td>John</Td>
        <Td>Doe</Td>
        <Td>01/01/1990</Td>
        <Td>1000</Td>
      </Tr>
      <Tr>
      <Td>1-1111-1111</Td>
        <Td>John</Td>
        <Td>Doe</Td>
        <Td>01/01/1990</Td>
        <Td>1000</Td>
      </Tr>
      <Tr>
      <Td>1-1111-1111</Td>
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

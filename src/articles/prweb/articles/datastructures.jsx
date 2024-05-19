import React from "react"
import { Typewriter } from "@/components/shared"
import Image from "next/image"
import { DataStructures as DataStructuresImg } from "@/assets/images/"
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
import { H1, H2, NormalText, BoldText, Code } from "@/components/shared/Text"

export default function DataStructures() {
  return (
    <div className="w-full">
      <Typewriter text="Estructuras de datos" type="heading" typingSpeed={50} />
      <NormalText></NormalText>
      <Tabs variant="enclosed" mt={4}>
        <TabList>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Estructuras</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Estáticas</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Dinámicas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              <Concepts />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              {/* <Keys /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeIn">
              {/* <DataModeling /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeIn">
              {/* <DatabaseNormalization /> */}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
const Concepts = () => {
  return (
    <Flex flexDirection="column" gap={3}>
      <H1>Organización de datos</H1>
      <NormalText>Permite organizar los datos para su disponibilidad.</NormalText>
      <H2>Estructuras de datos</H2>
      <NormalText>Hay muchas formas de organizar los datos pero las estructuras de datos más comúnes se ven representantes en la siguiente imagen.</NormalText>
      <Image src={DataStructuresImg} alt=""></Image>
    </Flex>
  )
}

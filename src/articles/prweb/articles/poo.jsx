import React from "react"
import Image from "next/image"
import {
  Flex,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react"
import { NormalText } from "@/components/shared/Text"
import { Typewriter, BackIcon } from "@/components/shared/"

export default function Databases() {
    return (
      <>
        <Flex flexDirection="column" gap={3}>
          <div className="flex items-center">
            <BackIcon/>
            <Typewriter text="Programación orientada a objetos(POO)" type="heading" typingSpeed={50} />
          </div>
            <NormalText>Es un paradigma de Programación que tiene las siguientes caracteristicas</NormalText>
          <Tabs variant="enclosed" mt={4}>
            <TabList>
              <Tab _selected={{ color: "#fff", bg: "black" }}>
                Jerarquía de los datos
              </Tab>
              <Tab _selected={{ color: "#fff", bg: "black" }}>Llaves</Tab>
              <Tab _selected={{ color: "#fff", bg: "black" }}>
                Modelado de datos
              </Tab>
              <Tab _selected={{ color: "#fff", bg: "black" }}>Normalización</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="animate__animated animate__fadeInRightBig">
                  {/* <Concepts /> */}
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
        </Flex>
      </>
    )
  }
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
import { H1, H2, NormalText, BoldText, Code } from "@/components/shared/Text"
import { Pyramid, EntityRelationshipModel } from "@/assets/images/"

export default function Databases() {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <Typewriter text="Bases de datos" type="heading" typingSpeed={50} />
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
                <Concepts />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeInRightBig">
                <Keys />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeIn">
                <DataModeling />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeIn">
                <DatabaseNormalization />
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
          <NormalText>
            <BoldText>Bit.</BoldText> Unidad de información más pequeña
          </NormalText>
          <NormalText>
            <BoldText>Byte.</BoldText> Conjunto de bits.
          </NormalText>
          <NormalText>
            <BoldText>Campo.</BoldText> Conjunto de bytes.
          </NormalText>
          <NormalText>
            <BoldText>Registro.</BoldText> Conjunto de campos.
          </NormalText>
          <NormalText>
            <BoldText>Tabla.</BoldText> Conjunto de registros.
          </NormalText>
          <NormalText>
            <BoldText>Archivo.</BoldText> Conjunto de tablas.
          </NormalText>
          <NormalText>
            <BoldText>BD.</BoldText> Conjunto de archivos.
          </NormalText>
        </Flex>
        <Flex justifyContent="center">
          <Image height={400} width={400} alt="" src={Pyramid}></Image>
        </Flex>
        <NormalText>
          <BoldText>Filas.</BoldText>Están ubicados horizontalmente son los
          registros en la tabla.
        </NormalText>
        <NormalText>
          <BoldText>Columnas.</BoldText>Están ubicados verticalmente.
        </NormalText>
        <TableContainer>
          <Table variant="striped" colorScheme="black">
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
const Keys = () => {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <H1>Llaves</H1>
        <NormalText>Es un campo que identifica al registro entero.</NormalText>
        <H2>Llaves primarias(pk)</H2>
        <UnorderedList>
          <ListItem>Es único</ListItem>
          <ListItem>No puede borrarse</ListItem>
        </UnorderedList>
        <Code>
          Una clave primaria es una columna o un conjunto de columnas en una
          tabla cuyos valores identifican de forma exclusiva una fila de la
          tabla. Una base de datos relacional está diseñada para imponer la
          exclusividad de las claves primarias permitiendo que haya sólo una
          fila con un valor de clave primaria específico en una tabla.
        </Code>
        <H2>Llaves alternas</H2>
        <NormalText>
          Son posibles llaves primarias que se pueden utilizar en caso de
          necesitar identificar por otro medio.
        </NormalText>
        <H2>Llaves foráneas</H2>
        <Code>
          Una clave foránea es una columna o un conjunto de columnas en una
          tabla cuyos valores corresponden a los valores de la clave primaria de
          otra tabla. Para poder añadir una fila con un valor de clave foránea
          específico, debe existir una fila en la tabla relacionada con el mismo
          valor de clave primaria.
        </Code>
        <H2>Superllave</H2>
        <NormalText>
          Es una llave compuesta por varias llaves primarias o alternas para
          generar un identificador único.
        </NormalText>
        <TableContainer>
          <Table variant="striped" colorScheme="black">
            <TableCaption>
              Lo señalado en rojo es una llave primaria, lo señalado en celeste
              son llaves alternas, lo señalado en naranja es una superllave y lo
              señalado en verde es una llave foránea.
            </TableCaption>
            <Thead>
              <Tr>
                <Th color="#ff0000">Cédula</Th>
                <Th color="#0083ff">Carnet</Th>
                <Th color="#ff8000">CedulaCarnet</Th>
                <Th>Nombre</Th>
                <Th>Apellido</Th>
                <Th>Fecha de nacimiento</Th>
                <Th>Salario</Th>
                <Th color="#008000">PuestoId</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td color="#ff0000">1-1111-1112</Td>
                <Td color="#0083ff">2015458</Td>
                <Td color="#ff8000">1-1111-11122015458</Td>
                <Td>John</Td>
                <Td>Doe</Td>
                <Td>01/01/1990</Td>
                <Td>1000</Td>
                <Td color="#008000">c0522173-db11-4229-ab92-5009e7557a27</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  )
}
const DataModeling = () => {
  return (
    <Flex direction="column" gap={3}>
      <H1>Modelado de datos</H1>
      <NormalText>
        El modelado de datos es el proceso de definir los datos que se van a
        almacenar en una base de datos y cómo se relacionan entre sí es
        importante porque permite a los desarrolladores y a los administradores
        de bases de datos entender cómo se organizan los datos y cómo se pueden
        utilizar para satisfacer las necesidades de los usuarios.
      </NormalText>
      <div className="flex flex-col items-center">
        <NormalText>
          Para eso tenemos el <BoldText>modelo entidad-relación</BoldText>
        </NormalText>
        <NormalText>
          Aquí podemos ver como se utiliza el rectángulo para definir la
          entidad, los círculos como los atributos, las flechas para definir las
          relaciones y el rombo que representa la relación que hay entre
          entidades. También es necesario agregar si es 1-N o N-N o 1-1
        </NormalText>
        <Image src={EntityRelationshipModel} alt=""></Image>
      </div>
    </Flex>
  )
}
const DatabaseNormalization = () => {
  return (
    <Flex direction="column" gap={3}>
      <H1>Normalización de bases de datos</H1>
      <NormalText>
        La normalización en el contexto de bases de datos es un proceso
        sistemático para organizar los datos en una base de datos con el fin de
        minimizar la redundancia y evitar problemas de integridad. Este proceso
        implica la descomposición de las tablas grandes en tablas más pequeñas y
        el establecimiento de relaciones entre ellas, de manera que se mantengan
        las dependencias de datos de forma lógica y se reduzcan las anomalías de
        actualización, inserción y eliminación. El objetivo principal de la
        normalización es garantizar que los datos se almacenen de la manera más
        eficiente y consistente posible.{" "}
      </NormalText>
      <H2>1. Primer ley</H2>
      <Code>
        La primera forma normal (1NF) requiere que todos los atributos de una
        tabla contengan valores atómicos, es decir, indivisibles, y que no haya
        conjuntos o listas de valores dentro de una celda. Además, cada columna
        debe contener valores de un solo tipo de dato. El objetivo de la primera
        forma normal es asegurar que cada campo de la tabla contenga solo un
        valor por registro y que todos los valores en una columna sean del mismo
        tipo, eliminando duplicaciones de datos y asegurando la atomicidad de
        los valores en una tabla.
      </Code>
      <FirstNormalizationLaw />
      <H2>2. Segunda ley</H2>
      <Code>
        La segunda forma normal (2NF) se alcanza si una tabla cumple con la
        primera forma normal y todos los atributos no clave dependen
        completamente de la clave principal, es decir, no hay dependencias
        parciales de la clave. El objetivo de la segunda forma normal es
        eliminar la redundancia parcial de datos y garantizar que todos los
        atributos no clave estén completamente dependientes de la clave
        principal, no solo de una parte de una clave compuesta.
      </Code>
      <SecondNormalizationLaw />
      <H2>3. Tercera ley</H2>
      <Code>
        La tercera forma normal (3NF) se logra si una tabla cumple con la
        segunda forma normal y todos los atributos no clave son mutuamente
        independientes, es decir, no deben depender de otros atributos no clave.
        El objetivo de la tercera forma normal es eliminar la dependencia
        transitiva de los datos y asegurar que todos los atributos no clave
        dependan directamente de la clave principal y no de otros atributos no
        clave.
      </Code>
      <ThirdNormalizationLaw />
    </Flex>
  )
}
const FirstNormalizationLaw = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="black">
          <TableCaption>Tabla sin normalizar</TableCaption>
          <Thead>
            <Tr>
              <Th color="#ff0000">ID Cliente</Th>
              <Th>Nombre</Th>
              <Th>Dirección</Th>
              <Th>Teléfonos</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td color="#ff0000">1</Td>
              <Td>Juan Pérez</Td>
              <Td>Av. Siempre Viva 123</Td>
              <Td>555-1234, 555-5678</Td>
            </Tr>
            <Tr>
              <Td color="#ff0000">2</Td>
              <Td>Ana Gómez</Td>
              <Td>Calle Falsa 456</Td>
              <Td>555-8765</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table variant="striped" colorScheme="black">
          <TableCaption>Tabla en Primera Forma Normal (1NF)</TableCaption>
          <Thead>
            <Tr>
              <Th color="#ff0000">ID Cliente</Th>
              <Th>Nombre</Th>
              <Th>Dirección</Th>
              <Th>Teléfono</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td color="#ff0000">1</Td>
              <Td>Juan Pérez</Td>
              <Td>Av. Siempre Viva 123</Td>
              <Td>555-1234</Td>
            </Tr>
            <Tr>
              <Td color="#ff0000">1</Td>
              <Td>Juan Pérez</Td>
              <Td>Av. Siempre Viva 123</Td>
              <Td>555-5678</Td>
            </Tr>
            <Tr>
              <Td color="#ff0000">2</Td>
              <Td>Ana Gómez</Td>
              <Td>Calle Falsa 456</Td>
              <Td>555-8765</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
const SecondNormalizationLaw = () => {
  return (
    <>
<TableContainer>
  <Table variant="striped" colorScheme="black">
    <TableCaption>
      Tabla No Normalizada (2NF)
    </TableCaption>
    <Thead>
      <Tr>
        <Th color="#ff0000">ID Pedido</Th>
        <Th color="#008000">ID Producto</Th>
        <Th>Nombre Producto</Th>
        <Th>Cantidad</Th>
        <Th>Precio Unitario</Th>
        <Th>Descripción Producto</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td color="#ff0000">1</Td>
        <Td color="#008000">101</Td>
        <Td>Lápiz</Td>
        <Td>10</Td>
        <Td>0.50</Td>
        <Td>Lápiz de grafito</Td>
      </Tr>
      <Tr>
        <Td color="#ff0000">1</Td>
        <Td color="#008000">102</Td>
        <Td>Cuaderno</Td>
        <Td>5</Td>
        <Td>1.50</Td>
        <Td>Cuaderno rayado</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

<TableContainer>
  <Table variant="striped" colorScheme="black">
    <TableCaption>
      Tabla en Segunda Forma Normal (2NF)
    </TableCaption>
    <Thead>
      <Tr>
        <Th color="#ff0000">ID Pedido</Th>
        <Th color="#008000">ID Producto</Th>
        <Th>Cantidad</Th>
        <Th>Precio Unitario</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td color="#ff0000">1</Td>
        <Td color="#008000">101</Td>
        <Td>10</Td>
        <Td>0.50</Td>
      </Tr>
      <Tr>
        <Td color="#ff0000">1</Td>
        <Td color="#008000">102</Td>
        <Td>5</Td>
        <Td>1.50</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

<TableContainer>
  <Table variant="striped" colorScheme="black">
    <TableCaption>
      Tabla en Segunda Forma Normal (2NF)
    </TableCaption>
    <Thead>
      <Tr>
        <Th color="#ff0000">ID Producto</Th>
        <Th>Nombre Producto</Th>
        <Th>Descripción Producto</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td color="#ff0000">101</Td>
        <Td>Lápiz</Td>
        <Td>Lápiz de grafito</Td>
      </Tr>
      <Tr>
        <Td color="#ff0000">102</Td>
        <Td>Cuaderno</Td>
        <Td>Cuaderno rayado</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  </>
  )
}
const ThirdNormalizationLaw = () => {
  return (
    <>
<TableContainer>
  <Table variant="striped" colorScheme="black">
    <TableCaption>
      Tabla No Normalizada (3NF)
    </TableCaption>
    <Thead>
      <Tr>
        <Th color="#ff0000">ID Empleado</Th>
        <Th>Nombre</Th>
        <Th color="#008000">ID Departamento</Th>
        <Th>Nombre Departamento</Th>
        <Th>Ubicación Departamento</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td color="#ff0000">1</Td>
        <Td>Luis García</Td>
        <Td color="#008000">10</Td>
        <Td>Ventas</Td>
        <Td>Planta Baja</Td>
      </Tr>
      <Tr>
        <Td color="#ff0000">2</Td>
        <Td>Marta López</Td>
        <Td color="#008000">20</Td>
        <Td>Marketing</Td>
        <Td>Segundo Piso</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

<TableContainer>
  <Table variant="striped" colorScheme="black">
    <TableCaption>
      Tabla en Tercera Forma Normal (3NF)
    </TableCaption>
    <Thead>
      <Tr>
        <Th color="#ff0000">ID Empleado</Th>
        <Th>Nombre</Th>
        <Th color="#008000">ID Departamento</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td color="#ff0000">1</Td>
        <Td>Luis García</Td>
        <Td color="#008000">10</Td>
      </Tr>
      <Tr>
        <Td color="#ff0000">2</Td>
        <Td>Marta López</Td>
        <Td color="#008000">20</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

<TableContainer>
  <Table variant="striped" colorScheme="black">
    <TableCaption>
      Tabla en Tercera Forma Normal (3NF)
    </TableCaption>
    <Thead>
      <Tr>
        <Th color="#ff0000">ID Departamento</Th>
        <Th>Nombre Departamento</Th>
        <Th>Ubicación Departamento</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td color="#ff0000">10</Td>
        <Td>Ventas</Td>
        <Td>Planta Baja</Td>
      </Tr>
      <Tr>
        <Td color="#ff0000">20</Td>
        <Td>Marketing</Td>
        <Td>Segundo Piso</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </>
  )
}

import React from "react"
import { Typewriter, BackIcon } from "@/components/shared"
import Image from "next/image"
import {
  DataStructures as DataStructuresImg,
  Trees,
  CompleteGraph,
  DirectedCompleteGraph,
  SelectionSort,
  BubbleSort,
  InsertionSort,
} from "@/assets/images/"
import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react"
import {
  H1,
  H2,
  H3,
  NormalText,
  Code,
  BoldText,
} from "@/components/shared/Text"

export default function DataStructures() {
  return (
    <div className="w-full">
      <div className="flex">
        <BackIcon/>
        <Typewriter text="Estructuras de datos" type="heading" typingSpeed={50} />
      </div>
      <Tabs variant="enclosed" mt={4}>
        <TabList>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Estructuras</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Estáticas</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Dinámicas</Tab>
          <Tab _selected={{ color: "#fff", bg: "black" }}>Métodos de ordenamiento(Arreglos)</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              <Concepts />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeInRightBig">
              <StaticStructures />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeIn">
              <DynamicStructures />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="animate__animated animate__fadeIn">
              <SortingMethods />
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
      <NormalText>
        Permite organizar los datos para su disponibilidad.
      </NormalText>
      <H2>Estructuras de datos</H2>
      <NormalText>
        Hay muchas formas de organizar los datos pero las estructuras de datos
        más comunes se ven representadas en la siguiente imagen.
      </NormalText>
      <Image src={DataStructuresImg} alt="" />
    </Flex>
  )
}

const StaticStructures = () => {
  return (
    <Flex direction="column" gap={3}>
      <H1>Estructuras de datos estáticas</H1>
      <NormalText>
        Las estructuras de datos estáticas son aquellas que tienen un tamaño
        fijo y no se pueden modificar durante la ejecución del programa.
      </NormalText>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <H2>Variable</H2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NormalText>
              Una variable es un espacio en memoria que se utiliza para
              almacenar un valor. Las variables tienen:
            </NormalText>
            <UnorderedList>
              <ListItem>Valor</ListItem>
              <ListItem>Dirección</ListItem>
              <ListItem>Tipo</ListItem>
              <ListItem>Nombre</ListItem>
            </UnorderedList>
            <Code language="javascript">int x = 10</Code>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <H2>Arreglos</H2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NormalText>
              Los arreglos son estructuras de datos estáticas que permiten
              almacenar datos de un mismo tipo en una sola variable.
            </NormalText>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Índice</Th>
                    <Th>Valor</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0</Td>
                    <Td>1</Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>2</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>3</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <H3>Vector</H3>
            <NormalText>Un vector es un arreglo unidimensional.</NormalText>
            <Code language="javascript">int[] vector = new int[3]</Code>
            <H3>Matriz</H3>
            <NormalText>Una matriz es un arreglo bidimensional.</NormalText>
            <Code language="javascript">{`
int[][] matriz = new int[3][3]
console.log(matriz[0][0])
//El resultado va ser 1 debido a que es el que se encuentra en la posición 0,0
            `}</Code>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Índice</Th>
                    <Th>Valor 1</Th>
                    <Th>Valor 2</Th>
                    <Th>Valor 3</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0</Td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>7</Td>
                    <Td>8</Td>
                    <Td>9</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <H2>Registro</H2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NormalText>
              Un registro es una estructura de datos que almacena datos
              heterogéneos. Los registros son útiles para agrupar información de
              diferentes tipos en una sola estructura, facilitando la
              manipulación y organización de los datos.
            </NormalText>
            <NormalText>
              Un registro puede contener varios campos, cada uno con su propio
              nombre y tipo de datos. Por ejemplo, en un registro que representa
              un libro, podríamos tener campos para el título, el autor, el año
              de publicación y el precio:
            </NormalText>
            <Code language="javascript">{`
struct Libro {
  string titulo
  string autor
  int anioPublicacion
  double precio
}

Libro libro1
libro1.titulo = "1984"
libro1.autor = "George Orwell"
libro1.anioPublicacion = 1949
libro1.precio = 19.99
            `}</Code>
            <NormalText>
              Los registros permiten acceder a cada campo individualmente
              utilizando el operador de punto (.).
            </NormalText>
            <NormalText>
              En muchos lenguajes de programación, los registros pueden ser
              utilizados para representar filas en una base de datos o para
              modelar objetos más complejos en la programación orientada a
              objetos. Por ejemplo, en el lenguaje C, un registro se define
              utilizando la palabra clave `struct`.
            </NormalText>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}
const DynamicStructures = () => {
  return (
    <Flex direction="column" gap={3}>
      <H1>Estructuras de datos dinámicas</H1>
      <NormalText>
        Las estructuras de datos dinámicas son aquellas que pueden crecer o
        reducirse durante la ejecución del programa.
      </NormalText>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <H2>Nodos</H2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NormalText>
              Un nodo es un componente fundamental de muchas estructuras de
              datos, que contiene un valor y punteros (o referencias) a otros
              nodos.
            </NormalText>
            <Code language="javascript">{`
class Nodo {
  constructor(valor) {
    this.valor = valor
    this.siguiente = null // Para listas enlazadas
    this.hijos = [] // Para árboles
  }
}
            `}</Code>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <H2>Punteros</H2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NormalText>
              Un puntero es una referencia a otro nodo o elemento en la memoria.
              Los punteros son esenciales para construir estructuras de datos
              dinámicas.
            </NormalText>
            <Code language="javascript">{`
class Nodo {
  constructor(valor) {
    this.valor = valor
    this.siguiente = null // Puntero al siguiente nodo en listas enlazadas
  }
}

class Arbol {
  constructor(valor) {
    this.raiz = new Nodo(valor)
  }
}
            `}</Code>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <H2>Lineales</H2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NormalText>
              Las estructuras de datos dinámicas lineales incluyen:
            </NormalText>
            <UnorderedList>
              <ListItem>Listas enlazadas</ListItem>
              <ListItem>Pilas</ListItem>
              <ListItem>Colas</ListItem>
            </UnorderedList>
            <H3>Listas enlazadas</H3>
            <NormalText>
              Una lista enlazada es una colección de nodos donde cada nodo
              contiene un valor y una referencia al siguiente nodo en la
              secuencia.
            </NormalText>
            <Code language="javascript">{`
class Nodo {
  constructor(valor) {
    this.valor = valor
    this.siguiente = null
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null
  }
  
  agregar(valor) {
    const nuevoNodo = new Nodo(valor)
    if (this.cabeza === null) {
      this.cabeza = nuevoNodo
    } else {
      let actual = this.cabeza
      while (actual.siguiente !== null) {
        actual = actual.siguiente
      }
      actual.siguiente = nuevoNodo
    }
  }
}
            `}</Code>
            <H3>Pilas</H3>
            <NormalText>
              Una pila es una colección ordenada de elementos, que sigue el
              principio LIFO (Last In, First Out). Se pueden realizar dos
              operaciones básicas en una pila: push (insertar) y pop (eliminar).
            </NormalText>
            <Code language="javascript">{`
class Pila {
  constructor() {
    this.elementos = []
  }

  push(elemento) {
    this.elementos.push(elemento)
  }

  pop() {
    if (this.elementos.length === 0) {
      return "La pila está vacía"
    }
    return this.elementos.pop()
  }

  peek() {
    return this.elementos[this.elementos.length - 1]
  }

  isEmpty() {
    return this.elementos.length === 0
  }
}
            `}</Code>
            <H3>Colas</H3>
            <NormalText>
              Una cola es una colección ordenada de elementos que sigue el
              principio FIFO (First In, First Out). Las operaciones básicas son
              enqueue (insertar) y dequeue (eliminar).
            </NormalText>
            <Code language="javascript">{`
class Cola {
  constructor() {
    this.elementos = []
  }

  enqueue(elemento) {
    this.elementos.push(elemento)
  }

  dequeue() {
    if (this.elementos.length === 0) {
      return "La cola está vacía"
    }
    return this.elementos.shift()
  }

  front() {
    if (this.elementos.length === 0) {
      return "La cola está vacía"
    }
    return this.elementos[0]
  }

  isEmpty() {
    return this.elementos.length === 0
  }
}
            `}</Code>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <H2>No lineales</H2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <NormalText>
              Las estructuras de datos dinámicas no lineales incluyen:
            </NormalText>
            <UnorderedList>
              <ListItem>Árboles</ListItem>
              <ListItem>Grafos</ListItem>
              <ListItem>Tablas hash</ListItem>
            </UnorderedList>
            <H3>
              <BoldText>Árboles</BoldText>
            </H3>
            <NormalText>
              Un árbol es una estructura jerárquica de nodos, donde cada nodo
              tiene un valor y referencias a sus nodos hijos.
            </NormalText>
            <Box display="flex" justifyContent="center">
              <Image src={Trees} alt="Árbol binario" />
            </Box>
            <NormalText>
              Los árboles se pueden recorrer de diferentes maneras, siendo las
              más comunes Inorder, Preorder y Postorder.
            </NormalText>

            <H3><BoldText>Recorrido Inorder(R, I, D)</BoldText></H3>
            <NormalText>
              En un recorrido Inorder, se visita el subárbol izquierdo, luego la
              raíz, y finalmente el subárbol derecho.
            </NormalText>
            <Code>{`3, 4, 1, 8, 11, 12, 15, 19, 28, 22, 32, 50, 51, 56, 58, 70, 60, 78, 80, 91, 100`}</Code>

            <H3><BoldText>Recorrido Preorder(I, R, D)</BoldText></H3>
            <NormalText>
              En un recorrido Preorder, se visita primero la raíz, luego el
              subárbol izquierdo, y finalmente el subárbol derecho.
            </NormalText>
            <Code>{`50, 15, 8, 1, 4, 3, 12, 11, 19, 32, 28, 22, 80, 51, 56, 70, 58, 60, 78, 91, 100`}</Code>

            <H3><BoldText>Recorrido Postorder(I, D, R)</BoldText></H3>
            <NormalText>
              En un recorrido Postorder, se visita primero el subárbol
              izquierdo, luego el subárbol derecho, y finalmente la raíz.
            </NormalText>
            <Code>{`3, 4, 1, 11, 12, 19, 8, 22, 28, 32, 15, 58, 60, 70, 56, 51, 78, 91, 100, 80, 50`}</Code>
            <H3>
              <BoldText>Grafos</BoldText>
            </H3>
            <NormalText>
              Un grafo es una colección de nodos (o vértices) y aristas (o
              enlaces) que conectan pares de nodos.
            </NormalText>
            <NormalText>
              Un grafo completo es un grafo en el que cada par de vértices está
              conectado por una arista. Es decir, todos los vértices están
              directamente conectados entre sí.
            </NormalText>
            <Box display="flex" justifyContent="center">
              <Image src={CompleteGraph} alt="Grafo completo" />
            </Box>
            <NormalText>
              Un grafo completo dirigido es similar a un grafo completo, pero
              con la diferencia de que cada arista tiene una dirección, es
              decir, va de un vértice a otro en un solo sentido.
            </NormalText>
            <Box display="flex" justifyContent="center">
              <Image
                src={DirectedCompleteGraph}
                alt="Grafo completo dirigido"
              />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}
const SortingMethods = () => {
  return (
    <Flex direction="column" gap={3}>
      <H1>Métodos de Ordenamiento de Arrays</H1>
      <NormalText>Existen varios métodos para ordenar arrays. Aquí explicaremos tres de los más comunes: Selection Sort, Bubble Sort e Insertion Sort, utilizando ejemplos en Javascript.</NormalText>
      
      <H2><BoldText>Selection Sort</BoldText></H2>
      <NormalText>Selection Sort es un algoritmo simple de ordenamiento que divide el array en dos partes: la parte ordenada al principio y la parte desordenada al final. Funciona seleccionando repetidamente el elemento más pequeño de la parte desordenada y colocándolo al final de la parte ordenada.</NormalText>
      <Box display="flex" justifyContent="center">
        <Image src={SelectionSort} alt="Selection Sort" />
      </Box>
      <Code language="javascript">{`
function selectionSort(arr) {
  // Iterar sobre todo el array
  for (let i = 0 i < arr.length i++) {
    // Asumir que el elemento actual es el mínimo
    let minIdx = i
    // Buscar el elemento más pequeño en el resto del array
    for (let j = i + 1 j < arr.length j++) {
      if (arr[j] < arr[minIdx]) {
        // Actualizar el índice del elemento más pequeño
        minIdx = j
      }
    }
    // Intercambiar el elemento más pequeño encontrado con el elemento actual
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
  }
  return arr
}

      `}</Code>
      
      <H2><BoldText>Bubble Sort</BoldText></H2>
      <NormalText>Bubble Sort es un algoritmo de ordenamiento que compara repetidamente pares adyacentes y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que el array está ordenado.</NormalText>
      <Box display="flex" justifyContent="center">
        <Image src={BubbleSort} alt="Bubble Sort" />
      </Box>
      <Code language="javascript">{`
function bubbleSort(arr) {
  let n = arr.length
  // Iterar sobre todo el array
  for (let i = 0 i < n i++) {
    // Iterar sobre los elementos restantes no ordenados
    for (let j = 0 j < n - i - 1 j++) {
      // Si el elemento actual es mayor que el siguiente, intercambiarlos
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
      `}</Code>
      
      <H2><BoldText>Insertion Sort</BoldText></H2>
      <NormalText>Insertion Sort es un algoritmo de ordenamiento que construye el array ordenado un elemento a la vez, tomando un elemento de la parte desordenada y colocándolo en la posición correcta en la parte ordenada.</NormalText>
      <Box display="flex" justifyContent="center">
        <Image src={InsertionSort} alt="Insertion Sort" />
      </Box>
      <Code language="javascript">{`
function insertionSort(arr) {
  // Iterar desde el segundo elemento hasta el final del array
  for (let i = 1 i < arr.length i++) {
    let key = arr[i] // Guardar el elemento actual
    let j = i - 1
    // Mover los elementos del array que son mayores que key, una posición adelante de su posición actual
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    // Insertar el elemento actual en la posición correcta
    arr[j + 1] = key
  }
  return arr
}

      `}</Code>
    </Flex>
  )
}

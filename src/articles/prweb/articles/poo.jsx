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
import { NormalText, Code, H2 } from "@/components/shared/Text"
import { Typewriter, BackIcon } from "@/components/shared/"
import { Hidden, Polymorphism } from "@/assets/images"

export default function Poo() {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <div className="flex items-center">
          <BackIcon />
          <Typewriter
            text="Programación orientada a objetos(POO)"
            type="heading"
            typingSpeed={50}
          />
        </div>
        <NormalText>Es un paradigma de Programación</NormalText>
        <Tabs variant="enclosed" mt={4}>
          <TabList>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Clase</Tab>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Abstracción</Tab>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Ocultamiento</Tab>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Encapsulación</Tab>
            <Tab _selected={{ color: "#fff", bg: "black" }}>Polimorfismo</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="animate__animated animate__fadeInRightBig">
                <ClassComp />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeInRightBig">
                <AbstractionComp />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeIn">
                <HiddingComp />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeIn">
                <EncapsulationComp />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="animate__animated animate__fadeIn">
                <PolymorphismComp />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  )
}

function ClassComp() {
  return (
    <>
      <NormalText>
        Una clase es una plantilla para la creación de objetos de datos según un
        modelo definido. Las clases se utilizan para representar entidades o
        conceptos. Cada clase es un modelo que define un conjunto de variables y
        métodos apropiados para operar con dichos datos.
      </NormalText>
      <Code language="javascript">{`
  // Definición de una clase llamada Persona
  class Persona {
    // El constructor es un método especial para inicializar objetos
    constructor(nombre, edad) {
      // Los atributos de la clase se definen usando this
      this.nombre = nombre  // Atributo nombre
      this.edad = edad      // Atributo edad
    }
  
    // Método para saludar
    saludar() {
      console.log(\`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años.\`)
    }
  
    // Método para incrementar la edad
    cumplirAnios() {
      this.edad += 1
      console.log(\`Feliz cumpleaños \${this.nombre}, ahora tienes \${this.edad} años.\`)
    }
  }
  
  // Creación de una instancia de la clase Persona
  let persona1 = new Persona("Juan", 30)
  
  // Llamada al método saludar
  persona1.saludar() // Output: Hola, mi nombre es Juan y tengo 30 años.
  
  // Llamada al método cumplirAnios
  persona1.cumplirAnios() // Output: Feliz cumpleaños Juan, ahora tienes 31 años.
        `}</Code>
    </>
  )
}

function AbstractionComp() {
  return (
    <>
      <NormalText>
        La abstracción es un concepto clave en la programación orientada a
        objetos. Permite enfocarse en los aspectos esenciales de una entidad,
        ocultando los detalles complejos que no son necesarios para su uso.
      </NormalText>
      <Code language="javascript">{`
  // Definición de una clase abstracta llamada Figura
  class Figura {
    constructor(tipo) {
      this.tipo = tipo  // Atributo tipo
    }
  
    // Método abstracto para calcular el área (debe ser implementado por las subclases)
    calcularArea() {
      throw new Error("Este método debe ser implementado por una subclase")
    }
  
    // Método para mostrar información de la figura
    mostrarTipo() {
      console.log(\`Esta es una figura de tipo \${this.tipo}\`)
    }
  }
  
  // Definición de una subclase llamada Rectangulo que extiende de Figura
  class Rectangulo extends Figura {
    constructor(ancho, alto) {
      super("Rectángulo")  // Llamada al constructor de la clase padre
      this.ancho = ancho  // Atributo ancho
      this.alto = alto    // Atributo alto
    }
  
    // Implementación del método calcularArea
    calcularArea() {
      return this.ancho * this.alto
    }
  }
  
  // Creación de una instancia de la clase Rectangulo
  let rectangulo = new Rectangulo(5, 10)
  
  // Llamada al método mostrarTipo
  rectangulo.mostrarTipo() // Output: Esta es una figura de tipo Rectángulo
  
  // Llamada al método calcularArea
  console.log(\`El área del rectángulo es: \${rectangulo.calcularArea()}\`) // Output: El área del rectángulo es: 50
        `}</Code>
    </>
  )
}

function HiddingComp() {
  return (
    <>
      <Flex flexDirection="column" gap={10}>
        <NormalText>
          El ocultamiento (o encapsulación) es una técnica en la programación
          orientada a objetos que restringe el acceso directo a algunos de los
          componentes de un objeto, lo que significa que se puede ocultar
          información de implementación dentro del objeto.
        </NormalText>
        <Image src={Hidden} alt="Encapsulación" />
        <H2>Ejemplo de ocultamiento en TypeScript</H2>
        <Code language="javascript">{`
  // Definición de una clase llamada CuentaBancaria
  class CuentaBancaria {
    // Atributos privados
    private titular: string
    private saldo: number
  
    constructor(titular: string, saldo: number) {
      this.titular = titular
      this.saldo = saldo
    }
  
    // Método público para obtener el saldo (getter)
    public getSaldo(): number {
      return this.saldo
    }
  
    // Método público para depositar dinero
    public depositar(cantidad: number): void {
      if (cantidad > 0) {
        this.saldo += cantidad
        console.log(\`Depósito exitoso. Nuevo saldo: \${this.saldo}\`)
      } else {
        console.log("La cantidad debe ser positiva.")
      }
    }
  
    // Método público para retirar dinero
    public retirar(cantidad: number): void {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad
        console.log(\`Retiro exitoso. Nuevo saldo: \${this.saldo}\`)
      } else {
        console.log("Fondos insuficientes o cantidad inválida.")
      }
    }
  }
  
  // Creación de una instancia de la clase CuentaBancaria
  let miCuenta = new CuentaBancaria("Juan", 1000)
  
  // Llamada al método depositar
  miCuenta.depositar(500) // Output: Depósito exitoso. Nuevo saldo: 1500
  
  // Llamada al método retirar
  miCuenta.retirar(200) // Output: Retiro exitoso. Nuevo saldo: 1300
  
  // Intento de acceso directo al atributo privado saldo (esto causará un error)
  // console.log(miCuenta.saldo) // Error: Property 'saldo' is private and only accessible within class 'CuentaBancaria'
        `}</Code>
      </Flex>
    </>
  )
}

function EncapsulationComp() {
  return (
    <>
      <NormalText>
        El encapsulamiento es una técnica en la programación orientada a objetos
        que restringe el acceso directo a algunos de los componentes de un
        objeto, lo que significa que se puede ocultar información de
        implementación dentro del objeto. El ocultamiento de información es
        parte del encapsulamiento, pero específicamente se refiere a la práctica
        de hacer que algunos datos sean privados y accesibles solo a través de
        métodos públicos. La diferencia clave es que el encapsulamiento es un
        concepto más amplio que incluye no solo el ocultamiento de datos, sino
        también la agrupación de datos y métodos que operan sobre ellos en una
        sola unidad llamada clase.
      </NormalText>
      <Code language="javascript">{`
// Definición de una clase llamada CuentaBancaria
class CuentaBancaria {
// Atributos privados
private titular: string
private saldo: number

constructor(titular: string, saldo: number) {
    this.titular = titular
    this.saldo = saldo
}

// Método público para obtener el saldo (getter)
public getSaldo(): number {
    return this.saldo
}

// Método público para depositar dinero
public depositar(cantidad: number): void {
    if (cantidad > 0) {
    this.saldo += cantidad
    console.log(\`Depósito exitoso. Nuevo saldo: \${this.saldo}\`)
    } else {
    console.log("La cantidad debe ser positiva.")
    }
}

// Método público para retirar dinero
public retirar(cantidad: number): void {
    if (cantidad > 0 && cantidad <= this.saldo) {
    this.saldo -= cantidad
    console.log(\`Retiro exitoso. Nuevo saldo: \${this.saldo}\`)
    } else {
    console.log("Fondos insuficientes o cantidad inválida.")
    }
}
}

// Creación de una instancia de la clase CuentaBancaria
let miCuenta = new CuentaBancaria("Juan", 1000)

// Llamada al método depositar
miCuenta.depositar(500) // Output: Depósito exitoso. Nuevo saldo: 1500

// Llamada al método retirar
miCuenta.retirar(200) // Output: Retiro exitoso. Nuevo saldo: 1300

// Intento de acceso directo al atributo privado saldo (esto causará un error)
// console.log(miCuenta.saldo) // Error: Property 'saldo' is private and only accessible within class 'CuentaBancaria'
    `}</Code>
    </>
  )
}

function PolymorphismComp() {
  return (
    <>
      <Flex direction="column" gap={10} justifyContent="center">
        <NormalText>
          El polimorfismo es un principio de la programación orientada a objetos
          que permite que una interfaz única sea utilizada para representar
          diferentes tipos de objetos. Esto permite que los métodos se comporten
          de manera diferente según el objeto que los invoque. Existen dos tipos
          principales de polimorfismo: polimorfismo de sobrecarga (overloading)
          y polimorfismo de inclusión (subtyping).
        </NormalText>
        <Flex width="100wh" justifyContent="center">
            <Image height={400} src={Polymorphism} alt="Polimorfismo" />
        </Flex>
        <Code language="javascript">{`
  // Definición de una clase base llamada Animal
  class Animal {
    // Método que será sobrescrito por las subclases
    public hacerSonido(): void {
      console.log("El animal hace un sonido")
    }
  }
  
  // Definición de una subclase llamada Perro que extiende de Animal
  class Perro extends Animal {
    // Sobrescritura del método hacerSonido
    public hacerSonido(): void {
      console.log("El perro ladra")
    }
  }
  
  // Definición de una subclase llamada Gato que extiende de Animal
  class Gato extends Animal {
    // Sobrescritura del método hacerSonido
    public hacerSonido(): void {
      console.log("El gato maúlla")
    }
  }
  
  // Función que acepta cualquier objeto del tipo Animal
  function imprimirSonido(animal: Animal): void {
    animal.hacerSonido()
  }
  
  // Creación de instancias de Perro y Gato
  let miPerro = new Perro()
  let miGato = new Gato()
  
  // Llamada a la función imprimirSonido con diferentes objetos
  imprimirSonido(miPerro) // Output: El perro ladra
  imprimirSonido(miGato)  // Output: El gato maúlla
        `}</Code>
      </Flex>
    </>
  )
}

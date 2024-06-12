# M2 RA1 - ADHD04
## INTECAP

- Fecha: 12/06/2024
- Carrera: Desarrollador FullStack
- Modulo 2 - Resultado de Aprendizaje 

| Plugin | README |
| ------ | ------ |
| 2021-029637 | Abner Orozco    |



### Descripcion del proyecto
> 1.	¿Qué es TypeScript?
>
> TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript que añade tipos estáticos opcionales, interfaces, enumeraciones y otras características avanzadas que facilitan la escritura de código más seguro y mantenible. TypeScript se transpila a JavaScript, lo que significa que el código TypeScript se convierte en JavaScript para que pueda ser ejecutado en cualquier entorno compatible con JavaScript, como navegadores web y servidores Node.js.
>
>
> 2.	¿Qué ventajas ofrece TypeScript frente a JavaScript puro?
>
> •  Chequeo estático de tipos: TypeScript permite detectar errores de tipo durante el desarrollo, antes de ejecutar el código, lo que reduce la cantidad de errores en tiempo de ejecución.
>
>•  Mejor soporte para IDE: TypeScript proporciona autocompletado, navegación del código y refactorización en entornos de desarrollo integrados (IDE) como Visual Studio Code, lo que mejora la productividad del desarrollador.
>
>•  Interfaces y tipos: Facilitan la definición de contratos claros para las estructuras de datos y aseguran que los objetos y funciones se utilicen de manera coherente.
> 
>• Modularidad y encapsulación: TypeScript soporta módulos y clases, lo que facilita la organización y reutilización del código.
>
>•  Compatibilidad con ES6/ESNext: TypeScript soporta características modernas de ECMAScript, como async/await, generadores y destructuring, lo que permite escribir código más conciso y legible.
>
>•  Código más legible y mantenible: Gracias a la documentación implícita de los tipos y las características avanzadas de TypeScript, el código es más fácil de entender y mantener.
>
>
>3.	¿Cómo se instala TypeScript en VSCode?
>
>Abre la terminal de VSCode.
Ejecuta el siguiente comando para instalar TypeScript globalmente:
>
>npm install -g typescript
>
>Esto instalará el compilador TypeScript (tsc) a nivel global en tu sistema, permitiéndote utilizarlo desde cualquier lugar.
>
>
>4.	¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?
>
>Usa el comando tsc seguido del nombre del archivo TypeScript: Usa el comando tsc seguido del nombre del archivo TypeScript:
>
>tsc archivo.ts
>
>Esto generará un archivo JavaScript con el mismo nombre en el mismo directorio. También puedes configurar un archivo tsconfig.json para personalizar las opciones de compilación y especificar múltiples archivos a compilar.
>
>5.	¿Qué extensión de archivo se utiliza para los archivos TypeScript?
>
>La extensión es .ts. Para archivos que contienen JSX, se utiliza la extensión .tsx.
>
>
>6.	¿Cómo se define un tipo de dato en TypeScript?
>
>Al declarar una variable, puedes especificar su tipo
>
>let nombre: string = "Juan";
let edad: number = 30;
let activo: boolean = true;
>
>Esto asegura que la variable nombre siempre será una cadena, edad siempre será un número y activo siempre será un booleano.
>
>
>7.	¿Qué son los tipos de unión y cómo se declaran?
>
>Los tipos de unión permiten que una variable tenga más de un tipo posible:
>
>let id: number | string;
id = 10; // válido
id = "123"; // válido
>
>Esto es útil cuando una variable puede representar múltiples tipos, como un identificador que puede ser un número o una cadena.
>
>
>8.	¿Qué es un tipo literal en TypeScript y para qué se utiliza?
>
>Los tipos literales restringen una variable a tener un valor específico:
>
>let estado: "activo" | "inactivo";
estado = "activo"; // válido
estado = "inactivo"; // válido
>
>Esto es útil para definir valores constantes específicos que una variable puede tomar, mejorando la seguridad del tipo y la legibilidad del código.
>
>
>9.	¿Qué son los tipos enumerados (Enums) y cómo se crean?
>
>Los Enums son una forma de definir un conjunto de valores con nombre:
>
>enum Color {
  Rojo,
  Verde,
  Azul
}
let c: Color = Color.Verde;
>Los enums facilitan la gestión de conjuntos de valores relacionados y mejoran la legibilidad del código.
>
>Los enums facilitan la gestión de conjuntos de valores relacionados y mejoran la legibilidad del código.
>
>
>10.	¿Cómo se define un tipo alias y cuándo es útil?
>
>Un tipo alias permite crear un nombre para un tipo específico:
>
>type ID = number | string;
let userId: ID = 123;
>
>Los alias son útiles para simplificar tipos complejos o reutilizar tipos en diferentes partes del código.
>
>
>11.	¿Cómo se definen las funciones con tipos en TypeScript?
>
>Al definir una función, puedes especificar los tipos de los parámetros y el tipo de retorno:
>
>function sumar(a: number, b: number): number {
  return a + b;
}
>
>Esto asegura que la función sumar solo acepte números como argumentos y retorne un número.
>
>
>12.	¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?
>
>Parámetros opcionales: Usando ? después del nombre del parámetro, lo que indica que el parámetro no es obligatorio.
>
>function saludar(nombre: string, edad?: number) {
  return `Hola ${nombre}`;
}
>
>Parámetros predeterminados: Proporcionando un valor por defecto que se usará si no se pasa un argumento.
>
>function multiplicar(a: number, b: number = 1): number {
  return a * b;
>
>function multiplicar(a: number, b: number = 1): number {
  return a * b;
>
>
>13.	¿Cuáles son algunas mejores prácticas para       escribir código limpio y mantenible en TypeScript?
>
>•	Usar tipado estático: Aprovechar los tipos estáticos para detectar errores temprano y mejorar la documentación implícita del código.
>
>•	Evitar any: Utilizar tipos más específicos en lugar de any para aprovechar las ventajas del chequeo de tipos.
>
>•	Escribir interfaces claras: Definir contratos claros para objetos y funciones mediante interfaces.
>
>•	Mantener funciones pequeñas y enfocadas: Para facilitar la comprensión y el mantenimiento del código.
>
>•	Usar clases y módulos: Para organizar el código en unidades más manejables y reutilizables.
>
>•	Documentar el código: Usar comentarios y JSDoc para explicar la lógica compleja y mejorar la legibilidad del código.
>
>•	Hacer uso de linters y formatters: Para mantener un estilo de código consistente y detectar problemas potenciales automáticamente.

![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-2a0505?style=flat&logo=HTML5)&nbsp;
![Boostrap](https://img.shields.io/badge/Bootstrap-black%20?logo=bootstrap)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-2a0505?style=flat&logo=javascript)&nbsp;

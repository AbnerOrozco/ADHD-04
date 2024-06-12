
// Obtener las referencias de los elementos y asegurar que son HTMLInputElements
let inputElement1 = document.getElementById('txtnumero1') as HTMLInputElement;
let inputElement2 = document.getElementById('txtnumero2') as HTMLInputElement;
let inputElement3 = document.getElementById('txtnumero3') as HTMLInputElement;
let resultadoButton = document.getElementById('resultado') as HTMLButtonElement;
let resultadoElement = document.getElementById('resultado1') as HTMLParagraphElement;
if (inputElement1 && inputElement2 && inputElement3 && resultadoButton && resultadoElement) {
  resultadoButton.addEventListener('click', () => {
    let num1: number = parseFloat(inputElement1.value);
    let num2: number = parseFloat(inputElement2.value);
    let num3: number = parseFloat(inputElement3.value);
    let promedio: number = (num1 + num2 + num3) / 3;
    resultadoElement.textContent = `Resultado: ${promedio.toFixed(2)}`;
  });
}

// CALCULAR EL TRIANGULO 
const inputBase = document.getElementById('txtnumero4') as HTMLInputElement;
const inputAltura = document.getElementById('txtnumero5') as HTMLInputElement;
const calcularTrianguloButton = document.getElementById('calcularTriangulo') as HTMLButtonElement;
const resultadoTriangulo = document.getElementById('resultado2') as HTMLParagraphElement;

if (inputBase && inputAltura && calcularTrianguloButton && resultadoTriangulo) {
  calcularTrianguloButton.addEventListener('click', () => {
    const base = parseFloat(inputBase.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
      resultadoTriangulo.textContent = 'Por favor ingrese valores válidos para la base y la altura.';
    } else {
      const area = (base * altura) / 2;
      resultadoTriangulo.textContent = `Resultado: ${area.toFixed(2)}`;
    }
  });
};

// CALCULAR SI EL NUMERO ES PAR O IMPAR

const inputnum1 = document.getElementById('txtnumero6') as HTMLInputElement;
const resultado3 = document.getElementById('resultado3') as HTMLAnchorElement;
const calcularParoImpar = document.getElementById('calcularParoImpar') as HTMLAnchorElement;

if (inputnum1 && resultado3) {
  calcularParoImpar.addEventListener('click', () => {
    const parImpar = parseFloat(inputnum1.value);

    if (parImpar % 2 === 0) {
      resultado3.textContent = `El número ${parImpar} es par`;
    } else {
      resultado3.textContent = `El número ${parImpar} es impar`;
    }
  });
} else {
  console.error("Error: Input elements not found!");
}

// CALCULAR NUMERO MAYOR, MEDIO Y MENOR
let entrada1 = document.getElementById('txtnumero7') as HTMLInputElement;
let entrada2 = document.getElementById('txtnumero8') as HTMLInputElement;
let entrada3 = document.getElementById('txtnumero9') as HTMLInputElement;
let buttonresultado4 = document.getElementById('buttonresultado4') as HTMLButtonElement;
let resultado4 = document.getElementById('resultado4') as HTMLParagraphElement;

if (entrada1 && entrada2 && entrada3 && buttonresultado4 && resultado4) {
  buttonresultado4.addEventListener('click', () => {
    const num1 = parseFloat(entrada1.value);
    const num2 = parseFloat(entrada2.value);
    const num3 = parseFloat(entrada3.value);
    let largest = Math.max(num1, num2, num3);
    let smallest = Math.min(num1, num2, num3);
    const numbers = [num1, num2, num3].sort();
    const middle = numbers[1];
    resultado4.textContent = `El número mayor es ${largest}, el número medio es ${middle} y el menor es ${smallest}`;
  });
} else {
  console.error("Error: Input elements not found!");
}
/// CALCULAR POTENCIA DE UN NUMERO
document.addEventListener('DOMContentLoaded', () => {
  const inputBase = document.getElementById('txtBase') as HTMLInputElement;
  const inputExponente = document.getElementById('txtExponente') as HTMLInputElement;
  const calcularPotenciaButton = document.getElementById('calcularPotencia') as HTMLButtonElement;
  const resultadoPotenciaElement = document.getElementById('resultadoPotencia') as HTMLParagraphElement;

  if (inputBase && inputExponente && calcularPotenciaButton && resultadoPotenciaElement) {
    calcularPotenciaButton.addEventListener('click', () => {
      const base = parseFloat(inputBase.value);
      const exponente = parseFloat(inputExponente.value);
      if (isNaN(base) || isNaN(exponente)) {
        resultadoPotenciaElement.textContent = 'Por favor ingrese valores válidos.';
      } else {
        const potencia = Math.pow(base, exponente);
        resultadoPotenciaElement.textContent = `Resultado: ${potencia.toFixed(2)}`;
      }
    });
  }
});

//invertir texto
class TextoInversor {
  texto: string;

  constructor(texto: string) {
    this.texto = texto;
  }

  invertir(): string {
    return this.texto.split('').reverse().join('');
  }
}

let inputElementt = document.getElementById('txtinvertir') as HTMLInputElement;
let resultadoButtont = document.getElementById('invertirTexto') as HTMLButtonElement;
let resultadoElementt = document.getElementById('resultado10') as HTMLParagraphElement;

if (inputElementt && resultadoButtont && resultadoElementt) {
  resultadoButtont.addEventListener('click', () => {

    let texto: string = inputElementt.value;

    let inversor = new TextoInversor(texto);

    let textoInvertido: string = inversor.invertir();

    resultadoElementt.textContent = `Resultado10: ${textoInvertido}`;
  });
}

//// NUMERO FACTORIAL

let inputfactorial = document.getElementById('txtfactorial') as HTMLInputElement;
const inputconstante = document.getElementById('txtconstante') as HTMLButtonElement;
let factorialbutton = document.getElementById('contstantebutton') as HTMLParagraphElement;
let resultadofactorial = document.getElementById('resultado11') as HTMLParagraphElement;

if (inputfactorial && inputconstante && factorialbutton && buttonresultado4 && resultado4) {
  buttonresultado4.addEventListener('click', () => {
    const num1 = parseFloat(entrada1.value);
    const num2 = parseFloat(entrada2.value);
    const num3 = parseFloat(entrada3.value);
    let largest = Math.max(num1, num2, num3);
    let smallest = Math.min(num1, num2, num3);
    const numbers = [num1, num2, num3].sort();
    const middle = numbers[1];
    resultado4.textContent = `El número mayor es ${largest}, el número medio es ${middle} y el menor es ${smallest}`;
  });
} else {
  console.error("Error: Input elements not found!");
}

// calcular numero factorial

class FactorialCalculator {
  numero: number;
  constructor(numero: number) {
    this.numero = numero;
  }
  calcularFactorial(): number {
    if (this.numero < 0) {
      throw new Error("El número debe ser no negativo");
    }
    if (this.numero === 0 || this.numero === 1) {
      return 1;
    }
    let resultado: number = 1;
    for (let i = 2; i <= this.numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
}
const input3 = document.getElementById('txtnumero') as HTMLInputElement;
const resultadoButton1 = document.getElementById('calcularFactorial') as HTMLButtonElement;
const resultadoElement1 = document.getElementById('resultado15') as HTMLParagraphElement;
if (input3 && resultadoButton1 && resultadoElement1) {
  resultadoButton1.addEventListener('click', () => {
    const numero: number = parseInt(input3.value);
    try {
      const calculadora = new FactorialCalculator(numero);
      const factorial: number = calculadora.calcularFactorial();
      resultadoElement1.textContent = `Resultado15: ${factorial}`;
    } catch (error) {
      if (error instanceof Error) {
        resultadoElement1.textContent = `Error: ${error.message}`;
      } else {
        resultadoElement1.textContent = 'Error desconocido';
      }
    }
  });
} else {
  console.error("Error: No se pudo obtener uno o más elementos del DOM.");
}

//valor perfecto//

class NumeroPerfectoCalculador {
  numero: number;
  constructor(numero: number) {
    this.numero = numero;
  }
  esNumeroPerfecto(): boolean {
    if (this.numero < 2) return false;
    
    let sumaDivisores = 0;
    for (let i = 1; i <= this.numero / 2; i++) {
        if (this.numero % i === 0) {
            sumaDivisores += i;
        }
    }

    return sumaDivisores === this.numero;
}
}

const Perfectonun = document.getElementById('txtperfecto') as HTMLInputElement;
const perfectocal = document.getElementById('calcularPerfecto') as HTMLButtonElement;
const perfectoresul = document.getElementById('resultadoperfecto') as HTMLParagraphElement;
if (Perfectonun && perfectocal && perfectoresul) {
  perfectocal.addEventListener('click', () => {
      const numero: number = parseInt(Perfectonun.value);
      try {
          const calculador = new NumeroPerfectoCalculador(numero);
          const esPerfecto: boolean = calculador.esNumeroPerfecto();
          perfectoresul.textContent = esPerfecto ? `El número ${numero} es perfecto.` : `El número ${numero} no es perfecto.`;
      } catch (error) {
    if (error instanceof Error) {
        perfectoresul.textContent = `Error: ${error.message}`;
    } else {
        perfectoresul.textContent = 'Error desconocido';
    }
}
});
} else {
console.error("Error: No se pudo obtener uno o más elementos del DOM.");
}

class NumeroPrimoCalculador{
  primo: number;

  constructor(primo: number){
    this.primo = primo;
  }

esNumeroPrimo(): Boolean {
  if (this.primo <= 1) return false;
  if (this.primo <= 3) return true;

  if (this.primo % 2 == 0 || this.primo % 3 === 0) return false; 
  
  for(let i = 5; i * i <= this.primo; i+= 6){
    if (this.primo % i === 0 || this.primo % (i + 2 ) === 0) return false;
  }
  return true;
}
}
const primoNum = document.getElementById('txtprimoNum') as HTMLInputElement;
const calcularPrimo = document.getElementById ('calcularPrimo') as HTMLButtonElement;
const resultadoPrimo = document.getElementById ('resultadoPrimo') as HTMLParagraphElement;

if(primoNum && calcularPrimo && resultadoPrimo){
  calcularPrimo.addEventListener('click', () =>{
    const primo: number = parseInt(primoNum.value);
    try{
      const calculadorprimo = new NumeroPrimoCalculador(primo);
      const esPrimo: Boolean = calculadorprimo.esNumeroPrimo();
      resultadoPrimo.textContent = esPrimo ? `el numero ${primo} es primo. ` : `el numer ${primo} no es primo.`;
    }catch(error){
      if(error instanceof Error){
        resultadoPrimo.textContent = `Error ${error.message}`;
      }else{
        resultadoPrimo.textContent = `Error desconocido`;
      }
    }
  });
}else {
  console.error("Error: no se pudo obtener uno omas elementos del DOM.")
}

// CONTADOR DE VOCALES
class ContadorVocales {
  texto: string;

  constructor(texto: string) {
    this.texto = texto;
  }

  vocalesContadas(): number {
    const tamTexto: number = this.texto.length;
    const vocales: string = "aeiouAEIOU"; // Consideramos también las mayúsculas
    let contador: number = 0;

    for (let i = 0; i < tamTexto; i++) {
      if (vocales.indexOf(this.texto[i]) !== -1) {
        contador++;
      }
    }

    return contador;
  }
}

// Obtener las referencias de los elementos y asegurar que son HTMLInputElements y HTMLButtonElement
const texto1 = document.getElementById('txtTexto') as HTMLInputElement;
const calculoTexto = document.getElementById('calcularTexto') as HTMLButtonElement;
const textoResultado = document.getElementById('resultadoTexto') as HTMLParagraphElement;

if (texto1 && calculoTexto && textoResultado) {
  calculoTexto.addEventListener('click', () => {
    const textoIngresado: string = texto1.value;

    try {
      const calculador = new ContadorVocales(textoIngresado);
      const cantidadVocales: number = calculador.vocalesContadas();
      textoResultado.textContent = cantidadVocales > 0 
        ? `El texto "${textoIngresado}" tiene ${cantidadVocales} vocales.` 
        : `El texto "${textoIngresado}" no tiene vocales.`;
    } catch (error) {
      if (error instanceof Error) {
        textoResultado.textContent = `Error: ${error.message}`;
      } else {
        textoResultado.textContent = `Error desconocido`;
      }
    }
  });
} else {
  console.error("Error: No se pudo obtener uno o más elementos del DOM.");
}
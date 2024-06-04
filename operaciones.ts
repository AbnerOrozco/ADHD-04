
// Obtener las referencias de los elementos y asegurar que son HTMLInputElements
let inputElement1 = document.getElementById('txtnumero1') as HTMLInputElement;
let inputElement2 = document.getElementById('txtnumero2') as HTMLInputElement;
let inputElement3 = document.getElementById('txtnumero3') as HTMLInputElement;
let resultadoButton = document.getElementById('resultado') as HTMLButtonElement;
let resultadoElement = document.getElementById('resultado1') as HTMLParagraphElement;

// Verificar que los elementos no sean nulos antes de acceder a sus valores
if (inputElement1 && inputElement2 && inputElement3 && resultadoButton && resultadoElement) {
    // Agregar evento click al botón
    resultadoButton.addEventListener('click', () => {
        // Obtener los valores de los inputs y convertirlos a números
        let num1: number = parseFloat(inputElement1.value);
        let num2: number = parseFloat(inputElement2.value);
        let num3: number = parseFloat(inputElement3.value);

        // Calcular el promedio
        let promedio: number = (num1 + num2 + num3) / 3;

        // Mostrar el resultado en el elemento resultado1
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
const calcularParoImpar = document.getElementById ('calcularParoImpar') as HTMLAnchorElement;

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

// Verify elements are not null before accessing them
if (entrada1 && entrada2 && entrada3 && buttonresultado4 && resultado4) {

  // Add click event to the button
  buttonresultado4.addEventListener('click', () => {

    // Get the values from the input fields
    const num1 = parseFloat(entrada1.value);
    const num2 = parseFloat(entrada2.value);
    const num3 = parseFloat(entrada3.value);

    // Find largest number
    let largest = Math.max(num1, num2, num3);

    // Find smallest number
    let smallest = Math.min(num1, num2, num3);

    // Find middle number (sorting approach)
    const numbers = [num1, num2, num3].sort();
    const middle = numbers[1];

    // Display results
    resultado4.textContent = `El número mayor es ${largest}, el número medio es ${middle} y el menor es ${smallest}`;
  });
} else {
  console.error("Error: Input elements not found!");
}


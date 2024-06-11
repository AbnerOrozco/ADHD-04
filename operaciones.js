// Obtener las referencias de los elementos y asegurar que son HTMLInputElements
var inputElement1 = document.getElementById('txtnumero1');
var inputElement2 = document.getElementById('txtnumero2');
var inputElement3 = document.getElementById('txtnumero3');
var resultadoButton = document.getElementById('resultado');
var resultadoElement = document.getElementById('resultado1');
if (inputElement1 && inputElement2 && inputElement3 && resultadoButton && resultadoElement) {
    resultadoButton.addEventListener('click', function () {
        var num1 = parseFloat(inputElement1.value);
        var num2 = parseFloat(inputElement2.value);
        var num3 = parseFloat(inputElement3.value);
        var promedio = (num1 + num2 + num3) / 3;
        resultadoElement.textContent = "Resultado: ".concat(promedio.toFixed(2));
    });
}
// CALCULAR EL TRIANGULO 
var inputBase = document.getElementById('txtnumero4');
var inputAltura = document.getElementById('txtnumero5');
var calcularTrianguloButton = document.getElementById('calcularTriangulo');
var resultadoTriangulo = document.getElementById('resultado2');
if (inputBase && inputAltura && calcularTrianguloButton && resultadoTriangulo) {
    calcularTrianguloButton.addEventListener('click', function () {
        var base = parseFloat(inputBase.value);
        var altura = parseFloat(inputAltura.value);
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            resultadoTriangulo.textContent = 'Por favor ingrese valores válidos para la base y la altura.';
        }
        else {
            var area = (base * altura) / 2;
            resultadoTriangulo.textContent = "Resultado: ".concat(area.toFixed(2));
        }
    });
}
;
// CALCULAR SI EL NUMERO ES PAR O IMPAR
var inputnum1 = document.getElementById('txtnumero6');
var resultado3 = document.getElementById('resultado3');
var calcularParoImpar = document.getElementById('calcularParoImpar');
if (inputnum1 && resultado3) {
    calcularParoImpar.addEventListener('click', function () {
        var parImpar = parseFloat(inputnum1.value);
        if (parImpar % 2 === 0) {
            resultado3.textContent = "El n\u00FAmero ".concat(parImpar, " es par");
        }
        else {
            resultado3.textContent = "El n\u00FAmero ".concat(parImpar, " es impar");
        }
    });
}
else {
    console.error("Error: Input elements not found!");
}
// CALCULAR NUMERO MAYOR, MEDIO Y MENOR
var entrada1 = document.getElementById('txtnumero7');
var entrada2 = document.getElementById('txtnumero8');
var entrada3 = document.getElementById('txtnumero9');
var buttonresultado4 = document.getElementById('buttonresultado4');
var resultado4 = document.getElementById('resultado4');
if (entrada1 && entrada2 && entrada3 && buttonresultado4 && resultado4) {
    buttonresultado4.addEventListener('click', function () {
        var num1 = parseFloat(entrada1.value);
        var num2 = parseFloat(entrada2.value);
        var num3 = parseFloat(entrada3.value);
        var largest = Math.max(num1, num2, num3);
        var smallest = Math.min(num1, num2, num3);
        var numbers = [num1, num2, num3].sort();
        var middle = numbers[1];
        resultado4.textContent = "El n\u00FAmero mayor es ".concat(largest, ", el n\u00FAmero medio es ").concat(middle, " y el menor es ").concat(smallest);
    });
}
else {
    console.error("Error: Input elements not found!");
}
/// CALCULAR POTENCIA DE UN NUMERO
document.addEventListener('DOMContentLoaded', function () {
    var inputBase = document.getElementById('txtBase');
    var inputExponente = document.getElementById('txtExponente');
    var calcularPotenciaButton = document.getElementById('calcularPotencia');
    var resultadoPotenciaElement = document.getElementById('resultadoPotencia');
    if (inputBase && inputExponente && calcularPotenciaButton && resultadoPotenciaElement) {
        calcularPotenciaButton.addEventListener('click', function () {
            var base = parseFloat(inputBase.value);
            var exponente = parseFloat(inputExponente.value);
            if (isNaN(base) || isNaN(exponente)) {
                resultadoPotenciaElement.textContent = 'Por favor ingrese valores válidos.';
            }
            else {
                var potencia = Math.pow(base, exponente);
                resultadoPotenciaElement.textContent = "Resultado: ".concat(potencia.toFixed(2));
            }
        });
    }
});
//invertir texto
var TextoInversor = /** @class */ (function () {
    function TextoInversor(texto) {
        this.texto = texto;
    }
    TextoInversor.prototype.invertir = function () {
        return this.texto.split('').reverse().join('');
    };
    return TextoInversor;
}());
var inputElementt = document.getElementById('txtinvertir');
var resultadoButtont = document.getElementById('invertirTexto');
var resultadoElementt = document.getElementById('resultado10');
if (inputElementt && resultadoButtont && resultadoElementt) {
    resultadoButtont.addEventListener('click', function () {
        var texto = inputElementt.value;
        var inversor = new TextoInversor(texto);
        var textoInvertido = inversor.invertir();
        resultadoElementt.textContent = "Resultado10: ".concat(textoInvertido);
    });
}
//// NUMERO FACTORIAL
var inputfactorial = document.getElementById('txtfactorial');
var inputconstante = document.getElementById('txtconstante');
var factorialbutton = document.getElementById('contstantebutton');
var resultadofactorial = document.getElementById('resultado11');
if (inputfactorial && inputconstante && factorialbutton && buttonresultado4 && resultado4) {
    buttonresultado4.addEventListener('click', function () {
        var num1 = parseFloat(entrada1.value);
        var num2 = parseFloat(entrada2.value);
        var num3 = parseFloat(entrada3.value);
        var largest = Math.max(num1, num2, num3);
        var smallest = Math.min(num1, num2, num3);
        var numbers = [num1, num2, num3].sort();
        var middle = numbers[1];
        resultado4.textContent = "El n\u00FAmero mayor es ".concat(largest, ", el n\u00FAmero medio es ").concat(middle, " y el menor es ").concat(smallest);
    });
}
else {
    console.error("Error: Input elements not found!");
}
// calcular numero factorial
var FactorialCalculator = /** @class */ (function () {
    function FactorialCalculator(numero) {
        this.numero = numero;
    }
    FactorialCalculator.prototype.calcularFactorial = function () {
        if (this.numero < 0) {
            throw new Error("El número debe ser no negativo");
        }
        if (this.numero === 0 || this.numero === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= this.numero; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return FactorialCalculator;
}());
var input3 = document.getElementById('txtnumero');
var resultadoButton1 = document.getElementById('calcularFactorial');
var resultadoElement1 = document.getElementById('resultado15');
if (input3 && resultadoButton1 && resultadoElement1) {
    resultadoButton1.addEventListener('click', function () {
        var numero = parseInt(input3.value);
        try {
            var calculadora = new FactorialCalculator(numero);
            var factorial = calculadora.calcularFactorial();
            resultadoElement1.textContent = "Resultado15: ".concat(factorial);
        }
        catch (error) {
            if (error instanceof Error) {
                resultadoElement1.textContent = "Error: ".concat(error.message);
            }
            else {
                resultadoElement1.textContent = 'Error desconocido';
            }
        }
    });
}
else {
    console.error("Error: No se pudo obtener uno o más elementos del DOM.");
}
//valor perfecto//
var NumeroPerfectoCalculador = /** @class */ (function () {
    function NumeroPerfectoCalculador(numero) {
        this.numero = numero;
    }
    NumeroPerfectoCalculador.prototype.esNumeroPerfecto = function () {
        if (this.numero < 2)
            return false;
        var sumaDivisores = 0;
        for (var i = 1; i <= this.numero / 2; i++) {
            if (this.numero % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.numero;
    };
    return NumeroPerfectoCalculador;
}());
var Perfectonun = document.getElementById('txtperfecto');
var perfectocal = document.getElementById('calcularPerfecto');
var perfectoresul = document.getElementById('resultadoperfecto');
if (Perfectonun && perfectocal && perfectoresul) {
    perfectocal.addEventListener('click', function () {
        var numero = parseInt(Perfectonun.value);
        try {
            var calculador = new NumeroPerfectoCalculador(numero);
            var esPerfecto = calculador.esNumeroPerfecto();
            perfectoresul.textContent = esPerfecto ? "El n\u00FAmero ".concat(numero, " es perfecto.") : "El n\u00FAmero ".concat(numero, " no es perfecto.");
        }
        catch (error) {
            if (error instanceof Error) {
                perfectoresul.textContent = "Error: ".concat(error.message);
            }
            else {
                perfectoresul.textContent = 'Error desconocido';
            }
        }
    });
}
else {
    console.error("Error: No se pudo obtener uno o más elementos del DOM.");
}

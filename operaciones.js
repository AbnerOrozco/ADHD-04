// Obtener las referencias de los elementos y asegurar que son HTMLInputElements
var inputElement1 = document.getElementById('txtnumero1');
var inputElement2 = document.getElementById('txtnumero2');
var inputElement3 = document.getElementById('txtnumero3');
var resultadoButton = document.getElementById('resultado');
var resultadoElement = document.getElementById('resultado1');
// Verificar que los elementos no sean nulos antes de acceder a sus valores
if (inputElement1 && inputElement2 && inputElement3 && resultadoButton && resultadoElement) {
    // Agregar evento click al botón
    resultadoButton.addEventListener('click', function () {
        // Obtener los valores de los inputs y convertirlos a números
        var num1 = parseFloat(inputElement1.value);
        var num2 = parseFloat(inputElement2.value);
        var num3 = parseFloat(inputElement3.value);
        // Calcular el promedio
        var promedio = (num1 + num2 + num3) / 3;
        // Mostrar el resultado en el elemento resultado1
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
var entrada1 = document.getElementById('txtnumero7');
var entrada2 = document.getElementById('txtnumero8');
var entrada3 = document.getElementById('txtnumero9');
var buttonresultado4 = document.getElementById('buttonresultado4');
var resultado4 = document.getElementById('resultado4');
// Verify elements are not null before accessing them
if (entrada1 && entrada2 && entrada3 && buttonresultado4 && resultado4) {
    // Add click event to the button
    buttonresultado4.addEventListener('click', function () {
        // Get the values from the input fields
        var num1 = parseFloat(entrada1.value);
        var num2 = parseFloat(entrada2.value);
        var num3 = parseFloat(entrada3.value);
        // Find largest number
        var largest = Math.max(num1, num2, num3);
        // Find smallest number
        var smallest = Math.min(num1, num2, num3);
        // Find middle number (sorting approach)
        var numbers = [num1, num2, num3].sort();
        var middle = numbers[1];
        // Display results
        resultado4.textContent = "El n\u00FAmero mayor es ".concat(largest, ", el n\u00FAmero medio es ").concat(middle, " y el menor es ").concat(smallest);
    });
}
else {
    console.error("Error: Input elements not found!");
}

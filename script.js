
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

// Solicita al usuario que ingrese un número
let num = prompt('Ingrese un número:');

// Convierte el valor ingresado a un número entero
let num2 = parseInt(num);

// Verifica si la entrada es un número válido
if (isNaN(num2) || num2 < 0) {
    alert('Caracter no valido');
} else {
    let result = calcularFactorial(num2);
    console.log(`El factorial del número ${num2} es: ${result}`);
};



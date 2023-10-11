/**
 * Contesta a todas las preguntas al lado
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función?  isPositive
 * 2. ¿Que deberíamos escribir para ejecutar esta función? isPositive(x)
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? Un Boolean
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué? No. El if esta mal hecho, deberia de decir que es positivo i en el else que es negativo. Tambien se podria poner un ! delante de el nombre de la funcion --> !isPositive(x).
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es negativo");
} else {
  console.log("El número es positivo");
}

//primer punto del taller
//Ejercicio 1. Encontrar el número mayor y menor


// let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];

// let mayor = list[0];
// let menor = list[0];

// for (let i = 1; i < list.length; i++) {
//   if (list[i] > mayor) {
//     mayor = list[i];
//   }
//   if (list[i] < menor) {
//     menor = list[i];
//   }
// }

// console.log("Número mayor:" + mayor);
// console.log("Número menor:" + menor);

// segundo punto del taller

// for (let i = 1; i <= 10; i++) {
//   console.log("7 x " + i + " = " + (7 * i));
// }

//punto tres del taller

// function sumar(...numeros) {
//   let total = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     total += numeros[i];
//   }
//   return total;
// }

// console.log(sumar(4, 7)); // 11
// console.log(sumar(1, 7, 8)); // 16
// console.log(sumar(2, 2, 3, 5)); // 12

// cuarto punto del taller 
// let frutas = ['Manzana', 'Banano', 'Coco', 'melon','Mango'];
// let frutasInvertidas = [];

// for (let i = frutas.length - 1; i >= 0; i--) {
//     frutasInvertidas.push(frutas[i]);
// }

// console.log(frutasInvertidas);

// Quinto

let horasRedesMundo = 2.7;
let horasRedesColombia = 3.6;
let diasyear = 365;

// 1. Horas acumuladas al año en Colombia
let HorasyearColombia = horasRedesColombia * diasyear;

// 2. Equivalencia en días completos (24 horas)
let diasCompletosColombia = HorasyearColombia / 24;

// 3. Equivalencia en semanas
let semanasColombia = diasCompletosColombia / 7;

// 4. Equivalencia en meses de 30 días
let mesesColombia = diasCompletosColombia / 30;

// 5. Días adicionales frente al promedio mundial
let diferenciaHorasDia = horasRedesColombia - horasRedesMundo;
let diferenciaHorasYear = diferenciaHorasDia * diasyear;
let diasAdicionalesYear= diferenciaHorasYear / 24;

// Resultados por consola
console.log("1. Horas al dia en colombia:", HorasyearColombia);
console.log("2. Días completos (24h):", diasCompletosColombia);
console.log("3. Semanas:", semanasColombia);
console.log("4. Meses (de 30 días):", mesesColombia);
console.log("5. Días adicionales al año frente al promedio mundial:", diasAdicionalesYear);
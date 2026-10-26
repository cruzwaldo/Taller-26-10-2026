
// let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];
// let nume = 0;
// let numa = 67;

// for (let i = 0; i < list.length; i++) {
 
//     if(nume < list[i]){
//         nume = list[i]
//     }if(numa > list[i]){
//         numa = list[i]
//     }
// }

// console.log('el numero mayor es: '+ nume)
// console.log('el numero menor es: '+ numa)

let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];

let mayor = list[0];
let menor = list[0];

for (let i = 1; i < list.length; i++) {
  if (list[i] > mayor) {
    mayor = list[i];
  }
  if (list[i] < menor) {
    menor = list[i];
  }
}

console.log("Número mayor:\n" + mayor);
console.log("Número menor:\n" + menor);
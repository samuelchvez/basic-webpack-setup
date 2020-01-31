// // ES6
// // const sumar = (a = 0, b) => a + b;

// // const enteros = [1, 2, 3, 4, 5];

// // // function cubo(pepetrueno) {
// // //   return pepetrueno * pepetrueno * pepetrueno;
// // // }

// // // const cubos = enteros.map(cubo);
// // // console.log(enteros);
// // // console.log(cubos);

// // // [1, 4, 9, 16, 25]

// // console.log(enteros.reduce(sumar));

// const miObjeto = {
//   x: null,
//   y: 100,
//   w: {
//     a: 'n',
//     b: 'nene',
//   },
// };

// const { x, y, w: { b } } = miObjeto;

// if (x != null) {
  
// }

// // const miOtroObjeto = {
// //   ...miObjeto,
// //   w: [...miObjeto],
// // };

// // miObjeto.w.push(4);

// // console.log(miOtroObjeto);


import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';
const x = { a: 1, b: 2 };
const y = { a: 1, b: 2 };

console.log(x === y);
console.log(isEqual(x, y));
console.log(omit(x, ['b']));

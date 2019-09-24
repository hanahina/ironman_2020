// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i)
// }
// console.log('end')

// let i = 0
// let k = 0

// for(; i < 10; i++) {
//     for(; k < 5; k++) {
//         if(k === 3) {
//             console.log(`k pass`)
//             continue;
//         }
//         console.log(`k = ${k}`)
//     }
//     console.log(`i = ${i}`)
// }
// console.log(`i end`)
// var i = 0,
//   j = 8;

// checkiandj: while (i < 4) {
//   console.log("i: " + i);
//   i += 1;

//   checkj: while (j > 4) {
//     console.log("j: " + j);
//     j -= 1;
//     if (j % 2 == 0) continue checkiandj;
//     console.log(j + " is odd.");
//   }
//   console.log("i = " + i);
//   console.log("j = " + j);
// }

labelDemo: for (let i = 0; i < 5; i++) {
    if (i % 2) {
        console.log(`${i} is odd`)

        continue labelDemo;
    }
    console.log(`${i} is even`)
}
console.log('End')
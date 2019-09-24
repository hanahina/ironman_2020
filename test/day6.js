// let i = 0
// let j = 0
// for(; i < 10; i++) {
//     for(; j < 5; j++) {
//         if(j === 3) {
//             break;
//         }
//         console.log(`j = ${j}`)
//     }
//     console.log(`i = ${i} , j = ${j}`)
// }
// console.log(`i = ${i} , j = ${j}`)

var i = 0, 
    j = 8;

checkiandj: while (i < 4) {
   console.log("i: " + i);
   i += 1;

   checkj: while (j > 4) {
      console.log("j: "+ j);
      j -= 1;
      if ((j % 2) == 0)
         break checkiandj;
      console.log(j + " is odd.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i)
// }
// console.log('end')

// let i = 0
// let j = 0
// for(; i < 10; i++) {
//     for(; j < 5; j++) {
//         if(j === 3) {
//             console.log(`j end`)
//             break;
//         }
//         console.log(`j = ${j}`)
//     }
//     console.log(`i = ${i}`)
// }
// console.log(`i end`)


// helloStr:{
//     console.log('Hello')
//     break helloStr
//     console.log('the Happy')
// }
// console.log('World')
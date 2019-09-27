// const ary = [1, 2, 3]

// ary.forEach(function(a, b, c) {
//     console.log(`a: ${a}`)
//     console.log(`b: ${b}`)
//     console.log(`c: ${c}`)
// })

// const ary = [1, 2, 3]

// ary.forEach(function(item, i) {

//     if(i === 1) {
//         ary.push('new item')
//     }

//     console.log(item)
// })
// console.log(ary)

const ary = [1, 2, 3, 4, 5]
let shiftItem = '';

ary.forEach(function(item, i) {

    if(i === 2) {
       shiftItem = ary.shift()
    }

    console.log(item)
})
console.log(ary)
console.log(shiftItem)
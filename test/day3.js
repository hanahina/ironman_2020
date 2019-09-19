const startTime = Date.now();
function log(str) {
    const nowTime = Date.now();
    console.log(`${str}：${(nowTime - startTime) / 1000}s`)
}
const ary = [1, 2]
ary.length = 5
log(ary)

for (let i = 0; i < ary.length; i++) {
    const item = ary[i];
    log(`this value is ${item}.`)
}
ary.forEach(item => {
    log(`this value is ${item}.`)
});
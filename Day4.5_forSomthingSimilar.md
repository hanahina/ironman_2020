# Day 4.5：For Something Similar

## 前言

此篇的內容其實是上一篇的延伸，當然我是不會承認，拆成兩篇是因為我當下寫不完的原因。<<<被打飛

這次要講的是 for 的變化型 (自己覺得) for...in 跟 for...of。

那麼，因為這兩個主要是用於 JS object 的方法，所以這次的內容主要回著墨在 JS 身上。

----

## for...in

`for...in` 這個方法，主要是用來獲取 object 屬性值，因為這個方法所回傳出來的結果，順序具有不可預期性，因此，即使它可以接所有可迭代的資料，還是不建議用陣列這種資料類型。

你今天在建立物件的時候所寫定得順序，並不代表此方法回傳出來的順序。

所以再往下說就可以理解，為何不建議在此方法的操作中，進行屬性的變動 (新增、修改、刪除)，因為你無法得知，經過操作後的資料，是否會被執行。

以下是它的基本結構：

```javascript
// javascript

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
}

// > obj.a = 1
// > obj.b = 2
// > obj.c = 3
// > obj.d = 4
```

## for...of

`for...of` 其實已經是新一代的語法了，它的前身是 `for each...in` 。

`for each...in` 在 ES 2015 的時候已經慘遭棄用，而之後便採用 `for...of` 繼續接替它的位置。

如果看原先的名稱的話，就可以感覺到說，它其實是 `forEach()` 的變化型，只是主用使用在 object 上而已。

但實際上，`for...of` 是一個相當泛用型的方法，它可以作用於**所有**可迭代的內容，包含：包括 `Array`、`Map`、`Set`、`String`、`TypedArray`、`arguments` 等等。

以下是它的基本結構：

```javascript
// javascript

for (variable of iterable) {
    // do something
}

// variable =>  迭代對象回傳的值。
// iterable => 被迭代屬性的對象。
```
底下會舉幾種**我看得懂的** `for...of` 迭代做法，更多更細節的內容，建議去 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) 上進行查看。

### Array

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

for (const value of ary) {
    console.log(value);
}

// > 1
// > 2
// > 3
// > 4
// > 5
```

### String

```javascript
// javascript

const str = "Hello World!"

for (const value of str) {
    console.log(value);
}

// > "H"
// > "e"
// > "l"
// > "l"
// > "o"
// > " "
// > "W"
// > "o"
// > "r"
// > "l"
// > "d"
// > "!"
```

### Map

```javascript
// javascript

const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (const entry of myMap) {
  console.log(entry);
}
// > ["a", 1]
// > ["b", 2]
// > ["c", 3]

for (const [key, value] of myMap) {
  console.log(value);
}
// > 1
// > 2
// > 3
```

### Set

```javascript
// javascript

const mySet = new Set([1, 1, 2, 2, 3, 3]);

for (const value of mySet) {
  console.log(value);
}
// > 1
// > 2
// > 3

// Hint：Set 不會添加重複元素(值)
```

### arguments

```javascript
// javascript

(function() {
  for (const arg of arguments) {
    console.log(arg);
  }
})(1, 2, 3);

// > 1
// > 2
// > 3
```

----

## 比較

|標題 \ 分類|JS for|JS　for...in|JS for...of|PHP for|
|:----:|----|----|----|----|
|操作對象|數字、陣列|物件|物件、陣列、字串、Map、Set、TypedArray、arguments|數字、不具 key 值的陣列|
|順序性|有|無|有|有|
|回傳內容|值|屬性、索引|值|值|

----

## 參考資料

+ [http://docs.php.net/](http://docs.php.net/)
+ [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
+ [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
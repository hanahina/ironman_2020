# Day 8：Visit For Each Whitch Is Exist

## 前言

經過前面近 10 篇的內容之後，這次我們終於要正式進入 Array 的專屬方法了！！

什麼？你說這樣前面不是都在講廢話？

不不，要知道，雖然前面的東西是屬於觀念跟基礎內容，但是泛用型的方法也有好用的時候。

要知道，一切的東西都是工具，工具只有適不適合，沒有好不好的問題。

就像是，難道你學了 CSS 中的 flex 跟 grid 就不用學 float 跟 table 嗎？

一切事物的演進跟脈絡，才能堆積出現在抬眼可見的面貌。

吊完書袋之後，便來看一下我們這次的主角 `forEach()` 吧！

當然我是不會承認，以上全是寫到壓力太大開始抽風的產物 (遠目

----

## forEach

### Javascript

從 JS 的角度下去看的話，`forEach()` 它會將陣列中的所有內容都走過一遍 (傳入 function 中)。除非傳送 error 不然無法中途中斷。

原則上，會回傳 `undefined`，所以無法使用鍊式結構。

內部傳入的 callback function 最多可以承接三個參數，依序為一下面的內容：

1. value
2. index
3. this array

```javascript
// javascript

const ary = [1, 2, 3]

ary.forEach(function(a, b, c) {
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log(`c: ${c}`)
})

// > a: 1
// > b: 0
// > c: 1,2,3

// > a: 2
// > b: 1
// > c: 1,2,3

// > a: 3
// > b: 2
// > c: 1,2,3
```

針對已被刪除或是未初始化的元素會進行略過。

還記得之前在 `length` 的章節有提到，`length` 雖然可以增加 array 的長度，但是它建立的會是空插槽。

在 `forEach()` 的認知上，這就叫做**未初始化** (沒有 index)，所以會跳過而不執行，就像下面這樣：

```javascript
// javascript

const aAry = [1, 2, , 4, 5, , 7]

aAry.forEach(function(item) {
    console.log(item)
})

// > 1
// > 2
// > 4
// > 5
// > 7

const bAry = [1, 2, 3]

bAry.length = 10
console.log(bAry)
bAry.forEach(function(item) {
    console.log(item)
})

// > [1, 2, 3, , , , , , , ]

// > 1
// > 2
// > 3
```

`forEach` 的執行範圍，在傳入的當下就已經決定。因此，由 callback 新增的值不會被執行。

```javascript
//  javascript

const ary = [1, 2, 3]

ary.forEach(function(item, i) {

    if(i === 1) {
        ary.push('new item')
    }

    console.log(item)
})
console.log(ary)

// > 1
// > 2
// > 3

// > [ 1, 2, 3, 'new item' ]
```

如果在 callback 中刪除部分元素，則已經執行過的索引不會再次執行。(有可能會導致部分資料被略過)

```javascript
//  javascript

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

// > 1
// > 2
// > 3    << i = 2
// > 5    << i = 4 => i = 3
// 因為陣列長度改變，導致 4 的 index 由 3 變成 2，然而 2 因為已經傳入過，所以不再再次執行。

// > [ 2, 3, 4, 5 ]
// > 1
```

### PHP

在 PHP 中，`foreach()` 有兩種形式：

1. foreach($array as $value)
2. foreach($array as $key => $value)

這部分其實是因應 PHP 的陣列可以具有 key 值，所以它在承接參數的時候，可以單獨接 value 或是 key 跟 value 都接。(但是沒有只接 key 的選項)

```php
// php

<?
    $ary = array(
        'one' => 'A',
        'two' => 'B',
        'three' => 'C',
    );

    foreach($ary as $value) {
        echo $value . "<br/>"
    }
// > A
// > B
// > C

    foreach($ary as $key => $value) {
        echo $key . ": " . $value . "<br/>"
    }
// > one: A
// > two: B
// > three: C
?>
```

遇到空插槽時，會報錯：

```php
// php

<?
    $ary = array(1, 2, , 4, 5);

    foreach($ary as $value) {
        echo $value . "<br/>"
    }
    // > FATAL ERROR syntax error, unexpected ',', expecting ')' on line number 2
?>
```

---

## 比較

|標題\分類|JS|PHP|
|:----:|----|----|
|對象|array|array|
|參數|value, index, array|key, value|
|未初始化資料|跳過|報錯|

---

## 參考資料

- [http://docs.php.net/](http://docs.php.net/)
- [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
- [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
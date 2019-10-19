# Day 15：Are There Something Needed?

## 前言

準備開始進入今天的主題。

今天的內容是「找資料」，一定會有人說：「我們不是已經找過兩天的資料了嗎？怎麼還要找？」

因為重點不一樣啊，前兩天的重點在：那個東西在哪裡；接下來的重點會在：它到底有沒有。

所以緊接著，我們就看下去吧！！

----

## some()

如同前言中所說，`some()` 這個方法的用途，就是去查找陣列中有沒有符合我們指定的資料內容，之後回傳 boolean 值。

它的承接參數是一個 callback function。

callback function 最多可以接三個參數，內容與之前所說的 `forEach()` 相同，分別是：值、索引、陣列：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

ary.some((a, b, c) => {
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log(`c: ${c}`)
})

// > a: 1
// > b: 0
// > c: 1,2,3,4,5
// > a: 2
// > b: 1
// > c: 1,2,3,4,5
// > a: 3
// > b: 2
// > c: 1,2,3,4,5
// > a: 4
// > b: 3
// > c: 1,2,3,4,5
// > a: 5
// > b: 4
// > c: 1,2,3,4,5
```

使用方式就是，在 callback function 中 return 要查找的值 / 內容。

這個方法可以把它想像成是由一堆 || / OR 組合而成的，所以只要有一個符合條件，就會回傳 true：

```javascript
// javascript

const ary = [1, 2, 3, 4]

const resultA = ary.some((item) => {
    return item === 2
})
console.log(resultA)
// > true




const bry = [1, 2, 3, 4]

const resultB = bry.some((item) => {
    return item === "2"
})
console.log(resultB)
// > false
```

再加上，因為是接 callback function 所以是可以丟判斷 / 運算進去的：

```javascript
// javascript

const ary = [1, -1, 2, -2, 3, -3, 4, -4] 

const resultA = ary.some((item, i) => Math.abs(item) > 3)
console.log(resultA)
// > true





const bry = [1, 2, 3, 4, 5]

const resultB = bry.some((item) => {
    return item > 5
})
console.log(resultB)
// > false
```

如果給予空陣列的話，強制返回 false：

```javascript
// javascript

const ary = []

const result = ary.some((item) => item)
console.log(result)

// > false
```

----

## in_array()

`in_array()` 就如同它的名稱一樣，它的用途是查找陣列中是否有指定的內容，回傳 boolean 值 (或相等內容)。
在查找資料部分，只能接純值 (不含 key 值)，且不能接運算式 / 判斷式：

```php
// php

<?
    $ary = array(1, 2, 3, 4, 5);

    echo (in_array(2, $ary));
    // > 1 (true)


    echo (in_array(10, $ary));
    // > NULL (false)
?>
```

非嚴格模式下是相等 (會轉型)；嚴格模式下需要全等：

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    // 非嚴格
    echo in_array('3', $ary);
    // > 1 (true)



    // 嚴格
    echo in_array('3', $ary, true);
    // > NULL (false)
?>
```

如果資料是文字型別，大小寫視為相異：

```php
// php

<?
    $ary = ['A', 'b', 'C', 'c', 'D', ];

    echo in_array('a', $ary);
    // > NULL (無資料)

    echo in_array('D', $ary);
    // > 1 (true)
?>
```

如果給予空陣列的話，會強制返回 falsy value：

```php
// php

<?
    $ary = [];

    echo in_array('', $ary);
    // > NULL (無資料)
?>
```

----

## 比較

|標題\分類|JS: some()|PHP: in_array()|
|:----:|----|----|
|對象|array|array|
|承接參數|callback function|純值|
|選用參數|--|嚴格模式|
|特性|--|預設相等，嚴格模式下全等|
|回傳|boolean|boolean|


---

## 參考資料

- [http://docs.php.net/](http://docs.php.net/)
- [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
- [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)

----

## 大手夥伴們的專欄

歡迎大家也去訂閱一波~~

CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)
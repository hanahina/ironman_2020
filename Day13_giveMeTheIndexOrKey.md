# Day 13：Give Me The Index Or Key

## 前言

接下來的兩篇內容，都是尋找索引值 / key 值。

第一篇會講簡單一點的，尋找單一索引 /  key 值。所對應的方法分別是 JS 中的 `indexOf()`、`lastIndexOf()`，以及 PHP 中的 `array_search()`。

其實我必須承認，當初準備大綱到這邊的時候其實很絕望。因為這次的方法名稱有別於以往落差很大，而且功能差異性也較大，所以甚至有放棄 `indexOf()` / `lastIndexOf()` 的想法。(畢竟這次的主題是彙整性文章)

但是，還是決定要寫出來比較看看，總歸落差大才有可比性啊。

----

## indexOf()

在 JS 中 `indexOf()` 可以用在 array 或是 string 中，使用概念是相同的，從頭 (0 號位置) 往後進行查找指定的元素，並回傳第一個查找到的索引值。字串型資料大小寫視為相異：

```javascript
// javascript

// string 範例
const str = 'Hello World!!'
console.log(str.indexOf('o'))
// > 4


// array 範例
const ary = ['H', 'a', 'p', 'P', 'y', 'H', 'a', 'p', 'P', 'y', 'D', 'A', 'Y', '!', '!']
console.log(ary.indexOf('P'))
// > 3
```

可以設定起始查找位置，**正數代表索引值**，**負數代表從最末端起算的偏差值**。若是找不到指定內容，會回傳 -1。起始位置 >= 陣列長度，會回傳 -1。起始位置為負數，且其絕對值 >= 陣列長度時，會搜尋整個陣列：

```javascript
// javascript

const ary = [1, 2, 1, 3, 1, 4, 2, 5]

console.log(ary.indexOf(2))
// 0 開始找，回傳 1

console.log(ary.indexOf(7))
// 資料不存在，回傳 -1

console.log(ary.indexOf(1, 1))
// 1 開始找，回傳 2

console.log(ary.indexOf(2, -3))
// 5 開始找 (最末端往前三個值)，回傳 6

console.log(ary.indexOf(2, 8))
// >= 陣列長度，回傳 -1

console.log(ary.indexOf(3, -8))
// 偏差後從 0 開始找，回傳 3
```

----

## lastIndexOf()

在 JS 中 `lastIndexOf()` 可以用在 array 或是 string 中，使用概念是相同的，從末端 (陣列 / 字串長度 - 1) 往前進行查找指定的元素，並回傳*第一個被查找到的索引值* (最後一個索引值)。字串型資料大小寫視為相異：

```javascript
// javascript

// string 範例
const str = 'Hello World!!'
console.log(str.lastIndexOf('o'))
// > 7


// array 範例
const ary = ['H', 'a', 'p', 'P', 'y', 'D', 'A', 'Y']
console.log(ary.lastIndexOf('a'))
// > 1
```

可以設定起始查找位置，**正數代表索引值**，**負數代表從最末端起算的偏差值**。若是找不到指定內容，會回傳 -1。起始位置 >= 陣列長度，會搜尋整個陣列。起始位置為負數，且其絕對值 >= 陣列長度時，會回傳 -1：

```javascript
// javascript

const ary = [2, 1, 3, 6, 2, 5, 7, 4, 3]

console.log(ary.lastIndexOf(2))
// 8 開始找，回傳 4

console.log(ary.lastIndexOf(0))
// 資料不存在，回傳 -1

console.log(ary.lastIndexOf(1, 6))
// 6 開始找，回傳 1

console.log(ary.lastIndexOf(7, -3))
// 6 開始找 (最末端往前三個值)，回傳 6

console.log(ary.lastIndexOf(5, 9))
// >= 陣列長度，回傳 5

console.log(ary.lastIndexOf(4, -9))
// 偏差後從 0 開始找，回傳 -1
```

----

## array_search()

`array_search()` 只能作用在 array 上，從最前端向後查找指定元素，並回傳 key 值：

```php
// php

<?
    $ary = array(
        'apple' => 'A',
        '10' => 'B',
        'peach' => 'A',
        'kiwi' => 'B',
        '0' => 'C',
    );

    echo array_search('A', $ary);
    // > apple
?>
```

對於字串型別的資料，大小寫視為相異：

```php
// php

<?
    $ary = array(
        'apple' => 'a',
        '10' => 'b',
        'peach' => 'A',
        'kiwi' => 'B',
        '0' => 'c',
    );

    echo array_search('A', $ary);
    // > peach
?>
```

非嚴格模式下，會自動轉型：

```php
// php


// 非嚴格模式範例
<?
    $ary = array(
        'apple' => 'a',
        '10' => True,
        'peach' => 'A',
        'kiwi' => 0,
        '0' => false,
    );

    echo array_search('A', $ary);
    // > 10, 因為"A"被轉型
?>





// 嚴格模式範例
<?
    $ary = array(
        'apple' => 'a',
        '10' => True,
        'peach' => 'A',
        'kiwi' => 0,
        '0' => false,
    );

    echo array_search('A', $ary, true);
    // > peach，嚴格模式下，型別也必須相同
?>
```

若沒有指定元素，會回傳 **FALSY VALUE**：

```php
// php

<?
    $ary = array(
        'apple' => 'a',
        '10' => 'b',
        'peach' => 'A',
        'kiwi' => 'B',
        '0' => 'c',
    );

    echo array_search('e', $ary);
    // > NULL (無回傳值)
?>
```

---

## 比較

|標題\分類|JS: indexOf()|JS: lastIndexOf()|PHP: array_search()|
|:----:|----|----|----|
|對象|array、string|array、string|array|
|查找方向|由前至後|由後至前|由前至後|
|成功回傳值|第一個索引值|最後一個索引值|第一個 key 值|
|失敗回傳值|-1|-1|false|
|比對方式|全等|全等|預設相等 (不比較型別)|
|選用參數|搜尋起始位置|搜尋起始位置|嚴格模式 (boolean)|
|默認值|0|array.length - 1|falsy value|

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
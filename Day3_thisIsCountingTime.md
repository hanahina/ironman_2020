# Day3：This's Counting Time

## 前言

接下來要討論的，就是可以說是陣列命脈的長度議題。

這點在 PHP 中相對比較不明顯，因為就如同之前所述的，PHP 的標準陣列是具有 key 值的，也因此，在 key 值不動的形況下，順序的重要性就不明顯了。
這點如果各位有組過 JS 的 object 應該也會發現到，今天你在程式中所排定的參數順序，不一定能代表從 console 打回來的內容順序。

但是在 JS 的陣列終究不是如此了，因為它只擁有索引值，所以任何會影響到索引值的行為、動作，如：排序、新增、刪除……等，皆會對該陣列造成重大的影響。

所以接下來，我們就來看一下兩者分別用什麼方式來計算自身的長度吧。

----

## 長度計算

### JS

以 JS 來說，基本上你只要創建一個陣列，然後在尾巴上加上 `.length` 就可以獲得該陣列的長度了，不需要小括號。

同樣的方法也可以用來計算字串的長度。

```javascript
// javascript

const myArray = [1, 2, 3]
console.log(myArray.length) // > 3
```

同時間，這個屬性也可以修改陣列的長度，增加的話會新增空插槽 `empty slot` (不具索引)，減少的話，就會保留從 `[0]` 開始指定數量的值。

```javascript
// javascript

const thisArray = [1, 2, 3, 4]
console.log(thisArray.length) // > 4

thisArray.length = 6
console.log(thisArray) // > [1, 2, 3, 4, empty × 2]

thisArray.length = 2
console.log(thisArray)  // > [1, 2]
```

這邊值得注意的地方是，因為剛剛新增的兩個陣列長度本身不具索引。也因此，無法進行迭代 `iteration` 的操作。

```javascript
// javascript

const thisArray = ['a', 'b', 'c', 'd']
console.log(thisArray.length) // > 4

thisArray.length = 6
console.log(thisArray) // > ['a', 'b', 'c', 'd', empty × 2]

for (let i = 0; i < thisArray.length; i++) {
    console.log(thisArray[i])
}
// 'a' 'b' 'c' 'd' undefined undefined

thisArray.forEach(item => console.log(item))
// 'a' 'b' 'c' 'd'
```

### PHP

在 PHP 中計算陣列的長度使用的是 `count()` 這個方法，同時它還有一個別名 `sizeof()`。

小括號中最多可以承接兩個參數，分別是需要計數的對象 `$array_or_countable` 以及計數方式 `$mode`。

這邊的計數方式是指說，在 PHP 中，你可以選擇要進行單層的數量統計，或是遞迴進行統計。
預設為單層計數，如果想要採用遞迴統計的話，只要將 $mode 設為 `COUNT_RECURSIVE ` 或是 `1` 就可以了。

```php
// php

<?
    $ary = array(
        array(1, 2, 3, ),
        array(4, 5, 6),
        array(7, 8, 9, array('a', 'b', 'c')),
    );
    $bry = array('1', '2', '3');

    echo count($ary); // > 3
    echo count($ary, 1); // > 16
    echo count($ary, COUNT_RECURSIVE); // > 16

    echo count($bry); // > 3
?>
```

----

## 比較

|標題 \ 分類|JS|PHP|
|:----:|----|----|
|語法|.length|count()|
|別名|--|sizeof()|
|可接受型別|array、string|array、countable object|
|最大數值|2^32 - 1|取決在內存大小|
|可否遞迴計數|否|可|

----

## 參考資料

+ [http://docs.php.net/](http://docs.php.net/)
+ [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
+ [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
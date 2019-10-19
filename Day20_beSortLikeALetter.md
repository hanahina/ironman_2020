# Day 20：Be Sort Like A Letter

## 前言

今天的主題要講的，是很好用、很重要，同時也是天雷滾滾的**排序**這件事情。

所謂「你的排序不是你的排序」，今天就讓我們來好好看看，排序這件事情在兩個語法中，個是用怎樣的形式在呈現吧！！

----

## sort()

在 JS 中，`sort()` 可以不給予任何參數進行操作，他便會以預設的方式進行排序，並**直接修改原始陣列的內容**，就像下面這樣：

```javascript
// javascript

const ary = [2, 5, 8, 6, 4]
ary.sort()
console.log(ary)
// > [2, 4, 5, 6, 8]



const bry = ["M", "A", "V", "H", "D", ]
bry.sort()
console.log(bry)
// > ["A", "D", "H", "M", "V"]



const cry = ["f", "j", "e", "m", "s", ]
cry.sort()
console.log(cry)
// > ["e", "f", "j", "m", "s"]
```

但是，世界並非是美好的，當我們改變了剛剛範例中的狀況時，會發現 `sort()` 的運作方式，好像跟我們想像中不太一樣：

```javascript
// javascript

const ary = [20, 5, 18, 685, 4415]
ary.sort()
console.log(ary)
// >  [18, 20, 4415, 5, 685]



const bry = ["M", "r", "j", "H", "a", ]
bry.sort()
console.log(bry)
// > ["H", "M", "a", "j", "r"]

```

數字並沒有像想像中由小排到大，字母也是大寫優先才換小寫。

這主要是因為，`sort()` 的排序原理是先將所有內容轉換成相對應的**UTF-16**序號後，再進行排序的。

所以在第二組範例的 ary 中，為何 18 會小於 5，是因為它比較的是 1 跟 5 哪個值的編碼比較優先。

也因此，其實 `sort()` 還有另外一種用法：塞一個 `compareFunction()` 給它。

`compareFunction()` 本身接兩個參數：`firstEl` 跟 `secondEl`。

如果用電視劇的說法，就是採用12、23的播放模式。

這樣在排序上就可以得到另一種效果：

```javascript
// javascript

const ary = [5, 80, 1, 254, 69, 348, 41, 25]
ary.sort((a, b) => a - b)
console.log(ary)
// >  [1, 5, 25, 41, 69, 80, 254, 348]
```

這邊的排序概念是，如果 function 回傳的值 <= 0，則兩者的順序不動；若 > 0，則 b 會移動至 a 的前方。

以這個概念下去看的話，其實要反向排序也是可以的：

```javascript
// javascript

const ary = [5, 80, 1, 254, 69, 348, 41, 25]
ary.sort((a, b) => b - a)
console.log(ary)
// >  [348, 254, 80, 69, 41, 25, 5, 1]
```

還可以更進一步的，對複雜陣列進行排序：

```javascript
// javascript

const ary = [
    {name: 'Paul', age: 15},
    {name: 'Alice', age: 81},
    {name: 'Ray', age: 26},
    {name: 'Reger', age: 4},
    {name: 'Tiya', age: 55},
    {name: 'Vita', age: 64},
    {name: 'Herb', age: 26},
]

ary.sort((a, b) => {
    return a.age - b.age
})
console.log(ary)
// > [
// >     {name: "Reger", age: 4},
// >     {name: "Paul", age: 15},
// >     {name: "Ray", age: 26},
// >     {name: "Herb", age: 26},
// >     {name: "Tiya", age: 55},
// >     {name: "Vita", age: 64},
// >     {name: "Alice", age: 81}
// > ]
```

而 `sort()` 的內容，就是經過排序之後的陣列本身：

```javascript
// javascript

const ary = [5, 4, 18, 24, 359, 154, 1, 34]
const bry = ary.sort((a, b) => a - b)

console.log(ary === bry)
// > true
```

----

## sort()

PHP 的 `sort()` 相對是比較暴力化的 (個人覺得)，大部分的使用情況是不接參數的：

```php
// php

<?
    $ary = [5, 7, 41, 8, 3, 21, 158];
    sort($ary);

    print_r($ary);
    // > Array ( [0] => 3 [1] => 5 [2] => 7 [3] => 8 [4] => 21 [5] => 41 [6] => 158 ) 




    $bry = ['G', 'R', 'X', 'A', 'K',];
    sort($bry);

    print_r($bry);
    // > Array ( [0] => A [1] => G [2] => K [3] => R [4] => X ) 




    $cry = ['s', 'r', 'c', 'e', 'o',];
    sort($cry);

    print_r($cry);
    // > Array ( [0] => c [1] => e [2] => o [3] => r [4] => s ) 




    $dry = ['f', 'D', 'e', 'A', 'm',];
    sort($dry);

    print_r($dry);
    // > Array ( [0] => A [1] => D [2] => e [3] => f [4] => m )
?>
```
可以看到，它在沒做任何設定的情況下，會自己依照內容選擇適合的排序方式。

再來可以查看數字跟文字混用的排序結果：

```php
// php

<?
    $ary = ['F', 5, 'e', 'N', 87, 2, 'a', 14,];

    sort($ary);
    print_r($ary);
    // > Array ( [0] => F [1] => N [2] => a [3] => e [4] => 2 [5] => 5 [6] => 14 [7] => 87 )
?>
```

扣掉文字優先的部分，依照會依資料內容進行排序。

接下來看有 key 值的排序：

```php
// php

<?
    $ary = [
        'apple' => '45',
        'kiwi' => '21',
        'papaya' => '151',
        'orange' => '033',
        'banana' => '84',
        'lime' => '9',
    ];

    sort($ary);
    print_r($ary);
    // > Array ( [0] => 9 [1] => 21 [2] => 033 [3] => 45 [4] => 84 [5] => 151 )
?>
```

它會依照 value 值排序完之後，刪除原先的 key 值，重新編號。

而 `sort()` 中的選用參數，是指定要採用何種方式進行排序：

> SORT_REGULAR - 正常比較單元（不改變類型）
> SORT_NUMERIC - 單元被作為數字來比較
> SORT_STRING - 單元被作為字符串來比較
> SORT_LOCALE_STRING - 根據當前的區域（locale）設置來把單元當作字符串比較，可以用 setlocale() 來改> 變。
> SORT_NATURAL - 和 natsort() 類似對每個單元以“自然的順序”對字符串進行排序。 PHP 5.4.0 中新增的。
> SORT_FLAG_CASE - 能夠與 SORT_STRING 或 SORT_NATURAL 合併（OR 位運算），不區分大小寫排序字符串。

```php
// php

<?
    $ary = [5, 7, 41, 8, 3, 21, 158];
    sort($ary, SORT_STRING);

    print_r($ary);
    // > Array ( [0] => 158 [1] => 21 [2] => 3 [3] => 41 [4] => 5 [5] => 7 [6] => 8 )



    $bry = ['F', 5, 'e', 'N', 87, 2, 'a', 14,];

    sort($bry, SORT_NUMERIC);
    print_r($bry);
    // > Array ( [0] => F [1] => e [2] => N [3] => a [4] => 2 [5] => 5 [6] => 14 [7] => 87 )
?>
```

至於 PHP `sort()` 的回傳值，是指排序成功與否：

```php
// php

<?
    $ary = ['F', 5, 'e', 'N', 87, 2, 'a', 14,];

    $returnA = sort($ary, SORT_NUMERIC);
    print_r($returnA);
    // > 1
?>
```


----

## 比較

|標題\分類|JS: sort()|PHP: sort()|
|:----:|----|----|
|對象|array|array|
|參數|function|排序類型標記|
|預設排序方式|UTF-16 編碼|依資料內容決定|
|原始陣列|直接修改原始陣列|直接修改原始陣列|
|回傳結果|排序後的陣列|boolean 值|
|備註|可以反向排序|會刪除 key 值|

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
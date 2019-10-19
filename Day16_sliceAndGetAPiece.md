# Day 16：Slice And Get A Piece

## 前言

今天的主題，是資料處理中的 `slice`，從字面上來看的話，就是切片的意思。

所以在程式中的作用，是從原始陣列中取下一小塊，並進行回傳。

接下來就來看今天的內容吧。

----

## slice()

`slice()` 這個方法可以接受兩個參數，分別是**開始位置**跟**結束位置**，兩者皆為選用。

回傳的內容是一個**新的陣列**，包含起始值但不包含結束值：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(ary.slice())
// > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(ary.slice(5))
// > [6, 7, 8, 9, 10]

console.log(ary.slice(0, 7))
// > [1, 2, 3, 4, 5, 6, 7]
```


`slice` 取完切片之後，不會影響原先的陣列：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const piece = ary.slice(1, 4)

console.log(`切片：${piece}，原始陣列：${ary}`)
// > 切片：2,3,4，原始陣列：1,2,3,4,5
```

如果**起始值 >= 陣列長度**，則會回傳空陣列：

```javascript
// javascript

const ary = [1, 2, 3]

console.log(ary.slice(3))
// > []

console.log(ary.slice(4))
// > []
```

如果設定**負數**的話，指的就是從最後一值往前算的偏移量：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6]

console.log(ary.slice(-3))
// >  [4, 5, 6]

console.log(ary.slice(-4, -1))
// >  [3, 4, 5]
```

因為 `slice` 查找的方向是固定由左至右，所以如果**起始值 >= 結束值**，就會得到空陣列：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6]

console.log(ary.slice(1, 5))
// > [2, 3, 4, 5]

console.log(ary.slice(6, 3))
// > []

console.log(ary.slice(-4, -1))
// > [3, 4, 5]

console.log(ary.slice(-2, 0))
// > []
```

在正負數混用的情況下，則需要自己計算好負數偏移量所代表的索引值：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

console.log(ary.slice(2, -1))
// > [3, 4]

console.log(ary.slice(-6, 3))
// > [1, 2, 3]

console.log(ary.slice(5, -5))
// > []
```

`slice()` 複製出來的結果是**淺拷貝**，所以內部的陣列、物件內容，因為原始陣列更動而受到影響：

```javascript
// javascript

const ary = [1, 2, ['a', 'b', 'c'], 4, 5, {x: 100, y: 150, z: 300}, 7, 8, 9]

const sliceAry = ary.slice(1, 6)
console.log(sliceAry)
// > [2, ['a', 'b', 'c'], 4, 5, {x: 100, y: 150, z: 300}]

ary[2][1] = 'B'
console.log(sliceAry)
// > [2, ['a', 'B', 'c'], 4, 5, {x: 100, y: 150, z: 300}]

ary[5].y = 250
console.log(sliceAry)
// > [2, ['a', 'B', 'c'], 4, 5, {x: 100, y: 250, z: 300}]
```

**註：如果上方程式碼同時執行的話，會得到三次的[2, ['a', 'B', 'c'], 4, 5, {x: 100, y: 250, z: 300}]**

----

## array_slice()

`array_slice()` 的概念跟 `slice()` 差不多，只是它接的參數分別是起始值、長度、key 值保護。

回傳結果為一個新陣列，且不對原始陣列造成影響：

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    print_r(array_slice($ary, 2));
    // > Array ( [0] => 3 [1] => 4 [2] => 5 )

    print_r(array_slice($ary, 0, 3));
    // >  Array ( [0] => 1 [1] => 2 [2] => 3 )

    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
?>
```

若長度設定為負數時，代表的是從最末端往前算的偏移量。回傳的陣列結果，不包含結束值：

```php
// php

<?
    $ary = [1, 2, 3, 4, 5, 6];

    print_r(array_slice($ary, 2, -2));
    // > Array ( [0] => 3 [1] => 4 )
?>
```

預設會針對數字型 key 值重新編號，但若開啟 key 值保護時，則維持原 key 值：

```php
// php

<?
    $ary = [
        'A',
        'apple' => 'B',
        'C',
        'peach' => 'D',
        'kiwi' => 'E',
        'F',
        'orange' => 'G',
        'H'
    ];

    print_r($ary);
    // > Array ( [0] => A [apple] => B [1] => C [peach] => D [kiwi] => E [2] => F [orange] => G [3] => H )

    print_r(array_slice($ary, 1, 6));
    // > Array ( [apple] => B [0] => C [peach] => D [kiwi] => E [1] => F [orange] => G )

    print_r(array_slice($ary, 1, 6, true));
    // > Array ( [apple] => B [1] => C [peach] => D [kiwi] => E [2] => F [orange] => G )
?>
```

----

## 比較

|標題\分類|JS: slice()|PHP: array_slice()|
|:----:|----|----|
|對象|array|array|
|參數|起始值、結束值|起始值、長度 / 結束值、key 值保護|
|片段|包含起始值，不含結束值|包含起始值，不含結束值 (負數)|
|方向性|由左至右|由左至右|
|回傳結果|新陣列|新陣列|
|原始陣列|不受影響|不受影響|
|索引值|重新編號|預設針對數字型 key 值重新編號 (設定 key 值保護時，則不會更動)|



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
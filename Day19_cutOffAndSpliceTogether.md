# Day 19：Cut Off And Splice Together - Part 3

## 前言

經過前兩篇的洗禮，相信大家對於 `splice` 的功能及應用方式也有一些基礎的了解了，因此，今天我們就來看 `splice` 的最後一個功能**取代**吧!！

其實，並不需要將取代這個功能想得太過複雜。

簡單來說，它就是在**起始值**的地方，減去**指定長度**的內容，之後再**放入一些其他的內容**在原先的位置上。

所以其實就是前兩天內容的綜合體，接下來就看範例吧。

----

## splice()

```javascript
// javascript

// 正數 < 陣列長度
const ary = [1, 2, 3, 4, 5]
ary.splice(2, 3, 'Add', )
console.log(ary)
// > [1, 2, "Add"]





// 正數 >= 陣列長度
const bry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ]
bry.splice(10, 4, 'Berry')
console.log(bry)
// > ["a", "b", "c", "d", "e", "f", "g", "Berry"]





// |負數| <= 陣列長度
const cry = ['U', 'V', 'W', 'X', 'Y', 'Z', ]
cry.splice(-3, 2, 'Cat')
console.log(cry)
// > ["U", "V", "W", "Cat", "Z"]





// |負數| > 陣列長度
const dry = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ]
dry.splice(-9, 1, 'Doggy')
console.log(dry)
// > ["Doggy", "beta", "gamma", "delta", "epsilon", "zeta"]
```

插入多個參數，並佔用相對應的索引值：

```javascript
// javascript

const ary = [1, 2, 3]

ary.splice(2, -1, 'A', 'B', 'C', 'D', 'E')
console.log(ary)
// > [1, 2, "A", "B", "C", "D", "E", 3]
```


----

## array_splice()

```php
// php

<?
    // 正數 < 陣列長度
    $ary = [1, 2, 3, 4, 5];
    array_splice($ary, 2, -1, 'Mono');
    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 [2] => Mono [3] => 5 ) 





    // 正數 >= 陣列長度
    $bry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ];
    array_splice($bry, 10, 3, 'double');
    print_r($bry);
    // > Array ( [0] => a [1] => b [2] => c [3] => d [4] => e [5] => f [6] => g [7] => double ) 







    // |負數| <= 陣列長度
    $cry = ['U', 'V', 'W', 'X', 'Y', 'Z', ];
    array_splice($cry, -3, 5, 'triple');
    print_r($cry);
    // > Array ( [0] => U [1] => V [2] => W [3] => triple ) 





    // |負數| > 陣列長度
    $dry = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ];
    array_splice($dry, -9, -4, 'tetra');
    print_r($dry);
    // > Array ( [0] => tetra [1] => gamma [2] => delta [3] => epsilon [4] => zeta )
?>
```

同時進行多值取代：

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    array_splice($ary, 1, -2, ['alpha', 'beta', 'gamma', 'delta']);
    print_r($ary);
    // > Array ( [0] => 1 [1] => alpha [2] => beta [3] => gamma [4] => delta [5] => 4 [6] => 5 )
?>
```

----

## 比較

|標題\分類|JS: splice()|PHP: array_splice()|
|:----:|----|----|
|對象|array|array|
|參數|起始值、長度、插入值|起始值、長度、插入值|
|原始陣列|會受影響，可能影響長度|會受影響，可能影響長度|
|方向性|由左至右|由左至右|
|回傳結果|被剪下的資料所組成的新陣列|被剪下的資料所組成的新陣列|
|長度值為負數時|不刪除資料|長度值更改為從末端產生的偏移量，並刪除從起始值至偏移量之間的所有資料|
|多值插入|從第三個參數起都納為插入值|須以陣列的形式放入第三個參數|
|備註|--|插入內容的 key 值的不被保留|

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
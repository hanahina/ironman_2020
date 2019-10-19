# Day 18：Cut Off And Splice Together - Part 2

## 前言

接續上一篇的主題，今天要講的是有關 `splice` 這個方法中。有關插入的部分。

上一篇中有稍稍帶到插入值的部分，可以理解到說，其實只要針對第二個參數 (刪減長度) 設定為**0**，之後依需添加想要增加的插入值，就可以達到新增 / 插入元素的效果了。

接下來就讓我們來看一些範例吧！！

----

## splice()

`splice()` 從第三個參數開始是指插入值的部分，也就是我們今天要說明的內容。

在不刪除任何資料的情況下 (刪減長度設定為 0)，起始值所代表的，就是插入值最後所佔用的索引值。

而這項起始值設定所代表的意義，可以參考上一篇的內容。

```javascript
// javascript

// 正數 < 陣列長度
const ary = [1, 2, 3, 4, 5]
ary.splice(2, 0, 'Add', )
console.log(ary)
// > [1, 2, "Add", 3, 4, 5]





// 正數 >= 陣列長度
const bry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ]
bry.splice(10, 0, 'Berry')
console.log(bry)
// > ["a", "b", "c", "d", "e", "f", "g", "Berry"]





// |負數| <= 陣列長度
const cry = ['U', 'V', 'W', 'X', 'Y', 'Z', ]
cry.splice(-3, 0, 'Cat')
console.log(cry)
// > ["U", "V", "W", "Cat", "X", "Y", "Z"]





// |負數| > 陣列長度
const dry = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ]
dry.splice(-9, 0, 'Doggy')
console.log(dry)
// > ["Doggy", "alpha", "beta", "gamma", "delta", "epsilon", "zeta"]
```

`splice()` 也可以同時插入多個參數，並佔用相對應的索引值：

```javascript
// javascript

const ary = [1, 2, 3]

ary.splice(2, 0, 'A', 'B', 'C', 'D', 'E')
console.log(ary)
// > [1, 2, "A", "B", "C", "D", "E", 3]
```


----

## array_splice()

`array_splice()` 這邊稍稍不一樣的是，雖然第三個值也是插入值，但是一次只能放一個插入值，不像 `splice()` 一樣可以直接往下串。

在第二個參數設定為 0 的情況下，可以進行插入的動作，而起始值此時所代表的，就是插入值所要占用的位置。

```php
// php

<?
    // 正數 < 陣列長度
    $ary = [1, 2, 3, 4, 5];
    array_splice($ary, 2, 0, 'Mono');
    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 [2] => Mono [3] => 3 [4] => 4 [5] => 5 ) 





    // 正數 >= 陣列長度
    $bry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ];
    array_splice($bry, 10, 0, 'double');
    print_r($bry);
    // > Array ( [0] => a [1] => b [2] => c [3] => d [4] => e [5] => f [6] => g [7] => double ) 







    // |負數| <= 陣列長度
    $cry = ['U', 'V', 'W', 'X', 'Y', 'Z', ];
    array_splice($cry, -3, 0, 'triple');
    print_r($cry);
    // > Array ( [0] => U [1] => V [2] => W [3] => triple [4] => X [5] => Y [6] => Z ) 





    // |負數| > 陣列長度
    $dry = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ];
    array_splice($dry, -9, 0, 'tetra');
    print_r($dry);
    // > Array ( [0] => tetra [1] => alpha [2] => beta [3] => gamma [4] => delta [5] => epsilon [6] => zeta )
?>
```

雖然插入值只能放一個，但是要同時插入多個元素也是可以的，只要用陣列方式呈現即可：

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    array_splice($ary, 3, 0, ['alpha', 'beta', 'gamma', 'delta']);
    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => alpha [4] => beta [5] => gamma [6] => delta [7] => 4 [8] => 5 )
?>
```

因為插入多個元素的方法是使用陣列，所以**理論上**是可以插入含有 key 值的內容。但實際上，此方法會將插入值中的 key 值全數刪除，之後以數字型 key 值的形式重新進行編號。

```php
// php

<?
    $ary = [
        '5' => 'A1',
        'kiwi' => 'A2',
        '9' => 'A3',
        'orange' => 'A4',
        '6' => 'A5',
    ];

    $bry = [
        'papaya' => 'B1',
        '7' => 'B2',
        'lemon' => 'B3',
        '12' => 'B4',
        '0' => 'B5',
    ];

    array_splice($ary, 3, 0, $bry);
    print_r($ary);
    // > Array ( [0] => A1 [kiwi] => A2 [1] => A3 [2] => B1 [3] => B2 [4] => B3 [5] => B4 [6] => B5 [orange] => A4 [7] => A5 ) 
    // ※ B1 ~ B5 的原始 key 值在 $ary 中被刪除

    print_r($bry);
    // > Array ( [papaya] => B1 [7] => B2 [lemon] => B3 [12] => B4 [0] => B5 )
    // ※ $bry 本身不受影響
?>
```

----

## 比較

|標題\分類|JS: splice()|PHP: array_splice()|
|:----:|----|----|
|對象|array|array|
|參數|起始值、~~長度~~、插入值|起始值、~~長度~~、插入值|
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
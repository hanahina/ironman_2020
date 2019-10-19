# Day 17：Cut Off And Splice Together - Part 1

## 前言

今天開始要講的主題會有點複雜，所以我會切成三部分來說 (預計篇幅整個炸掉的節奏......)。

這次的主題是 `splice`，之所以說它複雜，因它同時可以涵蓋以下數種功能：

1. 刪除
2. 插入
3. 取代

為了深入解析 (其實並沒有)，並且減少弄混，所以決定分章節進行說明，而今天的內容就是第一種功能**刪除**。

----

## splice()

`splice()` 可以接三個以上的參數，從第三個參數開始是指插入值的部分，所以目前先不討論，今天僅針對前兩個參數信說明。

第一個參數所代表的是起始值，它有底下數種特性：

1. 正數 < 陣列長度 => 索引值
2. 正數 >= 陣列長度 => 末端 (加值)
3. |負數| <= 陣列長度 => 末端回推的偏移量
4. |負數| > 陣列長度 => 0

在不指定第二個參數的情況下，會切除由起始值 (含) 開始至陣列尾端的所有資料。

```javascript
// javascript

// 正數 < 陣列長度
const ary = [1, 2, 3, 4, 5]
ary.splice(2)
console.log(ary)
// > [1, 2]





// 正數 >= 陣列長度
const bry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ]
bry.splice(10)
console.log(bry)
// > ["a", "b", "c", "d", "e", "f", "g"]





// |負數| <= 陣列長度
const cry = ['U', 'V', 'W', 'X', 'Y', 'Z', ]
cry.splice(-3)
console.log(cry)
// > ["U", "V", "W"]





// |負數| > 陣列長度
const dry = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ]
dry.splice(-9)
console.log(dry)
// > []
```

第二個參數代表的是需要裁剪的長度值：

1. 正數 => 從起始值 (含) 開始需要刪掉的數量，最多刪到陣列末端
2. 0 => 不刪減資料
3. 負數 => 不刪減資料

```javascript
// javascript

// 正數，總量未超過陣列長度
const ary  = [1, 2, 3, 4, 5]
ary.splice(1, 2)
console.log(ary)
// > [1, 4, 5]





// 正數，總量超過陣列長度
const bry  = ['a', 'b', 'c', 'd', 'e', 'f', 'g',]
bry.splice(3, 10)
console.log(bry)
// > ["a", "b", "c"]





// 0
const cry  = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ]
cry.splice(2, 0)
console.log(cry)
// > ["alpha", "beta", "gamma", "delta", "epsilon", "zeta"]





// 負數
const dry  = ['single', 'double', 'triple', 'tetra', 'penta', 'hexa', ]
dry.splice(0, -3)
console.log(dry)
// > ["single", "double", "triple", "tetra", "penta", "hexa"]
```

回傳值是被裁剪下來的資料所組成的陣列：

```javascript
// javascript

const ary  = [1, 2, 3, 4, 5]
console.log(ary.splice(1, 3))
// > [2, 3, 4]


const bry  = ['single', 'double', 'triple', 'tetra', 'penta', 'hexa', ]
console.log(bry.splice(4, 0))
// > []
```

----

## array_splice()

`array_splice()` 也是可以接三個以上的參數，從第三個開始所代表的是插入值，所以先按下不表。

關於第一個參數的部分，代表的是起始值：

1. 正數 < 陣列長度 => 起始位置
2. 正數 >= 陣列長度 => 末端 (加值)
3. |負數| <= 陣列長度 => 末端回推的偏移量
4. |負數| > 陣列長度 => 最前端

在不指定第二個參數的情況下，會切除由起始值 (含) 開始至陣列尾端的所有資料。

```php
// php

<?
    // 正數 < 陣列長度
    $ary = [1, 2, 3, 4, 5];
    array_splice($ary, 2);
    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 ) 



    // 正數 >= 陣列長度
    $bry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ];
    array_splice($bry, 10);
    print_r($bry);
    // > Array ( [0] => a [1] => b [2] => c [3] => d [4] => e [5] => f [6] => g ) 






    // |負數| <= 陣列長度
    $cry = ['U', 'V', 'W', 'X', 'Y', 'Z', ];
    array_splice($cry, -3);
    print_r($cry);
    // > Array ( [0] => U [1] => V [2] => W ) 





    // |負數| > 陣列長度
    $dry = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ];
    array_splice($dry, -9);
    print_r($dry);
    // > Array ( )
?>
```

第二個參數如果是正數，代表的是長度值，如果是負數，代表的是從尾端起算的偏移量：

1. 正數 => 從起始值 (含) 開始需要刪掉的數量，最多刪到陣列末端
2. 0 => 不刪減資料
3. 負數 => 從尾端起算的偏移量

```php
// php

<?
    // 正數，總量未超過陣列長度
    $ary  = [1, 2, 3, 4, 5];
    array_splice($ary, 1, 2);
    print_r($ary);
    // > Array ( [0] => 1 [1] => 4 [2] => 5 ) 





    // 正數，總量超過陣列長度
    $bry  = ['a', 'b', 'c', 'd', 'e', 'f', 'g',];
    array_splice($bry, 3, 10);
    print_r($bry);
    // > Array ( [0] => a [1] => b [2] => c ) 





    // 0
    $cry  = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', ];
    array_splice($cry, 2, 0);
    print_r($cry);
    // > Array ( [0] => alpha [1] => beta [2] => gamma [3] => delta [4] => epsilon [5] => zeta ) 





    // 負數
    $dry  = ['single', 'double', 'triple', 'tetra', 'penta', 'hexa', ];
    array_splice($dry, 0, -3);
    print_r($dry);
    // > Array ( [0] => tetra [1] => penta [2] => hexa )
?>
```

回傳值是被裁剪下來的資料所組合成的新陣列，數字型 key 值會重新編號 (原始跟新陣列都會重新編號)：

```php
// php

<?
    $ary  = [1, 2, 3, 4, 5];
    print_r(array_splice($ary, 1, 3));
    // > Array ( [0] => 2 [1] => 3 [2] => 4 ) 


    $bry  = ['single', 'double', 'triple', 'tetra', 'penta', 'hexa', ];
    print_r(array_splice($bry, 4, 0));
    // > Array ( )


    $cry = [
        '1' => 'apple',
        'A' => 'banana',
        '5' => 'kiwi',
        '9' => 'orange',
        'C' => 'peach',
    ]
    print_r(array_splice($cry, 1, -1));
    // > Array ( [A] => banana [0] => kiwi [1] => orange )

    print_r($cry);
    // > Array ( [0] => apple [C] => peach )
?>
```

----

## 比較

※ 今天的內容將忽略插入值的介紹

|標題\分類|JS: splice()|PHP: array_splice()|
|:----:|----|----|
|對象|array|array|
|參數|起始值、長度、~~插入值~~|起始值、長度、~~插入值~~|
|原始陣列|會受影響，可能影響長度|會受影響，可能影響長度|
|方向性|由左至右|由左至右|
|回傳結果|被剪下的資料所組成的新陣列|被剪下的資料所組成的新陣列|
|長度值為負數時|不刪除資料|長度值更改為從末端產生的偏移量，並刪除從起始值至偏移量之間的所有資料|

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
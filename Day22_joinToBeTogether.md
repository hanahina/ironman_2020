# Day 22：Join To Be Together

## 前言

這個方法當初在找的時候找到快瘋掉，甚至有點想說：啊，PHP 又沒有相對應的方法了……

後來還是拜見 google 大神才找到。

總之，就開始來看這個被藏起來的方法吧。

----

## join()

在 JS 中並沒有太的問題，基本上就是應用在 **array** 上的方法。

它的作用也很單純，就是把一個陣列所有的值串成一個**字串**後輸出。

**回傳值就是輸出的字串**，此方法**不會對原始陣列造成影響**。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
console.log(ary.join())
// > 1,2,3,4,5
```

在預設狀態下，他會用單一逗號 (半形) 對所有的值進行串接。

如果想要修改串接的內容，可以做為參數塞在方法中。

```javascript
// javascript

const ary = ['Hello', 'World', 'And', 'Have', 'A', 'Nice', 'Day', ]
console.log(ary.join(' '))
// > Hello World And Have A Nice Day


const bry = ['Hello', 'World', 'And', 'Have', 'A', 'Nice', 'Day', ]
console.log(bry.join(''))
// > HelloWorldAndHaveANiceDay


const cry = ['Hello', 'World', 'And', 'Have', 'A', 'Nice', 'Day', ]
console.log(cry.join(', '))
// > Hello, World, And, Have, A, Nice, Day


const dry = ['Hello', 'World', 'And', 'Have', 'A', 'Nice', 'Day', ]
console.log(dry.join(' + '))
// > Hello + World + And + Have + A + Nice + Day


const ery = ['Hello', 'World', 'And', 'Have', 'A', 'Nice', 'Day', ]
console.log(ery.join('--'))
// > Hello--World--And--Have--A--Nice--Day
```

針對多維陣列，會被扁平化後輸出，但是如果內含物件 (object) 的話，它只會說這邊是一個物件，無法呈現內容。

```javascript
// javascript

const ary = [
    {a: 123, b: 456},
    ['A', 'B', 'C', ],
    3,
    5,
    8
]

console.log(ary.join())
// > [object Object],A,B,C,3,5,8
```

遇到空陣列的時候，會輸出空字串

```javascript
// javascript

const ary = []
console.log(ary.join())
// > (空字串)
```

遇到陣列中的值是 `null` 或 `undefined` 的時候，會以空字串方式輸出。

`false` 的時候，會轉換成字串的 `false` 輸出。

```javascript
// javascript

const ary = [null, undefined, false]
console.log(ary.join())
// > ,,false
```

----

## implode() / join()

這次會很難找的原因是在，對於 PHP 來說

1. `join()` 這個方法是 `implode()` 的別名
2. `implode()` 方法是用在字串上的

因為這次主攻的內容是陣列系列，所以就很乖的直接找 array 系列的頁面，所以才華麗麗的找不到。OTZ

這個方法是接兩個參數，只是它接參數的順序比較特別。

PS. 這邊要註記一下，因為 PHP 中 array 方法，**第一個參數一定會接要作用的陣列本身**。
因為 PHP function 的寫法是把陣列寫在括號內，不像 JS 用 . 直接串在陣列後面，所以之前在講解的時候，都會把陣列當作**第 0 參數**來看。

正常在接的時候，可以只給**第二個參數**，也就是**陣列**本身。此時的第一參數是忽略不寫。

預設情況下，會以**空字串**進行串接。

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    print_r(implode($ary));
    // > 12345
?>
```

然後，它只接陣列中的 value 值，key 值被忽略不計。

```php
// php

<?
    $ary = [
        "A" => 1,
        "B" => 2,
        "C" => 3,
        "D" => 4,
        "E" => 5
    ];

    print_r(implode($ary));
    // > 12345
?>
```

如果想要用不同元素進行串接，則需要輸入第一參數，型別為字串。

這邊會發現，PHP 串接參數的輸入位置跟 JS 可以說是相反的。

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];
    print_r(implode(', ', $ary));
    // > 1, 2, 3, 4, 5



    $bry = [1, 2, 3, 4, 5];
    print_r(implode(' ', $bry));
    // > 1 2 3 4 5



    $cry = [1, 2, 3, 4, 5];
    print_r(implode(' + ', $cry));
    // > 1 + 2 + 3 + 4 + 5
?>
```

空陣列輸出結果：

```php
// php

<?
    $ary = [];

    print_r(implode($ary));
    // > (空字串)
?>

如果 value 值中有 undefined：

```php
// php

<?
    $ary = [undefined, 4, 5];

    print_r(implode($ary));
    // > error
?>
```

如果 value 值中有 null：

```php
// php

<?
    $ary = [null, 4, 5];

    print_r(implode($ary));
    // > 45
?>
```

如果 value 值中有 false：

```php
// php

<?
    $ary = [false, 4, 5];

    print_r(implode($ary));
    // > 45
?>
```

多維陣列的部分，會告知此處有一個陣列，但是無法輸出內容：

```php
// php

<?
    $ary = [
        [1, 2, 3, 4, 5],
        'A' => 'Step 1',
        'B' => 'Step 2',
        'C' => 'Step 3',
    ];

    print_r(implode('__', $ary));
    // > Array__Step 1__Step 2__Step 3
?>
```


----

## 比較

|標題\分類|JS: join()|PHP: implode() / join()|
|:----:|----|----|
|對象|array|array|
|參數順序|陣列、串接值|串接值、陣列|
|原始陣列|不受影響|不受影響|
|預設串接文字|`,` (半形逗號)|`` (空字串)|
|返回值|串接後的**字串**|串接後的**字串**|
|多維陣列|扁平化後輸出|無法輸出多維陣列內容|
|空陣列|回傳空字串|回傳空字串|
|NULL|以空字串輸出|以空字串輸出|
|undefined|以空字串輸出|**error**|
|false|以 "false" 輸出|以空字串輸出|
|其它|--|只串接 **value 值**的內容|

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
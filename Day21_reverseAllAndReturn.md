# Day 21：Reverse All And Return

## 前言

今天的內容，也是針對陣列內容進行排列，只是它比較特別的是，它不在乎值的內容，它著重在索引的排序上，並針對索引內容進行反轉，這就是 `reverse`。

接著就來看 `reverse` 的相關用法吧。

----

## reverse()

基本上，我個人覺得 `reverse()` 是一個還滿**傻瓜**方法。

它不接任何的參數，所以值串在陣列後面就可以了，**作用後的結果會直接影響原陣列**。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

ary.reverse()
console.log(ary)
// > [5, 4, 3, 2, 1]
```

`reverse()` 只會針對單層進行反轉。

```javascript
// javascript

const ary = [1, 2, [9, 8, 7, 6], 4, 5]

ary.reverse()
console.log(ary)
// > [5, 4, [9, 8, 7, 6], 2, 1]
```

返回結果是反轉後的原陣列。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const returnVal = ary.reverse()
console.log(returnVal === ary)
// > true
```

----

## array_reverse()

`array_reverse()` 在應用上跟 JS 的 `reverse()` 沒有太大差別，但是不會影響到原始陣列。

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    array_reverse($ary);
    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 ) 

    print_r(array_reverse($ary));
    // > Array ( [0] => 5 [1] => 4 [2] => 3 [3] => 2 [4] => 1 )
?>
```

針對數字型 key 值會重新編號：

```php
// php

<?
    $ary = [
        'A' => '1st',
        '5' => '2nd',
        '0' => '3rd',
        'G' => '4th',
        '18' => '5th',
        'm' => '6th',
    ];

    print_r(array_reverse($ary));
    // > Array ( [m] => 6th [0] => 5th [G] => 4th [1] => 3rd [2] => 2nd [A] => 1st )
?>
```

其實 `array_reverse()` 有一個選用參數 `preserve_keys`，預設為 **false**。

如果設定為 **true** 則會保留 key 值的內容。

```php
// php

<?
    $ary = [
        'A' => '1st',
        '5' => '2nd',
        '0' => '3rd',
        'G' => '4th',
        '18' => '5th',
        'm' => '6th',
    ];

    print_r(array_reverse($ary, true));
    // > Array ( [m] => 6th [18] => 5th [G] => 4th [0] => 3rd [5] => 2nd [A] => 1st )
?>
```

同樣的，它只能進行單層反轉。

```php
// php

<?
    $ary = [1, 2, 3, ['a', 'b', 'c', 'd', ], 4, 5];
    print_r(array_reverse($ary));
    // > Array ( [0] => 5 [1] => 4 [2] => Array ( [0] => a [1] => b [2] => c [3] => d ) [3] => 3 [4] => 2 [5] => 1 )
?>
```

----

## 比較

|標題\分類|JS: sort()|PHP: sort()|
|:----:|----|----|
|對象|array|array|
|原始陣列|直接修改原始陣列|不對原始陣列造成影響|
|返回值|反轉後原陣列|回傳反轉後資料的**新陣列**|
|深度|單層反轉|單層反轉|
|其它|--|預設針對數字型 key 值重新編號|

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
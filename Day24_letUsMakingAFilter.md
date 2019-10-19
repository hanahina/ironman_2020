# Day 24：Let Us Making A Filter

## 前言

今天的主題是 `filter`，基本概念就是把一組陣列丟到 callback function 中，進而篩選出結果。

緊接著來看相關的介紹吧。

----

## filter()

在 JS 的部分，`filter()` 跟過往介紹過的 array method 沒有太多的不同。

它也是承接一個 callback function 作為參數，callback function 中最多可以接三個值，分別是：值、索引、陣列。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6]

ary.filter(function(a, b, c) {
    console.log(`
        a: ${a}
        b: ${b}
        c: ${c}
    `)
})

// > a: 1
// > b: 0
// > c: 1,2,3,4,5,6
            
// > a: 2
// > b: 1
// > c: 1,2,3,4,5,6
            
// > a: 3
// > b: 2
// > c: 1,2,3,4,5,6
            
// > a: 4
// > b: 3
// > c: 1,2,3,4,5,6
            
// > a: 5
// > b: 4
// > c: 1,2,3,4,5,6
            
// > a: 6
// > b: 5
// > c: 1,2,3,4,5,6
```

此方法的回傳結果，是篩選後的新陣列。

在 callback function 沒有給予參數或是沒有回傳值的情況下，會回傳一個**新的空陣列**。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6]
const returnValue = ary.filter(() => {})

console.log(returnValue)
// > []
```

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6]
const returnValue = ary.filter((item, i) => {
    item = item * i
})

console.log(returnValue)
// > []
```

callback function 不會對原始陣列造成影響 (不直接操作陣列中元素的情況下)

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6]
const returnValue = ary.filter((item) => {
    return item % 2
})

console.log(returnValue)
// > [1, 3, 5]

console.log(ary)
// > [1, 2, 3, 4, 5, 6]
```

callback function 的執行內容，不會對篩選後的資料造成影響 (不直接操作陣列中元素的情況下)

```javascript
// javascript

const ary = [1, 2, 3, 4, 5, 6]
const returnValue = ary.filter((item) => {
    item = item * 10
    return item > 30
})

console.log(returnValue)
// > [4, 5, 6]

console.log(ary)
// > [1, 2, 3, 4, 5, 6]
```

`filter()` 的篩選範圍，在方法執行的當下就已經確定，所以後續增加的內容將不會被運行：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.filter((item, i) => {
    ary.push(i + 6)

    return item
})

console.log(result)
// > [1, 2, 3, 4, 5]

console.log(ary)
// > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

篩選後的結果，是此方法執行到該元素時所決定的：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.filter((item, i) => {
    ary[i + 1] = ary[i + 1] * 10
    console.log(ary)

    return !(item % 5)
})
// > [1, 20, 3, 4, 5]
// > [1, 20, 30, 4, 5]
// > [1, 20, 30, 40, 5]
// > [1, 20, 30, 40, 50]
// > [1, 20, 30, 40, 50, NaN]

console.log(result)
// > [20, 30, 40, 50]

console.log(ary)
// > [1, 20, 30, 40, 50, NaN]
```

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.filter((item, i) => {
    ary[i] =  ary[i] * 10
    console.log(ary)

    return !(item % 5)
})
// > [10, 2, 3, 4, 5]
// > [10, 20, 3, 4, 5]
// > [10, 20, 30, 4, 5]
// > [10, 20, 30, 40, 5]
// > [10, 20, 30, 40, 50]

console.log(result)
// > [5]

console.log(ary)
// > [10, 20, 30, 40, 50]
```

----

## array_filter()

`array_filter()` 篩選後的，會回傳一個新陣列。

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    $result = array_filter($ary, function($item) {
        return ($item % 2);
    });
    print_r($result);
   // >  Array ( [0] => 1 [2] => 3 [4] => 5 )

    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
?>
```

在有給予 key 值的情況下，`array_filter()` 執行前後 key 值不受影響。

```php
// php

<?
    $ary = [
        'A' => 1,
        '0' => 2,
        '5' => 3,
        'B' => 4,
        '3' => 5
    ];

    $result = array_filter($ary, function($item) {
        return ($item % 2);
    });
    print_r($result);
   // >  Array ( [A] => 1 [5] => 3 [3] => 5 )

    print_r($ary);
    // > Array ( [A] => 1 [0] => 2 [5] => 3 [B] => 4 [3] => 5 )
?>
```

`array_filter()` 在預設的情況下，callback function 只接 value 值，但是可以設定 $flag 來修改 callback function 接收的內容。

`array_filter($array, callback[, $flag])`

$flag 可填入的內容為以下兩者：

1. ARRAY_FILTER_USE_KEY： 接受 key 值作為唯一參數
2. ARRAY_FILTER_USE_BOTH： 同時接受 key 值跟 value 值

```php
// php

<?
    $ary = [
        'A' => 1,
        '0' => 2,
        '5' => 3,
        'B' => 4,
        '3' => 5
    ];

    $result = array_filter($ary, function($a) {
        return ($a > 0);
    }, ARRAY_FILTER_USE_KEY);
    print_r($result);
   // >  Array ( [5] => 3 [3] => 5 ) 

    print_r($ary);
    // > Array ( [A] => 1 [0] => 2 [5] => 3 [B] => 4 [3] => 5 )
?>
```

```php
// php

<?
    $ary = [
        'A' => 1,
        '0' => 2,
        '5' => 3,
        'B' => 4,
        '3' => 5
    ];

    $result = array_filter($ary, function($a, $b) {
		echo $a . '=>' . $b;
        return ($a > 0 && $b % 3);
    }, ARRAY_FILTER_USE_BOTH);
    
    // > 1=>A
    // > 2=>0
    // > 3=>5
    // > 4=>B
    // > 5=>3

    print_r($result);
   // >  Array ( [5] => 3 ) 

    print_r($ary);
    // > Array ( [A] => 1 [0] => 2 [5] => 3 [B] => 4 [3] => 5 )
?>
```

**註：用 ARRAY_FILTER_USE_BOTH 在傳入兩個參數的時候，順序是 $value, $key**

----

## 比較

|標題\分類|JS: filter()|PHP: array_filter()|
|:----:|----|----|
|對象|array|array|
|回傳值|篩選後的新陣列|篩選後的新陣列|
|callback 參數|值、索引、陣列|預設情況下只接 value 值|



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
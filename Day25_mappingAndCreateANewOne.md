# Day 25：Mapping And Create A New One

## 前言

開始發現，活動接近尾聲之後都已經沒有梗可以用了，雖然本來就不多。(苦笑

經天要講的內容，是關於 array 映射 (map) 這個功能。

其實在 PHP 裡面，它的細節很多，但是因為這邊只是簡單說一下，重點還是最初的匯總跟比較。

所以比較細節的部分如果有興趣，強烈建議去 PHP 官網查看喔！！

----

## map()

這個方法在 JS 裡面的作用，就是將 array 中的每個元素丟到 calback function 中跑過一輪，之後回傳一個新的陣列。

它 callback function 中接的三個參數，分別是：值、索引、陣列。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.map((a, b, c) => {
    console.log(`
        a: ${a}
        b: ${b}
        c: ${c}
    `)
})

// > a: 1
// > b: 0
// > c: 1,2,3,4,5
    
// > a: 2
// > b: 1
// > c: 1,2,3,4,5
    
// > a: 3
// > b: 2
// > c: 1,2,3,4,5
    
// > a: 4
// > b: 3
// > c: 1,2,3,4,5
    
// > a: 5
// > b: 4
// > c: 1,2,3,4,5
```

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.map((item) => item)
console.log(result)
// > [1, 2, 3, 4, 5]

console.log(result === ary)
// > false
```

此方法的調用本身不會影響到原始陣列的內容，但是，會受到 callback function 影響。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const resultA = ary.map((item) => item * item)
console.log(resultA)
// >  [1, 4, 9, 16, 25]

console.log(ary)
// > [1, 2, 3, 4, 5]




const bry = [1, 2, 3, 4, 5]

const resultB = bry.map((item, i) => {
    bry[i] = item * item
    return bry[i]
})
console.log(resultB)
// > [1, 4, 9, 16, 25]

console.log(bry)
// > [1, 4, 9, 16, 25]
```

`map()` 的篩選範圍，在方法執行的當下就已經確定，所以後續增加的內容將不會被運行：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.map((item, i) => {
    ary.push(ary.length + 1)

    return item
})

console.log(result)
// > [1, 2, 3, 4, 5]

console.log(ary)
// > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

映射後的結果，是此方法執行到該元素時所決定的：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.map((item, i) => {
    ary[i + 1] = ary[i + 1] + i
    console.log(ary)

    return item / 2 
})
// > [1, 2, 3, 4, 5]
// > [1, 2, 4, 4, 5]
// > [1, 2, 4, 6, 5]
// > [1, 2, 4, 6, 8]
// > [1, 2, 4, 6, 8, NaN]

console.log(result)
// > [0.5, 1, 2, 3, 4]

console.log(ary)
// > [1, 2, 4, 6, 8, NaN]
```

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.map((item, i) => {
    ary[i] = ary[i] + i
    console.log(ary)

    return item / 2 
})
// > [1, 2, 3, 4, 5]
// > [1, 3, 3, 4, 5]
// > [1, 3, 5, 4, 5]
// > [1, 3, 5, 7, 5]
// > [1, 3, 5, 7, 9]

console.log(result)
// > [0.5, 1, 1.5, 2, 2.5]

console.log(ary)
// > [1, 3, 5, 7, 9]
```

----

## array_map()

PHP 的 `array_map()` 比較別的地方在，它可以同時傳入多個陣列。

其他部分與 JS 的 `map()` 作用相似。

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    $result = array_map(function($item) {
        return $item;
    }, $ary);
    print_r($result);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
?>
```

傳入單一陣列時，可以保留 key 值

```php
// php

<?
    $ary = [
        'A' => 1,
        '10' => 2,
        'J' => 3,
        'E' => 4,
        '5' => 5
    ];

    $result = array_map(function($item) {
        return $item;
    }, $ary);
    print_r($result);
    // > Array ( [A] => 1 [10] => 2 [J] => 3 [E] => 4 [5] => 5 )
?>
```

傳入多個陣列時，key 值會被刪除

```php
// php

<?
    $ary = [
        'A' => 1,
        '10' => 2,
        'J' => 3,
        'E' => 4,
        '5' => 5
    ];
    $bry = [
        'A' => 6,
        '10' => 7,
        'J' => 8,
        'E' => 9,
        '5' => 10
    ];

    $result = array_map(function($a, $b) {
        return [$a, $b];
    }, $ary, $bry);
    print_r($result);
    // > Array ( 
    // >    [0] => Array ( [0] => 1 [1] => 6 ) ,
    // >    [1] => Array ( [0] => 2 [1] => 7 ) ,
    // >    [2] => Array ( [0] => 3 [1] => 8 ) ,
    // >    [3] => Array ( [0] => 4 [1] => 9 ) ,
    // >    [4] => Array ( [0] => 5 [1] => 10 ) ,
    // > )
?>
```

如果傳入的陣列參數長度不一，會以空值填滿

```php
// php

<?
    $ary = [
        'A' => 1,
        '10' => 2,
        'J' => 3,
        'E' => 4,
        '5' => 5
    ];
    $bry = [
        'A' => 6,
        '10' => 7,
    ];

    $result = array_map(function($a, $b) {
        return [$a, $b];
    }, $ary, $bry);
    print_r($result);
    // > Array ( 
        // > [0] => Array ( [0] => 1 [1] => 6 ),
        // > [1] => Array ( [0] => 2 [1] => 7 ),
        // > [2] => Array ( [0] => 3 [1] => ),
        // > [3] => Array ( [0] => 4 [1] => ),
        // > [4] => Array ( [0] => 5 [1] => ) 
    // > )
?>
```

若是將 callback 設為 NULL 可以創建多維陣列

```php
// php

<?
    $ary = [
        'A' => 1,
        '10' => 2,
        'J' => 3,
        'E' => 4,
        '5' => 5
    ];
    $bry = [
        'A' => 6,
        '10' => 7,
        'J' => 8,
        'E' => 9,
        '5' => 10
    ];

    $result = array_map(NULL, $ary, $bry);
    print_r($result);
    // > Array ( 
    // >    [0] => Array ( [0] => 1 [1] => 6 ) ,
    // >    [1] => Array ( [0] => 2 [1] => 7 ) ,
    // >    [2] => Array ( [0] => 3 [1] => 8 ) ,
    // >    [3] => Array ( [0] => 4 [1] => 9 ) ,
    // >    [4] => Array ( [0] => 5 [1] => 10 ) ,
    // > )
?>
```

----

## 比較

|標題\分類|JS: map()|PHP: array_map()|
|:----:|----|----|
|對象|array|array|
|參數|callback|callback、array|
|作用陣列數量|1|1+|
|callback 參數|值、索引、陣列|value 值，數量與傳入陣列數相同|


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
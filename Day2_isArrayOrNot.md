# Day2：Is Array or Not

## 前言

這一段要講的是有關於資料型別的問題，今天當收到一段 / 一組資料的時候，絕對不會隨隨便便的就開 function 下去操作它，總歸是要先瞭解說：資料結構長怎樣？它是哪種型別、可以怎樣操作？有沒有跟其他相關聯？……種種的問題。

甚至於會有資料有沒有符合規範(指定形式、型別)的問題。所以今天會需要去檢查這些資料是不是我們要的內容。

以下的敘述中，基本上還是以 JS 為主要切入點，這點還請多多包涵。

## 型別驗證

### JS

以 JS 來說，最常使用的型別驗證方法，應該是 `typeof()` 這個方法，但是很不幸的是，它並非是十全十美的。

有曾經接觸過 JS 的看倌們應該知道，JS 的值可以粗分為「原始型別」、「物件型別」兩種，原始型別其中有六種分類；物件型別有三種。

以 `typeof()` 這個方法來說，它可以分辨的主要是原始型別中大部分的內容以及物件型別中的 function，其它的資料類型它就一律吐「object」(物件) 這個結果給你。

而更不幸的是，今天我們在這邊討論的 array 對它來說，就是屬於「其它」這個範圍內。

也因此，我們需要額外的方法來驗證說，今天送進來的某資料，是不是 array 的形式。

以下是用 `typeof()` 判斷型別的結果範例：

```javascript
// javascript

// Hint：typeof在使用的時候，有沒有後面空格的小括號都是合法的

// 原始型別
    // undefined
    typeof undefined // > undefined

    // null
    typeof null // > object

    // boolean
    typeof true // > boolean
    typeof false // > boolean

    // number
    typeof 123 // > number
    typeof 1.25 // > number
    typeof 42n // > bigint

    // string
    typeof "Hello World" // > string

    // symbol (from ES 2015)
    typeof Symbol() // > symbol

// 物件型別
    // array
    typeof [1, 2, 3] // > object

    // object
    typeof {a: 1} // > object

    // function
    typeof function(){} // > function
```

參觀過了看似很好用，但是雷點滿滿的 `typeof()` 之後，就可以理解為什麼會衍生出下面的方法 `Array.isArray()` 。

基本上，把需要驗證的資料塞進小括號，它就會吐出 boolean 值給你了，感覺上沒什麼使用上的問題。比較需要注意的是它寫法比較特殊。

```javascript
// javascript

// 以下回傳 true
    Array.isArray([])
    Array.isArray([1, 2, 3])
    Array.isArray(new Array())
    Array.isArray(new Array(10))
    Array.isArray(new Array('a', 'b', 'c'))

    // Hint：Array.prototype本身是一個陣列
    Array.isArray(Array.prototype)

// 以下回傳 false
    Array.isArray()
    Array.isArray({})
    Array.isArray(1)
    Array.isArray('Hello')
    Array.isArray(true)
    Array.isArray(Symbol())
    Array.isArray(null)
    Array.isArray(undefined)
    Array.isArray({ __proto__: Array.prototype })
```

### PHP

現在回到 PHP 的部分，在 PHP 中，也是有泛用型的型別檢驗方法 `gettype()`。
基本上，依我目前對它的了解，暫時還沒有發現會像 JS 一樣發生型別無法判斷的情況。

頂多就是，它在判斷結果為「浮點數」的時候，出現的是 `double` 而非 `float` 吧。 (不過話說回來，真的有語法會乖乖吐 float 而非 number / integer 嗎？？)

```php
// php

<?
    $testType = array(
        1,
        1.2,
        "Hello World",
        true,
        null,
        new testClass,
        array()
    );

    foreach ($testType as $value) {
        echo gettype($value) . '\n';
    }
    // integer
    // double
    // string
    // boolean
    // boolean
    // NULL
    // object
    // array
?>

```

即使如此，PHP 中還是有一系列的 is_ 家族可以使用，`is_array()` 就是其中之一。使用方法會直接回傳 boolean 值，可以省下使用 `gettype()` 時需要比較的功夫。

```php
// php

<?
    is_array(array(1, 2, 3)); // > true

    is_array('Hello World'); // > false
?>
```

## 比較

|標題 \ 分類|JS|PHP|
|:----:|----|----|
|泛用型型別驗證|typeof()|gettype()|
|陣列辨別性|不可分辨|可分辨|
|專一型方法|Array.isArray()|is_array()|
|回傳值|boolean|boolean|

## 參考資料

+ [http://docs.php.net/](http://docs.php.net/)
+ [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
+ [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
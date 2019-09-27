# Day 10：Get The Thing Just Pop Out

## 前言

今天的主題是 `pop`，`pop` 跟昨天講的 `push` 剛好相反。

它的作用是刪除 / 取出陣列中的最後一個元素，並回傳相關內容。

也因為它的功能很單一，所以沒有額外的參數需要塞，固定就是一個值。XDD

----

## Pop

### Javascript

老規矩，我們先看 JS 的部分，`pop` 會取出陣列中最後一個元素並回傳，同時修改陣列長度。

```javascript
// javascript

const ary = ["dog", "cat", "bonny", "horse"]

const lastItem = ary.pop()
console.log(`最後一個元素：${lastItem}，陣列長度：${ary.length}`)

// > 最後一個元素：horse，陣列長度：3
```

如果遇到空陣列，會回傳 `undefined`：

```javascript
// javascript

const ary = []

console.log(ary.pop())

// > undefined
```

### PHP

接下來是看 PHP 的部分。

與 JS 相同，它會將陣列中的最後一個值回傳，並縮減陣列長度：

```php
// php

<?
    $ary = array(1, 2, 3, 4, 5);

    $item = array_pop($ary);
    echo $item;
    print_r($ary);

    // > 5
    // > array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 )
?>
```

而當 `array_pop()` 接到的是空陣列的時候，會回傳 `null`：

```php
// php

<?
    $ary = array();

    $item = array_pop($ary);
    print_r($item);

    // > NULL (沒有回傳值)
?>
```

---

## 比較

|標題\分類|JS|PHP|
|:----:|----|----|
|對象|array|array|
|取出元素數量|一個|一個|
|陣列長度|縮短|縮短|
|回傳值|取出的元素內容|取出的元素內容|
|空陣列回傳內容|undefined|NULL (沒有回傳值)|

---

## 參考資料

- [http://docs.php.net/](http://docs.php.net/)
- [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
- [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
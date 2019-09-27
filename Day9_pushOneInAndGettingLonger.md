# Day 9：Push One In and Getting Longer

## 前言

今天的主題講的是 `push`。

就如同字面上的意思，這個方法可以將一至多個元素，從尾端塞進陣列中，增加陣列的長度。

下面我們就來看看相關的內容吧！

----

## Push

### Javascript

一樣先從 JS 的角度下去看，其實即使不用 `push()` 這個方法，我們也是可以將元素從尾端塞進陣列之中的。

運用到的，就是之前有提過的 `length` 以及索引值由 `0` 開始編碼的特性。

在這兩個條件成立的情況下，會使得陣列中**最後一個元素的索引值**，會恰好等於**陣列長度 - 1**。

所以如果我們想要新增元素在尾端的話，只要這樣做就可以了：

```javascript
// javascript

const ary = [1, 2, 3];

ary[ary.length] = 4
console.log(ary)

// > [1, 2, 3, 4]
```

講到這裡，一定會有人想問：那如果塞大意點的數字會怎樣？

在這種情況下，中間的內容會以空插槽的方式呈現，就像以下的結果：

```javascript
// javascript

const ary = [1, 2, 3];

ary[ary.length + 5] = 4
console.log(ary)

// > [1, 2, 3, empty × 5, 4]
```

但是，這種方法也是有缺點的。它一次只能塞一個值，所以如果你同時塞一組進去，就會被放在同一個位置上，變成多維陣列，就像底下這樣：

```javascript
// javascript

const ary = [1, 2, 3]

ary[ary.length] = [4, 5, 6]
console.log(ary)

// > [1, 2, 3, [4, 5, 6]]
```

在這點上，`push()` 就貼心很多，它可以接受一個以上的元素同時插入，就像下面這樣：

```javascript
// javascript

// 單一插入值
const ary = [1, 2, 3]

ary.push(4)
console.log(ary)

// > [1, 2, 3, 4]



// 複數插入值
const bry = ['a', 'b', 'c', 'd']

bry.push('x', 'y', 'z')
console.log(bry)

// > ["a", "b", "c", "d", "x", "y", "z"]
```

### PHP

在 PHP 中也有除了 `array_pus()` 以外，從尾端插入元素的方法：`$array[]`。

它跟 JS 不一樣的地方是在，不需要提供索引值，也不會產生空插槽。大概是下面的效果：

```php
// php

<?
    $ary = array(1, 2, 3);
    $ary[] = 4;

    print_r($ary);

    // > array (
    // >    [0] => 1,
    // >    [1] => 2,
    // >    [2] => 3,
    // >    [3] => 4,
    // > )
?>
```

同樣的，因為同時只能插入一個，所以如果用 `$array[]` 的方式一次塞多筆資料，就會塞在同一個位置上，變成多維陣列。

```php
// php

<?
    $ary = [1, 2, 3];
    $ary[] = [4, 5, 6];

    print_r($ary);

    // > array (
    // >     [0] => 1,
    // >     [1] => 2,
    // >     [2] => 3,
    // >     [3] => array (
    // >         [0] => 4,
    // >         [1] => 5,
    // >         [2] => 6
    // >     ),
    // > );
?>
```

而，如果你採用 `array_push()` 的話，就可以同時塞多筆資料：

```php
// php

<?
    // 單筆資料
    $ary = [1, 2, 3];
    array_push($ary, 4);

    print_r($ary);

    // > array (
    // >     [0] => 1,
    // >     [1] => 2,
    // >     [2] => 3,
    // >     [3] => 4,
    // > );




    // 多筆資料
    $bry = [1, 2, 3];
    array_push($bry, 4, 5, 6);

    print_r($bry);

    // > array (
    // >     [0] => 1,
    // >     [1] => 2,
    // >     [2] => 3,
    // >     [3] => 4,
    // >     [4] => 5,
    // >     [5] => 6,
    // > );
?>
```

最後就是，如果運行中，一次只需要插入單一元素的話，建議使用 `$array[]` 而非 `array_push()`，減少方法的調用可以有效地降低耗能。

---

## 比較

|標題\分類|JS|PHP|
|:----:|----|----|
|對象|array|array|
|插入元素數量|一個以上|一個以上|
|回傳值|新陣列長度|新陣列長度|
|類似功能|array[array.length]|$array[]|

---

## 參考資料

- [http://docs.php.net/](http://docs.php.net/)
- [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
- [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
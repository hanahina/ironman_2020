# Day 11：Shift The Stuff And Getting Shorter

## 前言

前兩天看過了從陣列尾端進行操作的 `push` 跟 `pop` 之後，接下來兩天的主題適從陣列前端進行操作的 `shift` 跟 `unshift`。

其實，如果以功能面來說的話，今天應該先介紹 `unshift` ，只可以為了讓語句比較好記憶，便把兩個主題進行了對調。

接下來，我們就看一下今天的主題 `shift` 吧！

----

## Shift

### Javascript

接下來先看 JS 有關 `shift` 的部分。它其實跟上一篇介紹的 `pop` 十分相似，一樣是縮減列長度，回傳被裁剪下來的值：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const cutItem = ary.shift()
console.log(`回傳值：${cutItem}，操作後陣列長度：${ary.length}`)

// > 回傳值：1，操作後陣列長度：4
```

差別在，上一篇的 `pop` 是從最末端進行裁減，所以不會影響索引值，而今天的 `shift` 是從頭進行裁減，所以一旦進行了操作，每個陣列中的元素都會被重新編號：

```javascript
// javascript

// pop 操作示範
const ary = ['A', 'B', 'C', 'D', 'E']

console.log(`原始陣列編號：`)
ary.forEach((item, i) => {
    console.log(`${i}：${item}`)
})

const popItem = ary.pop()
console.log(`回傳值：${popItem}，陣列長度：${ary.length}`)
console.log(`操作後陣列編號：`)
ary.forEach((item, i) => {
    console.log(`${i}：${item}`)
})

// > 原始陣列編號：
// > 0：A
// > 1：B
// > 2：C
// > 3：D
// > 4：E
// > 回傳值：E，陣列長度：4
// > 操作後陣列編號：
// > 0：A
// > 1：B
// > 2：C
// > 3：D






// shift 操作示範
const ary = ['apple', 'banana', 'orange', 'peach', 'kiwi']

console.log(`原始陣列編號：`)
ary.forEach((item, i) => {
    console.log(`${i}：${item}`)
})

const popItem = ary.shift()
console.log(`回傳值：${popItem}，陣列長度：${ary.length}`)
console.log(`操作後陣列編號：`)
ary.forEach((item, i) => {
    console.log(`${i}：${item}`)
})

// > 原始陣列編號：
// > 0：apple
// > 1：banana
// > 2：orange
// > 3：peach
// > 4：kiwi
// > 回傳值：apple，陣列長度：4
// > 操作後陣列編號：
// > 0：banana
// > 1：orange
// > 2：peach
// > 3：kiwi
```

若是作用於**空陣列**上，會回傳 `undefined`：

```javascript
// javascript

const ary = []

console.log(ary.shift())

// > undefined
```

### PHP

接下來看 PHP 的部分。

PHP 的 `array_shift()` 跟 `array_pop()` 也十分的相似，同樣也會縮減陣列長度，回傳被裁剪下來的 value 值。

差別在，`array_shift()` 是從第一個開始裁剪；`array_pop()` 是從最末一個值開始裁減。
`array_shift()` 會針對**數字型**的 key 值從零開始**重新編號**，文字型及其他不受影響；`array_pop()` 則不會影響 key 值結果。

```php
// php


// array_pop() 操作範例
<?
    $ary = array(
        "1" => "AAAAA",
        "apple" => "BBBBB",
        "cat" => "CCCCC",
        "5" => "DDDDD",
        "10" => "EEEEE",
        "dog" => "FFFFF",
    );

    $popItem = array_pop($ary);

    echo $popItem;
    print_r($ary);

    // > FFFFF
    // > array (
    // >     [1] => AAAAA,
    // >     [apple] => BBBBB,
    // >     [cat] => CCCCC,
    // >     [5] => DDDDD,
    // >     [10] => EEEEE
    // > );
?>





// array_shift() 操作範例
<?
    $bry = array(
        "1" => "AAAAA",
        "apple" => "BBBBB",
        "cat" => "CCCCC",
        "5" => "DDDDD",
        "10" => "EEEEE",
        "dog" => "FFFFF",
    );

    $shiftItem = array_shift($bry);

    echo $shiftItem;
    print_r($bry);

    // > AAAAA
    // > array (
    // >     [apple] => BBBBB,
    // >     [cat] => CCCCC,
    // >     [0] => DDDDD,
    // >     [1] => EEEEE,
    // >     [dog] => FFFFF
    // > );
?>
```

如果遇到空陣列，會回傳 NULL 值：

```php
// php

<?
    $ary = array();

    print_r(array_shift($ary));

    // > NULL (沒有回傳值)
?>
```

---

## 比較

|標題\分類|JS|PHP|
|:----:|----|----|
|對象|array|array|
|取出元素|最前方的一個|最前方的一個|
|陣列長度|縮短|縮短|
|回傳值|取出的元素內容|取出的元素內容的 value 值|
|空陣列回傳內容|undefined|NULL (沒有回傳值)|
|特性|索引值重新編號|針對**數字型** key 值從零開始重新編號|

---

## 參考資料

- [http://docs.php.net/](http://docs.php.net/)
- [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
- [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
# Day 14：No More Reason, Just All Result

## 前言

今天的主題將延續上一篇的內容。

之前有說過用 `indexOf()`、`lastIndexOf()`，以及 PHP 中的 `array_search()` 可以查找陣列中指定內容的位置。

但是他們都有一個共同的缺點：找到一個就停了。

所以今天的內容就是要說，要怎麼突破這個困境，確實查找出所有的資料位置。

----

## indexOf()

在 `indexOf()` 中查找所有資料位置的方法並沒有改變，只是我們必須動點手腳：找個地方存放找到的資料，所以就會演變成下面的狀況：

```javascript
// javascript

const ary = [1, 2, 1, 3, 1, 4, 2, 5]
const indexAll = []
let i = 0


while(ary.indexOf(1, i) !== -1) {
    indexAll.push(ary.indexOf(1, i))

    i = ary.indexOf(1, i) + 1
}
console.log(indexAll)

// > [0, 2, 4]
```

----

## lastIndexOf()

`lastIndexOf()` 的做法也差不多，不過要記得，因為它是從最末位往前找，所以在 `[0]` 的時候需要進行處理，不然選用參數變成 -1 之後，又會重新開始找：

```javascript
// javascript

const ary = [2, 2, 3, 6, 2, 5, 2, 4, 3]
const lastAll = []
let idx = ary.lastIndexOf(2)

while(idx !== -1) {
    lastAll.push(idx)
    idx = (idx > 0) ? ary.lastIndexOf(2, idx - 1) : -1;
}
console.log(lastAll);

// > [6, 4, 1, 0]
```

----

## array_keys()

PHP 這邊就比較遺憾，`array_search()` 沒辦法處理查找所有 key 值的情況，所以在這邊會應用到另一個方法 `array_keys()`。

`array_keys()` 原先的用法是列出所有 key 值，但是因為它有篩選的功能，所以正好可以應用在我們這個主題中：

```php
// php

<?
    $ary = array(
        'apple' => 'A',
        '10' => 'B',
        'peach' => 'A',
        'kiwi' => 'C',
        '0' => 'A',
    );

    print_r(array_keys($ary, 'A'));
    // > Array ( [0] => apple [1] => peach [2] => 0 )
?>
```

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
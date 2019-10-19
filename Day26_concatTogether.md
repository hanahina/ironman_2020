# Day 26：Concat Together

## 前言

今天是活動期內的最後一篇技術文了，雖然感覺沒什內容。XD

明天基本上就是出心得文了。

今天的內容是 `concat` 我們來看相關內容吧！！

----

## concat()

`concat()` 的作用是合併多陣列，返回合併後的新陣列，不會影響原始陣列。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const bry = ['a', 'b', 'c', ]
const result = ary.concat(bry)

console.log(result)
// > [1, 2, 3, 4, 5, "a", "b", "c"]

console.log(ary)
// > [1, 2, 3, 4, 5]

console.log(bry)
// > ["a", "b", "c"]
```

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const bry = ['a', 'b', 'c', ]
const cry = ['apple', 'kiwi', 'peach']
const result = ary.concat(bry, cry)

console.log(result)
// > [1, 2, 3, 4, 5, "a", "b", "c", "apple", "kiwi", "peach"]
```

如果沒有傳入值，會對原始陣列進行淺拷貝

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.concat()

console.log(result)
// > [1, 2, 3, 4, 5]

console.log(result === ary)
// > false
```

```javascript
// javascript

const ary = [1, 2, ['A', 'B', 'C', 'D', ], 4, 5]

const result = ary.concat()
console.log(result)
// > [1, 2, ['A', 'B', 'C', 'D', ], 4, 5]

result[2][2] = 'Alpha'

console.log(result)
// > [1, 2, ['A', 'B', 'Alpha', 'D', ], 4, 5]

console.log(ary)
// > [1, 2, ['A', 'B', 'Alpha', 'D', ], 4, 5]
```

`concat()` 的參數也可以放陣列以外的東西，如：object、string、number、boolean...

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.concat({a: 'apple'}, false, 1.25, 'Hello')
console.log(result)
// > [1, 2, 3, 4, 5, {a: 'apple'}, false, 1.25, "Hello"]
```

----

## array_merge()

`array_merge()` 的作用也是進行陣列的合併，且不會對原始陣列造成影響。

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];
    $bry = ['a', 'b', 'c', 'd', 'e', ];

    $result = array_merge($ary, $bry);
    print_r($result);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => a [6] => b [7] => c [8] => d [9] => e ) 

    print_r($ary);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 ) 

    print_r($bry);
    // > Array ( [0] => a [1] => b [2] => c [3] => d [4] => e )
?>
```

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];
    $bry = ['a', 'b', 'c',];
    $cry = ['apple', 'kiwi', 'peach'];

    $result = array_merge($ary, $bry, $cry);
    print_r($result);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => a [6] => b [7] => c [8] => apple [9] => kiwi [10] => peach )
?>
```

如果進行合併的陣列有相同的 key 值，則後面的內容會覆蓋前面的內容，若是數字型的 key 值，則會重新編號。

```php
// php

<?
    $ary = [
        '10' => 'A1',
        'apple' => 'A2',
        '0' => 'A3',
        '15' => 'A4',
        'kiwi' => 'A5',
    ];
    $bry = [
        '5' => 'B1',
        'banana' => 'B2',
        '0' => 'B3',
        '12' => 'B4',
        'kiwi' => 'B5',
    ];

    $result = array_merge($ary, $bry);
    print_r($result);
    // > Array ( [0] => A1 [apple] => A2 [1] => A3 [2] => A4 [kiwi] => B5 [3] => B1 [banana] => B2 [4] => B3 [5] => B4 )
?>
```

若是只提供一組陣列內容，則會直接進行拷貝，拷貝過程會將數字型 key 值重新編號。

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    $result = array_merge($ary);
    print_r($result);
    // > Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
?>
```

```php
// php

<?
    $ary = [
        '10' => 'A1',
        'apple' => 'A2',
        '0' => 'A3',
        '15' => 'A4',
        'kiwi' => 'A5',
    ];

    $result = array_merge($ary);
    print_r($result);
    // > Array ( [0] => A1 [apple] => A2 [1] => A3 [2] => A4 [kiwi] => A5 )
?>
```

`array_merge()` 只能接陣列

```php
// php

<?
    $ary = [1, 2, 3, 4, 5];

    $result = array_merge($ary, 1.2, false, 'String');
    print_r($result);
    // > WARNING array_merge(): Argument #2 is not an array
?>
```

----

## 比較

|標題\分類|JS: concat()|PHP: array_merge()|
|:----:|----|----|
|對象|array|array|
|參數|any (選用)|array (選用)|
|返回值|合併後的新陣列|合併後的新陣列|

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
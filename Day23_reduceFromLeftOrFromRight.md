# Day 23：Reduce From Left Or From Right

## 前言

今天要介紹的是 `reduce` 這個方法。

其實我第一次看到它的時候，覺得它還滿難的。因為它接的參數偏多，所以必須很清楚說，你今天哪個參數是要放在哪裡、做什麼。

等用習慣之後會發現，其實沒有想像中難以上手。但是，會用不難，要用得好還有一段距離要走。

它算是一個活用性相當高的方法，所以接下來我們先就基本面來稍稍看一下它的面貌吧。

----

## reduce()

以字面上來說，此方法的意思是*縮減*、*簡化*的意思，但是以實務層面上來說，你的 callback function 會影響到最後輸出的結果，不一定會減量，但是基本上只會有一個值。XDD

`reduce()` 內部需要接一個 callback function 讓它執行，並且具有一個選用參數**預設值**。
callback function 中最多可以接 4 個參數，分別是：

1. 上一次的回傳值
2. 此次陣列值
3. 索引
4. 陣列

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const final = ary.reduce((a, b, c, d) => {
    console.log(`
        a: ${a}
        b: ${b}
        c: ${c}
        d: ${d}
    `)
})

// > a: 1
// > b: 2
// > c: 1
// > d: 1,2,3,4,5
    
// > a: undefined
// > b: 3
// > c: 2
// > d: 1,2,3,4,5
    
// > a: undefined
// > b: 4
// > c: 3
// > d: 1,2,3,4,5
    
// > a: undefined
// > b: 5
// > c: 4
// > d: 1,2,3,4,5

console.log(final)
// > undefined
```

從上面的範例我們可以看到幾項訊息：

1. callback function 中因為我們沒有回傳值，所以下一輪的 a 接到的是 undefined
2. 在沒有給預設值 (選用參數) 的情況下，整個循環是從 index: 1 開始跑

我相信到這邊一定人質疑，undefined 又不一定是來自 return 值。

不過 b、c、d 分別是**當前值**、**索引**、**陣列**這些大概不會有問題。

所以我們在改一下上面的範例：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const final = ary.reduce((a, currentValue, currentIndex, thisArray) => {
    console.log(`
        a: ${a}
        currentValue: ${currentValue}
        currentIndex: ${currentIndex}
        thisArray: ${thisArray}
    `)
    return `${currentIndex} 的值是 ${currentValue}`
})

// > a: 1
// > currentValue: 2
// > currentIndex: 1
// > thisArray: 1,2,3,4,5
    
// > a: 1 的值是 2
// > currentValue: 3
// > currentIndex: 2
// > thisArray: 1,2,3,4,5
    
// > a: 2 的值是 3
// > currentValue: 4
// > currentIndex: 3
// > thisArray: 1,2,3,4,5
    
// > a: 3 的值是 4
// > currentValue: 5
// > currentIndex: 4
// > thisArray: 1,2,3,4,5

console.log(final)
// > 4 的值是 5
```

至此可以確認，a 值抓的確實是上一輪回傳的結果，甚至來看，整個方法的回傳值，就是跑完最後一輪之後，callback function 的回傳值。

接下來來看**預設值**的部分。

以我自身的經驗，強烈建議把這個參數當作必選在用。

因為在沒有指定的情況下會發生兩件事：

1. 它會把索引 0 的值當作預設值，直接進行第一次回傳
2. 索引 0 的內容不會被送進 callback function 中進行運算

### 無預設值

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const final = ary.reduce((lastReturn, currentValue, currentIndex) => {
    console.log(`
        lastReturn: ${lastReturn}
        currentValue: ${currentValue}
        currentIndex: ${currentIndex}
    `)
    return `上次的索引是 ${currentIndex} ，值是 ${currentValue}`
})

// > lastReturn: 1
// > currentValue: 2
// > currentIndex: 1
    
// > lastReturn: 上次的索引是 1 ，值是 2
// > currentValue: 3
// > currentIndex: 2
    
// > lastReturn: 上次的索引是 2 ，值是 3
// > currentValue: 4
// > currentIndex: 3
    
// > lastReturn: 上次的索引是 3 ，值是 4
// > currentValue: 5
// > currentIndex: 4

console.log(final)
// > 上次的索引是 4 ，值是 5
```

有預設值

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const final = ary.reduce((lastReturn, currentValue, currentIndex) => {
    console.log(`
        lastReturn: ${lastReturn}
        currentValue: ${currentValue}
        currentIndex: ${currentIndex}
    `)
    return `上次的索引是 ${currentIndex} ，值是 ${currentValue}`
}, '預設值')

// > lastReturn: 預設值
// > currentValue: 1
// > currentIndex: 0

// > lastReturn: 上次的索引是 0 ，值是 1
// > currentValue: 2
// > currentIndex: 1

// > lastReturn: 上次的索引是 1 ，值是 2
// > currentValue: 3
// > currentIndex: 2

// > lastReturn: 上次的索引是 2 ，值是 3
// > currentValue: 4
// > currentIndex: 3

// > lastReturn: 上次的索引是 3 ，值是 4
// > currentValue: 5
// > currentIndex: 4
    
console.log(final)
// > 上次的索引是 4 ，值是 5
```

以回傳值來說，感覺好像沒什麼差別，因為 final 的結果會是相同的。

但如果改一下寫法就會發現差異：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const final = ary.reduce((prev, value) => {
    prev.push(value * 10)
    return prev
})
    
console.log(final)
// > TypeError
```

```javascript
// javascript

const ary = [1]
const final = ary.reduce((prev, value) => {
    prev.push(value * 10)
    return prev
})
    
console.log(final)
// > 1
```

這兩個範例可以看出

1. 沒預設值的情況下，因為索引 0 不經過 callback function 所以會直接回傳
2. 回傳後的內容，因為不符合 callback function 中所使用的方法，所以會報錯

這邊如果加上預設值的話：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]
const final = ary.reduce((prev, value) => {
    prev.push(value * 10)
    return prev
}, [])
    
console.log(final)
// > [10, 20, 30, 40, 50]
```

```javascript
// javascript

const ary = [1]
const final = ary.reduce((prev, value) => {
    prev.push(value * 10)
    return prev
}, [])
    
console.log(final)
// > [10]
```

這種狀況 (因為沒有預設值而導致的錯誤) 在 JSON 處理很常發生。

所以，預設值這件事強烈建議納為**必選**。

另外，在空陣列，且未提供預設值的情況下，會發生 Type Error：

```javascript
// javascript

const ary = []
const final = ary.reduce((prev, item) => prev)

console.log(final)
// > Uncaught TypeError: Reduce of empty array with no initial value
```

----

## reduceRight()

`reduceRight()` 的作用跟概念與 `reduce()` 完全相同，唯一的差別在，它是由尾端走回來，所以執行順序剛好相反。

也因此，在沒有預設值的況下，被跳過 callback function 不執行的是**最後一個值**。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const leftResult = ary.reduce((prev, item) => prev += item * 10)
const rightResult = ary.reduceRight((prev, item) => prev += item * 10)

console.log(leftResult)
// > 141

console.log(rightResult)
// > 105
```

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const leftResult = ary.reduce((prev, item) => prev += item * 10, '')
const rightResult = ary.reduceRight((prev, item) => prev += item * 10, '')

console.log(leftResult)
// > 1020304050

console.log(rightResult)
// > 5040302010
```

----

## array_reduce()

在 PHP 中的 `array_reduce()` 也是接兩個參數，但是callback function 只接回傳值跟當前的 value 值。

在沒有給予預設值的情況下，會自動用 **NULL** (空值) 當作預設值。

```php
// php

<?
    $ary = [
        'a' => 1, 
        'b' => 2, 
        'c' => 3, 
        'd' => 4, 
        'e' => 5
    ];

    $final = array_reduce($ary, function($prev, $value) {
        echo "回傳值：" . $prev ;
        echo "當前值：" . $value ;

        return $value;
    });
    
    // > 回傳值： 
    // > 當前值：1 
    
    // > 回傳值：1 
    // > 當前值：2 
    
    // > 回傳值：2 
    // > 當前值：3 
    
    // > 回傳值：3 
    // > 當前值：4 
    
    // > 回傳值：4 
    // > 當前值：5 

    print_r($final);
    // > 5
?>
```

遇到空陣列的時候，如果有預設值會直接回傳預設值：

```php
// php

<?
    $ary = [];
    $final = array_reduce($ary, function($prev, $value) {
        return $value;
    }, "預設值");

    print_r($final);
    // > 預設值
?>
```

如果陣列中為單一值，即使沒有給預設值，也會回傳 `array_reduce()` 執行後結果 (因為會自動以 NULL 作為預設值)：

```php
// php

<?
    $ary = [1];
    $final = array_reduce($ary, function($prev, $value) {
        $prev += $value * 10;
        return $prev;
    });

    print_r($final);
    // > 10
?>
```

空陣列遇上無預設值的時候，則會直接回傳空值：

```php
// php

<?
    $ary = [];
    $final = array_reduce($ary, function($prev, $value) {
        $prev += $value * 10;
        return $prev;
    });

    print_r($final);
    // > NULL (空值)
?>
```

----

## 比較

|標題\分類|JS: reduce()|JS： reduceRight()|PHP: array_reduce()|
|:----:|----|----|----|
|對象|array|array|array|
|方向|左至右|右至左|左至右|
|接收值|當前值|當前值|當前 value 值|
|方法參數|callback function、預設值 (選用)|callback function、預設值 (選用)|callback function、預設值 (選用)|
|callback 參數|回傳值、當前值、索引、陣列|回傳值、當前值、索引、陣列|回傳值、當前值|
|無預設值|索引 0 不執行，作為預設值|索引 (array.length - 1) 不執行，作為預設值|自動以 NULL (空值) 作為預設值|
|空陣列 + 預設值|回傳預設值|回傳預設值|回傳預設值|
|單一元素 + 無預設|回傳唯一值|回傳唯一值|回傳 reduce 結果|
|空陣列 + 無預設|Type Error|Type Error|回傳 NULL (空值)|


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
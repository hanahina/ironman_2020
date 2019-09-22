# Day 5：To Do Until The End

## 前言

其實之前有一段時間很排斥用 `while` / `do...while` 這兩種語句，因為對當時剛接觸迴圈的自己來說，`while` 的用法其實很不直觀，會把**宣告式**跟**遞增**的部分寫在別的地方，這樣的作法對於初學者來說，是相對的不不友善，也因此，有很長一段時間陷入只會使用 `for` 迴圈的地步。

一直到後來，真的很認真地去審視 `for` 到底是在做什麼，進一步理解並體會到它的變化型之後，才慢慢可以接受 `while` 的語句構成跟使用。

接下來，就讓我們來看看 `while` 跟 `do...while` 兩種語句的應用方式吧。

----

## while

### Javascript

首先來看 `while` 的部分，以下是它的基本結構：

```javascript
// javascript

while (判斷式) {
    // do something
}

// 當判斷式結果為 true 時，迴圈會持續執行
```

看起來結構很簡單，但外表簡單的東西通常內容物都很不簡單。

如果熟悉 `for` 迴圈的用法的話，就會發現它少了**宣告式**跟**遞增 / 更新**兩部分。沒有宣告式，不是會報錯，就是會形成全域變數造成汙染；沒有遞增 / 更新的話，就會導致迴圈無法中斷，形成無限迴圈。

但因為它基本架構中沒有，所以要使用者自己找地方加，這就是我前面說它相對不友善的地方。

不過如果我們換個方式來看它的話，或許會有不同的感覺。以下是 `for` 迴圈的變化型，不理解的看倌，建議可以先回去看看 [Day 4](https://blog.hinahina.tw/2019/09/11-day4for-something-and-something-else.html) 的內容，裡面有對於 `for` 迴圈及其變化型的說明。

```javascript
// javascript

let i = 0;
for (;i < 10;) {
    // do something
    i++;
}
```

有沒有覺得很眼熟，眼熟到如果是兩張投影片是可以直接重疊在一起程度。XDD

所以，如果今天我們把關鍵字改一改，會得到底下的結構，這才是 `while` 該有的真正姿態。

```javascript
// javascript

let i = 0;
while (i < 10) {
    // do something
    i++;
}
```

### PHP

接下來就是來看 PHP 有關 `while` 的部分。

老實話說，沒有什麼特別的變化，唯一有可敘述點的是，它有額外的冒號模式可以使用，對於不喜歡大括號的人來說，應該算是一種福音吧？！

它的基本架構如下：

```php
// php 一般模式
&lt;?
    while (判斷式) {
        // do something
    }
?&gt;

// php 冒號模式
&lt;?
    while (判斷式):
        // do something
    endwhile;
?&gt;

// 當判斷式的結果為 true 時，迴圈會持續執行。
```

在 PHP 的 `for` 迴圈中也有冒號模式，有興趣的民眾，可以回頭去看一下 [Day 4](https://blog.hinahina.tw/2019/09/11-day4for-something-and-something-else.html) 的內容。

下一步，我們一樣來撰寫 `for` 的變化型，來加強印象。

```php
// php 一般模式
&lt;?
    $i = 0;

    for (;$i < 10;) {
        // do something
        $i++;
    }
?&gt;

// php 冒號模式
&lt;?
    $j = 0;

    for ($j < 10):
        // do something
        $j++;
    endfor;
?&gt;
```

`for` 的變化型寫完之後，我們就可以像剛剛在看 JS 時一樣，進行關鍵字的更換，之後就會得到以下的結果：

```php
// php 一般模式
&lt;?
    $i = 0;

    while ($i < 10) {
        // do something
        $i++;
    }
?&gt;

// php 冒號模式
&lt;?
    $j = 0;

    while ($j < 10):
        // do something
        $j++;
    endwhile;
?&gt;
```

還是一句老話，這才是 `while` 迴圈的真正架構。多看幾眼會發現，其實它好像沒這麼難理理解嘛。XDD

----

## do...while

`do...while` 的語句，如果用白話一點的講法，其實就是把 `while` 語法中的 **do something** 搬到判斷式前去實現。這樣可以確保執行序**至少會執行一次**。

### Javascript

底下是 `do...while` 的基本架構：

```javascript
// javascript

do {
    // do something
} while (判斷式)

// 當判斷式結果為 true 時，迴圈會持續執行
```

接著再添加上**宣告式**跟**狀態更新**，會得到下方的結果：

```javascript
// javascript

let i = 0;
do {
    // do something
    i++;
} while (i < 10)
```

### PHP

PHP 中 `do...while` 的狀況跟 JS 差不多，比較需要注意的是，`do...while` 是**沒有冒號模式**的。

基本架構：

```php
// php

&lt;?
    do {
        // do something
    } while (判斷式);
?&gt;

// 當判斷式結果為 true 時，迴圈會持續執行
```

添加**宣告式**跟**狀態更新**：

```php
// php

&lt;?
    $i = 0;

    do {
        // do something
        $i++;
    } while ($i < 10);
?&gt;
```

----

## 比較

|標題 \ 分類|JS while|JS do...while|PHP while|PHP do...while|
|:----:|----|----|----|----|
|撰寫方式|1 種|1 種|2 種|1 種|
|最低執行次數|0|1|0|1|
|注意事項|宣告式跟狀態更新需額外撰寫，架構可以參考 `for` 迴圈的變化型|同左|同左|同左|

----

## 參考資料

+ [http://docs.php.net/](http://docs.php.net/)
+ [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
+ [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
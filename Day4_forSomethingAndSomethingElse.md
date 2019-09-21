# Day4：For Something and Something Else

## 前言

不得不承認，今天名字取得超級文不對題，堂堂開啟命名困難模式 (就跟下 CSS class name 一樣 XDD)。
總之，今天要講的議題是有關於 for loop 跟 array 的關係。

For 迴圈應該是大部分的程式與語法中，會第一個接觸到有關資料處理的部分，我個人覺得，它語法易懂好上手(語句很直觀)。
但是它也是普遍上認定擁有最複雜結構的迴圈語法。

----

## for loop

for 迴圈的結構，基本上可以分為四大塊，分別是：
1. 初始化 (initialization)
2. 驗證區 (condition)
3. 更新區 (final-expression)
4. 執行區 (statement)

初始化區塊：就是定義這組迴圈要執行的起始值，在 JS 中會採用 `var` 或是 `let` 進行宣告，PHP 就是採用常規的 `$` 字號。 `var` 的作用域是 function 所以會產生**外溢**的情況，而 `let` 因為作用域是 scope 所以會被限制在 for 迴圈的大括號中。

驗證區：基本上就是一個判斷式，用以決定是否需要執行接下來 `執行區` 以及 `更新區` 的內容，**此去區塊若設定錯誤，有可能形成無限迴圈**，導致執行序無法終止。

更新區：雖然是放在第三塊，但是它其實是整個過程中最後才會執行的內容。主要的目的就是修改初始宣告 / 上次執行後的值，以讓下次驗證區再次執行判斷。**此區塊若設計不慎，有可能形成無限迴圈**。

執行區：其實就是我們平常最常見的內容了，因為 for 迴圈的主要目的 / 行為，就是重複某項行為或是結構。因此，這邊會放的，就是需要重複執行的 function 或是重複輸出的內容。

接下來會針對基本結構進行說明。

### JS

以 javascript 來說，for 迴圈只有一種結構，內含一種基本型跟三種變化型。

#### 基本型
```javascript
// javascript

// for 迴圈基本型

for (let i = 0; i < 10; i++) {
    // do something
}
```

#### 變化型一
```javascript
// javascript

// for 變化型一：去除初始化區塊
let i = 0

for (; i < 10; i++) {
    // do something
}
```
#### 變化型二
```javascript
// javascript

// for 變化型二：去除驗證區

for (let i = 0; ; i++) {
    if (i >　10) {
        break;
    }
    // do something
}
```
#### 變化型三
```javascript
// javascript

// for 變化型三：去除更新區

for (let i = 0; i < 10;) {
    // do something
    i++;
}
```

從以上四種結構可以發現，對 for loop 來說，只要你有做到指定的三件事(執行區不算)，它其實並沒有強求一定要把相關內容放在預設好的位置上，但是要記得，「閱讀性」會影響到你的撰寫準則。
如過各位覺得以下的寫法很好閱讀的話，也歡迎多多使用。(偷笑~)

```javascript
// javascript

let i = 0

for (;;) {
    if (i > 10) break;
    // do something
    i++;
}
```

(迷之音：結果你講了這麼長，阿陣列哩??)

這部分就要回憶起我們在之前有說過的，陣列的重點是什麼??當然就是索引值、長度阿。

因此，我們只要活用上一篇的內容就可以得到以下的結果：
```javascript
// javascript
const ary = [1, 2, 3]

for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}
// > 1
// > 2
// > 3
```

這樣是不是很輕鬆愉快呢?

不過要額外注意的是，因為每次進行循環的時候都重新計算陣列長度會很消耗資源，所以會建議先在外部以變數進行儲存，以增加運行速度。

### PHP

現在換來看 PHP 的部分，其實除了語言特性之外，兩者的寫法幾乎一模一樣。也因此，不可免俗地也分為以下四個區塊：

1. 初始化
2. 驗證區
3. 更新區
4. 執行區

以大括號的有無可以再分成兩種寫法，每種依舊有一種基本型、三種變化型。

#### 基本型
```php
// php

// for 迴圈基本型

<?
    for ($i = 0; $i < 10; $i++) {
        // do something
    }
?>
```

#### 變化型一
```php
// php

// for 變化型一：去除初始化區塊
<?
    $i = 0;

    for (; $i < 10; $i++) {
        // do something
    }
?>
```
#### 變化型二
```php
// php

// for 變化型二：去除驗證區

<?
    for ($i = 0; ; $i++) {
        if ($i >　10) {
            break;
        }
        // do something
    }
?>
```
#### 變化型三
```php
// php

// for 變化型三：去除更新區
<?
    for ($i = 0; $i < 10;) {
        // do something
        $i++;
    }
?>
```

也因此，也會出現底下這種潮到出水的結構：
```php
// php

<?
    $i = 0;
    for (;;) {
        if ($i > 10) {
            break;
        }
        // do something

        $i++;
    }
?>
```

另一種寫法是冒號形式，以取代大括號，就像以下這樣：
#### 基本型 - 冒號模式
```php
// php

// for 冒號基本型

<?
    for ($i = 0; $i < 10; $i++):
        // do something
    endfor;
?>
```

所以接下來我們只需要運用到 `count()` 就可以進行陣列的操作了
```php
<?
    $ary = ['A', 'B', 'C', 'D'];

    for ($i = 0; $i < count($ary); $i++) {
        echo $ary[$i];
    }
    // A
    // B
    // C
    // D
?>
```
不過要注意的是，其實 PHP 的 array 是可以帶 key 值的，因此以上的寫法，只能用來執行自動編碼 (不具有 key 值) 的 PHP 陣列。

另外就是，為了避免每次進行循環的時候都要重新計算陣列長度，所以會強烈建議先在外部以變數進行儲存，以優化效能。

----

## 比較

|標題 \ 分類|JS|PHP|
|:----:|----|----|
|寫法|1種|2種|
|變化型|3種|3種|
|用途|重複執行、重複輸出結構|重複執行、重複輸出結構|
|對象|數字、陣列|數字、不具 key 值的陣列|

----

## 參考資料

+ [http://docs.php.net/](http://docs.php.net/)
+ [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
+ [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
# Day 6：Break and Go Next

## 前言

之前講了一些有關迴圈的內容，今天要來討論的，就是如何中斷、跳脫正在運行中的迴圈。

這次要看的是 `break`，`break` 的做用就跟他的名字一樣，用於中斷執行序、跳出迴圈或是作用區。

---

## Break

### Javascript

在 JS 中，它能作用的對象有以下數種：

1. for
2. forEach
3. while
4. do...while
5. switch
6. label

前四個是迴圈系列，沒什麼需要特別說明的，所以先看另外兩個。

`switch` 其實並不屬於迴圈家族的一份子，但是因為它的語法概念是**進入點**，所以會需要有語句去告訴它說：「_親，做到這邊就好了喲！_」，於是便運用上了 `break` 的特性。

`label` 有點像是**語法標籤**或是**便利貼**的概念，感覺就是把一段程式碼，特別幫它取一個名字，方便進行便操作。因為 `break` 的特性需要被放置迴圈中才能起作用，所以感覺上，`label` 就是為了讓 `break` 可以用在迴圈外的地方而存在的。

在迴圈中使用 `break` 大概是這樣子：

```javascript
// javascript

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
console.log("end");

// > 0
// > 1
// > 2
// > end
```

它會中斷 / 跳脫迴圈的執行，之後進行後續的語法。

以 JS 來說，基本上它只能跳過一層，所以是多重迴圈的情況下，就會繼續執行外部的迴圈內容：

```javascript
// javascript

let i = 0;
let k = 0;

for (; i < 10; i++) {
  for (; k < 5; k++) {
    if (k === 3) {
      console.log(`k end`);
      break;
    }
    console.log(`k = ${k}`);
  }
  console.log(`i = ${i}`);
}
console.log(`i end`);

// > k = 0
// > k = 1
// > k = 2
// > k end
// > i = 0
// > k end
// > i = 1
// > k end
// > i = 2
// > k end
// > i = 3
// > k end
// > i = 4
// > k end
// > i = 5
// > k end
// > i = 6
// > k end
// > i = 7
// > k end
// > i = 8
// > k end
// > i = 9
// > i end
```

從上面的結果可以看出來，在 `break` 執行之後，雖然不會再運行 _k_ 的內容，但是外層跟 _i_ 相關的並不受影響。

可是 `label` 的運行就有點不一樣了，因為對 `label` 來說，你已經有給它命名了，所以你要中斷哪一個就中斷哪一個。

不過要記得，必須把 `break` 放在 `label` 的作用域裡面才有效。

```javascript
// javascript

// 單層 label
helloStr: {
  console.log("Hello");
  break helloStr;
  console.log("the Happy");
}
console.log("World");

// > Hello
// > World
```

```javascript
// javascript

// 多層 label
var i = 0,
  j = 8;

checkiandj: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkj: while (j > 4) {
    console.log("j: " + j);
    j -= 1;
    if (j % 2 == 0) break checkiandj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}

// > i: 0
// > j: 8
// > 7 is odd.
// > j: 7
```

### PHP

PHP 中 `break` 的概念其實跟 JS 中差不多，不過它沒有 `label` 可以用。

所以它的可選參數接的是純數字，用來表示它中斷 / 跳脫幾重迴圈。(由內到外，自身為 1)

```php
// php

// 單層迴圈
<?
    $i = 0;

    while ($i < 10) {
        if($i == 5) {
            break;
        }
        echo $i;

        $i++;
    }
?>

// > 0
// > 1
// > 2
// > 3
// > 4
```

```php
// php

// 多重迴圈
<?
    $i = 0;
    $k = 8;

    for (; $i < 10; $i++) {
        while ($k > 0) {
            if($k == 5) {
                break 2;
            }
            echo "k：" . $k;
            $k--;
        }
        echo "i：" . $i;
    }

// > k：8
// > k：7
// > k：6
?>
```
---

## 比較

|標題\分類|JS|PHP|
|:----:|----|----|
|作用|打斷迴圈、作用區|打斷迴圈、作用區|
|對象|for、forEach、while、do...while、switch、label|for、foreach、while、do...while、switch|
|可選參數|label 值|數字|
|參數作用|打斷 / 跳出該label作用區 (須將 break 放在 label 宣告區域中)|指定要打斷 / 跳脫幾重迴圈|

---

## 參考資料

- [http://docs.php.net/](http://docs.php.net/)
- [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
- [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)

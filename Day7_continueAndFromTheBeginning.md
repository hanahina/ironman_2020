# Day 7：Continue and From The Beginning

## 前言

今天要講的內容也是迴圈操作的一部份 `continue`。

`continue` 跟 `break` 不一樣的地方在於，`break` 會中止整個環圈或是執行去的操作，但是 `continue` 主要是**跳過**這次迴圈、執行序，之後直接進入下一輪的迴圈 / 進入指定的進入點。

接下來就是看 `continue` 的相關介紹吧。

----

## Continue

### Javascript

在 JS 中，它能作用的對象有以下數種，相較於 `break` 少了一個 `switch`：

1. for
2. forEach
3. while
4. do...while
6. label

在迴圈中使用 `continue` 大概是這樣子：

```javascript
// javascript

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}
console.log('end')

// > 0
// > 1
// > 2
// > 4
// > 5
// > 6
// > 7
// > 8
// > 9
// > end
```

它會**跳過**指定的迴圈階段，之後繼續迴圈，直到執行完畢。

以 JS 來說，它在跳過的時候只會針對自己那圈，所以是多重迴圈的情況下，外部迴圈不受影響：

```javascript
// javascript

let i = 0
let k = 0

for(; i < 10; i++) {
    for(; k < 5; k++) {
        if(k === 3) {
            console.log(`k pass`)
            continue;
        }
        console.log(`k = ${k}`)
    }
    console.log(`i = ${i}`)
}
console.log(`i end`)

// > k = 0
// > k = 1
// > k = 2
// > k pass
// > k = 4
// > i = 0
// > i = 1
// > i = 2
// > i = 3
// > i = 4
// > i = 5
// > i = 6
// > i = 7
// > i = 8
// > i = 9
// > i end
```

可是 `label` 的運行跟一般迴圈有些不同，因為對 `label` 來說，你已經有給它命名了，所以你要跳到哪一個就跳到哪一個。

雖然是這麼說，但是在單層的情況下，其實跟沒有使用 `label` 沒有差別。

不過要記得，必須把 `continue` 放在 `label` 的作用域裡面才有效。

```javascript
// javascript

// 單層 label
labelDemo: for (let i = 0; i < 5; i++) {
    if (i % 2) {
        console.log(`${i} is odd`)

        continue labelDemo;
    }
    console.log(`${i} is even`)
}
console.log('End')

// > 0 is even
// > 1 is odd
// > 2 is even
// > 3 is odd
// > 4 is even
// > End
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
    if (j % 2 == 0) continue checkiandj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}

// > i: 0
// > j: 8
// > 7 is odd.
// > j: 7
// > i: 1
// > j: 6
// > 5 is odd.
// > j: 5
// > i: 2
// > i = 3
// > j = 4
// > i: 3
// > i = 4
// > j = 4
```

### PHP

在 PHP 中，它能作用的對象有以下數種：

1. for
2. forEach
3. while
4. do...while
6. switch

PHP 在這點上有別於其他的程式語法，可以將 `continue` 用在 `switch` 中，不過實際上在運行的結果，其實就是 `break` 的效果。

它的可選參數接的是純數字，用來表示它**跳過**幾重迴圈。(由內到外，自身為 1)

```php
// php

// 單層迴圈
<?
    for ($i = 0; $i < 10; $i++) {
        if($i % 2) {
            continue;
        }
        echo $i;
    }
?>

// > 0
// > 2
// > 4
// > 6
// > 8
```

```php
// php

// 多重迴圈
<?
    for ($i = 0; $i < 3; $i++) {
		echo "layer 1";
        for ($j = 0; $j < 2; $j++) {
			echo "layer 2";
            if($i % 2) {
                // continue 1
                continue 1;
            }
            echo "layer 2 end";
        }
        echo "layer 1 end";
    }

// $i = 0
// > layer 1
// > layer 2
// > layer 2 end
// > layer 2
// > layer 2 end
// > layer 1 end

// $i = 1，從 $j 繼續
// > layer 1
// > layer 2
// > layer 2
// > layer 1 end

// $i = 2
// > layer 1
// > layer 2
// > layer 2 end
// > layer 2
// > layer 2 end
// > layer 1 end

    for ($i = 0; $i < 3; $i++) {
		echo "layer 1";
        for ($j = 0; $j < 2; $j++) {
			echo "layer 2";
            if($i % 2) {
                // continue 2
                continue 2;
            }
            echo "layer 2 end";
        }
        echo "layer 1 end";
    }

// $i = 0
// > layer 1
// > layer 2
// > layer 2 end
// > layer 2
// > layer 2 end
// > layer 1 end

// $i = 1，從 $i 繼續
// > layer 1
// > layer 2

// $i = 2
// > layer 1
// > layer 2
// > layer 2 end
// > layer 2
// > layer 2 end
// > layer 1 end
?>
```

---

## 比較

|標題\分類|JS|PHP|
|:----:|----|----|
|作用|跳過該次迴圈，從指定位置 / 下一輪迴圈繼續|跳過該次迴圈，從指定位置 / 下一輪迴圈繼續|
|對象|for、forEach、while、do...while、label|for、foreach、while、do...while、switch|
|可選參數|label 值|數字|
|參數作用|跳過該次迴圈，從指定的 label 位置繼續 (須將 break 放在 label 宣告區域中)|指定要跳過幾重迴圈後，從下一輪繼續|

---

## 參考資料

- [http://docs.php.net/](http://docs.php.net/)
- [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
- [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
# Day 12：Things Unshift But Add To Be More

## 前言

良心話，今天從字義上來看，根本不知道它要做啥。唯一可以說得通的是，它其實是運用*反意詞*的概念，來表達跟上一篇文章中 `shift` 相反的行為。

在之前的介紹中，有說明了 `shift` 就是從最前方剔除一個項目，並進行回傳。也因此，它相反的意思就是：從最前方，加入**一個以上**項目。這樣的功能。

緊接著，我們就來看相關的內容吧！！

----

## Unshift

### Javascript

首先進入的是 JS 的 `unshift()` 部分。第一個概念就是，此方法會從陣列的最前方插入一個以上的元素，概念跟之前說過的 `push()` 有點像，只是 `push()` 是從最末端，`unshift()` 是從最前端，然後同樣回傳處理後的陣列長度：

```javascript
// javascript

// push() 範例
const ary = [1, 2, 3, 4, 5]
const pushAry = ary.push('a', 'b', 'c')

console.log(`回傳值：${pushAry}，陣列：${ary}`)

// > 回傳值：8，陣列：[1,2,3,4,5,a,b,c]





// unshift() 範例
const bry = [1, 2, 3, 4, 5]
const unshiftAry = bry.unshift('a', 'b', 'c')

console.log(`回傳值：${unshiftAry}，陣列：${bry}`)

// > 回傳值：8，陣列：[a,b,c,1,2,3,4,5]
```

不過，也因為 `unshift()` 是從最前端進行插值的動作，所以它不像 `push()` 有 `ary.length` 可以當作替代解決方案。

另外，因為它是採用從前方插值的動作，同時也會影響到已經存在的索引值：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

ary.forEach((item, i) => {
    console.log(`${i}：${item}`)
})

// > 0：1
// > 1：2
// > 2：3
// > 3：4
// > 4：5


ary.unshift('a', 'b', 'c')
ary.forEach((item, i) => {
    console.log(`${i}：${item}`)
})

// > 0：a
// > 1：b
// > 2：c
// > 3：1
// > 4：2
// > 5：3
// > 6：4
// > 7：5
```

### PHP

接下來來看 PHP 的部分。

一樣，我們可以把它看成是作用方向相反的 `array_push()`，同樣是插入一個以上的值，只是 `array_push()` 是從末端，`array_unshift()` 是從前端。同樣也是回傳作用後的陣列長度：

```php
// php

<?
    // array_push() 範例
    $ary = array(1, 2, 3, 4, 5);
    $pushReturn = array_push($ary, 'x', 'y', 'z');

    echo '回傳值：' . $pushReturn;
    print_r($ary);

    // > 回傳值：8
    // > array( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => x [6] => y [7] => z )
?>





<?
    // array_unshift() 範例
    $ary = array(1, 2, 3, 4, 5);
    $unshiftReturn = array_unshift($ary, 'x', 'y', 'z');

    echo '回傳值：' . $unshiftReturn;
    print_r($ary);

    // > 回傳值：8
    // > array ( [0] => x [1] => y [2] => z [3] => 1 [4] => 2 [5] => 3 [6] => 4 [7] => 5 )
?>
```

因應 `array_unshift()` 是從前端插值的特性，它會針對**數字型**的 key 值重新進行編號，文字型則不受影響：

```php
// php

<?
    $ary = array(
        "10" => "A",
        "apple" => "B",
        "peach" => "C",
        "5" => "D",
        "orange" => "E"
    );

    foreach($ary as $key => $value) {
        echo  $key . ' => ' . $value . '<br/>';
    }
    // > 10 => A
    // > apple => B
    // > peach => C
    // > 5 => D
    // > orange => E


    array_unshift($ary, ('20' => 'X'), 'Y', ('kiwi' => 'Z'));

    foreach($ary as $key => $value) {
        echo  $key . ' => ' . $value . '<br/>';
    }
    // > 0 => X
    // > 1 => Y
    // > 2 => Z
    // > 3 => A
    // > apple => B
    // > peach => C
    // > 4 => D
    // > orange => E
?>
```

比較要注意的地方是，此方法只接受**純值**，不接受帶有 key 值的元素。

---

## 比較

|標題\分類|JS|PHP|
|:----:|----|----|
|對象|array|array|
|功能|從前方插值|從前方插值|
|元素數量|一個以上|一個以上的**純值**|
|陣列長度|增加|增加|
|回傳值|作用後的陣列長度|作用後的陣列長度|
|特性|索引值重新編號|針對**數字型** key 值從零開始重新編號|

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
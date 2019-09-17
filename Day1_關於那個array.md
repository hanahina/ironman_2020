## 前言

接下來我們要進入本篇(？？)了。既然主題是要聊有關於 array 的事情，那我們第一步當然是要先看看 array 的組成。
如果各位看倌有在網路上蒐過相關文章的話，依據翻譯的不同，大致上會有「陣列」、「數組」兩種說法，我自己本身是喜歡稱呼它為陣列，不過還是建議都要了解一下不同的名詞，這樣在看資料的時候會痛比較小一點。當然，如果習慣性看原文的同志們，就不會有這個困擾了。
&nbsp;&nbsp;
陣列基本上，是程式語法在處理資料的時候最常運用的格式之一，再加上他接受巢狀的行程多維，所以既是最簡單；也是最複雜的資料型態。
當然，畢竟接下來都是簡單的帶過，所以我們主要要看的範圍會是一維陣列，如果對於多維陣列有興趣的各位，可以在自行從下方三個網站中，查看並精進相關細節。

##　什麼是陣列？

對我來說，比較容易理解的解釋是：
> 陣列就是，將多個值儲存在一個變數當中。
> An array stores multiple values in one single variable.


也因此，它的基本結構就會是：
1. 產生一個陣列。
2. 宣告一個變數。
3. 將此變數指向該陣列。

這點不管是從哪個語言來看都是如此。

## 創建陣列

### JS

創陣列的方式，JS 有兩種方式可以採用。

```javascript
// javascript

// 用 new 宣告
const aryOne = new Array();

// 採用實字宣告
const aryTwo = [];
```
基本上，這兩種宣告方式沒有太大的差別，但若是你想在創建的過程中就塞入數字當值的時候，就會有不同的結果了。

```javascript
// javascript
const aryOne = new Array(10);
// > ['', '', '', '', '', '', '', '', '', '']

const aryTwo = [10];
// > [10]
```

### PHP

創建陣列的方法就只有一種，但隨著PHP語法版本的更新，有不同的呈現方式。
```php
// php
<?
    $aryOne = array('a', 'b', 'c');

    // PHP 5.4 之後
    $aryTwo = ['a', 'b', 'c'];
?>
```

以上面的內容來看，會感覺兩個其實根本就差不多，只是寫法稍稍有些不同而已，更別說 PHP 5.4 之後只有宣告變數的方式有差異。

但是世界總歸不是這麼美好，雖然對 JS 來說，陣列內部只包含了 index 跟 value，但是 PHP 陣列宣告所包含的，卻是 key 跟 value。

意思也就是說，標準的 PHP 陣列寫法應該是：
```php
// php
<?
    $myArrray = array(
        'a' => 'value one',
        'b' => 'value two',
        'c' => 'value three',
    );

?>
```

上面的結構有沒有一種濃濃的即視感？
看下面的程式碼就可以理解了。

```javascript
// javascript
const obj = {
    a: 'value one',
    b: 'value two',
    c: 'value three',
}
```
沒錯，它的結構跟 JS 的物件幾乎一模一樣，所以我通稱 PHP 其實是一種陣列跟物件的集合體。

## 比較

| 項目 \ 對象 | JS Array | JS Object | PHP Array |
| :---: | --- | --- | --- |
| 創建方法 | new Array();、[] | new Object();、{} | array();、[] |
| 索引 | index (自動編碼，從 0 開始) | keys | keys(若是沒有提供 key 值，會自動編號)) |
| 調用方法 | ary[index] | obj[keys]、obj.keys | ary[keys] |


## 參考資料

+ [http://docs.php.net/](http://docs.php.net/)
+ [https://developer.mozilla.org/zh-TW/](https://developer.mozilla.org/zh-TW/)
+ [https://www.w3schools.com/](https://www.w3schools.com/)

以上內容將會不同步發佈在 blogger 中：[第 11 屆鐵人賽系列文](https://blog.hinahina.tw/search/label/2020%20%E9%90%B5%E4%BA%BA%E8%B3%BD)
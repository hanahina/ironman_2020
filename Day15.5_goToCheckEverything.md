# Day 15.5：Go To Check Everything

## 前言

是的，陰魂不散的 .5 系列又出現了。

這次可不是因為拆章節什麼的，主要是我一直很猶豫要不要講這個。

如果有認真跟著走過這麼多天的夥伴應該都知道，這系列的主題就是很不專業的比較文。

但是，不管再怎樣不專業，它總歸還是要有比較的成分在。但是現在要講的這個方法，很不幸的，我找了很久還真的沒在 PHP 上找到相對應的內容。

當然，感覺上好像沒找到才是正常的，畢竟兩種語言主攻的內容完全不相同。而這也就是本來不想講的原因。

但是如果真的不講又很難過，所以只好委屈它當一下 .5 系列的嘉賓了。

那接下來，就讓我們進入今天的主題吧！！

----

## every()

今天的重點，是 JS 中的 `every()`。

`every()` 接的參數，是一個 callback function，該 function 中，最多可以塞三個參數，分別是：值、索引、陣列。

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

ary.every((a, b, c) => {
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log(`c: ${c}`)

    return a
})

// > a: 1
// > b: 0
// > c: 1,2,3,4,5
// > a: 2
// > b: 1
// > c: 1,2,3,4,5
// > a: 3
// > b: 2
// > c: 1,2,3,4,5
// > a: 4
// > b: 3
// > c: 1,2,3,4,5
// > a: 5
// > b: 4
// > c: 1,2,3,4,5
// > true
```

這邊需要注意的是，如果沒有給 return 值，會因為 return false 的原因，只跑一個循環就終止了，就像下面這樣：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

ary.every((a, b, c) => {
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log(`c: ${c}`)

    return a
})

// > a: 1
// > b: 0
// > c: 1,2,3,4,5
// > false
```

如果要好記一點，其實可以把它想像成一個大型的 && / AND，所以必須陣列中的所有資料都符合 callback function 中的條件，才會回傳 true。：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const result = ary.every((item) => item)
console.log(result)

// > true
```

可以在 callback function 中塞入運算式：

```javascript
// javascript

const ary = [1, 2, 3, 4, 5]

const resultA = ary.every((item) => item % 2)
console.log(resultA)
// > false





const bry = [1, 2, 3, 4, 5]

const resultB = bry.every((item) => item > 0)
console.log(resultB)
// > true
```

如果給予空陣列的話，強制返回 true：

```javascript
// javascript

const ary = []

const result = ary.every((item) => item)
console.log(result)

// > true
```

----




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
>This is a JavaScript practice with [JavaScript30](https:\\javascript30.com) by [Wes Bos]() without any frameworks, no compilers, no boilerplate, and no libraries.

# 18 - Tallying String Time with Reduce
# [Demo](https://claudz1.github.io/Js30/16-AddingUpTimeWithReduce/index.html)

[Read more on datasets API here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

  When we use `document.querySelectorAll` we get back a _NodeList_ and not an _Array_ so to use HOF(Higher order functions) we can convert it into an Array by:
  - Either using a spread operator to do so
    `[...document.querySelectorAll('[data-time]')]`
  - Or we can use `Array.from` to convert it into an array
   ` Array.from(document.querySelectorAll('[data-time]'));`
### Calculating the Time
   get the dataset.time
```
const seconds = timeNodes
  .map(timeNode => timeNode.dataset.time)
console.log(seconds);
```
will be value of data-time attributes we set on html
![](images\1_00.png)
_The parseFloat function parses a string argument and returns a floating point number._

Reduce takes in a value and reduces it down to a single value
front.js
--------

**About this repo**

+ A simple template engine written in JavaScript.
+ This project is released under the [MIT license](http://opensource.org/licenses/MIT).


**How to Use**

+ Parse `sourceData` with `templateString`, and return the result as a string.

```js
front(templateString, sourceData);
```

+ Parse `sourceData` with `templateString`, then replace content of `targetNode` with the result.

```js
front(templateString, sourceData, targetNode);
```

+ Parameters  
  `templateString`  
  The template to be translated.  
  Supports *@if/@endif* and *@if/@else/@endif* statements.  
  Supports retrieve data from deep structure.  

  `sourceData`  
  The data to be parsed.  
  Must either be an object or array.  
  The engine will automatically iterate if passed value is an array.  

  `targetNode` (optional)  
  The DOM element to place the result.  


**Read the blog post**

+ not written yet.


**Try out the demos**

+ http://myst729.github.io/front.js/


**Donation**

+ If you think this project is helpful and would like to thank the author, please [show me the money](http://www.urbandictionary.com/define.php?term=show+me+the+money)!

[![I want a Macbook Pro!](https://img.alipay.com/sys/personalprod/style/mc/btn-index.png)](https://me.alipay.com/myst)

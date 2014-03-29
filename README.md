# extend

Extend the prototype of the view in a nice way.

```
component install ripplejs/extend
```

## API

```js
var extend = require('extend');
var ripple = require('ripple');

var View = ripple(template)
  .use(extend);

// Add methods to the prototype
View.extend({
  tick: function(){
    this.set('time', new Date);
  }
});
```
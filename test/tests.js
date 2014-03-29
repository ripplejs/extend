var assert = require('assert');
var extend = require('extend');
var ripple = require('ripple');

describe('extend', function(){

  it('should extend the prototype', function(done){
    var View = ripple('<div></div>')
      .use(extend);

    View.extend({
      foo: function(){
        done();
      }
    });

    var view = new View();
    view.foo();
  });

});
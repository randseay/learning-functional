var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};

var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

shout("send in the clowns");
console.log(shout("send in the clowns"));
//=> "SEND IN THE CLOWNS!"

//not pointfree because we mention the data: name
var initials = function (name) {
  return name.split(' ').map(compose(toUpperCase, head)).join('. ');
};


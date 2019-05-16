module.exports = function (gen) {
    return (function(f) {return f(f)})(function(f) {
      return gen(function() {return f(f).apply(null, arguments)});
    });
};
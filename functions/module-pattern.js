var counter = (function () {
    var value = 0;

    return {
        add: function () {
            return ++value;
        }
    };
})();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
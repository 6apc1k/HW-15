function myAssign () {
    var args = Array.prototype.slice.call(arguments);
    var result = args[0];
    for (var i = 1; i < args.length; i++) {
        for(var key in args[i]) {
            result[key] = args[i][key];
        }
    }
    return result;
}
module.exports = myAssign;



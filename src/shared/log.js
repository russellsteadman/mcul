/* eslint no-console: "off" */
/* log handles formatting and doesn't throw errors if console is undefined */

module.exports = function (isError) {
    if (typeof console === 'object') {
        let args = Array.prototype.slice.call(arguments, 1);
        let logFunc = isError ? console.error : console.info;
        logFunc = Function.prototype.bind.call(logFunc, console);
        logFunc.apply(console, ['[Affiliate] '].concat(args));
    }
};
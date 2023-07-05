var a = new Date().toLocaleString();
var out;
(function (out) {
    out[out["yes"] = 0] = "yes";
    out[out["no"] = 1] = "no";
})(out || (out = {}));
var Storages = /** @class */ (function () {
    function Storages() {
    }
    Storages.prototype.get = function (key) {
        if (key) {
            var keys = localStorage.getItem(key);
            console.log(JSON.parse(keys));
            return keys;
        }
    };
    Storages.prototype.set = function (key, value, time) {
        if (value != undefined && value != null) {
            var va = {
                value: value,
                time: time
            };
            if (time != 0) {
                localStorage.setItem('key', JSON.stringify(va));
                return {
                    message: "\u8FC7\u671F\u8BBE\u7F6E",
                    value: value
                };
            }
            else if (time == 0) {
                localStorage.setItem('key', JSON.stringify(va));
                return {
                    message: "\u6C38\u4E0D\u8FC7\u671F\u8BBE\u7F6E",
                    value: value
                };
            }
        }
        else {
            return {
                message: "\u8BBE\u7F6E".concat(key, "\u9519\u8BEF\uFF0C\u662F\u4E2A\u7A7A\u503C\u6216\u6216\u6CA1\u58F0\u660E\u7684\u503C")
            };
        }
    };
    Storages.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    Storages.prototype.clear = function () {
        localStorage.clear();
    };
    return Storages;
}());
var times = new Storages();
console.log(times.set('start', 123, 21));
console.log(times.get('start'));
